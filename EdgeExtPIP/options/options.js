// options.js (обновлённый)
const el = (id) => document.getElementById(id);

function parseDomains(value) {
    return value
        .split(",")
        .map(s => s.trim().toLowerCase())
        .filter(Boolean)
        // Убираем протоколы и пути, оставляем домен
        .map(s => s.replace(/^https?:\/\//, "").replace(/\/.*$/, ""));
}

async function load() {
    const defaults = { autoPiP: false, showCompanion: false, blacklist: [] };
    const cfg = await chrome.storage.local.get(Object.keys(defaults));
    el("autoPiP").checked = !!cfg.autoPiP;
    el("showCompanion").checked = !!cfg.showCompanion;
    el("blacklist").value = (cfg.blacklist || []).join(", ");
}

async function save() {
    const blacklist = parseDomains(el("blacklist").value);
    await chrome.storage.local.set({
        autoPiP: el("autoPiP").checked,
        showCompanion: el("showCompanion").checked,
        blacklist
    });
    const status = el("status");
    status.textContent = "Сохранено";
    setTimeout(() => (status.textContent = ""), 1500);
}

document.addEventListener("DOMContentLoaded", () => {
    load();
    el("save").addEventListener("click", save);
});