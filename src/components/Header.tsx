import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiClock, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Mobile-first scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: "/", label: "Início" },
    { path: "/servicos", label: "Serviços" },
    { path: "/manutencao", label: "Manutenção" },
    { path: "/galeria", label: "Galeria" },
    { path: "/depoimentos", label: "Depoimentos" },
    { path: "/contato", label: "Contato" },
    { path: "/calculadora", label: "Calculadora" },
    { path: "/agendamento", label: "Agendamento" },
    { path: "/faq", label: "FAQ" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile-First Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs sm:text-sm overflow-hidden">
        <div className="container mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-1 sm:hidden text-center">
            <div className="flex items-center justify-center gap-2">
              <FiClock className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">NOVIDADE: Atendemos Fins de Semana</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs">
              <span>(11) 99999-9999</span>
              <span>•</span>
              <span>Seg-Sex até 21h</span>
            </div>
          </div>
          
          {/* Tablet/Desktop Layout */}
          <div className="hidden sm:flex sm:flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4">
            <div className="flex items-center justify-center gap-2">
              <FiClock className="w-4 h-4 flex-shrink-0" />
              <span className="text-center lg:text-left">
                NOVIDADE: Atendemos Sábados, Domingos e Feriados • Seg-Sex até 21h
              </span>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                <span>contato@autolimpezapro.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-First Main Navigation */}
      <header className={`bg-card shadow-card sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="container mx-auto px-4">
          {/* Mobile-First Flex Layout */}
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo - Mobile Optimized */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">AP</span>
              </div>
              <div className="hidden xs:block">
                <h1 className="text-lg sm:text-2xl font-bold text-foreground leading-tight">
                  AutoLimpeza Pro
                </h1>
                <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">
                  Limpeza e Estética Automotiva
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on Mobile */}
            <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center max-w-4xl">
              <div className="grid grid-cols-5 gap-1 w-full max-w-3xl">
                {navigationItems.slice(0, 5).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-2 py-2 rounded-md text-xs font-medium transition-all duration-300 ease-out hover:bg-accent hover:text-accent-foreground text-center ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1 w-full max-w-2xl ml-2">
                {navigationItems.slice(5).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-2 py-2 rounded-md text-xs font-medium transition-all duration-300 ease-out hover:bg-accent hover:text-accent-foreground text-center ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Button - Responsive */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Button asChild size="sm" className="bg-gradient-secondary text-sm px-4 py-2">
                <Link to="/agendamento">Agendar</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-md hover:bg-accent transition-all duration-300 ease-out"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation - Full Width Grid */}
          {isMenuOpen && (
            <div className="xl:hidden border-t border-border py-4 animate-fade-in">
              <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-3 rounded-md text-sm font-medium transition-all duration-300 ease-out text-center ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile CTA */}
              <div className="flex flex-col gap-2">
                <Button asChild className="w-full bg-gradient-secondary">
                  <Link to="/agendamento">Agendar Agora</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/calculadora">Calcular Preço</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;