import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/siteData";

export default function Services() {
  return (
    <section
      id="servicos"
      className="section-shell bg-transparent"
    >
      <div className="absolute inset-0 bg-radial-noise opacity-45" />
      <div className="container-page relative z-10">
        <SectionTitle
          eyebrow="Nossos serviços"
          className="max-w-full"
          title={
            <>
              Captação aérea para{" "}
              <span className="text-orange-400/60">VENDER</span>,{" "}
              <span className="text-orange-400/60">EMOCIONAR</span> e
              <br />{" "}
              <span className="text-orange-400/60">
                DOCUMENTAR
              </span>{" "}
              com precisão.
            </>
          }
          description="Cada serviço é pensado para gerar uma entrega objetiva: mais impacto visual, mais confiança e mais valor percebido para o cliente final."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(
            (service) => (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="group glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <h3 className="font-display text-xl font-black uppercase tracking-[-0.03em] text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {service.description}
                </p>
                <p className="mt-6 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-[0.18em] text-sky-200/80">
                  {service.detail}
                </p>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
