import { Card } from "@/components/ui/card";
import { Award, Users, Heart, Shield } from "lucide-react";
const AboutSection = () => {
  const values = [{
    icon: Heart,
    title: "Compasión",
    description: "Tratamos a cada persona mayor como a nuestro propio familiar"
  }, {
    icon: Shield,
    title: "Confianza",
    description: "Rigurosos procesos de verificación y selección de personal"
  }, {
    icon: Award,
    title: "Excelencia",
    description: "Estándares de calidad superiores en todos nuestros servicios"
  }, {
    icon: Users,
    title: "Comunidad",
    description: "Construimos una red de apoyo sólida para familias y cuidadores"
  }];
  return <section id="sobre-nosotros" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sobre Acompaña+
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="font-bold">
                  <strong className="text-sage-green">Acompaña+</strong> nace de una idea sencilla pero poderosa: 
                  que ninguna persona mayor se sienta sola y que ninguna familia se sienta desbordada.
                </p>
                <p>
                  Fundada con la misión de transformar el cuidado de personas mayores, 
                  <strong className="text-sage-green"> Acompaña+</strong> nació de la experiencia personal 
                  de nuestras fundadoras al buscar cuidado de calidad para sus propios seres queridos.
                </p>
                <p>
                  Entendemos que cada persona mayor es única, con sus propias necesidades, 
                  preferencias y historia de vida. Por eso, nuestro compromiso va mucho más allá 
                  de cubrir lo básico: queremos ofrecer compañía real, apoyo constante y 
                  <strong className="text-dusty-rose-dark"> servicios personalizados</strong>{" "}
                  que sumen tranquilidad, bienestar y calidad de vida cada día.
                </p>
                
              </div>
            </div>

            {/* Stats */}
            
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Nuestros Valores
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => <Card key={index} className="p-6 bg-card border-warm-gray/20 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-sage-green/10 to-dusty-rose/10 p-3 rounded-lg w-fit mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-sage-green" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>)}
            </div>

            {/* Mission Statement */}
            <Card className="mt-8 p-6 bg-gradient-to-r from-sage-green-light/20 to-dusty-rose-light/20 border-warm-gray/20">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-3">Nuestra Misión</h4>
                <p className="text-muted-foreground italic">"Ser el puente que conecta a las familias con el cuidado de calidad que sus seres queridos merecen, promoviendo un envejecimiento acompañado y lleno de vida."</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;