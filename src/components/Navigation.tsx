import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Inicio",
    href: "#inicio"
  }, {
    name: "Servicios",
    href: "#servicios"
  }, {
    name: "Cómo Funciona",
    href: "#como-funciona"
  }, {
    name: "Sobre Nosotros",
    href: "#sobre-nosotros"
  }, {
    name: "Contacto",
    href: "#contacto"
  }];
  return <nav className="bg-card/80 backdrop-blur-sm border-b border-warm-gray/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="Acompaña+ Logo" className="h-16 w-auto mix-blend-multiply" src="/lovable-uploads/80ce3a64-d893-42ab-9518-ff46b6d52c82.png" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-muted-foreground hover:text-sage-green transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium">
                  {item.name}
                </a>)}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-sage-green hover:bg-sage-green-dark" asChild>
              <a href="https://forms.gle/o4zVvm6T2khARv7S6" target="_blank" rel="noopener noreferrer">
                Comenzar Ahora
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-warm-gray/20">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-muted-foreground hover:text-sage-green block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <div className="pt-2">
                <Button className="w-full bg-sage-green hover:bg-sage-green-dark" asChild>
                  <a href="https://forms.gle/o4zVvm6T2khARv7S6" target="_blank" rel="noopener noreferrer">
                    Comenzar Ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;