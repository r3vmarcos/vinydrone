import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { equipmentSpecs } from "../../data/siteData";
import djiMini4ProImage from "../../assets/photos/dji-mini-4-pro.png";

export default function Equipment() {
  return (
    <section className="section-shell bg-transparent">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <SectionTitle
            eyebrow="Equipamentos"
            title="Tecnologia compacta para captação profissional."
            description="Alta qualidade, compacta e leve."
          />

          {/* === TOPICOS DO EQUIPAMENTO | inicio === */}
          <div className="mt-10 grid gap-2">
            {equipmentSpecs.map(
              (spec, index) => (
                <motion.div
                  key={spec}
                  initial={{
                    opacity: 0,
                    x: -18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="glass-panel flex items-start gap-3 rounded-lg px-4 py-3"
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400/70 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-white/72">
                    {spec}
                  </p>
                </motion.div>
              ),
            )}
          </div>
          {/* === TOPICOS DO EQUIPAMENTO | fim === */}
        </div>

        {/* === FOTO DO EQUIPAMENTO | inicio === */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{ duration: 0.7 }}
          className="relative lg:mb-0"
        >
          <div className="absolute -inset-6 rounded-lg bg-sky-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-drone">
            <div className="flex h-[360px] items-start justify-center bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_38%,rgba(2,6,23,0.05)_70%)] px-5 pb-6 pt-2 sm:h-[440px] sm:p-8 md:items-center lg:h-[520px]">
              <img
                src={djiMini4ProImage}
                alt="DJI Mini 4 Pro"
                className="max-h-full w-full object-contain drop-shadow-[0_30px_55px_rgba(0,0,0,0.45)]"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-100/80">
                DJI Mini 4 Pro
              </p>
              <h3 className="mt-2 font-display text-3xl font-black tracking-[-0.04em] text-white">
                Tecnologia compacta.
                Entrega profissional.
              </h3>
            </div>
          </div>
        </motion.div>
        {/* === FOTO DO EQUIPAMENTO | fim === */}
      </div>
    </section>
  );
}
