'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Music, Plus, Heart, Trash2, Play, Loader2, Filter } from 'lucide-react';
import { useTheme } from '@/lib/theme';

// Set page title
if (typeof document !== 'undefined') {
  document.title = 'Ahu & Yaman - Şarkılar';
}

interface SongData {
  id: string;
  title: string;
  artist: string;
  youtube_url: string;
  youtube_id: string;
  thumbnail_url: string;
  created_at: string;
  category: string;
}

export default function SongsPage() {
  const { theme } = useTheme();
  const [songs, setSongs] = useState<SongData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingSong, setDeletingSong] = useState<string | null>(null);
  const [isAddSongOpen, setIsAddSongOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('tumu');
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    youtube_url: '',
    category: 'tumu'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'tumu', label: 'Tümü', icon: '🎵' },
    { value: 'hareketli', label: 'Hareketli', icon: '💃' },
    { value: 'sakin', label: 'Sakin', icon: '🌙' },
    { value: 'klasik', label: 'Klasik', icon: '🎼' },
    { value: 'romantik', label: 'Romantik', icon: '💕' },
    { value: 'nostaljik', label: 'Nostaljik', icon: '📻' }
  ];

  useEffect(() => {
    fetchSongs();
  }, [selectedCategory]);

  const fetchSongs = async () => {
    try {
      setIsLoading(true);
      // Frontend-only mockup data
      const { mockupSongs } = await import('@/lib/mockup-data');
      
      // Filter by category if needed
      const filteredSongs = selectedCategory === 'tumu' 
        ? mockupSongs 
        : mockupSongs.filter(song => song.category === selectedCategory);
      
      setSongs(filteredSongs);
    } catch (error) {
      console.error('Error fetching songs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const extractYouTubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleSubmitSong = async () => {
    // Frontend-only mockup: Ekleme yapılamaz
    alert('Bu mockup versiyonunda yeni şarkı eklenemez. Sadece mevcut şarkıları görüntüleyebilirsiniz.');
    setIsAddSongOpen(false);
  };

  const handleDeleteSong = async (songId: string) => {
    // Frontend-only mockup: Silme yapılamaz
    alert('Bu mockup versiyonunda şarkı silinemez. Sadece mevcut şarkıları görüntüleyebilirsiniz.');
  };

  return (
    <div className={`min-h-screen ${
      theme === 'green-theme' 
        ? 'bg-gradient-to-br from-green-50 to-emerald-50' 
        : 'bg-gradient-to-br from-pink-50 to-purple-50'
    }`}>
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2 sm:mb-4 px-2">
            Şarkılarımız
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
            Seni Hatırlatan Parçalar
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-200 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                  selectedCategory === category.value
                    ? theme === 'green-theme'
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-pink-500 hover:bg-pink-600 text-white'
                    : theme === 'green-theme'
                    ? 'border-green-300 text-green-700 hover:bg-green-50'
                    : 'border-pink-300 text-pink-700 hover:bg-pink-50'
                }`}
              >
                <span className="text-sm sm:text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.charAt(0)}</span>
              </Button>
            ))}
          </div>
          
          <Dialog open={isAddSongOpen} onOpenChange={setIsAddSongOpen}>
            <DialogTrigger asChild>
              <Button className={`${
                theme === 'green-theme' 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-pink-500 hover:bg-pink-600'
              } text-white px-3 sm:px-4 py-2 text-sm sm:text-base`}>
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Yeni Şarkı Ekle
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Yeni Şarkı Ekle</DialogTitle>
                <DialogDescription>
                  YouTube Music&apos;den şarkı linkini ekleyin
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Şarkı Adı</Label>
                  <Input
                    id="title"
                    value={newSong.title}
                    onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
                    placeholder="Şarkı adını girin"
                  />
                </div>
                <div>
                  <Label htmlFor="artist">Sanatçı</Label>
                  <Input
                    id="artist"
                    value={newSong.artist}
                    onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
                    placeholder="Sanatçı adını girin"
                  />
                </div>
                <div>
                  <Label htmlFor="youtube_url">YouTube URL</Label>
                  <Input
                    id="youtube_url"
                    value={newSong.youtube_url}
                    onChange={(e) => setNewSong({ ...newSong, youtube_url: e.target.value })}
                    placeholder="https://music.youtube.com/watch?v=..."
                  />
                </div>
                <div>
                  <Label htmlFor="category">Kategori</Label>
                  <Select value={newSong.category} onValueChange={(value) => setNewSong({ ...newSong, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Kategori seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(cat => cat.value !== 'tumu').map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          <div className="flex items-center space-x-2">
                            <span>{category.icon}</span>
                            <span>{category.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsAddSongOpen(false)}
                  >
                    İptal
                  </Button>
                  <Button
                    onClick={handleSubmitSong}
                    disabled={isSubmitting}
                    className={`${
                      theme === 'green-theme' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-pink-500 hover:bg-pink-600'
                    } text-white`}
                  >
                    {isSubmitting ? 'Ekleniyor...' : 'Ekle'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative">
              {/* Pulsing heart icon */}
              <Music className={`h-16 w-16 ${
                theme === 'green-theme' ? 'text-green-500' : 'text-pink-500'
              } animate-pulse mb-4`} />
              
              {/* Spinning loader */}
              <Loader2 className={`absolute -top-2 -right-2 h-6 w-6 ${
                theme === 'green-theme' ? 'text-green-400' : 'text-pink-400'
              } animate-spin`} />
            </div>
            
            <div className="text-center space-y-2">
              <h3 className={`text-xl font-medium ${
                theme === 'green-theme' ? 'text-green-700' : 'text-pink-700'
              }`}>
                Şarkılar Yükleniyor...
              </h3>
              <p className={`text-lg ${
                theme === 'green-theme' ? 'text-green-600' : 'text-pink-600'
              }`}>
                Aşkın müziği hazırlanıyor ✨
              </p>
            </div>
            
            {/* Skeleton cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 w-full">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className={`bg-white/60 backdrop-blur-sm animate-pulse ${
                  theme === 'green-theme' ? 'border-green-200' : 'border-pink-200'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="h-3 sm:h-4 bg-gray-200 rounded"></div>
                    <div className="h-2 sm:h-3 bg-gray-200 rounded w-2/3"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-24 sm:h-32 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : songs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {songs.map((song) => (
              <Card 
                key={song.id} 
                className={`bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow ${
                  theme === 'green-theme' ? 'border-green-200' : 'border-pink-200'
                }`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 sm:space-x-2 pr-2">
                      <Music className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        theme === 'green-theme' ? 'text-green-500' : 'text-pink-500'
                      }`} />
                      <span className="truncate text-sm sm:text-base">{song.title}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteSong(song.id)}
                      disabled={deletingSong === song.id}
                      className="hover:bg-red-50 hover:text-red-600 transition-colors h-8 w-8 p-0 flex-shrink-0"
                    >
                      <Trash2 className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        deletingSong === song.id ? 'animate-spin' : ''
                      }`} />
                    </Button>
                  </CardTitle>
                  <CardDescription className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="truncate pr-2">{song.artist}</span>
                    <span className={`px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                      theme === 'green-theme' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-pink-100 text-pink-700'
                    }`}>
                      <span className="hidden sm:inline">{categories.find(cat => cat.value === song.category)?.icon} {categories.find(cat => cat.value === song.category)?.label}</span>
                      <span className="sm:hidden">{categories.find(cat => cat.value === song.category)?.icon}</span>
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <img
                        src={song.thumbnail_url}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(song.youtube_url, '_blank')}
                          className="bg-white/90 hover:bg-white text-black"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(song.created_at).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Music className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Henüz şarkı yok
            </h3>
            <p className="text-gray-500 mb-6">
              İlk şarkınızı ekleyerek başlayın
            </p>
            <Button 
              onClick={() => setIsAddSongOpen(true)}
              className={`${
                theme === 'green-theme' 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-pink-500 hover:bg-pink-600'
              } text-white`}
            >
              <Plus className="h-4 w-4 mr-2" />
              Şarkı Ekle
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
