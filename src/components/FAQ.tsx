import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Vocês trabalham com quais tipos de veículos?',
    answer: 'Atendemos todos os tipos de veículos: carros de passeio, SUVs, caminhonetes, motos e até veículos comerciais. Nossos produtos e técnicas são adaptados para cada tipo de veículo e material de estofado.'
  },
  {
    id: '2',
    question: 'Quanto tempo demora o serviço de limpeza?',
    answer: 'O tempo varia conforme o serviço: limpeza de estofados automotivos leva entre 2-3 horas, estética completa pode levar 4-5 horas, e serviços residenciais entre 1-3 horas dependendo do tamanho e complexidade.'
  },
  {
    id: '3',
    question: 'Os produtos utilizados são seguros?',
    answer: 'Sim! Utilizamos apenas produtos profissionais, biodegradáveis e seguros para pessoas, animais e meio ambiente. Todos os produtos são testados e aprovados para uso em residências e veículos.'
  },
  {
    id: '4',
    question: 'Vocês oferecem garantia nos serviços?',
    answer: 'Oferecemos garantia de satisfação em todos os nossos serviços. Se não ficar 100% satisfeito, refazemos o serviço gratuitamente. Para alguns serviços como enceramento, oferecemos garantia de durabilidade.'
  },
  {
    id: '5',
    question: 'Como funciona o atendimento em domicílio?',
    answer: 'Levamos todos os equipamentos e produtos até sua casa ou local de trabalho. Precisamos apenas de acesso a uma tomada e ponto de água. O agendamento é feito online ou por telefone com horário confirmado.'
  },
  {
    id: '6',
    question: 'Qual a forma de pagamento?',
    answer: 'Aceitamos dinheiro, PIX, cartão de débito e crédito (à vista ou parcelado). O pagamento é realizado após a conclusão do serviço e sua aprovação do resultado.'
  },
  {
    id: '7',
    question: 'Atendem em quais regiões?',
    answer: 'Atendemos toda a região metropolitana de Belo Horizonte, incluindo São José da Lapa, Vespasiano, Pedro Leopoldo, Lagoa Santa, Ribeirão das Neves e cidades próximas. Consulte disponibilidade para sua região.'
  },
  {
    id: '8',
    question: 'Fazem orçamento sem compromisso?',
    answer: 'Sim! Oferecemos orçamento gratuito através do WhatsApp, telefone ou nossa calculadora online. Para serviços mais complexos, podemos fazer uma avaliação presencial sem custo.'
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => {
              const isOpen = openItems.includes(item.id);
              
              return (
                <Card key={item.id} className="border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-accent transition-smooth"
                    >
                      <h3 className="text-lg font-semibold text-foreground pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <FiMinus className="w-5 h-5 text-primary" />
                        ) : (
                          <FiPlus className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-border pt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <Card className="border-0 bg-gradient-primary text-white shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ainda tem dúvidas?
                </h3>
                <p className="mb-6 text-white/90">
                  Nossa equipe está pronta para esclarecer todas as suas questões
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-smooth"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="tel:+551133333333"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-smooth"
                  >
                    📞 Telefone
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;