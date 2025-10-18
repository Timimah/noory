import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ShoppingCart,
  SubscriptIcon,
  Bookmark,
  MoreHorizontal,
  Calendar,
} from "lucide-react";

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [currentMeal, setCurrentMeal] = useState<number>(0);

  const meals = [
    {
      name: "Indomie & Egg (Fried)",
      time: "08:00 - 10:00",
      portions: "150 portions left",
      price: "₦ 3000.00",
      description:
        "When Indomie gets an upgrade — stir-fried with eggs and that Naija pepper kick.",
    },
    {
      name: "Chicken Shawarma",
      time: "12:00 - 15:00",
      portions: "95 portions left",
      price: "₦ 2500.00",
      description: "Accepting Orders For Tomorrow's Breakfast",
    },
  ];

  useEffect(() => {
    console.log(isDark);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeal((prev) => (prev + 1) % meals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const meal = meals[currentMeal];

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: isDark ? "#111827" : "#f8f9fa",
        color: isDark ? "#f8f9fa" : "#111827",
      }}
    >
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? isDark
              ? "rgba(17, 24, 39, 0.95)"
              : "rgba(248, 249, 250, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-lg transform -rotate-12 transition-colors"
                  style={{ backgroundColor: "#f97316" }}
                ></div>
                <div
                  className="w-10 h-10 rounded-lg absolute top-0 left-0 transform rotate-12 opacity-70 transition-colors"
                  style={{ backgroundColor: isDark ? "#6ee7b7" : "#10b981" }}
                ></div>
              </div>
              <span
                className="text-2xl font-bold transition-colors"
                style={{ color: isDark ? "#f8f9fa" : "#111827" }}
              >
                Noory land
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="font-medium transition-colors border-b-2 pb-1"
                style={{
                  color: isDark ? "#f8f9fa" : "#111827",
                  borderColor: "#f97316",
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: isDark ? "#e5e7eb" : "#6b7280" }}
              >
                About
              </a>
              <a
                href="#how-it-works"
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: isDark ? "#e5e7eb" : "#6b7280" }}
              >
                How It Works
              </a>
              <a
                href="#partnership"
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: isDark ? "#e5e7eb" : "#6b7280" }}
              >
                Partnership
              </a>
              <a
                href="#contact"
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: isDark ? "#e5e7eb" : "#6b7280" }}
              >
                Contact
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button
                className={`font-semibold px-6 py-2 rounded-full transition-all transform hover:scale-105 bg-yellow-400 hover:bg-yellow-500 text-darktext`}
                // style={{
                //   backgroundColor: "#f97316",
                //   color: "#111827",
                // }}
                // ${
                //   isDark
                //     ? "bg-darkaccent text-lighttext"
                //     : "bg-lightaccent text-darktext"
                // }
              >
                Join Waitlist
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${
                  isDark
                    ? "bg-darkbackground text-darktext"
                    : "bg-lightbackground text-lighttext"
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-6xl md:text-7xl font-bold leading-tight transition-colors"
                style={{ color: isDark ? "#f8f9fa" : "#111827" }}
              >
                Food that{" "}
                <span className="inline-block animate-pulse text-yellow-400">
                  brings joy
                </span>
              </h1>
            </div>

            <p
              className="text-xl leading-relaxed transition-colors"
              style={{ color: isDark ? "#e5e7eb" : "#6b7280" }}
            >
              Nigeria's leading mobile-first food platform. Quality meals made
              accessible, reliable, and delightful for everyone.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com"
                className="flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all hover:scale-105"
                style={{
                  borderColor: isDark ? "#374151" : "#d1d5db",
                  backgroundColor: isDark ? "#1f2937" : "#ffffff",
                }}
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div
                    className="text-xs"
                    style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                  >
                    Download on the
                  </div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: isDark ? "#f8f9fa" : "#111827" }}
                  >
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="https://play.google.com"
                className="flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all hover:scale-105"
                style={{
                  borderColor: isDark ? "#374151" : "#d1d5db",
                  backgroundColor: isDark ? "#1f2937" : "#ffffff",
                }}
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div
                    className="text-xs"
                    style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                  >
                    Get it on
                  </div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: isDark ? "#f8f9fa" : "#111827" }}
                  >
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Facebook, href: "https://facebook.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full transition-all hover:scale-110"
                  style={{
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "#1f2937"
                      : "#e5e7eb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <social.icon
                    size={24}
                    style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div
                className={`relative w-80 h-[750px] rounded-[3rem] border-8 shadow-2xl overflow-hidden transition-colors ${
                  isDark ? "bg-lightbackground/50" : "bg-lightprybackground/60"
                }`}
                style={{
                  borderColor: isDark ? "#1f2937" : "#d1d5db",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-3 rounded-b-3xl z-10 bg-black"></div>

                {/* Phone Content */}
                <div
                  className="relative h-full p-4"
                  style={{
                    background: isDark
                      ? "linear-gradient(to bottom right, rgba(110, 231, 183, 0.1), rgba(16, 185, 129, 0.1))"
                      : "linear-gradient(to bottom right, rgba(16, 185, 129, 0.1), rgba(110, 231, 183, 0.1))",
                  }}
                >
                  {/* Time & Status */}
                  <div className="flex justify-between items-center text-white text-sm font-semibold pt-2 px-2">
                    <span>8:43</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                      <div className="w-4 h-4 bg-white rounded-sm opacity-70"></div>
                      <div className="w-4 h-4 bg-white rounded-sm opacity-40"></div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex justify-center space-x-2 mt-4">
                    <button
                      className="px-4 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: "#fbbf24",
                        color: "#111827",
                      }}
                    >
                      Pre-Order
                    </button>
                    <button
                      className="px-4 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "rgba(107, 114, 128, 0.5)",
                        color: "#ffffff",
                      }}
                    >
                      Instant
                    </button>
                  </div>

                  {/* Order Info */}
                  <div className="text-center mt-2">
                    <p className="text-white text-sm font-medium">
                      Accepting Orders For Tomorrow's
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: isDark ? "#6ee7b7" : "#10b981" }}
                    >
                      Breakfast
                    </p>
                  </div>

                  {/* Meal Card */}
                  <div
                    className="mt-6 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 backdrop-blur-sm"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(31, 41, 55, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    {/* Meal Image */}
                    <div
                      className="relative h-48 overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #d97706, #ea580c)",
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-30">🍜</div>
                      </div>
                      {/* Icons */}
                      <div className="absolute top-3 right-3 space-y-2">
                        <div className="bg-white/90 rounded-full p-2">
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Meal Info */}
                    <div className="p-4">
                      <h3
                        className="text-xl font-bold mb-1 transition-colors"
                        style={{ color: isDark ? "#f8f9fa" : "#111827" }}
                      >
                        {meal.name}
                      </h3>
                      <p
                        className="text-sm mb-3 transition-colors"
                        style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                      >
                        {meal.time} • {meal.portions}
                      </p>
                      <p
                        className="text-sm mb-4 transition-colors"
                        style={{ color: isDark ? "#e5e7eb" : "#374151" }}
                      >
                        {meal.description}
                      </p>

                      {/* Buttons */}
                      <button
                        className="w-full font-semibold py-3 rounded-xl mb-2 transition-all transform hover:scale-105"
                        style={{
                          backgroundColor: isDark ? "#6ee7b7" : "#10b981",
                          color: "#111827",
                        }}
                      >
                        <div className="flex items-center justify-center w-full gap-2">
                          <ShoppingCart className="w-4" /> Add to cart{" "}
                        </div>
                        ({meal.price})
                      </button>
                      <button
                        className="w-full font-semibold py-3 rounded-xl transition-all transform hover:scale-105"
                        style={{
                          backgroundColor: "#fbbf24",
                          color: "#111827",
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Bookmark /> Subscribe & Save Cost
                        </div>
                      </button>

                      <p
                        className="text-xs mt-3 flex items-center justify-center transition-colors"
                        style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                      >
                        <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Pre-order closes in 17 hrs 17 min for this meal
                      </p>
                    </div>
                  </div>

                  {/* Bottom Icons */}
                  <div className="absolute bottom-6 right-6 space-y-3">
                    {[<ShoppingCart  className="w-4"/>, <MoreHorizontal />, <Calendar />, "More"].map((label) => (
                      <div
                        key={label}
                        className="backdrop-blur-sm rounded-full p-2"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      >
                        <span className="text-white text-sm">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-20 animate-bounce">
          <p
            className="text-sm uppercase tracking-wider mb-2 transition-colors"
            style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
          >
            Scroll to Explore
          </p>
          <svg
            className="w-6 h-6 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Waitlist Section */}
      <div
        className={`py-20 transition-colors duration-500 ${
          isDark ? "bg-lightprybackground" : "bg-darkprybackground"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 px-6 py-2 border border-yellow-400 rounded-full">
              <span className="text-yellow-400">✨</span>
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-lighttext" : "text-darktext"
                }`}
              >
                Coming Soon to Abuja
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? "text-lighttext" : "text-darktext"
            }`}
          >
            Be First in Line for the{" "}
            <span className="text-yellow-400">Food Revolution</span>
          </h2>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join our exclusive waiting list and unlock special early-bird
            benefits when Nourie launches. Limited spots available!
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div
              className={`p-6 rounded-2xl border transition-colors ${
                isDark
                  ? "bg-lightbackground border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="text-4xl mb-3">🎁</div>
              <h3
                className={`font-bold mb-2 ${
                  isDark ? "text-lighttext" : "text-darktext"
                }`}
              >
                30% Launch Discount
              </h3>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-colors ${
                isDark
                  ? "bg-lightbackground border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="text-4xl mb-3">⚡</div>
              <h3
                className={`font-bold mb-2 ${
                  isDark ? "text-lighttext" : "text-darktext"
                }`}
              >
                Priority Access
              </h3>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-colors ${
                isDark
                  ? "bg-lightbackground border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="text-4xl mb-3">🔔</div>
              <h3
                className={`font-bold mb-2 ${
                  isDark ? "text-lighttext" : "text-darktext"
                }`}
              >
                Exclusive Updates
              </h3>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-colors ${
                isDark
                  ? "bg-lightbackground border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="text-4xl mb-3">✨</div>
              <h3
                className={`font-bold mb-2 ${
                  isDark ? "text-lighttext" : "text-darktext"
                }`}
              >
                Beta Testing Access
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2">
            <span>Join the Waiting List</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Social Proof */}
          <p
            className={`mt-6 text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            🔥 <span className="font-semibold">500+</span> people already
            joined. Don't miss out!
          </p>
        </div>
      </div>

      {/* Extra section for scrolling demo */}
      {/* <div className="h-screen"></div> */}

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Hero;
