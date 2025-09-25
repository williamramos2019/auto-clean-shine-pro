import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiCheckCircle, FiStar } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { serviceCategories, cleaningServices, maintenanceServices } from "@/data/services";

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<'limpeza' | 'manutencao'>('limpeza');
  
  const currentServices = activeCategory === 'limpeza' ? cleaningServices : maintenanceServices;
  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Mobile-First Category Tabs */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-8 gap-2 sm:gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as 'limpeza' | 'manutencao')}
                className={`px-4 sm:px-8 py-3 font-semibold rounded-full transition-all duration-300 ease-out w-full sm:w-auto ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-elegant'
                    : 'bg-white text-foreground hover:bg-accent border border-border'
                }`}
              >
                <span className="block sm:hidden text-sm">
                  {category.id === 'limpeza' ? 'Limpeza' : 'Manutenção'}
                </span>
                <span className="hidden sm:block">
                  {category.name.split(' - ')[0]}
                </span>
              </button>
            ))}
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {currentCategory?.name}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              {currentCategory?.description}
            </p>
          </div>
        </div>

        {/* Mobile-First Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {currentServices.map((service, index) => (
            <Card 
              key={service.id} 
              className={`group hover:shadow-elegant transition-all duration-300 ease-out border-0 bg-white relative overflow-hidden animate-mobile-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                  <Badge className="bg-warning text-warning-foreground text-xs sm:text-sm">
                    <FiStar className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-all duration-300 ease-out pr-16 sm:pr-20">
                  {service.title}
                </CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {/* Mobile-First Price Display */}
                <div className="text-xl sm:text-2xl font-bold text-success">
                  {service.price}
                </div>

                {/* Duration - Mobile Optimized */}
                {service.duration && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FiClock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{service.duration}</span>
                  </div>
                )}

                {/* Mobile-First Includes List */}
                {service.includes && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-xs sm:text-sm text-foreground">Inclui:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {service.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mobile-First CTA Button */}
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground text-sm sm:text-base py-2 sm:py-3">
                  <Link to="/agendamento" className="flex items-center justify-center gap-2">
                    Agendar Serviço
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile-First Special Combo Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Card className="bg-gradient-secondary text-white border-0 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">COMBO ESPECIAL</h3>
              <h4 className="text-lg sm:text-2xl mb-4 sm:mb-6">Limpeza + Manutenção = Desconto Garantido!</h4>
              <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Combine nossos serviços de limpeza com manutenção doméstica e ganhe até 20% de desconto no valor total!
              </p>
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 w-full sm:w-auto px-6 sm:px-8">
                <Link to="/calculadora">Calcular Desconto</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mobile-First CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <Button asChild size="lg" variant="outline" className="px-6 sm:px-8 w-full sm:w-auto">
            <Link to="/servicos" className="flex items-center justify-center gap-2">
              Ver Todos os Serviços
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;