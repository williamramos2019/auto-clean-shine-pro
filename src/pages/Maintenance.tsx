import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiClock, FiTool, FiHome } from "react-icons/fi";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { maintenanceServices } from "@/data/services";

const Maintenance = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/20 text-lg px-4 py-2">
            <FiTool className="w-5 h-5 mr-2" />
            Marido de Aluguel
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Serviços de Manutenção</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Aproveite que já estamos na sua casa para resolver outras necessidades domésticas!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
              <Link to="/agendamento">Agendar Manutenção</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/calculadora">Calcular Preço</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-elegant transition-all duration-300 ease-out border-0 bg-white relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-warning text-warning-foreground">
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <FiTool className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="outline">Manutenção</Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-all duration-300 ease-out">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Price and Duration */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-success">
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
                      <h4 className="font-semibold text-sm text-foreground">Inclui:</h4>
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

                  {/* CTA Button */}
                  <Button asChild className="w-full bg-gradient-secondary group-hover:bg-secondary">
                    <Link to="/agendamento" className="flex items-center justify-center gap-2">
                      Agendar Serviço
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Our Maintenance */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Por Que Escolher Nossos Serviços de Manutenção?
              </h2>
              <p className="text-xl text-muted-foreground">
                Mais do que limpeza, somos sua solução completa para o lar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiHome className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Conveniência Total</h3>
                  <p className="text-muted-foreground">
                    Aproveitamos nossa visita para limpeza e resolvemos outras necessidades da sua casa
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiTool className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Profissionais Qualificados</h3>
                  <p className="text-muted-foreground">
                    Equipe treinada e experiente com ferramentas e materiais de qualidade
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Garantia de Qualidade</h3>
                  <p className="text-muted-foreground">
                    Todos os serviços com garantia e compromisso com sua satisfação
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Combo Offer */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-elegant">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">💡 Dica Inteligente</h3>
                <h4 className="text-2xl mb-6">Combine Limpeza + Manutenção</h4>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Otimize seu tempo e dinheiro! Agende serviços de limpeza junto com manutenção 
                  e ganhe descontos especiais.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h5 className="font-bold mb-2">🧽 Limpeza + 🔧 Manutenção</h5>
                    <p className="text-white/80 mb-3">Uma única visita, múltiplos problemas resolvidos</p>
                    <div className="text-warning font-bold text-lg">Até 20% OFF</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6">
                    <h5 className="font-bold mb-2">⏰ Economia de Tempo</h5>
                    <p className="text-white/80 mb-3">Não precisa agendar múltiplas visitas</p>
                    <div className="text-warning font-bold text-lg">Máxima Conveniência</div>
                  </div>
                </div>

                <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
                  <Link to="/calculadora">Ver Combos Disponíveis</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Maintenance;