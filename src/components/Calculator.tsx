import { useState } from "react";
import { FiCalendar, FiClock, FiDollarSign } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allServices } from "@/data/services";

interface CalculatorState {
  service: string;
  quantity: number;
  urgency: 'normal' | 'urgent' | 'emergency';
  schedule: 'commercial' | 'extended' | 'weekend';
}

const Calculator = () => {
  const [calculator, setCalculator] = useState<CalculatorState>({
    service: '',
    quantity: 1,
    urgency: 'normal',
    schedule: 'commercial'
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);

  const urgencyOptions = [
    { value: 'normal', label: 'Normal', multiplier: 1.0, desc: 'Agendamento padrão' },
    { value: 'urgent', label: 'Urgente', multiplier: 1.3, desc: 'Prioridade alta' },
    { value: 'emergency', label: 'Emergência', multiplier: 1.5, desc: '24h disponível' }
  ];

  const scheduleOptions = [
    { value: 'commercial', label: 'Horário Comercial', multiplier: 1.0, desc: 'Seg-Sex 8h-18h' },
    { value: 'extended', label: 'Horário Estendido', multiplier: 1.2, desc: 'Seg-Sex 18h-21h' },
    { value: 'weekend', label: 'Fins de Semana', multiplier: 1.25, desc: 'Sáb-Dom-Feriados' }
  ];

  const calculatePrice = () => {
    if (!calculator.service) return;

    const selectedService = allServices.find(s => s.id === calculator.service);
    if (!selectedService) return;

    // Extract base price from service price string
    const priceMatch = selectedService.price.match(/R\$\s*(\d+)/);
    const basePrice = priceMatch ? parseInt(priceMatch[1]) : 80;

    const urgencyMultiplier = urgencyOptions.find(u => u.value === calculator.urgency)?.multiplier || 1;
    const scheduleMultiplier = scheduleOptions.find(s => s.value === calculator.schedule)?.multiplier || 1;

    const totalPrice = basePrice * calculator.quantity * urgencyMultiplier * scheduleMultiplier;
    setEstimatedPrice(totalPrice);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Calculadora de Preços</h2>
          <p className="text-xl text-muted-foreground">
            Calcule o valor estimado do seu serviço
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0">
            <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-3">
                <FiDollarSign className="w-8 h-8" />
                💰 Calculadora Inteligente
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Form */}
                <div className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Tipo de Serviço:</label>
                    <Select value={calculator.service} onValueChange={(value) => setCalculator({...calculator, service: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {allServices.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            <div className="flex flex-col">
                              <span className="font-medium">{service.title}</span>
                              <span className="text-sm text-muted-foreground">{service.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Quantidade:</label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setCalculator({...calculator, quantity: Math.max(1, calculator.quantity - 1)})}
                        className="w-10 h-10"
                      >
                        -
                      </Button>
                      <span className="text-2xl font-bold px-4">{calculator.quantity}</span>
                      <Button
                        variant="outline"
                        onClick={() => setCalculator({...calculator, quantity: calculator.quantity + 1})}
                        className="w-10 h-10"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Urgência:</label>
                    <div className="space-y-2">
                      {urgencyOptions.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => setCalculator({...calculator, urgency: option.value as any})}
                          className={`p-3 rounded-lg border cursor-pointer transition-smooth ${
                            calculator.urgency === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-accent'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.desc}</div>
                            </div>
                            <Badge variant={option.multiplier > 1 ? 'destructive' : 'secondary'}>
                              +{((option.multiplier - 1) * 100).toFixed(0)}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">Horário:</label>
                    <div className="space-y-2">
                      {scheduleOptions.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => setCalculator({...calculator, schedule: option.value as any})}
                          className={`p-3 rounded-lg border cursor-pointer transition-smooth ${
                            calculator.schedule === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-accent'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.desc}</div>
                            </div>
                            <Badge variant={option.multiplier > 1 ? 'secondary' : 'outline'}>
                              +{((option.multiplier - 1) * 100).toFixed(0)}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="space-y-6">
                  <div className="bg-gradient-card rounded-lg p-6 border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FiCalendar className="w-5 h-5" />
                      Resumo do Orçamento
                    </h3>
                    
                    {calculator.service ? (
                      <div className="space-y-4">
                        <div className="border-b border-border pb-3">
                          <div className="font-medium">{allServices.find(s => s.id === calculator.service)?.title}</div>
                          <div className="text-sm text-muted-foreground">Quantidade: {calculator.quantity}</div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Urgência:</span>
                            <span className="capitalize">{calculator.urgency}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Horário:</span>
                            <span>{scheduleOptions.find(s => s.value === calculator.schedule)?.label}</span>
                          </div>
                        </div>

                        <Button 
                          onClick={calculatePrice} 
                          className="w-full bg-gradient-primary"
                          disabled={!calculator.service}
                        >
                          Calcular Preço
                        </Button>

                        {estimatedPrice > 0 && (
                          <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                            <div className="text-center">
                              <div className="text-sm text-success-foreground mb-1">Valor Estimado</div>
                              <div className="text-3xl font-bold text-success">
                                R$ {estimatedPrice.toFixed(0)}
                              </div>
                              <div className="text-sm text-muted-foreground mt-2">
                                * Valor pode variar conforme avaliação local
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        Selecione um serviço para calcular o preço
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;