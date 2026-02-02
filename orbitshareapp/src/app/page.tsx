"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [isBlackPreview, setIsBlackPreview] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // TODO: replace with real preview/permission detection
    setIsBlackPreview(true);
  }, []);

  const screenRecordingUrl = useMemo(
    () => "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture",
    []
  );

  const openSystemSettings = () => {
    try {
      window.open(screenRecordingUrl, "_blank");
    } catch (_) {
      window.location.href = screenRecordingUrl;
    }
  };

  return (
    <div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <button
            onClick={async () => {
              try {
                const media = await navigator.mediaDevices.getDisplayMedia({
                  video: { displaySurface: "monitor" as any },
                  audio: false
                });
                setStream(media);
                setIsBlackPreview(false);
              } catch (_) {
                // user cancelled or permission denied
              }
            }}
            style={{ background: "#16a34a", color: "#fff", padding: "8px 12px", borderRadius: 8, border: "none", cursor: "pointer" }}
          >
            Start Capture
          </button>
          <button
            onClick={() => {
              if (stream) {
                stream.getTracks().forEach(t => t.stop());
                setStream(null);
              }
            }}
            style={{ background: "#ef4444", color: "#fff", padding: "8px 12px", borderRadius: 8, border: "none", cursor: "pointer" }}
          >
            Stop Capture
          </button>
        </div>
        <div>
          <video
            autoPlay
            muted
            playsInline
            style={{ width: "100%", maxWidth: 900, background: "#000", borderRadius: 8 }}
            ref={(el) => {
              if (el && stream && el.srcObject !== stream) {
                el.srcObject = stream;
              }
            }}
          />
        </div>
      </div>
      {isBlackPreview && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#111",
            color: "#fff",
            padding: "20px",
            borderRadius: "12px",
            width: "min(92vw, 420px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
          }}>
            <h2 style={{ margin: 0, marginBottom: "10px", fontSize: "18px" }}>
              Grant Screen Recording
            </h2>
            <p style={{ marginTop: 0, marginBottom: "16px", lineHeight: 1.4 }}>
              The preview appears black. macOS requires Screen Recording permission.
              Click the button below, then enable permission for this app and relaunch.
            </p>
            <button
              onClick={openSystemSettings}
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Open System Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


