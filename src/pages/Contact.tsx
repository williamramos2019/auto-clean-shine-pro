import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { allServices } from "@/data/services";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Simulate form submission
    toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      service: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas. Estamos prontos para atendê-lo!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h2>
                <p className="text-muted-foreground mb-8">
                  Estamos sempre disponíveis para atender suas necessidades. 
                  Entre em contato através dos canais abaixo.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <FiPhone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                        <p className="text-sm text-success">Resposta rápida garantida</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                        <FiPhone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                        <p className="text-muted-foreground">(11) 3333-3333</p>
                        <p className="text-sm text-muted-foreground">Linha direta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <FiMail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                        <p className="text-muted-foreground">contato@autolimpezapro.com.br</p>
                        <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                        <FiMapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                        <p className="text-muted-foreground">Rua das Flores, 123</p>
                        <p className="text-muted-foreground">São Paulo - SP</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Operating Hours */}
              <Card className="border-0 bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FiClock className="w-6 h-6 text-primary" />
                    Horário de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta:</span>
                    <span className="font-medium">8h às 21h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábados, Domingos e Feriados:</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  
                  <div className="border-t border-border pt-3 mt-4">
                    <div className="bg-warning/10 rounded-lg p-3 border border-warning/20">
                      <div className="flex items-center gap-2 text-warning font-medium mb-1">
                        🌙 Atendimento Noturno Disponível
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Seg-Sex após 18h: Valores diferenciados
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Perfeito para quem tem agenda apertada!
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Siga-nos</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-smooth"
                  >
                    <FiFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-smooth"
                  >
                    <FiInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-smooth"
                  >
                    <FiTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-elegant">
                <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <FiSend className="w-6 h-6" />
                    Solicite um Orçamento Gratuito
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Seu Nome Completo *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Digite seu nome completo"
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
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Cidade/Bairro
                      </label>
                      <Input
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        placeholder="Sua cidade e bairro"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Tipo de Serviço:
                      </label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a Categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="limpeza-automotiva">Limpeza Automotiva</SelectItem>
                          <SelectItem value="estetica-automotiva">Estética Automotiva</SelectItem>
                          <SelectItem value="limpeza-residencial">Limpeza Residencial</SelectItem>
                          <SelectItem value="manutencao-domestica">Manutenção Doméstica</SelectItem>
                          <SelectItem value="combo-servicos">Combo de Serviços</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Descreva detalhes adicionais, manchas específicas, preferências de horário, ou outras observações importantes"
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary text-white py-3 text-lg"
                    >
                      Enviar Mensagem
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      * Campos obrigatórios | Resposta garantida em até 2 horas
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;