export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'limpeza' | 'manutencao';
  duration?: string;
  includes?: string[];
  popular?: boolean;
}

export const cleaningServices: Service[] = [
  {
    id: 'estofados-automotivos',
    title: 'Limpeza de Estofados Automotivos',
    description: 'Limpeza profunda de bancos, carpetes e forros automotivos com produtos especializados',
    price: 'A partir de R$ 80',
    category: 'limpeza',
    duration: '2-3 horas',
    includes: ['Aspiração completa', 'Produtos especializados', 'Secagem rápida'],
    popular: true,
  },
  {
    id: 'estetica-automotiva',
    title: 'Estética Automotiva',
    description: 'Enceramento, polimento e proteção da pintura para um brilho duradouro',
    price: 'A partir de R$ 120',
    category: 'limpeza',
    duration: '3-4 horas',
    includes: ['Lavagem externa', 'Polimento', 'Enceramento', 'Proteção UV'],
  },
  {
    id: 'lavagem-completa',
    title: 'Lavagem Completa',
    description: 'Serviço completo incluindo externa, interna e detalhamento',
    price: 'A partir de R$ 180',
    category: 'limpeza',
    duration: '4-5 horas',
    includes: ['Lavagem externa', 'Limpeza interna', 'Detalhamento completo'],
    popular: true,
  },
  {
    id: 'enceramento-premium',
    title: 'Enceramento Premium',
    description: 'Proteção avançada com ceras importadas e nanotecnologia',
    price: 'A partir de R$ 150',
    category: 'limpeza',
    duration: '2-3 horas',
    includes: ['Cera importada', 'Nanotecnologia', 'Proteção 6 meses'],
  },
  {
    id: 'limpeza-motor',
    title: 'Limpeza de Motor',
    description: 'Desengraxante especializado para motor e compartimento',
    price: 'A partir de R$ 60',
    category: 'limpeza',
    duration: '1-2 horas',
    includes: ['Desengraxante', 'Proteção', 'Finalização'],
  },
  {
    id: 'tratamento-vidros',
    title: 'Tratamento de Vidros',
    description: 'Limpeza e aplicação de repelente de água nos vidros',
    price: 'A partir de R$ 40',
    category: 'limpeza',
    duration: '30-60 min',
    includes: ['Limpeza especializada', 'Repelente de água', 'Cristalização'],
  },
  {
    id: 'limpeza-sofas',
    title: 'Limpeza de Sofás',
    description: 'Limpeza profunda de sofás e poltronas com produtos especializados',
    price: 'A partir de R$ 100',
    category: 'limpeza',
    duration: '2-3 horas',
    includes: ['Aspiração', 'Produtos especializados', 'Secagem rápida'],
  },
  {
    id: 'limpeza-cortinas',
    title: 'Limpeza de Cortinas',
    description: 'Limpeza e higienização de cortinas, persianas e tecidos decorativos',
    price: 'A partir de R$ 60',
    category: 'limpeza',
    duration: '1-2 horas',
    includes: ['Remoção cuidadosa', 'Limpeza especializada', 'Reinstalação'],
  },
  {
    id: 'limpeza-carpetes',
    title: 'Limpeza de Carpetes',
    description: 'Lavagem e higienização de carpetes e tapetes residenciais',
    price: 'A partir de R$ 80',
    category: 'limpeza',
    duration: '2-3 horas',
    includes: ['Extração profunda', 'Produtos especializados', 'Secagem'],
  },
];

export const maintenanceServices: Service[] = [
  {
    id: 'troca-lampadas',
    title: 'Troca de Lâmpadas',
    description: 'Instalação e troca de lâmpadas LED, fluorescentes e incandescentes',
    price: 'A partir de R$ 25',
    category: 'manutencao',
    duration: '15-30 min',
    includes: ['Mão de obra', 'Instalação segura', 'Teste final'],
  },
  {
    id: 'instalacao-tv',
    title: 'Instalação de TV e Suportes',
    description: 'Fixação de TVs na parede, instalação de suportes e organização de cabos',
    price: 'A partir de R$ 80',
    category: 'manutencao',
    duration: '1-2 horas',
    includes: ['Fixação segura', 'Organização de cabos', 'Teste funcionamento'],
    popular: true,
  },
  {
    id: 'montagem-moveis',
    title: 'Montagem de Móveis',
    description: 'Montagem de móveis planejados, estantes, guarda-roupas e mesas',
    price: 'A partir de R$ 60',
    category: 'manutencao',
    duration: '2-4 horas',
    includes: ['Montagem completa', 'Ferramentas incluídas', 'Ajustes finais'],
  },
  {
    id: 'vedacao-janelas',
    title: 'Vedação de Janelas/Portas',
    description: 'Aplicação de vedantes e correção de folgas',
    price: 'A partir de R$ 30',
    category: 'manutencao',
    duration: '30-60 min',
    includes: ['Material vedante', 'Aplicação profissional', 'Acabamento'],
  },
  {
    id: 'acessorios-banheiro',
    title: 'Acessórios de Banheiro',
    description: 'Instalação de toalheiros, saboneteiras e papeleiras',
    price: 'A partir de R$ 25',
    category: 'manutencao',
    duration: '30-45 min',
    includes: ['Fixação segura', 'Nivelamento', 'Acabamento perfeito'],
  },
  {
    id: 'pequenos-reparos',
    title: 'Pequenos Reparos',
    description: 'Correção de furos, pintura de retoques e pequenos ajustes',
    price: 'A partir de R$ 35',
    category: 'manutencao',
    duration: '30-90 min',
    includes: ['Material incluído', 'Reparo profissional', 'Acabamento'],
  },
];

export const allServices = [...cleaningServices, ...maintenanceServices];

export const serviceCategories = [
  { 
    id: 'limpeza', 
    name: 'Serviços de Limpeza',
    description: 'Oferecemos uma gama completa de serviços para estofados residenciais e estética automotiva'
  },
  { 
    id: 'manutencao', 
    name: 'Serviços de Manutenção - Marido de Aluguel',
    description: 'Aproveite que já estamos na sua casa para resolver outras necessidades domésticas!'
  },
];