# Orbit Flow

> Seamless, adaptive multi-monitor screen sharing — **switch displays in a blink**, stay in sync when your setup changes.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)
![Status](https://img.shields.io/badge/status-MVP-green)
![Platforms](https://img.shields.io/badge/platforms-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)
![Built With](https://img.shields.io/badge/built%20with-Electron%20%7C%20React%20%7C%20Node.js-informational)

---

## ✨ Why Orbit Flow?
- 🔄 **Instant Monitor Switching** — Swap the shared screen with a hotkey, no stop-share required.
- 🖥 **Multi-Monitor Awareness** — Live previews of all displays; pick and jump fast.
- 🧭 **Auto Re-Sync on Layout Changes** — Move your laptop, dock/undock, rotate a screen — your share updates.
- ⚡ **Low Friction UX** — Overlay controls, subtle toasts, zero “where did my share go?” moments.
- 🔌 **Drop-in for Conferencing** — Works alongside Zoom, Meet, Teams, and others.

---

## 🧰 Tech Stack (MVP)
- **Desktop App:** Electron + React  
- **Capture Layer:**  
  - macOS: ScreenCaptureKit / CGDisplayStream  
  - Windows: Windows Graphics Capture API  
  - Linux: PipeWire (Wayland) / X11 (Fallback)  
- **Runtime:** Node.js (native hooks via `node-ffi`/`napi` bindings)

---

## 📦 Install & Run (Prototype)

```bash
# 1) Clone
git clone https://github.com/your-username/orbitflow.git
cd orbitflow

# 2) Install
npm install

# 3) Dev
npm run dev

# 4) Package (optional)
npm run build
