import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, Star } from "lucide-react";
const HeroSection = () => {
  return <section id="inicio" className="pt-16 min-h-screen bg-gradient-to-br from-sage-green-light via-background to-dusty-rose-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Cuidado y Compañía
                <span className="text-sage-green block">para Personas Mayores</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">En Acompaña+ ofrecemos un servicio premium de acompañamiento, cuidado y conexión social para personas mayores, pensado especialmente para ti, que te ocupas de ellos con amor pero necesitas apoyo profesional y humano.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sage-green hover:bg-sage-green-dark text-white px-8 py-4 text-lg" asChild>
                <a href="https://forms.gle/HYwLNJ4ds2PcRzeZ8" target="_blank" rel="noopener noreferrer">
                  Encuentra Cuidador/a
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg" asChild>
                <a href="https://forms.gle/tDCMrkrdsLmdRdSu5" target="_blank" rel="noopener noreferrer">
                  Trabaja con nosotros
                </a>
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Visual/Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-warm-gray/20 shadow-lg text-center">
                <div className="bg-sage-green/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Heart className="h-6 w-6 text-sage-green" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Cuidadores de confianza</h3>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-warm-gray/20 shadow-lg text-center">
                <div className="bg-dusty-rose/20 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-dusty-rose-dark" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Actividades que enriquecen</h3>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-warm-gray/20 shadow-lg text-center">
                <div className="bg-dusty-rose/20 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-dusty-rose-dark" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Red de servicios a domicilio</h3>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-warm-gray/20 shadow-lg text-center">
                <div className="bg-sage-green/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Star className="h-6 w-6 text-sage-green" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Flexibilidad y atención cercana</h3>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;