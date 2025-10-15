'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Home, MapPin, Music, Mail, Calendar, Settings, LogOut, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/theme';

const navigation = [
  { name: 'Ana Sayfa', href: '/', icon: Home },
  { name: 'Anılar', href: '/memories', icon: Heart },
  { name: 'Şehirler', href: '/cities', icon: MapPin },
  { name: 'Şarkılar', href: '/songs', icon: Music },
  { name: 'Mektuplar', href: '/letters', icon: Mail },
  { name: 'Yıldönümleri', href: '/anniversaries', icon: Calendar },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Frontend-only logout
    const { logout } = require('@/lib/auth');
    logout();
    
    router.push('/login');
    router.refresh();
  };

  return (
    <nav className={`bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50 ${
      theme === 'green-theme' ? 'border-green-100' : 'border-pink-100'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14 sm:h-16 relative">
          {/* Logo - Sol tarafta */}
          <div className="absolute left-0">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Heart className={`h-6 w-6 sm:h-8 sm:w-8 ${
                theme === 'green-theme' ? 'text-green-500' : 'text-pink-500'
              }`} />
              <span className="text-lg sm:text-xl font-serif font-bold text-gray-800 hidden xs:block">
                Ahu & Yaman
              </span>
              <span className="text-sm font-serif font-bold text-gray-800 xs:hidden">
                A&Y
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Ortada */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? theme === 'green-theme' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-pink-100 text-pink-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Sağ taraftaki butonlar */}
          <div className="absolute right-0 flex items-center space-x-1 sm:space-x-2">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100 h-8 w-8 p-0"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
            
            {/* Settings Button */}
            <Link href="/settings">
              <Button
                variant="ghost"
                size="sm"
                className={`text-gray-600 hover:text-gray-900 transition-colors h-8 px-2 ${
                  pathname === '/settings'
                    ? theme === 'green-theme' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                    : 'hover:bg-gray-100'
                }`}
              >
                <Settings className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                <span className="hidden sm:inline text-xs sm:text-sm">Ayarlar</span>
              </Button>
            </Link>
            
            {/* Logout Button */}
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 h-8 px-2"
            >
              <LogOut className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline text-xs sm:text-sm">Çıkış</span>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors',
                      isActive
                        ? theme === 'green-theme' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-pink-100 text-pink-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
