'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Play, Eye, RefreshCw, Lock } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth';

interface Song {
  id: string;
  title: string;
  artist: string;
  youtube_url: string;
  youtube_id: string;
  thumbnail_url: string;
  category: string;
  created_at: string;
}

interface SongOfDayProps {
  className?: string;
}

export function SongOfDay({ className = '' }: SongOfDayProps) {
  const { theme } = useTheme();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [songs, setSongs] = useState<Song[]>([]);
  const [songOfDay, setSongOfDay] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mockup için auth kontrolünü kaldır
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      // Frontend-only mockup data
      const { mockupSongs } = await import('@/lib/mockup-data');
      setSongs(mockupSongs);
      
      // Günün şarkısını seç - direkt ilk şarkıyı al
      if (mockupSongs.length > 0) {
        setSongOfDay(mockupSongs[0]);
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectSongOfDay = (songList: Song[]) => {
    if (songList.length === 0) return;

    // Bugünün tarihini seed olarak kullanarak deterministik rastgele seçim
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD formatında
    const seed = dateString.split('-').join(''); // YYYYMMDD
    
    // Seed'i kullanarak rastgele indeks hesapla
    const randomIndex = parseInt(seed) % songList.length;
    const selectedSong = songList[randomIndex];
    
    setSongOfDay(selectedSong);
  };

  const handleRefreshSong = () => {
    if (songs.length > 0) {
      selectSongOfDay(songs);
    }
  };

  const handlePlaySong = () => {
    if (songOfDay) {
      window.open(songOfDay.youtube_url, '_blank');
    }
  };

  const getCategoryDisplayName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'tumu': 'Tümü',
      'hareketli': 'Hareketli',
      'sakin': 'Sakin',
      'klasik': 'Klasik',
      'romantik': 'Romantik',
      'nostaljik': 'Nostaljik'
    };
    return categoryMap[category] || category;
  };

  if (isLoading) {
    return (
      <Card className={`bg-white/60 backdrop-blur-sm ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Music className={`h-5 w-5 ${
              theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
            }`} />
            <span>Günün Şarkısı</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 h-8 w-8"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-32"></div>
                <div className="h-3 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-white/60 backdrop-blur-sm flex flex-col ${
      theme === 'green-theme' ? 'border-green-200' : 'border-pink-200'
    } ${className}`}>
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Music className={`h-4 w-4 sm:h-5 sm:w-5 ${
              theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
            }`} />
            <span className="text-sm sm:text-base">Günün Şarkısı</span>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefreshSong}
              className="text-xs hover:bg-gray-100 h-6 w-6 p-0"
              title="Yeni şarkı seç"
            >
              <RefreshCw className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = '/songs'}
              className="text-xs h-6 px-2"
            >
              <Eye className="h-3 w-3 sm:mr-1" />
              <span className="hidden sm:inline">Tümünü Gör</span>
            </Button>
          </div>
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Günlük şarkı dozumuz
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-3 sm:p-6">
        {!songOfDay ? (
          <div className="text-center py-4 sm:py-6 flex-1 flex flex-col justify-center">
            <Music className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-xs sm:text-sm">Henüz şarkı eklenmemiş</p>
            <p className="text-gray-400 text-xs mt-1">İlk şarkınızı ekleyerek başlayın</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 sm:mt-3 text-xs sm:text-sm"
              onClick={() => window.location.href = '/songs'}
            >
              <Music className="h-3 w-3 mr-1" />
              Şarkı Ekle
            </Button>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4 flex-1">
            {/* Şarkı Thumbnail */}
            <div className="relative">
              <img
                src={songOfDay.thumbnail_url}
                alt={`${songOfDay.title} - ${songOfDay.artist}`}
                className="w-full h-20 sm:h-32 object-cover rounded-lg"
                onError={(e) => {
                  console.log('Image failed to load:', songOfDay.thumbnail_url);
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-full h-20 sm:h-32 bg-gray-200 rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
                <Music className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                <Button
                  onClick={handlePlaySong}
                  size="sm"
                  className={`${
                    theme === 'green-theme' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-pink-500 hover:bg-pink-600'
                  } text-white h-6 w-6 sm:h-8 sm:w-8 p-0`}
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            {/* Şarkı Bilgileri */}
            <div className="space-y-1 sm:space-y-2">
              <div>
                <h4 className="font-medium text-gray-800 text-xs sm:text-sm">{songOfDay.title}</h4>
                <p className="text-gray-600 text-xs">{songOfDay.artist}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs ${
                  theme === 'green-theme' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-pink-100 text-pink-700'
                }`}>
                  {getCategoryDisplayName(songOfDay.category)}
                </span>
                <span className="text-xs text-gray-500">
                  Bugün seçildi
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
