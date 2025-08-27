import { Card } from "@/components/ui/card";
import { Search, UserCheck, Calendar, Heart } from "lucide-react";
const HowItWorksSection = () => {
  const steps = [{
    icon: Search,
    title: "1. Consulta Inicial",
    description: "Evaluamos las necesidades específicas de tu ser querido",
    details: "Conversamos contigo para entender exactamente qué tipo de cuidado necesita tu familiar"
  }, {
    icon: UserCheck,
    title: "2. Selección de Cuidadora",
    description: "Te presentamos candidatas perfectas para tus necesidades",
    details: "Nuestro equipo selecciona cuidadoras verificadas que mejor se adapten al perfil requerido"
  }, {
    icon: Calendar,
    title: "3. Coordinación",
    description: "Organizamos horarios y servicios personalizados",
    details: "Establecemos un plan de cuidado detallado con horarios flexibles y servicios específicos"
  }, {
    icon: Heart,
    title: "4. Seguimiento",
    description: "Monitoreamos continuamente la calidad del servicio",
    details: "Mantenemos comunicación constante para asegurar la satisfacción y bienestar de todos"
  }];
  return <section id="como-funciona" className="py-20 bg-sage-green-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Un proceso simple, flexible y transparente para encontrar el cuidado perfecto, </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <Card key={index} className="p-6 bg-card border-warm-gray/20 relative group hover:shadow-lg transition-all duration-300 text-center">
              {/* Step connector line */}
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-sage-green/20 z-10"></div>}
              
              <div className="bg-sage-green p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <p className="text-sm text-muted-foreground/80">{step.details}</p>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-warm-gray/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para Comenzar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está disponible para una consulta gratuita y personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/o4zVvm6T2khARv7S6" target="_blank" rel="noopener noreferrer" className="bg-sage-green hover:bg-sage-green-dark text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-block">
                Consulta Gratuita
              </a>
              <a href="tel:+34611892191" className="border border-sage-green text-sage-green hover:bg-sage-green hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-block">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;