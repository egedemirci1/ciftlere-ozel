// Mockup data for frontend-only version

export const MOCKUP_CREDENTIALS = {
  username: 'test',
  password: 'test'
};

// Dinamik tarihler için yardımcı fonksiyonlar
const getDateString = (daysFromNow: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toISOString().split('T')[0];
};

const getISOString = (daysFromNow: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toISOString();
};

export const mockupMemories = [
  {
    id: '1',
    title: 'Karaköy\'de Kahvaltı',
    description: 'Cumartesi sabahı uyanıp karar verdik, hadi Karaköy\'e gidelim dedik. Köşe başındaki küçük kafede simit, menemen ve çaylarımızı içerken İstanbul\'un sabah huzurunu yaşadık.',
    date: '2024-03-15',
    city_code: '34', // İstanbul
    album_id: null,
    created_at: '2024-03-15T10:00:00Z',
    media: [
      {
        id: '1',
        file_name: 'memory1.jpg',
        original_name: 'karakoy-kahvalti.jpg',
        file_type: 'image/jpeg',
        file_size: 2048576,
        public_url: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-03-15T10:00:00Z'
      }
    ]
  },
  {
    id: '2',
    title: 'Anıtkabir Ziyareti',
    description: 'Ankara\'dayken Anıtkabir\'i ziyaret ettik. Sessizliği, huzuru ve o muhteşem mimarisi bizi çok etkiledi. Özellikle gün batımında çektiğimiz fotoğraflar harika oldu.',
    date: getDateString(7),
    city_code: '6', // Ankara
    album_id: null,
    created_at: getISOString(7),
    media: [
      {
        id: '2',
        file_name: 'memory2.jpg',
        original_name: 'anitkabir.jpg',
        file_type: 'image/jpeg',
        file_size: 1876543,
        public_url: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-03-22T14:30:00Z'
      }
    ]
  },
  {
    id: '3',
    title: 'Kordon\'da Yürüyüş',
    description: 'İzmir\'in o eşsiz Kordon yürüyüşü... Deniz kokusu, martıların sesleri ve el ele yürümek. Akşam üzeri kumruda oturup kumru yedik, sonra da sahil boyunca saatlerce gezindik.',
    date: '2024-05-20',
    city_code: '35', // İzmir
    album_id: null,
    created_at: '2024-05-20T18:00:00Z',
    media: [
      {
        id: '3',
        file_name: 'memory3.jpg',
        original_name: 'izmir-kordon.jpg',
        file_type: 'image/jpeg',
        file_size: 2156789,
        public_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-05-20T18:00:00Z'
      }
    ]
  },
  {
    id: '4',
    title: 'Kapadokya Balayımız',
    description: 'Hayallerimizin Kapadokya gezisi! Balon turunda gün doğumunu izlemek, peri bacalarını gezmek, yeraltı şehrini keşfetmek... Her anı birbirimize sarılarak yaşadık.',
    date: '2024-06-10',
    city_code: '50', // Nevşehir
    album_id: null,
    created_at: '2024-06-10T06:00:00Z',
    media: [
      {
        id: '4',
        file_name: 'memory4.jpg',
        original_name: 'kapadokya.jpg',
        file_type: 'image/jpeg',
        file_size: 2234567,
        public_url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-06-10T06:00:00Z'
      }
    ]
  },
  {
    id: '5',
    title: 'Konyaaltı Plajı',
    description: 'Antalya\'nın o muhteşem denizi... Sahilde kumda oturup konuşmak, denize girmek, akşam yürüyüş yapmak. Tatil bu olsa gerek.',
    date: '2024-09-01',
    city_code: '7', // Antalya
    album_id: null,
    created_at: '2024-09-01T12:00:00Z',
    media: [
      {
        id: '5',
        file_name: 'memory5.jpg',
        original_name: 'antalya.jpg',
        file_type: 'image/jpeg',
        file_size: 1987654,
        public_url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-09-01T12:00:00Z'
      }
    ]
  },
  {
    id: '6',
    title: 'Safranbolu Gezisi',
    description: 'Tarihi evleri gezmek, dar sokaklarda kaybolmak, lokum almak, türk kahvesi içmek... Zamanın durduğu bir yer.',
    date: '2024-09-20',
    city_code: '78', // Karabük
    album_id: null,
    created_at: '2024-09-20T10:00:00Z',
    media: [
      {
        id: '6',
        file_name: 'memory6.jpg',
        original_name: 'safranbolu.jpg',
        file_type: 'image/jpeg',
        file_size: 1876543,
        public_url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-09-20T10:00:00Z'
      }
    ]
  },
  {
    id: '7',
    title: 'Bursa\'da Uludağ',
    description: 'Kış tatilimizde Uludağ\'a gittik. Kar yağışı altında yürümek, sıcak çaylar içmek... Unutulmaz bir hafta sonu.',
    date: '2024-01-10',
    city_code: '16', // Bursa
    album_id: null,
    created_at: '2024-01-10T10:00:00Z',
    media: [
      {
        id: '7',
        file_name: 'memory7.jpg',
        original_name: 'bursa.jpg',
        file_type: 'image/jpeg',
        file_size: 1954321,
        public_url: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-01-10T10:00:00Z'
      }
    ]
  },
  {
    id: '8',
    title: 'Bodrum\'da Gün Batımı',
    description: 'Bodrum kalesinin önünde gün batımını izledik. Denizin mavisi, gökyüzünün turuncusu... Harika bir akşamdı.',
    date: '2024-07-05',
    city_code: '48', // Muğla
    album_id: null,
    created_at: '2024-07-05T19:00:00Z',
    media: [
      {
        id: '8',
        file_name: 'memory8.jpg',
        original_name: 'bodrum.jpg',
        file_type: 'image/jpeg',
        file_size: 2123456,
        public_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-07-05T19:00:00Z'
      }
    ]
  },
  {
    id: '9',
    title: 'Konya\'da Mevlana',
    description: 'Mevlana Müzesi\'ni gezmek, Konya\'nın manevi havasını hissetmek... Çok özel bir deneyimdi.',
    date: '2024-04-15',
    city_code: '42', // Konya
    album_id: null,
    created_at: '2024-04-15T14:00:00Z',
    media: [
      {
        id: '9',
        file_name: 'memory9.jpg',
        original_name: 'konya.jpg',
        file_type: 'image/jpeg',
        file_size: 1876543,
        public_url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-04-15T14:00:00Z'
      }
    ]
  },
  {
    id: '10',
    title: 'Trabzon\'da Sümela',
    description: 'Sümela Manastırı\'nı ziyaret ettik. Dağların arasındaki o muhteşem yapı... Doğa ve tarih bir arada.',
    date: '2024-06-20',
    city_code: '61', // Trabzon
    album_id: null,
    created_at: '2024-06-20T11:00:00Z',
    media: [
      {
        id: '10',
        file_name: 'memory10.jpg',
        original_name: 'trabzon.jpg',
        file_type: 'image/jpeg',
        file_size: 2034567,
        public_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-06-20T11:00:00Z'
      }
    ]
  },
  {
    id: '11',
    title: 'Eskişehir\'de Porsuk',
    description: 'Porsuk Çayı kenarında yürümek, gondolla gezmek, sokak lezzetlerini tatmak... Eskişehir bizim için sürpriz oldu.',
    date: '2024-05-10',
    city_code: '26', // Eskişehir
    album_id: null,
    created_at: '2024-05-10T16:00:00Z',
    media: [
      {
        id: '11',
        file_name: 'memory11.jpg',
        original_name: 'eskisehir.jpg',
        file_type: 'image/jpeg',
        file_size: 1987654,
        public_url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-05-10T16:00:00Z'
      }
    ]
  },
  {
    id: '12',
    title: 'Gaziantep Mutfağı',
    description: 'Gaziantep\'te yemek turumuzu yaptık. Baklava, lahmacun, kebap... Her şey muhteşemdi. Mideyi doyuran değil, ruhu doyuran lezzetler.',
    date: '2024-08-15',
    city_code: '27', // Gaziantep
    album_id: null,
    created_at: '2024-08-15T13:00:00Z',
    media: [
      {
        id: '12',
        file_name: 'memory12.jpg',
        original_name: 'gaziantep.jpg',
        file_type: 'image/jpeg',
        file_size: 2156789,
        public_url: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80',
        width: 1920,
        height: 1280,
        created_at: '2024-08-15T13:00:00Z'
      }
    ]
  }
];

export const mockupAnniversaries = [
  {
    id: '1',
    title: 'İlk Tanışma Günümüz',
    date: '2024-01-15',
    repeat: true,
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'İlk Öpücüğümüz',
    date: getDateString(5),
    repeat: true,
    created_at: getISOString(5)
  },
  {
    id: '3',
    title: 'İlk Yıldönümümüz',
    date: getDateString(15),
    repeat: true,
    created_at: getISOString(15)
  },
  {
    id: '4',
    title: 'İlk Tatilimiz',
    date: '2024-05-10',
    repeat: true,
    created_at: '2024-05-10T10:00:00Z'
  },
  {
    id: '5',
    title: 'İlk Evimize Taşındık',
    date: '2024-07-20',
    repeat: true,
    created_at: '2024-07-20T10:00:00Z'
  }
];

export const mockupLetters = [
  {
    id: '1',
    title: 'Sana İlk Mektubum',
    body: 'Sevgilim,\n\nİlk kez böyle bir şey yazıyorum ama sana olan hislerimi kelimelerle anlatmak istiyorum. Seninle geçirdiğim her an, her dakika çok değerli. Sabah uyanıp ilk gördüğüm şey senin gülümsemen olduğunda, günüm başlamadan bitiyor zaten.\n\nBir gün seninle tanışmamız, hayatımın en güzel tesadüfü. Bazen düşünüyorum, ya karşılaşmasaydık diye. Ama sonra anlıyorum ki, biz karşılaşmak için yaratılmışız.\n\nHer gün seninle daha çok aşık oluyorum. Sadece güzelliğine değil, kalbine, ruhuna, o içten kahkahalara, sabah saçlarının dağınıklığına, kahve içerken yaptığın o tatlı ses çıkarmaya...\n\nSeni seviyorum ve hep seveceğim.\n\nSonsuza dek seninle.',
    created_at: '2024-02-14T10:00:00Z'
  },
  {
    id: '2',
    title: 'Doğum Günün Kutlu Olsun Canım',
    body: 'Bugün senin günün!\n\nYine bir yaş daha büyüdün ama biliyor musun, her yaşında seni daha çok seviyorum. Her doğum günün, seninle birlikte geçireceğim yılların başlangıcı.\n\nSenin o masumiyetin, temiz kalbin, samimiyetin... Bunlar yaşla değişmiyor, hep böyle kal. Ben zaten seni böyle seviyorum.\n\nBu yıl seninle ne güzel anılar biriktirdik değil mi? Kapadokya gezimiz, İzmir\'de yediğimiz kumrular, Boğaz\'da içtiğimiz çaylar... Her biri bir hazine gibi kalbimde.\n\nBu sene de nice mutlu yıllara birlikte! Pastanı üflerken dilek tut, ben de seni diliyorum.\n\nDoğum günün kutlu olsun sevgilim! 🎂',
    created_at: '2024-06-15T14:00:00Z'
  },
  {
    id: '3',
    title: 'Özledim Seni',
    body: 'Uzaktayım ama kalbim hep seninle...\n\nİki gün oldu görüşmeyeli ama sanki iki ay geçmiş gibi. Sesini duymayı, gülüşünü görmeyi, kokunu almayı özledim. Her şeyi özledim.\n\nBurada toplantıdayım ama aklım sende. Kahve içiyorum, seni düşünüyorum. Yürüyorum, seni düşünüyorum. Uyumaya çalışıyorum, yine seni düşünüyorum.\n\nYarın eve döneceğim ve ilk işim seni öpmek olacak. Sonra da hiç bırakmayacağım.\n\nBir gün daha sabret, yakında yanındayım.\n\nSeni seviyorum ❤️',
    created_at: '2024-08-22T20:00:00Z'
  },
  {
    id: '4',
    title: 'Teşekkür Ederim',
    body: 'Sadece teşekkür etmek istedim...\n\nHer zor zamanımda yanımda olduğun için. Beni anladığın için. Sabırla dinlediğin için. Gülümsememi sağladığın için.\n\nBazen ben bile kendime kızıyorum ama sen hep anlayışlısın. Her hatamı affediyorsun, her düştüğümde kaldırıyorsun.\n\nSeninle olmak, evde olmak gibi. Güvendeyim, huzurluyum, mutluyum. Sen benim evimsin.\n\nBöyle bir insanı hayatımda bulduğum için çok şanslıyım. Her gün bunun farkındayım.\n\nTeşekkür ederim hayatıma girdiğin için. Teşekkür ederim kaldığın için.\n\nSeni seviyorum 💕',
    created_at: '2024-09-10T16:00:00Z'
  },
  {
    id: '5',
    title: 'Gelecek Hayallerimiz',
    body: 'Dün gece yatarken konuşmuştuk ya...\n\nGelecek hakkında, hayallerimiz hakkında. Ben de bugün düşündüm, yazmak istedim.\n\nSeninle küçük bir evimiz olsun istiyorum. Balkonunda çiçekler yetiştirelim. Pazar sabahları kahvaltı yapalım, sonra dizilere bakalım. Akşamları yemek yapalım birlikte, bulaşıkları yıkarken şarkı söyleyelim.\n\nİki kedimiz olsun. Biri senin, biri benim. Kavga etsinler, biz barıştıralım.\n\nYazları tatile gidelim. Kışları evde battaniyenin altında film izleyelim. Baharları park­larda yürüyelim. Sonbaharda yaprak toplama.\n\nVe en önemlisi, hep birlikte olalım. Yaşlanalım birlikte. Saçlarımız ağarsın, buruşuklarımız çoğalsın, ama sevgimiz hiç azalmasın.\n\nBunları seninle yaşamak için sabırsızlanıyorum.\n\nHep seninle 💑',
    created_at: '2024-10-01T22:00:00Z'
  }
];

export const mockupSongs = [
  {
    id: '1',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    youtube_url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    youtube_id: '2Vv-BfVoq4g',
    thumbnail_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    category: 'romantik',
    created_at: '2024-01-20T10:00:00Z'
  },
  {
    id: '2',
    title: 'Photograph',
    artist: 'Ed Sheeran',
    youtube_url: 'https://www.youtube.com/watch?v=nSDgHBxUbVQ',
    youtube_id: 'nSDgHBxUbVQ',
    thumbnail_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    category: 'nostaljik',
    created_at: '2024-02-15T14:00:00Z'
  },
  {
    id: '3',
    title: 'A Thousand Years',
    artist: 'Christina Perri',
    youtube_url: 'https://www.youtube.com/watch?v=rtOvBOTyX00',
    youtube_id: 'rtOvBOTyX00',
    thumbnail_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    category: 'romantik',
    created_at: '2024-03-10T16:00:00Z'
  },
  {
    id: '4',
    title: 'Can\'t Help Falling in Love',
    artist: 'Elvis Presley',
    youtube_url: 'https://www.youtube.com/watch?v=vGJTaP6anOU',
    youtube_id: 'vGJTaP6anOU',
    thumbnail_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    category: 'klasik',
    created_at: '2024-04-05T11:00:00Z'
  },
  {
    id: '5',
    title: 'All of Me',
    artist: 'John Legend',
    youtube_url: 'https://www.youtube.com/watch?v=450p7goxZqg',
    youtube_id: '450p7goxZqg',
    thumbnail_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    category: 'romantik',
    created_at: '2024-05-12T09:00:00Z'
  },
  {
    id: '6',
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    youtube_url: 'https://www.youtube.com/watch?v=lp-EO5I60KA',
    youtube_id: 'lp-EO5I60KA',
    thumbnail_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    category: 'sakin',
    created_at: '2024-06-20T15:00:00Z'
  }
];

// Movie mockup data
export const mockupMovie = {
  Title: 'Before Sunrise',
  Year: '1995',
  Rated: 'R',
  Released: '27 Jan 1995',
  Runtime: '101 min',
  Genre: 'Drama, Romance',
  Director: 'Richard Linklater',
  Writer: 'Richard Linklater, Kim Krizan',
  Actors: 'Ethan Hawke, Julie Delpy, Andrea Eckert',
  Plot: 'A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
  Language: 'English, German, French',
  Country: 'USA, Austria, Switzerland',
  Awards: 'Nominated for 1 Oscar. 2 wins & 6 nominations total',
  Poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '8.1/10'
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '100%'
    },
    {
      Source: 'Metacritic',
      Value: '77/100'
    }
  ],
  Metascore: '77',
  imdbRating: '8.1',
  imdbVotes: '324,567',
  imdbID: 'tt0112471',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: '$5,535,405',
  Production: 'Castle Rock Entertainment',
  Website: 'N/A',
  Response: 'True'
};
