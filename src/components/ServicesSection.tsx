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
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as 'limpeza' | 'manutencao')}
                className={`px-8 py-3 font-semibold rounded-full transition-smooth mx-2 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-elegant'
                    : 'bg-white text-foreground hover:bg-accent border border-border'
                }`}
              >
                {category.name.split(' - ')[0]}
              </button>
            ))}
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {currentCategory?.name}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentCategory?.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <Card key={service.id} className="group hover:shadow-elegant transition-smooth border-0 bg-white relative overflow-hidden">
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-warning text-warning-foreground">
                    <FiStar className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Price */}
                <div className="text-2xl font-bold text-success">
                  {service.price}
                </div>

                {/* Duration */}
                {service.duration && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FiClock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                )}

                {/* Includes */}
                {service.includes && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Inclui:</h4>
                    <ul className="space-y-1">
                      {service.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <FiCheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link to="/agendamento" className="flex items-center justify-center gap-2">
                    Agendar Serviço
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Combo Section */}
        <div className="mt-16">
          <Card className="bg-gradient-secondary text-white border-0 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-12 text-center relative z-10">
              <h3 className="text-3xl font-bold mb-4">COMBO ESPECIAL</h3>
              <h4 className="text-2xl mb-6">Limpeza + Manutenção = Desconto Garantido!</h4>
              <p className="text-xl mb-8 text-white/90">
                Combine nossos serviços de limpeza com manutenção doméstica e ganhe até 20% de desconto no valor total!
              </p>
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
                <Link to="/calculadora">Calcular Desconto</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="px-8">
            <Link to="/servicos" className="flex items-center gap-2">
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