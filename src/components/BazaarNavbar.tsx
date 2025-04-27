import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const BazaarNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/catalog" },
    { name: "Букеты", path: "/bouquets" },
    { name: "Цветы в коробках", path: "/box-flowers" },
    { name: "Композиции", path: "/compositions" },
    { name: "Комнатные растения", path: "/house-plants" },
    { name: "Доставка", path: "/delivery" },
    { name: "О нас", path: "/about" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bazaar-navy text-white border-b border-bazaar-navy/10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold text-bazaar-softPink">Bazaar</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors hover:text-bazaar-softPink ${
                      isActive ? "text-bazaar-softPink" : "text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-bazaar-softPink">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-bazaar-softPink">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-bazaar-softPink relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 bg-bazaar-burgundy text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in bg-bazaar-navy border-t border-bazaar-navy/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium ${
                    isActive ? "text-bazaar-softPink" : "text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center justify-around py-4 border-t border-bazaar-navy/20 mt-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-bazaar-softPink">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-bazaar-softPink">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-bazaar-softPink relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-1 right-1 bg-bazaar-burgundy text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BazaarNavbar;
