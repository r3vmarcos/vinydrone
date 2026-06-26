import {
  type ChangeEvent,
  type FormEvent,
  useMemo,
  useState,
} from "react";
import { motion } from "framer-motion";
import CtaButton from "../ui/CtaButton";
import SectionTitle from "../ui/SectionTitle";
import { WHATSAPP_NUMBER } from "../../data/siteData";
import {
  maskPhone,
  onlyDigits,
} from "../../utils/phoneMask";

type FormState = {
  nomeEmpresa: string;
  telefone: string;
  email: string;
  tipoProjeto: string;
  localCaptacao: string;
  dataServico: string;
};

const initialFormState: FormState = {
  nomeEmpresa: "",
  telefone: "",
  email: "",
  tipoProjeto: "",
  localCaptacao: "",
  dataServico: "",
};

const tiposProjeto = [
  "Cobertura de Eventos (Casamentos, shows, corporativos)",
  "Mercado Imobiliário (Casas, terrenos, galpões)",
  "Inspeção Técnica (Obras, telhados, fachadas)",
  "Mapeamento e Topografia Aérea",
];

export default function Contact() {
  const [form, setForm] =
    useState<FormState>(
      initialFormState,
    );
  const [sent, setSent] =
    useState(false);

  const whatsappMessage =
    useMemo(() => {
      const rawPhone = onlyDigits(
        form.telefone,
      );

      return encodeURIComponent(
        `Olá, Viny Drone! Quero pedir um orçamento.\n\nNome/Empresa: ${
          form.nomeEmpresa || "-"
        }\nE-mail: ${form.email || "-"}\nTelefone: ${
          rawPhone || "-"
        }\nTipo de Projeto: ${form.tipoProjeto || "-"}\nLocal da Captação: ${
          form.localCaptacao || "-"
        }\nData Prevista: ${form.dataServico || "-"}`,
      );
    }, [form]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const whatsappMessageRapido =
    encodeURIComponent(
      "Olá, Viny Drone! Obrigado pelo atendimento. Quero solicitar mais informações sobre os serviços e entender qual captação combina melhor com o meu projeto.",
    );
  const whatsappUrlRapido = `https://wa.me/5511983814318?text=${whatsappMessageRapido}`;

  const handleChange = (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
    >,
  ) => {
    const { name, value } =
      event.target;

    setForm((current) => ({
      ...current,
      [name]:
        name === "telefone"
          ? maskPhone(value)
          : value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setSent(true);
    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contato"
      className="section-shell bg-transparent"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.12),transparent_36%),linear-gradient(180deg,rgba(5,5,5,0.02),rgba(5,5,5,0.34),rgba(5,5,5,0.08))]" />
      <div className="relative z-10 mx-auto grid w-[95vw] max-w-[95vw] gap-7 sm:w-full sm:max-w-7xl sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10 lg:px-8">
        <div className="min-w-0">
          <SectionTitle
            eyebrow="Contato"
            title="Envie os dados do projeto e receba um orçamento para o voo."
            description="As informações ajudam a validar agenda, local de captação, tipo de entrega e condições operacionais para o atendimento."
          />

          {/* === WHATSAPP RAPIDO | inicio === */}
          <a
            href={whatsappUrlRapido}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full max-w-full items-center justify-center gap-2 rounded-lg border border-emerald-300/40 bg-emerald-400 px-3 py-3 text-center text-base font-bold leading-tight tracking-wide text-emerald-950 shadow-drone transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-neutral-950 sm:w-auto sm:px-5 sm:text-lg"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 shrink-0 fill-current sm:h-8 sm:w-8"
            >
              <path d="M12.04 2a9.9 9.9 0 0 0-8.52 14.95L2 22l5.2-1.47A9.97 9.97 0 1 0 12.04 2Zm0 1.77a8.2 8.2 0 0 1 6.97 12.52 8.24 8.24 0 0 1-9.37 3.24l-.3-.1-3.08.87.9-2.96-.15-.32a8.2 8.2 0 0 1 7.03-13.25Zm-3.7 4.43c-.17 0-.43.06-.65.3-.22.23-.85.83-.85 2.02 0 1.18.87 2.33.99 2.49.12.16 1.68 2.68 4.17 3.65 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.1-.5.11-.11.25-.28.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.47-.4-.41-.55-.42h-.47Z" />
            </svg>
            <span className="min-w-0">
              Chame agora no WhatsApp
            </span>
          </a>
          {/* === WHATSAPP RAPIDO | fim === */}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.65,
          }}
          className="glass-panel min-w-0 rounded-lg p-4 sm:p-8"
        >
          {/* === CAMPOS DO FORMULARIO | inicio === */}
          <div className="grid min-w-0 gap-3 md:grid-cols-2 md:gap-5">
            <label className="grid min-w-0 gap-1.5 md:col-span-2 md:gap-2">
              <span className="min-w-0 text-sm font-bold leading-tight text-white/78">
                Nome Completo / Nome da
                Empresa
              </span>
              <input
                name="nomeEmpresa"
                value={form.nomeEmpresa}
                onChange={handleChange}
                required
                type="text"
                placeholder="Ex: Vinicius Barbosa Produções"
                className="h-12 min-w-0 w-full rounded-lg border border-white/10 bg-black/24 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky-300/70 focus:bg-black/35 sm:h-14 sm:px-4"
              />
            </label>

            <label className="grid min-w-0 gap-1.5 md:gap-2">
              <span className="min-w-0 text-sm font-bold leading-tight text-white/78">
                WhatsApp / Telefone
                Comercial
              </span>
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                required
                type="tel"
                inputMode="numeric"
                placeholder="(11) 99999-9999"
                className="h-12 min-w-0 w-full rounded-lg border border-white/10 bg-black/24 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky-300/70 focus:bg-black/35 sm:h-14 sm:px-4"
              />
            </label>

            <label className="grid min-w-0 gap-1.5 md:gap-2">
              <span className="min-w-0 text-sm font-bold leading-tight text-white/78">
                E-mail Corporativo
              </span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="contato@empresa.com.br"
                className="h-12 min-w-0 w-full rounded-lg border border-white/10 bg-black/24 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky-300/70 focus:bg-black/35 sm:h-14 sm:px-4"
              />
            </label>

            <label className="grid min-w-0 gap-1.5 md:col-span-2 md:gap-2">
              <span className="min-w-0 text-sm font-bold leading-tight text-white/78">
                Tipo de Projeto
              </span>
              <select
                name="tipoProjeto"
                value={form.tipoProjeto}
                onChange={handleChange}
                required
                className="h-12 min-w-0 w-full rounded-lg border border-white/10 bg-black/24 px-3 text-white outline-none transition focus:border-sky-300/70 focus:bg-black/35 sm:h-14 sm:px-4"
              >
                <option value="">
                  Selecione uma opção
                </option>
                {tiposProjeto.map(
                  (tipoProjeto) => (
                    <option
                      key={tipoProjeto}
                      value={
                        tipoProjeto
                      }
                      className="bg-neutral-950 text-white"
                    >
                      {tipoProjeto}
                    </option>
                  ),
                )}
              </select>
            </label>

            <label className="grid min-w-0 gap-1.5 md:gap-2">
              <span className="min-w-0 text-sm font-bold leading-tight text-white/78">
                Local da Captação
                (Cidade e Bairro)
              </span>
              <input
                name="localCaptacao"
                value={
                  form.localCaptacao
                }
                onChange={handleChange}
                required
                type="text"
                placeholder="Ex: São Paulo, Pinheiros"
                className="h-12 min-w-0 w-full rounded-lg border border-white/10 bg-black/24 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky-300/70 focus:bg-black/35 sm:h-14 sm:px-4"
              />
            </label>

            <label className="grid min-w-0 gap-1.5 md:gap-2">
              <span className="min-w-0 text-sm font-bold leading-tight text-white/78">
                Data Prevista do Serviço
              </span>
              <input
                name="dataServico"
                value={form.dataServico}
                onChange={handleChange}
                required
                type="date"
                className="h-12 min-w-0 w-full rounded-lg border border-white/10 bg-black/24 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky-300/70 focus:bg-black/35 sm:h-14 sm:px-4"
              />
            </label>
          </div>
          {/* === CAMPOS DO FORMULARIO | fim === */}

          {sent ? (
            <p className="mt-5 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100">
              Pedido preparado. O
              WhatsApp foi aberto com
              sua mensagem.
            </p>
          ) : null}

          {/* === ACOES DO FORMULARIO | inicio === */}
          <div className="mt-7">
            <CtaButton
              type="submit"
              className="min-w-0 w-full text-center leading-tight"
            >
              Enviar Pedido de Orçamento
            </CtaButton>
          </div>
          {/* === ACOES DO FORMULARIO | fim === */}
        </motion.form>
      </div>
    </section>
  );
}
