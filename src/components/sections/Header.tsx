import {
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";
import { navItems } from "../../data/siteData";
import { scrollToSection } from "../../utils/scroll";
import logoVinyDrone from "../../assets/ui/logo_viny_drone_w.png";

export default function Header() {
  const [scrolled, setScrolled] =
    useState(false);
  const [
    headerVisivel,
    setHeaderVisivel,
  ] = useState(false);
  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const onScroll = () => {
      const rolouPagina =
        window.scrollY > 8;

      setScrolled(window.scrollY > 24);

      if (!rolouPagina) return;

      setHeaderVisivel(true);
    };

    onScroll();
    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true },
    );
    return () =>
      window.removeEventListener(
        "scroll",
        onScroll,
      );
  }, []);

  const handleNav = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{
        y: headerVisivel ? 0 : -96,
        opacity: headerVisivel ? 1 : 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerVisivel ? "pointer-events-auto" : "pointer-events-none"} ${scrolled ? "bg-neutral-950/72 shadow-2xl shadow-black/30 backdrop-blur-2xl" : "bg-transparent"}`}
    >
      <div className="container-page grid h-16 grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        {/* === IDENTIDADE VISUAL | inicio === */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={() =>
              handleNav("#topo")
            }
            className="flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
            aria-label="Ir para o início"
          >
            <img
              src={logoVinyDrone}
              alt="Viny Drone"
              className="h-10 w-auto object-contain"
            />
          </button>
        </div>
        {/* === IDENTIDADE VISUAL | fim === */}

        {/* === MENU DE NAVEGACAO | inicio === */}
        <nav
          className="hidden items-center justify-center gap-x-4 rounded-lg border border-transparent bg-transparent backdrop-blur-xl lg:flex"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() =>
                handleNav(item.href)
              }
              className={
                item.href === "#contato"
                  ? "rounded-lg bg-sky-400/60 px-6 py-1 uppercase text-[1rem] font-bold text-neutral-950 shadow-drone transition hover:bg-sky-300"
                  : "rounded-lg px-6 py-1 uppercase text-[1rem] font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
        {/* === MENU DE NAVEGACAO | fim === */}

        {/* === MENU MOBILE | inicio === */}
        <button
          type="button"
          onClick={() =>
            setMenuOpen(
              (state) => !state,
            )
          }
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white backdrop-blur-xl lg:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>
        {/* === MENU MOBILE | fim === */}
      </div>

      {/* === MENU MOBILE EXPANDIDO | inicio === */}
      {menuOpen ? (
        <motion.div
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="container-page pb-5 lg:hidden"
        >
          <div className="glass-panel grid gap-2 rounded-lg p-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() =>
                  handleNav(item.href)
                }
                className={
                  item.href ===
                  "#contato"
                    ? "rounded-lg bg-sky-400/60 px-4 py-3 text-left text-sm font-bold text-neutral-950 shadow-drone hover:bg-sky-300"
                    : "rounded-lg px-4 py-3 text-left text-sm font-semibold text-white/75 hover:bg-white/10 hover:text-white"
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      ) : null}
      {/* === MENU MOBILE EXPANDIDO | fim === */}
    </motion.header>
  );
}
