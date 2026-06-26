import { navItems } from "../../data/siteData";
import { scrollToSection } from "../../utils/scroll";
import logoVinyDrone from "../../assets/ui/logo_viny_drone_w.png";
import certificadoIcon from "../../assets/ui/certificado.svg";

type SocialLink = {
  label: string;
  href: string;
  colorClass: string;
  path: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "YouTube",
    href: "https://youtube.com/",
    colorClass: "bg-red-500 text-white",
    path: "M21.58 7.19a2.67 2.67 0 0 0-1.88-1.89C18.04 4.85 12 4.85 12 4.85s-6.04 0-7.7.45a2.67 2.67 0 0 0-1.88 1.89A27.8 27.8 0 0 0 2 12a27.8 27.8 0 0 0 .42 4.81 2.67 2.67 0 0 0 1.88 1.89c1.66.45 7.7.45 7.7.45s6.04 0 7.7-.45a2.67 2.67 0 0 0 1.88-1.89A27.8 27.8 0 0 0 22 12a27.8 27.8 0 0 0-.42-4.81ZM10 15.2V8.8l5.2 3.2L10 15.2Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    colorClass: "bg-pink-500 text-white",
    path: "M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.1a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    colorClass: "bg-blue-600 text-white",
    path: "M14.2 8.5V6.9c0-.77.5-.95.86-.95h2.19V2.17L14.23 2C10.88 2 10.1 4.5 10.1 6.1v2.4H7.5v3.9h2.6V22h4.1v-9.6h3.05l.4-3.9H14.2Z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/",
    colorClass: "bg-neutral-100 text-neutral-950",
    path: "M16.1 2c.3 2.6 1.75 4.15 4.25 4.32v3.1a7.22 7.22 0 0 1-4.17-1.27v5.98c0 5.05-5.47 6.62-8.74 3.01-2.1-2.32-1.7-6.39 1.18-8.03a6.79 6.79 0 0 1 3.63-.84v3.27c-.4-.06-.83-.04-1.25.1-1.2.4-1.96 1.52-1.7 2.84.5 2.52 4.98 2.03 4.6-1.24V2h2.2Z",
  },
];

const regulationItems = [
  "Homologado ANATEL",
  "Cadastrado ANAC (SISANT)",
  "Autorizado DECEA (SARPAS)",
];

export default function Footer() {
  return (
    <footer className="bg-transparent py-14">
      <div className="container-page">
        <div className="grid gap-10 border-y border-white/10 py-12 md:grid-cols-2 xl:grid-cols-5">
          <div>
            {/* === LOGO DO RODAPE | inicio === */}
            <img
              src={logoVinyDrone}
              alt="Viny Drone"
              className="h-12 w-auto object-contain"
            />
            {/* === LOGO DO RODAPE | fim === */}
            <p className="mt-4 text-sm leading-7 text-white/58">
              Produção audiovisual aérea para eventos, negócios, imóveis e
              projetos que precisam ser vistos por uma nova perspectiva.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Navegação Rápida
            </h3>
            <div className="mt-5 grid gap-3">
              {navItems
                .filter((item) => item.label !== "Diferenciais")
                .map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="w-fit text-left text-sm font-semibold text-white/58 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Redes Sociais
            </h3>
            {/* === REDES SOCIAIS | inicio === */}
            <div className="mt-5 grid justify-items-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-white/58 transition hover:text-white"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${link.colorClass}`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d={link.path} />
                    </svg>
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
            {/* === REDES SOCIAIS | fim === */}
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Regulamentação e Legitimidade
            </h3>
            {/* === REGULAMENTACAO | inicio === */}
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-white/62">
              {regulationItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <img
                    src={certificadoIcon}
                    alt=""
                    className="h-6 w-6 shrink-0 object-contain"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            {/* === REGULAMENTACAO | fim === */}
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Contato e Atuação
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-white/62">
              <a
                href="mailto:contato@vinydrone.com.br"
                className="font-semibold hover:text-white"
              >
                contato@vinydrone.com.br
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:text-white"
              >
                WhatsApp da empresa
              </a>
              <p>São Paulo e Região</p>
            </div>
          </div>
        </div>

        <p className="pt-8 text-sm leading-7 text-white/45">
          © 2026 Viny Drone. Todos os direitos reservados. Piloto Vinicius
          Barbosa — Operação Profissional de Drone de acordo com as normas RBAC
          94 (ANAC), ICA 100-40 (DECEA) e Resolução 715 (ANATEL).
        </p>
      </div>
    </footer>
  );
}
