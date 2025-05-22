import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "About", href: "#hero" },
    { label: "Product", href: "#features" },
    { label: "Contact", href: "#footer" },
    { label: "Sign Up", href: "#footer" },
  ];

  return (
    <header className="w-full border-b shadow-sm bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#0D9488] text-lg font-medium font-inter">MyLogo</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            >
              <Button
                variant="link"
                size="md"
                className="text-[#64748B] hover:underline hover:text-[#0D9488]"
              >
                {link.label}
              </Button>
            </a>
          ))}
        </nav>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                <Button
                  variant="link"
                  size="md"
                  className="text-[#64748B] hover:underline hover:text-[#0D9488] text-left w-full"
                >
                  {link.label}
                </Button>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
