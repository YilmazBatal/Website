"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FaBurger, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react"; // useEffect eklendi

export function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [mounted, setMounted] = useState(false); // Mount kontrolü eklendi

  // Bileşen tarayıcıya yüklendiğinde çalışır
  useEffect(() => {
    setMounted(true);
  }, []);

  function ToggleMenu() {
    setIsToggled(!isToggled);
  }

  // Eğer sayfa henüz tarayıcıda tamamen hazır değilse (SSR aşamasındaysa)
  // boş dönerek hydration hatalarını ve olası takılmaları engelleriz.
  if (!mounted) {
    return <header className="h-16 w-full" />; // Yer tutucu boş bir header
  }

  return (
    <header className="sticky top-0 w-full backdrop-blur-md bg-background/30 z-50">
      <div className="h-16 container mx-auto max-w-7xl flex flex-row items-center justify-between md:px-12 px-4">
        <div className="font-mono font-bold text-2xl">Yılmaz Batal</div>

        {/* --- Desktop Menu --- */}
        <div className="flex flex-row justify-between items-center gap-3 md:flex hidden ">
          <Button asChild variant={"link"} className="hover:no-underline hover:scale-[1.15] text-md">
            <Link href="#Projects">Projects</Link>
          </Button>
          <Button asChild variant={"link"} className="hover:no-underline hover:scale-[1.15] text-md">
            <Link href="#About">About</Link>
          </Button>
          <Button asChild variant={"link"} className="hover:no-underline hover:scale-[1.15] text-md">
            <Link href="#Skills">Skills</Link>
          </Button>
          <Button asChild variant={"link"} className="hover:no-underline hover:scale-[1.15] text-md">
            <Link href="#Experiences">Experiences</Link>
          </Button>
          <Button asChild variant={"link"} className="hover:no-underline hover:scale-[1.15] text-md">
            <Link href="#Contact">Contact</Link>
          </Button>
        </div>

        {/* --- Mobile Menu Button --- */}
        <Button
          size={"icon-sm"}
          className="hover:bg-transparent md:hidden z-50"
          variant={"link"}
          onClick={ToggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isToggled ? <FaXmark size={"24"} /> : <FaBurger size={"24"} />}
        </Button>

        {/* --- Mobile Navbar --- */}
        {isToggled && (
          <div className="fixed inset-0 z-40 pt-16 md:hidden">
            <nav className="flex flex-col items-center justify-start bg-background/80 backdrop-blur-lg h-screen gap-8 py-8 text-2xl">
              <Link href={"#Projects"} onClick={ToggleMenu}>Projects</Link>
              <Link href={"#About"} onClick={ToggleMenu}>About</Link>
              <Link href={"#Skills"} onClick={ToggleMenu}>Skills</Link>
              <Link href={"#Experiences"} onClick={ToggleMenu}>Experiences</Link>
              <Link href={"#Contact"} onClick={ToggleMenu}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
