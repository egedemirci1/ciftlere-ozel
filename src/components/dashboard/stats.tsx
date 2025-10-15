'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Heart, MapPin, Mail, Image, Calendar } from 'lucide-react';
import { useTheme } from '@/lib/theme';

interface StatsProps {
  className?: string;
}

interface StatsData {
  totalMemories: number;
  totalLetters: number;
  totalAnniversaries: number;
  visitedCities: number;
  totalCities: number;
  recentMemories: number;
}

export function Stats({ className = '' }: StatsProps) {
  const { theme } = useTheme();
  const [stats, setStats] = useState<StatsData>({
    totalMemories: 0,
    totalLetters: 0,
    totalAnniversaries: 0,
    visitedCities: 0,
    totalCities: 81,
    recentMemories: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mockup için auth kontrolünü kaldır
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Frontend-only mockup data
      const { mockupMemories, mockupLetters, mockupAnniversaries } = await import('@/lib/mockup-data');

      // Ziyaret edilen şehirleri hesapla
      const visitedCityCodes = new Set(mockupMemories.map((memory: any) => memory.city_code));
      
      // Son 30 gün içindeki anıları hesapla
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const recentMemories = mockupMemories.filter((memory: any) => 
        new Date(memory.date) >= thirtyDaysAgo
      ).length;

      setStats({
        totalMemories: mockupMemories.length,
        totalLetters: mockupLetters.length,
        totalAnniversaries: mockupAnniversaries.length,
        visitedCities: visitedCityCodes.size,
        totalCities: 81,
        recentMemories
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProgressPercentage = (current: number, total: number) => {
    return Math.round((current / total) * 100);
  };

  if (isLoading) {
    return (
      <Card className={`bg-white/60 backdrop-blur-sm ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className={`h-5 w-5 ${
              theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
            }`} />
            <span>İstatistikler</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded w-12"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-white/60 backdrop-blur-sm h-full flex flex-col ${
      theme === 'green-theme' ? 'border-green-200' : 'border-pink-200'
    } ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-base">
          <BarChart3 className={`h-4 w-4 ${
            theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
          }`} />
          <span>İstatistikler</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-3 pt-0">
        <div className="grid grid-cols-2 gap-1 h-full">
          <div className="text-center p-1 rounded bg-white/40">
            <Image className={`h-2.5 w-2.5 mx-auto ${
              theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
            }`} />
            <div className="text-sm font-bold text-gray-800 leading-tight">{stats.totalMemories}</div>
            <div className="text-xs text-gray-600 leading-tight">Anı</div>
          </div>

          <div className="text-center p-1 rounded bg-white/40">
            <Mail className={`h-2.5 w-2.5 mx-auto ${
              theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
            }`} />
            <div className="text-sm font-bold text-gray-800 leading-tight">{stats.totalLetters}</div>
            <div className="text-xs text-gray-600 leading-tight">Mektup</div>
          </div>

          <div className="text-center p-1 rounded bg-white/40">
            <Heart className={`h-2.5 w-2.5 mx-auto ${
              theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
            }`} />
            <div className="text-sm font-bold text-gray-800 leading-tight">{stats.totalAnniversaries}</div>
            <div className="text-xs text-gray-600 leading-tight">Yıldönümü</div>
          </div>

          <div className="text-center p-1 rounded bg-white/40">
            <MapPin className={`h-2.5 w-2.5 mx-auto ${
              theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
            }`} />
            <div className="text-sm font-bold text-gray-800 leading-tight">{stats.visitedCities}</div>
            <div className="text-xs text-gray-600 leading-tight">Şehir</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}