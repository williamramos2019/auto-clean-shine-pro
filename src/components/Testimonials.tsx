import { FiStar, FiUser } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São José da Lapa, MG",
    rating: 5,
    comment: "Excelente serviço! Meu sofá ficou como novo após a limpeza. Profissionais muito competentes e pontuais. Super recomendo!",
    service: "Limpeza de Sofás"
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    location: "Vespasiano, MG",
    rating: 5,
    comment: "A estética do meu carro ficou perfeita! O enceramento durou mais de 6 meses. Preço justo e qualidade excepcional.",
    service: "Estética Automotiva"
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Pedro Leopoldo, MG",
    rating: 5,
    comment: "Limparam minhas cortinas e carpetes com muito cuidado. Produtos de qualidade e sem cheiro forte. Voltarão sempre!",
    service: "Limpeza Residencial"
  },
  {
    id: 4,
    name: "Roberto Santos",
    location: "Ribeirão das Neves, MG",
    rating: 5,
    comment: "Interior do meu SUV estava muito sujo. Fizeram um trabalho impecável! Bancos ficaram como novos. Super indico!",
    service: "Estofados Automotivos"
  },
  {
    id: 5,
    name: "Fernanda Lima",
    location: "Lagoa Santa, MG",
    rating: 5,
    comment: "Empresa séria e confiável. Já usei os serviços 3 vezes e sempre com excelência. Preços honestos e resultados garantidos.",
    service: "Cliente Fidelizado"
  },
  {
    id: 6,
    name: "Eduardo Mendes",
    location: "Confins, MG",
    rating: 5,
    comment: "Atendimento nota 10! Chegaram no horário, explicaram todo o processo e o resultado superou minhas expectativas.",
    service: "Manutenção Doméstica"
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FiStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-warning fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja a experiência de quem já confia na AutoLimpeza Pro
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 bg-white shadow-card">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {renderStars(5)}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-muted-foreground">Nota Média</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 bg-white shadow-card">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-2">2.847</div>
              <div className="text-muted-foreground">Avaliações</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 bg-white shadow-card">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <div className="text-muted-foreground">Recomendação</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 bg-white shadow-card hover:shadow-elegant transition-all duration-300 ease-out">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <blockquote className="text-muted-foreground mb-6 italic text-center">
                  "{testimonial.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <FiUser className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
                    {testimonial.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-secondary text-white shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Avalie Nosso Serviço</h3>
              <p className="mb-6 text-white/90">
                Sua opinião é muito importante para nós! Compartilhe sua experiência.
              </p>
              <div className="flex justify-center gap-2">
                {renderStars(5)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;