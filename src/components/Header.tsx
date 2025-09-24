import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiClock, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>NOVIDADE: Atendemos Sábados, Domingos e Feriados • Seg-Sex até 21h</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FiPhone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="w-4 h-4" />
              <span>contato@autolimpezapro.com.br</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-card shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AutoLimpeza Pro</h1>
                <p className="text-muted-foreground text-sm">Limpeza e Estética Automotiva</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-accent hover:text-accent-foreground ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild variant="default" className="bg-gradient-secondary">
                <Link to="/agendamento">Agendar Agora</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <Button asChild className="w-full bg-gradient-secondary">
                    <Link to="/agendamento">Agendar Agora</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;