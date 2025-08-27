import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Heart, Home, Stethoscope, Percent, Calendar, Clock, Award } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
const ServicesSection = () => {
  const carouselImages = [
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/208c4736-66b5-4b06-93d0-8482378eb88e.png`,
      alt: "Cuidado personal y bienestar"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/475b53f1-4268-4bac-95f9-ae1cb65d16e3.png`,
      alt: "Acompañamiento en compras"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/3b3bef4f-b2af-4289-8975-7d9ffe88ea58.png`,
      alt: "Cuidado profesional"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/3ee9c28d-7b13-4182-a018-af653cec03a9.png`,
      alt: "Acompañamiento en paseos"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/2a5d91c7-d1a2-4e58-a372-e81b4d40f5dd.png`,
      alt: "Cuidados especializados"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/ad9dc903-b55c-4358-aa4d-6d32e32aab25.png`,
      alt: "Actividades físicas"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/9c837da3-2d38-4e19-8eb4-ca0cef001de1.png`,
      alt: "Trabajo en equipo"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/68273a74-ae88-487a-85a6-2d1d561fb55b.png`,
      alt: "Reuniones familiares"
    }
  ];

  const services = [{
    icon: Users,
    title: "Intermediación de Cuidadoras",
    description: "Conectamos a familias con cuidadoras certificadas y confiables",
    features: ["Verificación de antecedentes", "Entrevistas personalizadas", "Referencias comprobadas"]
  }, {
    icon: Heart,
    title: "Seguimiento y apoyo continuo",
    description: "No estás solo: acompañamos la relación laboral para asegurar su buen desarrollo y resolvemos tus dudas en todo momento.",
    features: ["Seguimiento personalizado", "Atención constante", "Asesoría disponible cuando la necesites"]
  }, {
    icon: Home,
    title: "Red de profesionales del hogar y bienestar",
    description: "Te conectamos con cualquier especialista que necesites: fontaneros, electricistas, peluquería, estética, masajistas y terapeutas ocupacionales...",
    features: ["Especialistas certificados", "Atención adaptada", "Coordinación integral"]
  }];
  const premiumServices = [{
    icon: Percent,
    title: "Descuentos exclusivos",
    description: "Clientes Premium disfrutan tarifas reducidas y beneficios especiales en todos los servicios."
  }, {
    icon: Calendar,
    title: "Actividades para el bienestar",
    description: "Ofrecemos talleres y encuentros para fomentar autonomía, alegría y conexión social: club de lectura, movimiento suave, juegos, yoga y encuentros intergeneracionales."
  }, {
    icon: Clock,
    title: "Seguimiento personalizado",
    description: "Reuniones periódicas para ajustar cuidados, valorar la evolución y brindar apoyo emocional y práctico."
  }, {
    icon: Award,
    title: "Atenciones especiales",
    description: "Celebraciones, encuentros familiares y detalles personalizados que mejoran la calidad de vida y crean momentos únicos."
  }];
  return <section id="servicios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground text-center">En Acompaña+ queremos que cada familia encuentre justo lo que necesita para que sus mayores estén bien cuidados, acompañados y entretenidos, sin preocupaciones ni sorpresas. 
   Dividimos nuestros servicios en dos grandes opciones: Intermediación y Seguimiento para quienes necesitan ayuda básica para encontrar y gestionar cuidadoras, y nuestro exclusivo Servicio Premium, pensado para dar un plus de tranquilidad, bienestar y actividades significativas.</p>
          </div>
          
          {/* Carousel */}
          <div className="flex justify-center">
            <div className="w-3/4 max-w-full">
              <Carousel 
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="p-8 bg-card border-warm-gray/20 hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="bg-sage-green/10 p-4 rounded-lg w-fit mx-auto mb-6">
                <service.icon className="h-8 w-8 text-sage-green" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => <li key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 text-sage-green mr-2 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
            </Card>)}
        </div>

        {/* Premium Services */}
        <div className="bg-gradient-to-r from-dusty-rose-light to-sage-green-light rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Servicio Premium Acompaña+
            </h3>
            <p className="text-lg text-muted-foreground">
              Para quienes quieren dar un paso más y asegurarse de que sus mayores disfruten de compañía, actividades y cuidados de forma integral.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {premiumServices.map((service, index) => <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-warm-gray/20 text-center">
                <div className="bg-dusty-rose/20 p-3 rounded-lg w-fit mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-dusty-rose-dark" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>)}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-dusty-rose-dark hover:bg-dusty-rose text-white" asChild>
              <a href="https://forms.gle/o4zVvm6T2khARv7S6" target="_blank" rel="noopener noreferrer">
                Conocer Servicios Premium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;