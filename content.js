(function () {
    function addPiPButton(video) {
        if (video.dataset.pipHelperAttached) return;
        video.dataset.pipHelperAttached = "1";

        const btn = document.createElement("button");
        btn.textContent = "PiP";
        btn.style.position = "absolute";
        btn.style.right = "12px";
        btn.style.bottom = "12px";
        btn.style.zIndex = "9999";

        btn.addEventListener("click", async () => {
            try {
                if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
                    await video.requestPictureInPicture();
                } else {
                    alert("PiP недоступен для этого видео.");
                }
            } catch (e) {
                console.warn("Ошибка PiP:", e);
            }
        });

        const wrapper = video.parentElement || video;
        wrapper.style.position = "relative";
        wrapper.appendChild(btn);
    }

    function scan() {
        document.querySelectorAll("video").forEach(addPiPButton);
    }

    new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", scan);
    scan();
})();