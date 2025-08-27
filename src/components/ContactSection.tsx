import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Solicitud de consulta - ${formData.servicio || 'Consulta General'}`;
    const body = `
Hola equipo de Acompaña+,

Me pongo en contacto con ustedes para solicitar información sobre sus servicios.

Datos de contacto:
- Nombre: ${formData.nombre}
- Teléfono: ${formData.telefono}
- Email: ${formData.email}
- Tipo de servicio: ${formData.servicio}

Mensaje:
${formData.mensaje}

Espero su respuesta. Muchas gracias.

Saludos cordiales,
${formData.nombre}
    `.trim();

    const mailtoLink = `mailto:acompanaplus@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return <section id="contacto" className="py-20 bg-gradient-to-br from-dusty-rose-light/30 via-background to-sage-green-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a encontrar el mejor cuidado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat opacity-10"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/bc2ded1e-a8d0-49f8-9a34-2e439b84b410.png)`
              }}
            />
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-8">
                Nuestro equipo está disponible para brindarte toda la información que necesites 
                sobre nuestros servicios y cómo podemos ayudarte.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 bg-card border-warm-gray/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-sage-green/10 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-sage-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Teléfono</h4>
                    <p className="text-muted-foreground">611 89 21 91</p>
                    <p className="text-sm text-muted-foreground">Llamadas y WhatsApp</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-warm-gray/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-dusty-rose/20 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-dusty-rose-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">acompanaplus@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Respuesta en 24 horas</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-warm-gray/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-sage-green/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-sage-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ubicación</h4>
                    <p className="text-muted-foreground">Barrio de Salamanca</p>
                    <p className="text-sm text-muted-foreground">Madrid</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-warm-gray/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-dusty-rose/20 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-dusty-rose-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horarios</h4>
                    <p className="text-muted-foreground">Lun - Vie: 8:00 - 20:00</p>
                    <p className="text-sm text-muted-foreground">Sáb - Dom: 9:00 - 18:00</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Emergency Contact */}
            <Card className="p-6 bg-gradient-to-r from-sage-green/10 to-dusty-rose/10 border-warm-gray/20">
              <h4 className="font-semibold text-foreground mb-2">Línea de Emergencia 24/7</h4>
              <p className="text-2xl font-bold text-sage-green mb-2">+34 611 89 21 91</p>
              <p className="text-sm text-muted-foreground">
                Para situaciones urgentes con nuestros servicios activos
              </p>
            </Card>

          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-warm-gray/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Solicita una Consulta Gratuita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <Input 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo" 
                    className="border-warm-gray/30 focus:border-sage-green" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <Input 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono" 
                    className="border-warm-gray/30 focus:border-sage-green" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com" 
                  className="border-warm-gray/30 focus:border-sage-green" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Servicio
                </label>
                <select 
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-warm-gray/30 rounded-lg focus:border-sage-green focus:outline-none bg-background"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Intermediación de Cuidadoras">Intermediación de Cuidadoras</option>
                  <option value="Cuidado en el Hogar">Cuidado en el Hogar</option>
                  <option value="Servicios Médicos">Servicios Médicos</option>
                  <option value="Servicios Premium">Servicios Premium</option>
                  <option value="Consulta General">Consulta General</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cuéntanos sobre tu situación
                </label>
                <Textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Describe brevemente las necesidades de cuidado o cualquier pregunta específica..." 
                  rows={4} 
                  className="border-warm-gray/30 focus:border-sage-green" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-sage-green hover:bg-sage-green-dark text-white">
                Enviar Solicitud
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Campos obligatorios. Nos pondremos en contacto contigo en menos de 24 horas.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;