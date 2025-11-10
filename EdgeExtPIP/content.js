// content.js (фрагмент UI)
function createPiPIconButton() {
    const btn = document.createElement("button");
    btn.className = "pip-helper-btn";
    btn.title = "Переключить Picture-in-Picture";

    btn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm11 7a1 1 0 0 0-1 1v3h6a1 1 0 0 0 1-1V9h-6a1 1 0 0 0-1 1v2z"/>
    </svg>`;
    return btn;
}

function addPiPButton(video) {
    if (video.dataset.pipHelperAttached) return;
    video.dataset.pipHelperAttached = "1";

    const btn = createPiPIconButton();
    btn.addEventListener("click", async () => {
        try {
            if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
                await video.requestPictureInPicture();
            } else {
                toast("PiP недоступен для этого видео");
            }
        } catch (e) {
            console.warn("PiP error:", e);
            toast("Не удалось включить PiP");
        }
    });

    const wrapper = video.parentElement || video;
    if (getComputedStyle(wrapper).position === "static") {
        wrapper.style.position = "relative";
    }
    wrapper.appendChild(btn);

    // Спрятать кнопку, когда видео ушло в PiP
    video.addEventListener("enterpictureinpicture", () => btn.classList.add("pip-hidden"));
    video.addEventListener("leavepictureinpicture", () => btn.classList.remove("pip-hidden"));
}

// Лёгкий toast
function toast(text) {
    const el = document.createElement("div");
    el.textContent = text;
    el.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);" +
        "background:#111;color:#fff;padding:8px 12px;border-radius:8px;z-index:999999;" +
        "font:12px/1.4 system-ui;opacity:0;transition:opacity .15s ease";
    document.body.appendChild(el);
    requestAnimationFrame(() => { el.style.opacity = "0.9"; });
    setTimeout(() => { el.style.opacity = "0"; setTimeout(() => el.remove(), 150); }, 2000);
}

    // content.js (подключение настроек и авто-PiP)
let settings = { autoPiP: false, showCompanion: false, blacklist: [] };

async function loadSettings() {
  const cfg = await chrome.storage.local.get(["autoPiP", "showCompanion", "blacklist"]);
    settings = {
        autoPiP: !!cfg.autoPiP, 
        showCompanion: !!cfg.showCompanion,
        blacklist: cfg.blacklist || []
    };
}

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "local") return;

    // Обновляем настройки точечно
    if (changes.autoPiP) settings.autoPiP = !!changes.autoPiP.newValue;
    if (changes.showCompanion) settings.showCompanion = !!changes.showCompanion.newValue;
    if (changes.blacklist) settings.blacklist = changes.blacklist.newValue || [];

    // Перепривязка UI при изменении настроек
    if (!isBlacklisted()) {
        // Показать/скрыть кнопку Companion в зависимости от настройки
        if (settings.showCompanion) ensureCompanionButton();
        else removeCompanionButton();
    }
});

function removeCompanionButton() {
    document.querySelectorAll(".pip-companion-btn").forEach(el => el.remove());
}

function isBlacklisted() {
  const host = location.hostname.toLowerCase();
  return settings.blacklist.some(d => host.endsWith(d));
}

// Авто-PiP, когда вкладка теряет фокус
document.addEventListener("visibilitychange", async () => {
  if (!settings.autoPiP || isBlacklisted()) return;
  const v = document.querySelector("video");
  if (v && document.pictureInPictureEnabled && !v.disablePictureInPicture) {
    try { await v.requestPictureInPicture(); } catch {}
  }
});

// Инициализация
(async function init() {
  await loadSettings();
  const scan = () => {
    if (isBlacklisted()) return;
    document.querySelectorAll("video").forEach(addPiPButton);
    if (settings.showCompanion) ensureCompanionButton();
  };
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("DOMContentLoaded", scan);
  scan();
})();

// content.js (YouTube специфично, обновлённый вариант)
function tryAttachToYouTubeControls() {
    const player = document.querySelector("#ytd-player .html5-video-player");
    if (!player) return;

    // Если уже прикрепили — выходим
    if (player.dataset.pipHelperAttached === "1") return;

    const video = player.querySelector("video");
    const controlsRight = player.querySelector(".ytp-right-controls");

    if (!video || !controlsRight) return;

    const btn = createPiPIconButton();
    btn.style.position = "static";
    btn.style.marginLeft = "8px";
    btn.title = "PiP";

    btn.addEventListener("click", async () => {
        try {
            await video.requestPictureInPicture();
        } catch (e) {
            toast("PiP не включился");
        }
    });

    controlsRight.appendChild(btn);
    player.dataset.pipHelperAttached = "1";

    // Прячем/показываем кнопку по событию PiP
    video.addEventListener("enterpictureinpicture", () => btn.classList.add("pip-hidden"));
    video.addEventListener("leavepictureinpicture", () => btn.classList.remove("pip-hidden"));
}

// В init: следим за изменениями DOM YouTube
if (/\byoutube\.com$/.test(location.hostname)) {
    const mo = new MutationObserver(tryAttachToYouTubeControls);
    mo.observe(document.documentElement, { childList: true, subtree: true });
    tryAttachToYouTubeControls();
}
