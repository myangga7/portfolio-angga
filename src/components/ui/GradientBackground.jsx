// GradientBackground.jsx - Background dengan gradien yang berubah warna otomatis
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext"; // IMPORT inI DITAMBAH

const GradientBackground = ({ children }) => {
  const [gradientAngle, setGradientAngle] = useState(0);
  const { isDark } = useTheme(); // HOOK INI DITAMBAH

  // Efek untuk mengubah sudut gradien secara otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prev) => (prev + 1) % 360);
    }, 50); // Ubah setiap 50ms untuk animasi halus

    return () => clearInterval(interval);
  }, []);

  // Palet warna untuk LIGHT MODE
  const lightColorSets = [
    { from: "#3b82f6", to: "#8b5cf6" }, // Biru ke Ungu (cerah)
    { from: "#ec4899", to: "#8b5cf6" }, // Pink ke Ungu
    { from: "#06b6d4", to: "#3b82f6" }, // Cyan ke Biru
    { from: "#a855f7", to: "#ec4899" }, // Ungu ke Pink
    { from: "#14b8a6", to: "#3b82f6" }, // Teal ke Biru
    { from: "#f97316", to: "#ec4899" }, // Orange ke Pink
  ];

  // Palet warna untuk DARK MODE (lebih gelap tapi tetap vibrant)
  const darkColorSets = [
    { from: "#1e3a8a", to: "#5b21b6" }, // Biru gelap ke Ungu gelap
    { from: "#831843", to: "#5b21b6" }, // Pink gelap ke Ungu gelap
    { from: "#155e75", to: "#1e3a8a" }, // Cyan gelap ke Biru gelap
    { from: "#6b21a8", to: "#831843" }, // Ungu gelap ke Pink gelap
    { from: "#115e59", to: "#1e3a8a" }, // Teal gelap ke Biru gelap
    { from: "#9a3412", to: "#831843" }, // Orange gelap ke Pink gelap
  ];

  // Pilih colorSets berdasarkan mode
  const colorSets = isDark ? darkColorSets : lightColorSets;

  // Pilih warna berdasarkan sudut
  const colorIndex = Math.floor(gradientAngle / 60) % colorSets.length;
  const nextColorIndex = (colorIndex + 1) % colorSets.length;

  // Hitung interpolasi untuk transisi halus
  const progress = (gradientAngle % 60) / 60;

  // Fungsi untuk menginterpolasi warna (transisi halus)
  const interpolateColor = (color1, color2, progress) => {
    // Parse hex ke RGB
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    // Interpolasi
    const r = Math.round(r1 + (r2 - r1) * progress);
    const g = Math.round(g1 + (g2 - g1) * progress);
    const b = Math.round(b1 + (b2 - b1) * progress);

    // Kembalikan ke hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const currentFrom = interpolateColor(
    colorSets[colorIndex].from,
    colorSets[nextColorIndex].from,
    progress,
  );

  const currentTo = interpolateColor(
    colorSets[colorIndex].to,
    colorSets[nextColorIndex].to,
    progress,
  );

  return (
    <div className="relative min-h-screen">
      {/* Background gradien yang berubah warna */}
      <div
        className="fixed inset-0 -z-10 transition-all duration-300"
        style={{
          background: `linear-gradient(${gradientAngle}deg, ${currentFrom}, ${currentTo})`,
        }}
      />

      {/* Efek noise untuk tekstur premium - opacity berbeda untuk dark mode */}
      <div
        className={`fixed inset-0 -z-10 mix-blend-overlay transition-opacity duration-300 ${
          isDark ? "opacity-10" : "opacity-20"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Overlay gelap untuk dark mode (opsional, bisa diatur) */}
      {isDark && (
        <div className="fixed inset-0 -z-5 bg-black/20 pointer-events-none"></div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
