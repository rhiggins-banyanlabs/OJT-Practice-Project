import React from "react";
import Button from "../components/ui/Button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#hero" },
    { label: "Products", href: "#features" },
    { label: "Contact", href: "#footer" },
    { label: "Support", href: "#support" },
  ];

  return (
    <footer className="bg-[#F8FAFC] text-[#64748B] font-inter text-sm md:text-base py-8 px-4 md:px-8 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        {/* Logo */}
        <div className="text-[#1E293B] text-lg font-semibold">ShoeStyle</div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#0D9488] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            >
              <Button
                  variant="link"
                  size="md"
                  className={`${
                    link.highlight ? "text-[#0D9488]" : "text-[#64748B]"
                  } hover:underline hover:text-[#0D9488] text-left w-full`}
                >  
              {link.label}</Button>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-xs text-[#94A3B8]">
        &copy; {currentYear} ShoeStyle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
