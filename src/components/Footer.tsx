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
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AutoLimpeza Pro</h3>
                <p className="text-white/80 text-sm">Especialistas em Limpeza</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Especialistas em limpeza de estofados e estética automotiva. 
              Qualidade e excelência em cada serviço.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-primary transition-smooth flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-white/80 hover:text-primary transition-smooth"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato Rápido</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">(11) 99999-9999</div>
                  <div className="text-white/80 text-sm">WhatsApp</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">(11) 3333-3333</div>
                  <div className="text-white/80 text-sm">Telefone Fixo</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">contato@autolimpezapro.com.br</div>
                  <div className="text-white/80 text-sm">E-mail</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">Rua das Flores, 123</div>
                  <div className="text-white/80 text-sm">São Paulo - SP</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <FiClock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Horário de Funcionamento</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Segunda a Sexta:</span>
                    <span>8h às 21h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sábados, Domingos e Feriados:</span>
                    <span>8h às 18h</span>
                  </div>
                </div>
                
                <div className="mt-3 p-2 bg-warning/10 rounded border border-warning/20">
                  <div className="text-warning text-sm font-medium">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm text-center md:text-left">
              © {currentYear} AutoLimpeza Pro. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
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

      {/* Cookie Notice */}
      <div className="bg-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/90">
              🍪 Nós utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego.
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-sm bg-white/20 rounded hover:bg-white/30 transition-smooth">
                Configurar
              </button>
              <button className="px-4 py-2 text-sm bg-primary rounded hover:bg-primary-glow transition-smooth">
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