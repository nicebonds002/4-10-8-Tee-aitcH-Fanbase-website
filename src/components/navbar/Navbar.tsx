"use client"

import {useState, useEffect} from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { menuItems } from "./menuItems";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <DesktopMenu
        menuItems={menuItems}
        scrollToSection={scrollToSection}
      />

      <MobileMenu
        menuItems={menuItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
    </>
  );
}