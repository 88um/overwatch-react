"use client";

import { routes } from "@/data";
import { useAuthStore } from "@/stores/useAuthStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { deleteSession} from '@/lib/session';

const Header: React.FC = () => {
  const { isLoggedIn, logout, setUserName } = useAuthStore();
  const path = usePathname();
  const imgSize = 70;

  // Filter routes based on authentication state
  const filteredRoutes = routes.filter(route => {
    if (isLoggedIn) return true; // Show all routes when logged in
    return route.href === '/' || route.href === '/reviews'; // Show only home and reviews when logged out
  });

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const menu = document.getElementById("hamburgerMenu");
      const button = document.getElementById("hamburgerToggle");

      if (
        menu &&
        !menu.contains(event.target as Node) &&
        button &&
        !button.contains(event.target as Node)
      ) {
        menu.classList.remove("active");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const toggleMenu = () => {
    const menu = document.getElementById("hamburgerMenu");
    if (menu) {
      menu.classList.toggle("active");
    }
  };

  const handleLogout = async () => {
    await deleteSession();
    logout();
    setUserName("");
    toast.success("Logged out successfully");
  };

  return (
    <header className="bg-[#F99E1A] py-3">
      {/* Hamburger Side Menu */}
      <div
        id="hamburgerMenu"
        className="hamburger-menu fixed top-0 left-[-250px] w-[250px] h-screen bg-[#1a1a1a] transition-all duration-300 z-[1000]"
      >
        <div className="p-4">
          <h5 className="text-white mb-4 text-lg font-semibold">Navigation</h5>
          <ul className="space-y-2 w-full">
            {filteredRoutes.map((route, i) => (
              <li key={i} className="flex w-full">
                <a
                  href={route.href}
                  className={
                    path !== route.href
                      ? "text-white hover:text-heroic block p-2"
                      : "bg-white/40 text-white p-2 rounded w-full"
                  }
                >
                  {route.name}
                </a>
              </li>
            ))}
            {isLoggedIn ? (
              <button 
                className="text-white cursor-pointer hover:bg-white/40 hover:text-white p-2 hover:w-full hover:rounded" 
                onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <li className="flex w-full">
                <a
                  href="/login"
                  className={
                    path !== '/login'
                      ? "text-white hover:text-heroic block p-2"
                      : "bg-white/40 text-white p-2 rounded w-full"
                  }
                >
                  Log In / Sign Up
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <button
          id="hamburgerToggle"
          onClick={toggleMenu}
          className="text-black border bg-white px-3 py-1 rounded hover:bg-white/40 cursor-pointer hover:text-black transition"
        >
          ☰
        </button>
        <Image src='/logo.png' alt="logo" width={imgSize} height={imgSize} className="rounded-full"/>
      </nav>

      <style jsx>{`
        .hamburger-menu.active {
          left: 0 !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
