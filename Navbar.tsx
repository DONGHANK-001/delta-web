@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";
@import "aos/dist/aos.css";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --color-delta-blue: #005596;
  --color-delta-green: #78BE20;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-[#F8F9FA] text-[#1A1A1A] antialiased overflow-x-hidden;
  }
}

.glass-nav {
  @apply backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm;
}

.card-hover-scale {
  @apply transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10;
}

.stats-card {
  @apply bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300;
}

/* Custom AOS tweaks if needed */
[data-aos] {
  pointer-events: none;
}
.aos-animate {
  pointer-events: auto;
}
