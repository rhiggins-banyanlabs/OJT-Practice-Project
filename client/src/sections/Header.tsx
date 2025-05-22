import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#hero", highlight: false },
    { label: "Product", href: "#features", highlight: false },
    { label: "Contact", href: "#footer", highlight: false },
    { label: "Sign In", href: "#footer", highlight: true },
  ];

  return (
    <header className="w-full bg-white border-b shadow-sm fixed top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#1E293B] text-xl font-bold">ShoeStyle</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            >
              <Button
                variant="link"
                size="md"
                className={`${
                  link.highlight ? "text-[#0D9488]" : "text-[#64748B]"
                } hover:underline hover:text-[#0D9488]`}
              >
                {link.label}
              </Button>
            </a>
          ))}
        </nav>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
          onClick={() => setIsOpen(!isOpen)}
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
                  className={`${
                    link.highlight ? "text-[#0D9488]" : "text-[#64748B]"
                  } hover:underline hover:text-[#0D9488] text-left w-full`}
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
