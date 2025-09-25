import { Link } from "react-router-dom";
import { FiStar, FiUsers, FiAward, FiClock } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/car-cleaning-hero.jpg";

const Hero = () => {
  const stats = [
    { icon: FiUsers, value: "2.847", label: "Clientes Atendidos" },
    { icon: FiAward, value: "156", label: "Projetos Este Mês" },
    { icon: FiClock, value: "5", label: "Anos de Experiência" },
    { icon: FiStar, value: "98%", label: "Satisfação" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10 w-full">
        {/* Mobile-First Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Content - Mobile First */}
          <div className="lg:col-span-6 xl:col-span-7 text-white order-2 lg:order-1">
            {/* Mobile-First Badge */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
              <Badge className="bg-white/10 text-white border-white/20 text-sm sm:text-base px-3 py-2 sm:px-4">
                🎯 Atendimento em Domicílio
              </Badge>
            </div>
            
            {/* Mobile-First Heading */}
            <div className="text-center lg:text-left mb-6 sm:mb-8">
              <h1 className="text-mobile-hero sm:text-tablet-hero lg:text-desktop-hero xl:text-6xl mb-4 sm:mb-6 leading-tight">
                Limpeza, Estética Automotiva e{" "}
                <span className="text-secondary-light">Manutenção</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Trabalhamos com limpeza de estofados, estética automotiva e serviços de 
                manutenção doméstica. Transformamos seus ambientes, veículos e resolvemos 
                suas necessidades com qualidade e excelência.
              </p>
            </div>

            {/* Mobile-First CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                <Link to="/agendamento">Agendar Serviço</Link>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg" 
                className="border border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <Link to="/calculadora">Calcular Preço</Link>
              </Button>
            </div>

            {/* Mobile-First Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 sm:mb-3">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Mobile First */}
          <div className="lg:col-span-6 xl:col-span-5 order-1 lg:order-2 relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant max-w-lg mx-auto lg:max-w-none">
              <img 
                src={heroImage} 
                alt="Limpeza profissional de estofados automotivos"
                className="w-full h-64 sm:h-80 lg:h-[500xl:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Mobile-First Floating Cards */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-elegant max-w-[140px] sm:max-w-none">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-success rounded-full flex items-center justify-center">
                  <FiStar className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm sm:text-base">4.9/5</div>
                  <div className="text-muted-foreground text-xs sm:text-sm">Nota Média</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-elegant text-center max-w-[120px] sm:max-w-none">
              <div className="font-bold text-sm sm:text-base text-success">A partir de</div>
              <div className="font-bold text-xl sm:text-3xl text-foreground">R$ 80</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Limpeza</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-First Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-8 sm:h-12 lg:h-16 fill-background"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;