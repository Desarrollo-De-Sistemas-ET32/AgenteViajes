'use client';
import { Search, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import PaymentComponent from '@/components/MP_Payment';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

interface Session {
  user: {
    name?: string;
  };
}

const Navbar = ({ session }: { session: Session | null }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 dark:bg-black/80 dark:border-gray-900">
      <Link
        href="/"
        className="font-bold text-xl text-foreground hover:text-purple-600 transition-colors cursor-pointer"
      >
        Amélie
      </Link>

      <div className="flex items-center gap-3">
        {/* Botón para cambiar el tema */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-purple-50 hover:text-purple-600 transition-colors"
        >
          <Search className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-purple-50 hover:text-purple-600 transition-colors md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Auth buttons */}
        {!session ? (
          <>
            <Link href="/auth/login?screen_hint=signup">
              <Button className="bg-purple-500 text-white hover:bg-purple-600">
                Sign up
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline">Log in</Button>
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm font-medium">
              Welcome, {session.user.name}!
            </span>
            <Link href="/auth/logout">
              <Button variant="destructive">Log out</Button>
            </Link>
          </>
        )}

        {/* Botón y componente de pago usando el Dialog de Shadcn UI */}
        <Dialog>
          {/* El DialogTrigger envuelve el botón que abrirá el modal */}
          <DialogTrigger asChild>
            <Button variant="outline">Pagar</Button>
          </DialogTrigger>
          {/* El DialogContent es el contenedor para el componente de pago */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle>Formulario de Pago</DialogTitle>
            {/* Aquí se renderiza tu componente de pago */}
            <PaymentComponent />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;