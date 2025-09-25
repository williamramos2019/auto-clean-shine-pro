import { useState } from "react";
import { FiEye, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import beforeAfterCar from "@/assets/before-after-car.jpg";
import sofaCleaning from "@/assets/sofa-cleaning.jpg";
import carCleaningHero from "@/assets/car-cleaning-hero.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  beforeImage?: string;
  afterImage?: string;
  image?: string;
  description: string;
  isBeforeAfter: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Estofado Automotivo',
    category: 'Limpeza Automotiva',
    beforeImage: beforeAfterCar,
    afterImage: beforeAfterCar,
    description: 'Transformação total com limpeza profunda',
    isBeforeAfter: true,
  },
  {
    id: '2',
    title: 'Sofá Residencial',
    category: 'Limpeza Residencial',
    beforeImage: sofaCleaning,
    afterImage: sofaCleaning,
    description: 'Renovação profunda com produtos especializados',
    isBeforeAfter: true,
  },
  {
    id: '3',
    title: 'Estética Automotiva Completa',
    category: 'Estética Automotiva',
    image: carCleaningHero,
    description: 'Transformação total com polimento e enceramento',
    isBeforeAfter: false,
  },
  {
    id: '4',
    title: 'Carpete Premium',
    category: 'Limpeza Residencial',
    beforeImage: sofaCleaning,
    afterImage: sofaCleaning,
    description: 'Extração profunda com equipamentos industriais',
    isBeforeAfter: true,
  },
  {
    id: '5',
    title: 'Limpeza de Estofados Automotivos',
    category: 'Limpeza Automotiva',
    image: beforeAfterCar,
    description: 'Renovação completa do interior do veículo',
    isBeforeAfter: false,
  },
  {
    id: '6',
    title: 'Tratamento de Vidros Automotivos',
    category: 'Estética Automotiva',
    image: carCleaningHero,
    description: 'Aplicação de repelente e cristalização',
    isBeforeAfter: false,
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showComparison, setShowComparison] = useState<{ [key: string]: boolean }>({});

  const categories = ['Todos', 'Limpeza Automotiva', 'Limpeza Residencial', 'Estética Automotiva'];
  
  const filteredItems = selectedCategory === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const toggleComparison = (itemId: string) => {
    setShowComparison(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Antes e Depois</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Veja a transformação dos nossos trabalhos
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Before/After Carousel */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                {filteredItems.length > 0 && (
                  <div className="relative h-96 md:h-[500px]">
                    {filteredItems[currentSlide].isBeforeAfter ? (
                      <div className="relative h-full">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                          style={{ 
                            backgroundImage: `url(${showComparison[filteredItems[currentSlide].id] 
                              ? filteredItems[currentSlide].afterImage 
                              : filteredItems[currentSlide].beforeImage
                            })`
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Comparison Toggle */}
                        <button
                          onClick={() => toggleComparison(filteredItems[currentSlide].id)}
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 ease-out flex items-center gap-2"
                        >
                          🔄 {showComparison[filteredItems[currentSlide].id] ? 'Depois' : 'Antes'}
                        </button>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <Badge className="mb-3 bg-primary">{filteredItems[currentSlide].category}</Badge>
                          <h3 className="text-2xl font-bold mb-2">{filteredItems[currentSlide].title}</h3>
                          <p className="text-white/90">{filteredItems[currentSlide].description}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-full">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${filteredItems[currentSlide].image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <Badge className="mb-3 bg-primary">{filteredItems[currentSlide].category}</Badge>
                          <h3 className="text-2xl font-bold mb-2">{filteredItems[currentSlide].title}</h3>
                          <p className="text-white/90">{filteredItems[currentSlide].description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 ease-out"
                >
                  <FiArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 ease-out"
                >
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Nossos Trabalhos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group border-0 shadow-card hover:shadow-elegant transition-all duration-300 ease-out overflow-hidden">
                <div className="relative h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      backgroundImage: `url(${item.isBeforeAfter 
                        ? (showComparison[item.id] ? item.afterImage : item.beforeImage)
                        : item.image
                      })`
                    }}
                  />
                  
                  {item.isBeforeAfter && (
                    <button
                      onClick={() => toggleComparison(item.id)}
                      className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-black/70 transition-all duration-300 ease-out"
                    >
                      🔄 Clique para comparar
                    </button>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <Badge className="mb-2 bg-primary">{item.category}</Badge>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>

                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FiEye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;