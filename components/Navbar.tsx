// components/Navbar.tsx
'use client';
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import PaymentComponent from '@/components/MP_Payment';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';


interface Session {
  user: {
    name?: string;
    // Agrega más propiedades del usuario si las usas, como email, picture, etc.
  };
}


const Navbar = ({ session }: { session: Session | null }) => { // Recibe 'session' como una prop
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <Link
        href="/"
        className="font-bold text-xl text-foreground hover:text-purple-600 transition-colors cursor-pointer"
      >
        Amélie
      </Link>

      <div className="flex items-center gap-3">
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

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Pagar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Proceso de pago</DialogTitle>
            {/* Aquí va el contenido de tu componente de pago */}
            <div className="p-4">
              <PaymentComponent />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
