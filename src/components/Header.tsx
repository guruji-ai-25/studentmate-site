import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <img
            src="/hero/logo.jpeg"
            alt="Vivekananda Gurukula Logo"
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Vivekananda Gurukula</h1>
            <p className="text-sm text-gray-600">Educational Excellence</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
          <a href="#apps" className="text-gray-700 hover:text-orange-600 transition-colors">Applications</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
        </nav>

        {/* Button */}
        <Button 
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-none shadow-lg"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
