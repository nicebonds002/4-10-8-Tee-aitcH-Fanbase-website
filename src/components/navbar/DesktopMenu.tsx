"use client";

import { useState, useEffect, useCallback } from "react";
import { throttle } from "@/utils/throttle";
import { MenuItem } from "./menuItems";
import Link from "next/link";
import styles from "@/components/navbar/Navbar.module.css";

interface DesktopMenuProps {
    menuItems: MenuItem[];
    scrollToSection: (id: string) => void;
}

export default function DesktopMenu({
    menuItems,
    scrollToSection
}: DesktopMenuProps) {

  const [collapsed, setCollapsed] = useState(false);

  const [hovered, setHovered] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
        setCollapsed(window.scrollY > 100);
    }, 100),
    []
  );

  useEffect(() => {
    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return(
    <nav
      className={`${styles["expand-menu"]} ${collapsed ? styles.collapsed : ""} ${hovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`/${item.id}`}
              scroll={false} // กัน jump
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}