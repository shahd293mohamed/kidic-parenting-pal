import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Settings, LogOut, User } from 'lucide-react';
import kidcareIcon from '@/assets/kidcare-icon.jpg';

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3">
            <img src={kidcareIcon} alt="KidCare" className="w-10 h-10 rounded-full" />
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              KidCare
            </h1>
          </Link>

          {/* Navigation - User Guidance Focused */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/dashboard" 
              className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
            >
              🏠 Home
            </Link>
            <Link 
              to="/tracker" 
              className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
            >
              📊 Track Progress
            </Link>
            <Link 
              to="/educational-content" 
              className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
            >
              📚 Learn & Play
            </Link>
            <Link 
              to="/doctors" 
              className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
            >
              👩‍⚕️ Find Doctors
            </Link>
            <Link 
              to="/chatbot" 
              className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
            >
              🤖 Ask AI
            </Link>
            <Link 
              to="/store" 
              className="px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
            >
              🛒 Shop
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Emergency Quick Access */}
            <Link to="/emergency">
              <Button variant="outline" size="sm" className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100">
                🚨 Emergency
              </Button>
            </Link>
            
            <Link to="/notifications">
              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full text-xs animate-pulse"></span>
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2">
                <div className="px-2 py-1.5 text-sm font-medium text-gray-900">
                  Sarah Johnson
                </div>
                <div className="px-2 py-1 text-xs text-gray-500 mb-2">
                  sarah.johnson@email.com
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center py-2">
                    <User className="mr-3 h-4 w-4" />
                    <div>
                      <p className="font-medium">My Profile</p>
                      <p className="text-xs text-gray-500">Manage family info</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center py-2">
                    <Settings className="mr-3 h-4 w-4" />
                    <div>
                      <p className="font-medium">Settings</p>
                      <p className="text-xs text-gray-500">App preferences</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 py-2">
                  <LogOut className="mr-3 h-4 w-4" />
                  <div>
                    <p className="font-medium">Sign Out</p>
                    <p className="text-xs">Log out of your account</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;