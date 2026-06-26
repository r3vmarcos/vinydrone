import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

type PilotTestimonial = {
  title: string;
  text: string;
};

const pilotTestimonials: PilotTestimonial[] = [
  {
    title: "5 anos no universo dos drones",
    text: "Aficionado pelo universo dos drones há 5 anos, Vinicius transformou a paixão pelo voo em uma profissão focada em capturar o extraordinário.",
  },
  {
    title: "Audiovisual para momentos grandes",
    text: "Especializado no mercado audiovisual, atua diretamente na cobertura de casamentos emocionantes, grandes eventos sociais e produções corporativas robustas.",
  },
  {
    title: "Precisão técnica com olhar artístico",
    text: "Combinando precisão técnica com olhar artístico, seu objetivo é transformar perspectivas comuns em imagens inesquecíveis e seguras.",
  },
];

export default function Pilot() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = pilotTestimonials[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % pilotTestimonials.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="sobre"
      className="section-shell bg-transparent"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1),transparent_34%)]" />
      <div className="container-page relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionTitle
          eyebrow="O piloto"
          title="Vinicius Barbosa une precisão técnica com olhar de cinema."
          description="Fundador e piloto da Viny Drone, conduz cada voo com planejamento, sensibilidade visual e responsabilidade operacional."
        />

        <motion.article
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="glass-panel rounded-lg p-6 sm:p-8"
        >
          {/* === IDENTIDADE DO PILOTO | inicio === */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white/10">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
                alt="Vinicius Barbosa, fundador e piloto da Viny Drone"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div>
              <p className="titulo-secao-destaque">Fundador e Piloto</p>
              <h3 className="mt-2 font-display text-3xl font-black tracking-[-0.04em] text-white">
                Vinicius Barbosa
              </h3>
            </div>
          </div>
          {/* === IDENTIDADE DO PILOTO | fim === */}

          {/* === TEXTO DO PILOTO | inicio === */}
          <p className="mt-8 text-lg leading-9 text-white/72">
            “Aficionado pelo universo dos drones há 5 anos, transformei a
            paixão pelo voo em uma profissão focada em capturar o
            extraordinário. Especializado no mercado audiovisual, atuo
            diretamente na cobertura de casamentos emocionantes, grandes eventos
            sociais e produções corporativas robustas. Combinando precisão
            técnica com olhar artístico, meu objetivo é transformar perspectivas
            comuns em imagens inesquecíveis e seguras.”
          </p>
          {/* === TEXTO DO PILOTO | fim === */}

          {/* === DEPOIMENTO ANIMADO | inicio === */}
          <div className="mt-8 min-h-[230px] rounded-lg border border-white/10 bg-black/20 p-5 sm:min-h-[210px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5 }}
                className="flex min-h-[190px] flex-col justify-center sm:min-h-[170px]"
              >
                <h4 className="titulo-secao-destaque">
                  {activeTestimonial.title}
                </h4>
                <p className="mt-3 text-base leading-8 text-white/66">
                  {activeTestimonial.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* === DEPOIMENTO ANIMADO | fim === */}
        </motion.article>
      </div>
    </section>
  );
}
