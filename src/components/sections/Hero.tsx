import { motion } from "framer-motion";
import introHeroVideo from "../../assets/videos/intro.mp4";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative h-screen min-h-screen w-screen overflow-hidden"
    >
      {/* === VIDEO DE FUNDO | inicio === */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={introHeroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* === VIDEO DE FUNDO | fim === */}

      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.35),transparent_45%,rgba(0,0,0,0.25))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-b from-transparent via-neutral-950/70 to-neutral-950" />

      {/* === CONTEUDO DA HERO | inicio === */}
      <div className="container-page relative z-10 flex h-screen min-h-screen items-end pb-8 pt-24 sm:pb-10 lg:pb-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="max-w-6xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
            className="mt-5 font-display uppercase text-4xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl"
          >
            Viny Drone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.55, ease: "easeOut" }}
            className="mt-5 uppercase font-display text-4xl font-black leading-[0.96] text-white sm:text-2xl lg:text-[1.8rem]"
          >
            Imagens aéreas de alto
            impacto para eventos e
            negócios.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.76, duration: 0.55, ease: "easeOut" }}
            className="mt-5 max-w-4xl text-base leading-8 text-white/72 sm:text-lg lg:text-[1.3rem] "
          >
            Corporativo, imobiliário e
            eventos sociais.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.04, duration: 0.55, ease: "easeOut" }}
            className=" max-w-4xl text-base leading-8 text-white/72 sm:text-lg lg:text-[1.3rem] "
          >
            Vídeos e fotos em alta
            definição para eternizar
            momentos e valorizar sua
            marca.{" "}
          </motion.h2>
        </motion.div>
      </div>
      {/* === CONTEUDO DA HERO | fim === */}
    </section>
  );
}
