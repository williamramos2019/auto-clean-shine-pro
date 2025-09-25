import { useState } from "react";
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { allServices } from "@/data/services";
import { toast } from "sonner";

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  // Generate next 7 days
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        month: date.toLocaleDateString('pt-BR', { month: 'short' }),
        weekday: date.toLocaleDateString('pt-BR', { weekday: 'short' }),
        isToday: i === 0
      });
    }
    return days;
  };

  const availableTimes = [
    { time: '08:00', available: true, label: '08:00' },
    { time: '10:00', available: true, label: '10:00' },
    { time: '14:00', available: true, label: '14:00' },
    { time: '16:00', available: true, label: '16:00' },
    { time: '18:00', available: true, label: '18:00' },
    { time: '20:00', available: false, label: '20:00' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !selectedDate || !selectedTime) {
      toast.error("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Simulate booking submission
    toast.success("Agendamento realizado com sucesso! Em breve entraremos em contato.");
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Agendamento Online
          </h2>
          <p className="text-xl text-muted-foreground">
            Agende seu serviço de forma rápida e prática
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar Selection */}
            <Card className="border-0 shadow-elegant">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <FiCalendar className="w-6 h-6" />
                  📅 Escolha Data e Horário
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                {/* Date Selection */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Selecione a Data:</h3>
                  <div className="grid grid-cols-7 gap-3">
                    {getNextDays().map((day) => (
                      <button
                        key={day.date}
                        onClick={() => setSelectedDate(day.date)}
                        className={`p-3 rounded-lg text-center transition-all duration-300 ease-out border ${
                          selectedDate === day.date
                            ? 'border-primary bg-primary text-white'
                            : 'border-border hover:border-primary hover:bg-accent'
                        }`}
                      >
                        <div className="text-xs text-muted-foreground">{day.weekday}</div>
                        <div className="text-lg font-bold">{day.day}</div>
                        <div className="text-xs">{day.month}</div>
                        {day.isToday && (
                          <Badge className="mt-1 text-xs bg-warning">Hoje</Badge>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <h3 className="font-semibold mb-4">Horários Disponíveis:</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {availableTimes.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg text-center transition-all duration-300 ease-out border ${
                          selectedTime === slot.time
                            ? 'border-primary bg-primary text-white'
                            : slot.available
                            ? 'border-border hover:border-primary hover:bg-accent'
                            : 'border-muted bg-muted text-muted-foreground cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FiClock className="w-4 h-4" />
                          {slot.label}
                        </div>
                        {!slot.available && (
                          <div className="text-xs mt-1">Indisponível</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Summary */}
                {selectedDate && selectedTime && (
                  <div className="mt-8 p-4 bg-success/10 rounded-lg border border-success/20">
                    <h4 className="font-semibold text-success mb-2">Agendamento Selecionado:</h4>
                    <div className="text-sm">
                      <div>📅 Data: {new Date(selectedDate).toLocaleDateString('pt-BR')}</div>
                      <div>⏰ Horário: {selectedTime}</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="border-0 shadow-elegant">
              <CardHeader className="bg-gradient-secondary text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <FiUser className="w-6 h-6" />
                  Dados do Agendamento
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Endereço Completo *
                    </label>
                    <Input
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="Rua, número, bairro, cidade"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Tipo de Serviço *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
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

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Observações Adicionais
                    </label>
                    <Textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Descreva detalhes adicionais, manchas específicas, preferências de horário, ou outras observações importantes"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-white py-3 text-lg"
                    disabled={!selectedDate || !selectedTime}
                  >
                    Confirmar Agendamento
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    * Campos obrigatórios
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="mt-16">
            <Card className="border-0 shadow-card bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe está pronta para atendê-lo através dos canais abaixo
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiPhone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiMail className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">E-mail</h4>
                    <p className="text-muted-foreground">contato@autolimpezapro.com.br</p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiMapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Atendimento</h4>
                    <p className="text-muted-foreground">Em domicílio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;