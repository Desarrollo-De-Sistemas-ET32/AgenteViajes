
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <Link 
        href="/" 
        className="font-bold text-xl text-foreground hover:text-purple-600 transition-colors cursor-pointer"
      >
        Amélie
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hover:bg-purple-50 hover:text-purple-600 transition-colors">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-purple-50 hover:text-purple-600 transition-colors md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;