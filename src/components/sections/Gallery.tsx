import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import photo1 from "../../assets/photos/photo (1).png";
import photo2 from "../../assets/photos/photo (2).png";
import photo3 from "../../assets/photos/photo (3).png";
import photo4 from "../../assets/photos/photo (4).png";

type GalleryItem = {
  id: number;
  type: "video" | "photo";
  title: string;
  category: string;
  src: string;
  poster: string;
  youtubeId?: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "video",
    title: "Showreel aéreo 01",
    category: "Vídeo",
    src: "https://www.youtube.com/watch?v=SH3iHu-m7Fo",
    poster:
      "https://img.youtube.com/vi/SH3iHu-m7Fo/hqdefault.jpg",
    youtubeId: "SH3iHu-m7Fo",
  },
  {
    id: 2,
    type: "photo",
    title: "Enquadramento aéreo",
    category: "Foto",
    src: photo1,
    poster: photo1,
  },
  {
    id: 3,
    type: "video",
    title: "Showreel aéreo 02",
    category: "Vídeo",
    src: "https://www.youtube.com/watch?v=TWXNi3pC0zM",
    poster:
      "https://img.youtube.com/vi/TWXNi3pC0zM/hqdefault.jpg",
    youtubeId: "TWXNi3pC0zM",
  },
  {
    id: 4,
    type: "photo",
    title: "Perspectiva premium",
    category: "Foto",
    src: photo2,
    poster: photo2,
  },
  {
    id: 5,
    type: "photo",
    title: "Registro de impacto",
    category: "Foto",
    src: photo3,
    poster: photo3,
  },
  {
    id: 6,
    type: "video",
    title: "Showreel aéreo 03",
    category: "Vídeo",
    src: "https://www.youtube.com/watch?v=k8m0SaGQ_1c",
    poster:
      "https://img.youtube.com/vi/k8m0SaGQ_1c/hqdefault.jpg",
    youtubeId: "k8m0SaGQ_1c",
  },
  {
    id: 7,
    type: "photo",
    title: "Cena em alta definição",
    category: "Foto",
    src: photo4,
    poster: photo4,
  },
  {
    id: 8,
    type: "video",
    title: "Showreel aéreo 04",
    category: "Vídeo",
    src: "https://www.youtube.com/watch?v=g6nQGunTmSg",
    poster:
      "https://img.youtube.com/vi/g6nQGunTmSg/hqdefault.jpg",
    youtubeId: "g6nQGunTmSg",
  },
];

type GalleryCardProps = {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
};

function getYoutubeEmbedUrl(
  youtubeId: string,
  autoplay: boolean,
) {
  const autoplayValue = autoplay
    ? "1"
    : "0";

  return `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoplayValue}&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3`;
}

function GalleryIcon({
  type,
}: {
  type: GalleryItem["type"];
}) {
  if (type === "video") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-white"
      >
        <path d="M8 5.5v13l10-6.5-10-6.5Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 fill-none stroke-white stroke-2"
    >
      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z" />
      <path d="m8 15 2.6-3 2.2 2.4 1.6-1.7L18 16H6l2-1Z" />
      <path d="M9 8.5h.01" />
    </svg>
  );
}

function GalleryCard({
  item,
  onOpen,
}: GalleryCardProps) {
  const timerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [hovered, setHovered] =
    useState(false);
  const [showWatch, setShowWatch] =
    useState(false);
  const [isDesktop, setIsDesktop] =
    useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px)",
    );

    const handleMediaChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleMediaChange();
    mediaQuery.addEventListener(
      "change",
      handleMediaChange,
    );

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleMediaChange,
      );
  }, []);

  const clearWatchTimer = () => {
    if (!timerRef.current) return;

    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const handleMouseEnter = () => {
    if (!isDesktop) return;

    setHovered(true);
    setShowWatch(false);

    if (item.type !== "video") return;

    timerRef.current = setTimeout(
      () => {
        setShowWatch(true);
      },
      10000,
    );
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowWatch(false);
    clearWatchTimer();
  };

  useEffect(() => clearWatchTimer, []);

  return (
    <motion.button
      type="button"
      layoutId={`gallery-${item.id}`}
      onClick={() => onOpen(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: isDesktop ? -8 : 0,
        scaleX: isDesktop ? 1.18 : 1,
        scaleY: isDesktop ? 1.04 : 1,
        zIndex: 50,
      }}
      transition={{
        duration: 0.24,
        ease: "easeOut",
      }}
      className="gallery-card group relative min-h-[220px] origin-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left shadow-drone outline-none focus:ring-2 focus:ring-sky-300 md:min-h-[300px]"
    >
      {/* === MIDIA DO CARD | inicio === */}
      <img
        src={item.poster}
        alt={item.title}
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
          hovered &&
          isDesktop &&
          item.type === "video"
            ? "opacity-0"
            : "opacity-100"
        }`}
        loading="lazy"
      />

      {hovered &&
      isDesktop &&
      item.type === "video" &&
      item.youtubeId ? (
        <iframe
          className="pointer-events-none absolute inset-0 h-full w-full scale-125"
          src={getYoutubeEmbedUrl(
            item.youtubeId,
            true,
          )}
          title={item.title}
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      ) : null}
      {/* === MIDIA DO CARD | fim === */}

      <AnimatePresence>
        {!hovered ? (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              transition: {
                duration: 0.08,
              },
            }}
            className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 backdrop-blur-xl"
          >
            <GalleryIcon
              type={item.type}
            />
          </motion.span>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showWatch ? (
          <motion.span
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute right-5 top-5 z-20 rounded-lg border border-white/15 bg-white/12 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl"
          >
            [ Assistir ]
          </motion.span>
        ) : null}
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-100/80">
          {item.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-black uppercase leading-tight tracking-[-0.04em] text-white md:text-2xl">
          {item.title}
        </h3>
      </div>
    </motion.button>
  );
}

export default function Gallery() {
  const [activeItem, setActiveItem] =
    useState<GalleryItem | null>(null);

  return (
    <section
      id="galeria"
      className="section-shell overflow-visible bg-transparent"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05),rgba(24,24,27,0.32),rgba(5,5,5,0.05))]" />
      <div className="container-page relative z-10 overflow-visible">
        <SectionTitle
          eyebrow="Showreel / Portfólio"
          title={
            <>
              Transforma{" "}
              <span className="text-orange-400/60">PERSPECTIVAS</span>{" "}
              aéreas em{" "}
              <span className="text-orange-400/60">CONTEÚDO</span>{" "}
              de alto{" "}
              <span className="text-orange-400/60">IMPACTO</span>.
            </>
          }
          description="Produções para eventos, negócios e imóveis, com captação planejada, imagens em alta definição e operação profissional."
        />

        {/* === GALERIA EXPANSIVEL | inicio === */}
        <div className="relative mt-12 grid grid-cols-1 gap-4 overflow-visible md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onOpen={setActiveItem}
            />
          ))}
        </div>
        {/* === GALERIA EXPANSIVEL | fim === */}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/84 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setActiveItem(null)
            }
          >
            <motion.div
              layoutId={`gallery-${activeItem.id}`}
              initial={{
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.94,
                opacity: 0,
              }}
              className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-white/15 bg-neutral-950 shadow-drone"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                onClick={() =>
                  setActiveItem(null)
                }
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-xl"
                aria-label="Fechar galeria"
              >
                ×
              </button>

              {activeItem.type ===
                "video" &&
              activeItem.youtubeId ? (
                <iframe
                  src={getYoutubeEmbedUrl(
                    activeItem.youtubeId,
                    true,
                  ).replace(
                    "controls=0",
                    "controls=1",
                  )}
                  title={
                    activeItem.title
                  }
                  className="h-[70vh] w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="h-[70vh] w-full object-cover"
                />
              )}

              <div className="p-6">
                <p className="eyebrow">
                  {activeItem.category}
                </p>
                <h3 className="mt-2 font-display text-3xl font-black uppercase tracking-[-0.04em]">
                  {activeItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
