export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  detail: string;
};

export type GalleryItem = {
  id: number;
  type: 'video' | 'photo';
  title: string;
  category: string;
  src: string;
  poster?: string;
};

export type DifferentialItem = {
  title: string;
  description: string;
  icon: string;
};

export const WHATSAPP_NUMBER = '5511999999999';

export const navItems: NavItem[] = [
  { label: 'Início', href: '#topo' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'O Piloto', href: '#sobre' },
  { label: 'CONTATO', href: '#contato' },
];

export const videoSources = {
  logo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-with-highways-5285-large.mp4',
  hero: 'https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-mountain-range-covered-in-trees-5017-large.mp4',
};

export const services: ServiceItem[] = [
  {
    title: 'Cobertura de Eventos Sociais e Corporativos',
    description: 'Casamentos, shows, formaturas, lançamentos e encontros empresariais com enquadramentos cinematográficos.',
    detail: 'Captação aérea para valor emocional, escala visual e registro profissional do momento.',
  },
  {
    title: 'Imagens Aéreas para o Mercado Imobiliário',
    description: 'Fotos e vídeos que valorizam localização, fachada, entorno, área de lazer e diferenciais do imóvel.',
    detail: 'Ideal para anúncios premium, incorporadoras, corretores e portfólios comerciais.',
  },
  {
    title: 'Inspeção de Obras, Telhados e Fachadas',
    description: 'Visualização segura de áreas altas, acompanhamento de evolução e documentação técnica visual.',
    detail: 'Reduz risco operacional e acelera diagnósticos com imagens em alta definição.',
  },
  {
    title: 'Mapeamento e Topografia Aérea',
    description: 'Levantamento visual para terrenos, áreas abertas, planejamento, documentação e estudos preliminares.',
    detail: 'Captação organizada para leitura territorial, obra e tomada de decisão.',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'Cidade em movimento',
    category: 'Showreel urbano',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-with-highways-5285-large.mp4',
    poster: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    type: 'photo',
    title: 'Casamento ao ar livre',
    category: 'Eventos sociais',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    type: 'video',
    title: 'Estrada e horizonte',
    category: 'Cinemático',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-highway-in-the-middle-of-a-green-landscape-41676-large.mp4',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    type: 'photo',
    title: 'Empreendimento premium',
    category: 'Imobiliário',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    type: 'photo',
    title: 'Obra monitorada',
    category: 'Inspeção',
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    type: 'video',
    title: 'Floresta aérea',
    category: 'Natureza',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-forest-4407-large.mp4',
    poster: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    type: 'photo',
    title: 'Produção corporativa',
    category: 'Negócios',
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    type: 'photo',
    title: 'Topografia visual',
    category: 'Mapeamento',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  },
];

export const differentials: DifferentialItem[] = [
  {
    icon: '🛰️',
    title: 'Equipamento homologado pela ANATEL',
    description: 'Operação com equipamento regularizado para uso profissional em território nacional.',
  },
  {
    icon: '✈️',
    title: 'Piloto e drone cadastrados na ANAC',
    description: 'Cadastro operacional no SISANT, alinhado às exigências brasileiras para aeronaves remotamente pilotadas.',
  },
  {
    icon: '🛡️',
    title: 'Voos autorizados pelo DECEA',
    description: 'Planejamento e autorização via SARPAS para voos mais seguros, documentados e responsáveis.',
  },
];

export const equipmentSpecs = [
  'Modelo em Destaque: DJI Mini 4 Pro',
  'Fotos: Até 48 MP (ou 12 MP no padrão) em formatos JPEG e RAW.',
  'Vídeos comuns: Até 4K HDR a 60fps.',
  'Câmera lenta: Até 4K a 100fps ou 1080p a 200fps.',
  'Vídeos para redes sociais: Gravação Vertical Real em até 4K a 60fps.',
];
