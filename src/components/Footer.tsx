import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Agendamento", href: "/agendamento" },
    { name: "Calculadora", href: "/calculadora" },
    { name: "Contato", href: "/contato" },
    { name: "FAQ", href: "/faq" },
  ];

  const services = [
    { name: "Limpeza Automotiva", href: "/servicos#automotiva" },
    { name: "Estética Veicular", href: "/servicos#estetica" },
    { name: "Limpeza Residencial", href: "/servicos#residencial" },
    { name: "Manutenção Doméstica", href: "/manutencao" },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Mobile-First Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Company Info - Mobile First */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">AP</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">AutoLimpeza Pro</h3>
                <p className="text-white/80 text-xs sm:text-sm">Especialistas em Limpeza</p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0">
              Especialistas em limpeza de estofados e estética automotiva. 
              Qualidade e excelência em cada serviço.
            </p>
            
            {/* Mobile-First Social Media */}
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="Facebook"
              >
                <FiFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Mobile Optimized */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm sm:text-base text-white/80 hover:text-primary transition-smooth block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Mobile Optimized */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Nossos Serviços</h4>
            <ul className="grid grid-cols-1 gap-2 sm:gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-sm sm:text-base text-white/80 hover:text-primary transition-smooth block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Mobile First */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contato Rápido</h4>
            <div className="space-y-3 sm:space-y-4">
              
              {/* Phone Numbers */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <div className="font-medium">(11) 99999-9999</div>
                  <div className="text-white/80 text-xs sm:text-sm">WhatsApp</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <div className="font-medium">(11) 3333-3333</div>
                  <div className="text-white/80 text-xs sm:text-sm">Telefone Fixo</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <div className="font-medium break-all">contato@autolimpezapro.com.br</div>
                  <div className="text-white/80 text-xs sm:text-sm">E-mail</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start justify-center sm:justify-start gap-3">
                <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm sm:text-base">
                  <div className="font-medium">Rua das Flores, 123</div>
                  <div className="text-white/80 text-xs sm:text-sm">São Paulo - SP</div>
                </div>
              </div>
            </div>

            {/* Mobile-First Operating Hours */}
            <div className="bg-white/5 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <FiClock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">Horário de Funcionamento</span>
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Seg-Sex:</span>
                  <span>8h às 21h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Fim de semana:</span>
                  <span>8h às 18h</span>
                </div>
              </div>
              
              <div className="mt-2 sm:mt-3 p-2 bg-warning/10 rounded border border-warning/20">
                <div className="text-warning text-xs sm:text-sm font-medium">
                  🌙 Atendimento Noturno Disponível
                </div>
                <div className="text-white/80 text-xs">
                  Seg-Sex após 18h: Valores diferenciados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-First Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-white/80 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              © {currentYear} AutoLimpeza Pro. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-col xs:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
              <Link to="/politica-privacidade" className="text-white/80 hover:text-primary transition-smooth">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-white/80 hover:text-primary transition-smooth">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-First Cookie Notice */}
      <div className="bg-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-white/90 text-center sm:text-left">
              🍪 Utilizamos cookies para melhorar sua experiência e personalizar conteúdo.
            </div>
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-white/20 rounded hover:bg-white/30 transition-smooth">
                Configurar
              </button>
              <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-primary rounded hover:bg-primary-glow transition-smooth">
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;