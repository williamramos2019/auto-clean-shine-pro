import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiClock, FiStar, FiTag } from "react-icons/fi";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cleaningServices, maintenanceServices, serviceCategories } from "@/data/services";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'limpeza' | 'manutencao'>('all');
  
  const getFilteredServices = () => {
    if (activeCategory === 'all') return [...cleaningServices, ...maintenanceServices];
    if (activeCategory === 'limpeza') return cleaningServices;
    return maintenanceServices;
  };

  const filteredServices = getFilteredServices();

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços de limpeza e manutenção com qualidade profissional
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex bg-muted rounded-lg p-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-out ${
                  activeCategory === 'all'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Todos os Serviços
              </button>
              <button
                onClick={() => setActiveCategory('limpeza')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-out ${
                  activeCategory === 'limpeza'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Limpeza
              </button>
              <button
                onClick={() => setActiveCategory('manutencao')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-out ${
                  activeCategory === 'manutencao'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Manutenção
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-elegant transition-all duration-300 ease-out border-0 bg-white relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-warning text-warning-foreground">
                      <FiStar className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-3">
                        {service.category === 'limpeza' ? 'Limpeza' : 'Manutenção'}
                      </Badge>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-all duration-300 ease-out">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Price and Duration */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-success flex items-center gap-2">
                      <FiTag className="w-5 h-5" />
                      {service.price}
                    </div>
                    {service.duration && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <FiClock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Includes */}
                  {service.includes && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">O que está incluso:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <FiCheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button asChild className="flex-1 bg-gradient-primary">
                      <Link to="/agendamento" className="flex items-center justify-center gap-2">
                        Agendar
                        <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" className="flex-1 border border-border hover:bg-accent hover:text-accent-foreground bg-transparent">
                      <Link to="/calculadora">Calcular Preço</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Combo Offer */}
          <div className="mt-20">
            <Card className="bg-gradient-secondary text-white border-0 shadow-elegant relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <CardContent className="p-12 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-6">🎉 COMBO ESPECIAL</h2>
                <h3 className="text-2xl mb-6">Limpeza + Manutenção = Desconto Garantido!</h3>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Combine nossos serviços de limpeza com manutenção doméstica e ganhe até <strong>20% de desconto</strong> no valor total!
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
                    <Link to="/calculadora">Calcular Desconto</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="border border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent">
                    <Link to="/agendamento">Agendar Combo</Link>
                  </Button>
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold">🚗</div>
                    <div className="font-semibold">Combo Automotivo</div>
                    <div className="text-white/80">Estética + Estofados</div>
                    <div className="text-warning font-bold">30% OFF</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">🏠</div>
                    <div className="font-semibold">Pacote Residencial</div>
                    <div className="text-white/80">3 Sofás ou mais</div>
                    <div className="text-warning font-bold">25% OFF</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">⏰</div>
                    <div className="font-semibold">First Time</div>
                    <div className="text-white/80">Primeira vez?</div>
                    <div className="text-warning font-bold">15% OFF</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;