import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-sage-green p-2 rounded-lg">
                <img src="/lovable-uploads/5afb70f4-1bd4-4bb9-8c4e-b68ebd49a30f.png" alt="Acompaña+ Logo" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Acompaña+</h3>
                <p className="text-sm text-muted">Apoyo Integral</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">En Acompaña+ ofrecemos un servicio premium de acompañamiento, cuidado y conexión social para personas mayores.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#servicios" className="hover:text-sage-green transition-colors">Intermediación</a></li>
              <li><a href="#servicios" className="hover:text-sage-green transition-colors">Seguimiento</a></li>
              <li><a href="#servicios" className="hover:text-sage-green transition-colors">Servicios Profesionales</a></li>
              <li><a href="#servicios" className="hover:text-sage-green transition-colors">Servicios Premium</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#sobre-nosotros" className="hover:text-sage-green transition-colors">Sobre Nosotros</a></li>
              <li><a href="#como-funciona" className="hover:text-sage-green transition-colors">Cómo Funciona</a></li>
              <li><a href="#" className="hover:text-sage-green transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-sage-green transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sage-green" />
                <span>611 89 21 91</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sage-green" />
                <span>acompanaplus@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-sage-green" />
                <span>Barrio Salamanca (Madrid) </span>
              </div>
              {/* Social Media */}
              <div className="flex space-x-3 mt-2">
                <a 
                  href="https://www.instagram.com/acompanaplus?igsh=cmUxczFqMGFtMXZh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-2.5 rounded-lg hover:scale-110 transition-transform"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61578485728769" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 p-2.5 rounded-lg hover:scale-110 transition-transform"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://x.com/acompanaplus?s=08" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-800 to-black p-2.5 rounded-lg hover:scale-110 transition-transform"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/acompa%C3%B1a-plus-515328371/?originalSubdomain=es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-700 to-blue-900 p-2.5 rounded-lg hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-muted/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted">
            © 2024 Acompaña+. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted">Hecho con</span>
            <Heart className="h-4 w-4 text-dusty-rose-dark" />
            <span className="text-sm text-muted">para nuestros mayores</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;