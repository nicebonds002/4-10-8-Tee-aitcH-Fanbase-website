"use client"
import Link from "next/link";
import {useState, useEffect} from "react";
import { MenuItem } from "./menuItems";
import styles from '@/components/navbar/Navbar.module.css';

interface MobileMenuProps {
  menuItems: MenuItem[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function MobileMenu({
    menuItems,
    mobileMenuOpen,
    setMobileMenuOpen,
    scrollToSection
}: MobileMenuProps) {
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <>
      <div
        className={styles['mobile-menu-toggle']}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {mobileMenuOpen && (
        <div className={styles["mobile-drawer"]}>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              onClick={(e) => { 
                e.preventDefault();
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}