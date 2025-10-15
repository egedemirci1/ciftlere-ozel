# Ahu & Yaman Memories - Frontend-Only Mockup Version ✨

Ahu & Yaman Memories, birlikte yaşadığınız güzel anıları saklamak için özel olarak tasarlanmış bir Next.js uygulamasıdır. Bu sürüm **tamamen frontend'de çalışan**, backend'e ihtiyaç duymayan bir mockup versiyondur.

## Özellikler

- 🔐 **Frontend-Only Giriş**: Kullanıcı adı: `test`, Şifre: `test`
- 🏙️ **Şehir İşaretleme**: Türkiye'nin 81 ilini grid görünümünde işaretleme
- 📸 **Mockup Anılar**: Örnek fotoğraflarla zenginleştirilmiş anılar
- 📝 **Örnek Mektuplar**: Birbirinize yazılmış örnek mektuplar
- 📅 **Yıldönümleri**: Örnek özel günler
- 🎵 **Şarkılar**: Kategorilere ayrılmış örnek müzik koleksiyonu
- 🎨 **Modern UI**: Pastel renkler ve yumuşak tasarım
- 📱 **Responsive**: Mobil ve masaüstü uyumlu
- 💾 **LocalStorage**: Tüm veriler tarayıcıda saklanır

## Teknolojiler

- **Next.js 15** (App Router, TypeScript)
- **TailwindCSS** + **shadcn/ui**
- **LocalStorage** (Frontend-only data persistence)
- **React Hooks** (State management)

## Kurulum

### 1. Projeyi Klonlayın

```bash
git clone <repository-url>
cd ahu-yaman-memories
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinde uygulamayı görüntüleyin.

## Giriş Bilgileri

- **Kullanıcı Adı**: `test`
- **Şifre**: `test`

## Vercel'e Deploy

### 1. Vercel'e Bağlayın

```bash
npm install -g vercel
vercel
```

### 2. Deploy Edin

```bash
vercel --prod
```

**Not**: Bu sürüm tamamen frontend'de çalıştığı için herhangi bir çevre değişkeni veya backend konfigürasyonuna ihtiyaç duymaz.

## Proje Yapısı

```
egesu-memories/
├── src/
│   ├── app/
│   │   ├── cities/        # Şehirler sayfası
│   │   ├── letters/       # Mektuplar sayfası
│   │   ├── anniversaries/ # Yıldönümleri sayfası
│   │   ├── settings/      # Ayarlar sayfası
│   │   └── login/         # Giriş sayfası
│   ├── components/        # React bileşenleri
│   ├── constants/         # Sabitler (şehirler)
│   └── lib/              # Yardımcı fonksiyonlar ve mockup data
└── public/               # Statik dosyalar
```

## Mockup Data

Tüm mockup veriler `src/lib/mockup-data.ts` dosyasında tanımlıdır:
- Anılar (memories)
- Yıldönümleri (anniversaries)
- Mektuplar (letters)
- Şarkılar (songs)

## Notlar

- Bu sürüm backend'siz çalıştığı için tüm veriler tarayıcının LocalStorage'ında saklanır
- Tarayıcı önbelleğini temizlerseniz veriler silinir
- Gerçek bir production uygulaması için backend entegrasyonu gereklidir

## Lisans

Bu proje özel kullanım için tasarlanmıştır.
