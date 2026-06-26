import { motion } from "framer-motion";
import BorderBeamCard from "../ui/BorderBeamCard";
import SectionTitle from "../ui/SectionTitle";
import { differentials } from "../../data/siteData";
import certificadoIcon from "../../assets/ui/certificado.svg";

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-shell bg-transparent"
    >
      <div className="container-page">
        <SectionTitle
          eyebrow="Diferenciais técnicos e legalização"
          title={
            <>
              A beleza da{" "}
              <span className="text-orange-400/60">
                IMAGEM
              </span>{" "}
              precisa vir acompanhada de
              operação{" "}
              <span className="text-orange-400/60">
                SÉRIA.
              </span>
            </>
          }
          description="A Viny Drone posiciona segurança, planejamento e documentação como parte da experiência."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {differentials.map(
            (item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  delay: index * 0.08,
                }}
              >
                <BorderBeamCard className="h-full min-h-[260px]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/10 p-3">
                    <img
                      src={certificadoIcon}
                      alt=""
                      className="h-full w-full object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-black tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/62">
                    {item.description}
                  </p>
                </BorderBeamCard>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
