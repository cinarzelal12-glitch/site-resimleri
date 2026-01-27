
export const NAV_LINKS = [
  { name: 'Anasayfa', href: '#home', page: 'home' },
  { name: 'Kurumsal', href: '#corporate', page: 'home' },
  { name: 'Hizmetler', href: '#services', page: 'home' },
  { name: 'Projeler', href: '#top', page: 'projects' },
  { name: 'İletişim', href: '#contact', page: 'home' },
];

export const SERVICES = [
  {
    icon: 'engineering',
    title: 'Genel Müteahhitlik',
    description: 'Anahtar teslim projelerden şantiye yönetimine kadar uçtan uca profesyonel çözümler sunuyoruz. Planlamadan anahtar teslime kadar her aşamada titizlikle çalışıyoruz.'
  },
  {
    icon: 'domain_add',
    title: 'Kentsel Dönüşüm',
    description: 'Eski ve riskli yapıları, güncel deprem yönetmeliğine uygun, modern ve güvenli yaşam alanlarına dönüştürüyoruz. Süreci malikler için şeffaf bir şekilde yönetiyoruz.'
  },
  {
    icon: 'apartment',
    title: 'Rezidans Yapımı',
    description: 'Lüks, konfor ve teknolojiyi birleştiren yüksek standartlı konut projeleri üretiyoruz. Akıllı ev sistemleri ve sosyal donatılarla yaşam kalitesini artırıyoruz.'
  },
  {
    icon: 'museum',
    title: 'Restorasyon',
    description: 'Tarihi dokuyu koruyarak geçmişin mirasını geleceğe taşıyan hassas uygulamalar gerçekleştiriyoruz. Kültür varlıklarını uzman mimar ve restoratör ekibimizle ihya ediyoruz.'
  }
];

const IMAGE_BASE = "/imagines/";

// Project Type Definition
export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  year: number;
  area?: number;
  features: string[];
}

// Tüm 31 Proje Verisi
export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lüks Rezidans Projesi',
    category: 'Tamamlanmış Projemiz',
    location: 'Kadıköy, İstanbul',
    image: `${IMAGE_BASE}proje1.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Kentsel dönüşüm kapsamında yenilenen bölgede prestijli yaşam alanı.',
    year: 2023,
    area: 4500,
    features: ['Akıllı Ev Sistemi', 'Kapalı Otopark', 'Sosyal Tesis Alanı', '7/24 Güvenlik']
  },
  {
    id: 2,
    title: 'Modern Konut Kompleksi',
    category: 'Tamamlanmış Projemiz',
    location: 'Üsküdar, İstanbul',
    image: `${IMAGE_BASE}proje2.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Boğaz manzaralı konumda lüks yaşam alanı.',
    year: 2022,
    area: 6200,
    features: ['Panoramik Manzara', 'Yüzme Havuzu', 'Fitness Center', 'Çocuk Oyun Alanı']
  },
  {
    id: 3,
    title: 'Tarihi Bina Restorasyonu',
    category: 'Tamamlanmış Projemiz',
    location: 'Beyoğlu, İstanbul',
    image: `${IMAGE_BASE}proje3.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Tarihi dokuyu koruyarak çağdaş yaşam standardı.',
    year: 2021,
    area: 2800,
    features: ['Tarihi Restorasyon', 'Orijinal Detaylar', 'Modern Altyapı', 'Merkezi Konum']
  },
  {
    id: 4,
    title: 'Yeşil Vadi Evleri',
    category: 'Tamamlanmış Projemiz',
    location: 'Sarıyer, İstanbul',
    image: `${IMAGE_BASE}proje4.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Doğayla iç içe sakin yaşam alanı.',
    year: 2023,
    area: 8500,
    features: ['Geniş Yeşil Alanlar', 'Yürüyüş Parkurları', 'Organik Pazar', 'Pet-Friendly']
  },
  {
    id: 5,
    title: 'Business Plaza',
    category: 'Tamamlanmış Projemiz',
    location: 'Maslak, İstanbul',
    image: `${IMAGE_BASE}proje5.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. İş merkezi konumunda prestijli ofis alanları.',
    year: 2022,
    area: 12000,
    features: ['A+ Ofis', 'Konferans Salonları', 'Cafeteria', 'Otopark']
  },
  {
    id: 6,
    title: 'Sahil Rezidans',
    category: 'Tamamlanmış Projemiz',
    location: 'Florya, İstanbul',
    image: `${IMAGE_BASE}proje6.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz manzaralı lüks yaşam.',
    year: 2023,
    area: 5400,
    features: ['Deniz Manzarası', 'Plaj Erişimi', 'SPA & Wellness', 'Concierge Hizmeti']
  },
  {
    id: 7,
    title: 'Şehir Merkezi Konutları',
    category: 'Tamamlanmış Projemiz',
    location: 'Şişli, İstanbul',
    image: `${IMAGE_BASE}proje7.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Şehir merkezinde ulaşım avantajlı konum.',
    year: 2021,
    area: 3200,
    features: ['Metro İstasyonu Yakını', 'Alışveriş Merkezi', 'Okullara Yakın', 'Güvenlikli Kompleks']
  },
  {
    id: 8,
    title: 'Doğa Villalar',
    category: 'Tamamlanmış Projemiz',
    location: 'Zekeriyaköy, İstanbul',
    image: `${IMAGE_BASE}proje8.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Doğayla iç içe villa yaşamı.',
    year: 2022,
    area: 15000,
    features: ['Müstakil Villalar', 'Özel Bahçe', 'Kapalı Site', 'Spor Tesisleri']
  },
  {
    id: 9,
    title: 'Kentsel Dönüşüm Projesi',
    category: 'Tamamlanmış Projemiz',
    location: 'Bağcılar, İstanbul',
    image: `${IMAGE_BASE}proje9.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Depreme dayanıklı modern yapı.',
    year: 2023,
    area: 7800,
    features: ['Deprem Yönetmeliği', 'Geniş Balkonlar', 'Merkezi Isıtma', 'Asansör']
  },
  {
    id: 10,
    title: 'Aile Konutları',
    category: 'Tamamlanmış Projemiz',
    location: 'Ataşehir, İstanbul',
    image: `${IMAGE_BASE}proje10.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Aile dostu modern yaşam alanı.',
    year: 2022,
    area: 4200,
    features: ['Geniş Daireler', 'Çocuk Parkı', 'Market', 'Güvenlikli Giriş']
  },
  {
    id: 11,
    title: 'Lüks Villa Kompleksi',
    category: 'Tamamlanmış Projemiz',
    location: 'Beykoz, İstanbul',
    image: `${IMAGE_BASE}proje11.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Boğaz manzaralı villa yaşamı.',
    year: 2022,
    area: 18000,
    features: ['Özel Havuz', 'Bahçe', 'Deniz Manzarası', 'Özel Güvenlik']
  },
  {
    id: 12,
    title: 'Merkez Ofis Binası',
    category: 'Tamamlanmış Projemiz',
    location: 'Levent, İstanbul',
    image: `${IMAGE_BASE}proje12.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Prestijli iş merkezi.',
    year: 2021,
    area: 9500,
    features: ['A+ Ofis', 'Metro Bağlantısı', 'Restoran', 'Toplantı Salonları']
  },
  {
    id: 13,
    title: 'Aile Rezidans Projesi',
    category: 'Tamamlanmış Projemiz',
    location: 'Bahçeşehir, İstanbul',
    image: `${IMAGE_BASE}proje13.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Aile dostu geniş daireler.',
    year: 2023,
    area: 6800,
    features: ['Geniş Daireler', 'Yeşil Alan', 'Okul Servisi', 'Market']
  },
  {
    id: 14,
    title: 'Lüks Konut Sitesi',
    category: 'Tamamlanmış Projemiz',
    location: 'Bebek, İstanbul',
    image: `${IMAGE_BASE}proje14.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Prestijli bölgede lüks yaşam.',
    year: 2022,
    area: 4800,
    features: ['Boğaz Manzarası', 'Concierge', 'SPA', 'Kapalı Havuz']
  },
  {
    id: 15,
    title: 'Modern Apartman Kompleksi',
    category: 'Tamamlanmış Projemiz',
    location: 'Kartal, İstanbul',
    image: `${IMAGE_BASE}proje15.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz manzaralı modern yaşam.',
    year: 2023,
    area: 7200,
    features: ['Deniz Manzarası', 'Yüzme Havuzu', 'Tenis Kortu', 'Güvenlik']
  },
  {
    id: 16,
    title: 'İş Merkezi Projesi',
    category: 'Tamamlanmış Projemiz',
    location: 'Gayrettepe, İstanbul',
    image: `${IMAGE_BASE}proje16.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Modern ofis alanları.',
    year: 2021,
    area: 11000,
    features: ['Akıllı Bina', 'Konferans Merkezi', 'Restoran', 'Vale Hizmeti']
  },
  {
    id: 17,
    title: 'Tarihi Han Restorasyonu',
    category: 'Tamamlanmış Projemiz',
    location: 'Eminönü, İstanbul',
    image: `${IMAGE_BASE}proje17.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Osmanlı mimarisi restorasyonu.',
    year: 2020,
    area: 3500,
    features: ['Tarihi Restorasyon', 'Kültür Merkezi', 'Cafe', 'Sanat Galerisi']
  },
  {
    id: 18,
    title: 'Sahil Konutları',
    category: 'Tamamlanmış Projemiz',
    location: 'Yeşilköy, İstanbul',
    image: `${IMAGE_BASE}proje18.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz kenarında yaşam.',
    year: 2022,
    area: 5600,
    features: ['Plaja Yakın', 'Deniz Manzarası', 'Fitness', 'Havuz']
  },
  {
    id: 19,
    title: 'Tower Rezidans',
    category: 'Tamamlanmış Projemiz',
    location: 'Mecidiyeköy, İstanbul',
    image: `${IMAGE_BASE}proje19.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Yüksek kule, geniş manzara.',
    year: 2023,
    area: 8900,
    features: ['Panoramik Manzara', 'Sky Lounge', 'Güvenlik', 'Otopark']
  },
  {
    id: 20,
    title: 'Yeşil Bahçe Evleri',
    category: 'Tamamlanmış Projemiz',
    location: 'Göktürk, İstanbul',
    image: `${IMAGE_BASE}proje20.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Doğayla iç içe sakin yaşam.',
    year: 2022,
    area: 12500,
    features: ['Geniş Bahçeler', 'Yürüyüş Yolları', 'Çocuk Parkı', 'Spor Alanları']
  },
  {
    id: 21,
    title: 'Merkezi Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    location: 'Nişantaşı, İstanbul',
    image: `${IMAGE_BASE}proje21.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Şehir merkezinde lüks yaşam.',
    year: 2021,
    area: 3800,
    features: ['Merkezi Konum', 'Alışverişe Yakın', 'Güvenlik', 'Vale']
  },
  {
    id: 22,
    title: 'Modern Loft Daireler',
    category: 'Tamamlanmış Projemiz',
    location: 'Karaköy, İstanbul',
    image: `${IMAGE_BASE}proje22.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Endüstriyel tasarım.',
    year: 2023,
    area: 2900,
    features: ['Loft Tasarım', 'Yüksek Tavan', 'Sanat Ortamı', 'Cafeler']
  },
  {
    id: 23,
    title: 'Villa Bahçelievler',
    category: 'Tamamlanmış Projemiz',
    location: 'Beykoz, İstanbul',
    image: `${IMAGE_BASE}proje23.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Müstakil villa yaşamı.',
    year: 2022,
    area: 16000,
    features: ['Müstakil Bahçe', 'Havuz', 'Garaj', 'Güvenlik']
  },
  {
    id: 24,
    title: 'Boğaz Manzaralı Rezidans',
    category: 'Tamamlanmış Projemiz',
    location: 'Kanlıca, İstanbul',
    image: `${IMAGE_BASE}proje24.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Boğaza nazır lüks yaşam.',
    year: 2023,
    area: 5200,
    features: ['Boğaz Manzarası', 'Özel İskele', 'Güvenlik', 'Concierge']
  },
  {
    id: 25,
    title: 'Aile Siteleri',
    category: 'Tamamlanmış Projemiz',
    location: 'Pendik, İstanbul',
    image: `${IMAGE_BASE}proje25.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Aile dostu site yaşamı.',
    year: 2022,
    area: 9200,
    features: ['Çocuk Alanları', 'Spor Tesisleri', 'Market', 'Okul Servisi']
  },
  {
    id: 26,
    title: 'Marina Rezidans',
    category: 'Tamamlanmış Projemiz',
    location: 'Ataköy, İstanbul',
    image: `${IMAGE_BASE}proje26.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Marina kenarında lüks yaşam.',
    year: 2023,
    area: 6400,
    features: ['Marina Manzarası', 'Yat Bağlama', 'Restaurant', 'SPA']
  },
  {
    id: 27,
    title: 'Tepede Villa Projesi',
    category: 'Tamamlanmış Projemiz',
    location: 'Çamlıca, İstanbul',
    image: `${IMAGE_BASE}proje27.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Şehir manzaralı villalar.',
    year: 2021,
    area: 14000,
    features: ['Şehir Manzarası', 'Geniş Bahçe', 'Havuz', 'Kapalı Site']
  },
  {
    id: 28,
    title: 'Sahil Apartmanları',
    category: 'Tamamlanmış Projemiz',
    location: 'Moda, İstanbul',
    image: `${IMAGE_BASE}proje28.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz kenarında konfor.',
    year: 2022,
    area: 4100,
    features: ['Deniz Manzarası', 'Sahil Yolu', 'Cafeler', 'Parklar']
  },
  {
    id: 29,
    title: 'Kültür Merkezi Restorasyonu',
    category: 'Tamamlanmış Projemiz',
    location: 'Haliç, İstanbul',
    image: `${IMAGE_BASE}proje29.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Tarihi bina yenileme.',
    year: 2020,
    area: 5800,
    features: ['Tarihi Doku', 'Kültür Etkinlikleri', 'Cafe', 'Sanat Galerisi']
  },
  {
    id: 30,
    title: 'Şehir Konutları',
    category: 'Tamamlanmış Projemiz',
    location: 'Başakşehir, İstanbul',
    image: `${IMAGE_BASE}proje30.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Modern şehir yaşamı.',
    year: 2023,
    area: 7600,
    features: ['Metro Yakını', 'AVM', 'Parklar', 'Güvenlik']
  },
  {
    id: 31,
    title: 'Havalimanı Lojistik Merkezi',
    category: 'Tamamlanmış Projemiz',
    location: 'Arnavutköy, İstanbul',
    image: `${IMAGE_BASE}proje31.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Stratejik konum.',
    year: 2022,
    area: 25000,
    features: ['Havalimanı Yakını', 'Depo Alanları', 'Ofisler', 'Güvenlik']
  },
];

// Anasayfada Öne Çıkarılan Projeler (İlk 3)
export const PROJECTS = ALL_PROJECTS.slice(0, 3);

export const COMPANY_INFO = {
  address: 'Örnek Mahallesi, 1360. Sokak, No: 6, Esenyurt / İSTANBUL',
  phone: '0532 652 97 58',
  whatsapp: '905326529758',
  email: 'ercan_cinar_insaat@hotmail.com',
  yearFounded: 2002,
  completedProjects: 85
};

export const LEGAL_CONTENTS = {
  kvkk: {
    title: 'KVKK Aydınlatma Metni',
    content: `Özçınar İnşaat olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.

1. Veri Sorumlusu
Kişisel verileriniz, veri sorumlusu sıfatıyla Özçınar İnşaat tarafından işlenmektedir.

2. Kişisel Verilerin İşlenme Amacı
Toplanan kişisel verileriniz; şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak, ticari ve iş stratejilerimizin belirlenmesi ve uygulanması amaçlarıyla işlenmektedir.

3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
Kişisel verileriniz, kanunen yetkili kamu kurumları ve özel kişiler ile iş ortaklarımıza KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilecektir.

4. Veri Sahibinin Hakları
KVKK'nın 11. maddesi uyarınca veri sahipleri; kişisel veri işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme haklarına sahiptir.`
  },
  privacy: {
    title: 'Gizlilik Politikası',
    content: `Özçınar İnşaat ("Şirket"), web sitesi ziyaretçilerinin gizliliğini korumayı taahhüt eder. Bu Gizlilik Politikası, web sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını açıklar.

1. Bilgi Toplama
Sitemizi ziyaret ettiğinizde, IP adresiniz, tarayıcı türünüz ve erişim zamanlarınız gibi teknik veriler otomatik olarak toplanabilir. Ayrıca, iletişim formları aracılığıyla kendi isteğinizle sağladığınız ad, e-posta ve telefon numarası gibi bilgiler saklanır.

2. Bilgi Kullanımı
Toplanan bilgiler, size daha iyi hizmet sunmak, taleplerinizi yanıtlamak ve site deneyimini iyileştirmek amacıyla kullanılır.

3. Güvenlik
Şirketimiz, kişisel verilerinizi yetkisiz erişim, kullanım veya ifşaya karşı korumak için endüstri standardı güvenlik önlemleri uygulamaktadır.`
  },
  cookies: {
    title: 'Çerez Politikası',
    content: `Web sitemizde, kullanıcı deneyimini geliştirmek ve sitenin verimli çalışmasını sağlamak amacıyla çerezler (cookies) kullanılmaktadır.

1. Çerez Nedir?
Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır.

2. Kullanılan Çerez Türleri
- Zorunlu Çerezler: Sitenin çalışması için gereklidir.
- Analitik Çerezler: Ziyaretçi sayısını ve site trafiğini analiz etmemizi sağlar.
- İşlevsel Çerezler: Tercihlerinizi hatırlayarak size kişiselleştirilmiş bir deneyim sunar.

3. Çerez Yönetimi
Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya silebilirsiniz. Ancak, bu durumda sitemizin bazı özellikleri düzgün çalışmayabilir.`
  },
  terms: {
    title: 'Kullanım Koşulları',
    content: `Bu web sitesini ziyaret ederek aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız:

1. Telif Hakları
Sitede yer alan tüm metinler, görseller, logolar ve diğer içerikler Özçınar İnşaat'a aittir ve izinsiz kullanılamaz.

2. Sorumluluk Reddi
Şirketimiz, sitede yer alan bilgilerin doğruluğu ve güncelliği konusunda azami özeni göstermekle birlikte, olası hatalardan veya eksikliklerden sorumlu tutulamaz.

3. Değişiklikler
Özçınar İnşaat, bu kullanım koşullarını dilediği zaman önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.`
  },
  hr: {
    title: 'İnsan Kaynakları',
    content: `Özçınar İnşaat olarak, başarımızın arkasındaki en büyük gücün çalışanlarımız olduğuna inanıyoruz.

Açık Pozisyonlar:
Şu anda aktif bir iş ilanımız bulunmamaktadır. Ancak, genel başvurularınızı değerlendirmek üzere özgeçmişlerinizi ercan_cinar_insaat@hotmail.com adresine iletebilirsiniz.

İşe Alım Süreci:
Başvurular, İnsan Kaynakları departmanımız tarafından titizlikle incelenir ve nitelikleri uygun bulunan adaylarla iletişime geçilir. Değerlerimizle örtüşen, dinamik ve gelişime açık takım arkadaşları arıyoruz.`
  }
};
