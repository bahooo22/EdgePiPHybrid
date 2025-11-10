[![🇷🇺 Читать на русском](https://img.shields.io/badge/Readme-на%20русском-blue)](README.ru.md)

# PiP Helper — Floating Video Extension for Edge

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Edge Add-ons](https://img.shields.io/badge/Edge%20Add--ons-Available-green)
![Platform: Edge](https://img.shields.io/badge/Platform-Microsoft%20Edge-blue)
![Mobile Support](https://img.shields.io/badge/Mobile-Edge%20Canary%20Android-green)

**PiP Helper** is a lightweight browser extension for Microsoft Edge that adds a floating Picture-in-Picture (PiP) button to any HTML5 video. It works on popular platforms like YouTube, Vimeo, Twitch, and many others, allowing you to watch videos while multitasking across tabs.

---

## ✨ Features

- 🖼️ Adds a PiP button directly to video players
- 🔄 Auto-PiP when switching tabs (optional)
- ⚙️ Customizable settings via options page
- 🚫 Blacklist support to disable PiP on specific domains
- 📱 Optional integration with Companion App (via deep link)
- 🧩 Works on mobile (Edge Canary Android) and desktop

---

## 📦 Installation

### 🖥️ Desktop (Edge)

1. Download the latest `.zip` from [Releases](https://github.com/bahooo22/EdgePiPHybrid/releases)
2. Go to `edge://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked** and select the extracted folder

### 📱 Mobile (Edge Canary Android)

> Requires Edge Canary version **125.0.2487.0** or newer

1. Open **Settings → About Microsoft Edge**
2. Tap the build number **5 times** to unlock Developer Options
3. Go to **Developer Options → Extension install by ID**
4. Enter your extension ID from Edge Add-ons Store  
   → [View on Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/<your-extension-id>)


---

## ⚙️ Settings

Visit the extension’s options page to configure:

- ✅ Auto-PiP on tab switch
- 🧭 Show Companion App button
- 🚫 Blacklist domains (e.g. `youtube.com`, `example.org`)

---

## 🔐 Privacy

This extension does **not collect**, **store**, or **transmit** any personal data. All functionality runs locally in your browser.

---

## 📸 Screenshots

| YouTube with PiP button | Options page |
|-------------------------|--------------|
| ![screenshot1](assets/screenshot1.png) | ![screenshot2](assets/screenshot2.png) |

---

## 🛠 Development

Clone the repo and run locally:

```bash
git clone https://github.com/bahooo22/EdgePiPHybrid.git
```

Make changes, then reload the extension in Edge.

---

## ⚠️ Known Limitations

- PiP may not work on DRM-protected videos (e.g. YouTube Premium)
- Some sites may override PiP behavior via custom players
- Companion App integration requires the app to be installed

---

## 📬 Support & Feedback

- GitHub Issues: [https://github.com/bahooo22/EdgePiPHybrid/issues](https://github.com/bahooo22/EdgePiPHybrid/issues)
- Email: `a7706061@outlook.com`

---

## 📄 License

MIT License — see [`LICENSE.txt`](LICENSE.txt)

---


