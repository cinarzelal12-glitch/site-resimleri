
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
  area?: number; // m²
  features: string[];
}

// Tüm 31 Proje Verisi
export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Zümrüt Rezidans',
    category: 'Lüks Konut',
    location: 'Kadıköy, İstanbul',
    image: `${IMAGE_BASE}proje1.jpg`,
    description: 'Modern mimari ve yeşil yaşam alanlarının buluştuğu premium rezidans projesi. Boğaz manzaralı daireler ve sosyal tesisler.',
    year: 2022,
    area: 15000,
    features: ['Boğaz Manzarası', 'Kapalı Otopark', 'Fitness Center', '7/24 Güvenlik', 'Yeşil Alanlar']
  },
  {
    id: 2,
    title: 'Çınar Apartmanı',
    category: 'Kentsel Dönüşüm',
    location: 'Beşiktaş, İstanbul',
    image: `${IMAGE_BASE}proje2.jpg`,
    description: 'Eski yapı dokusunun deprem güvenliği standartlarında yenilenerek modern yaşam alanına dönüştürülmesi.',
    year: 2021,
    area: 8500,
    features: ['Deprem Yönetmeliğine Uygun', 'Enerji Tasarruflu', 'Asansör Sistemi', 'Geniş Balkonlar']
  },
  {
    id: 3,
    title: 'Eski Şehir Restorasyonu',
    category: 'Restorasyon',
    location: 'Fatih, İstanbul',
    image: `${IMAGE_BASE}proje3.jpg`,
    description: 'Tarihi dokuyu koruyarak Osmanlı dönemine ait ahşap konakların restore edilmesi ve kültür mirasının korunması.',
    year: 2020,
    area: 3200,
    features: ['Tarihi Doku Korundu', 'Özgün Malzeme Kullanımı', 'Kültür Varlığı Belgeli', 'UNESCO Standartları']
  },
  {
    id: 4,
    title: 'Vadi Panorama',
    category: 'Lüks Konut',
    location: 'Sarıyer, İstanbul',
    image: `${IMAGE_BASE}proje4.jpg`,
    description: 'Orman ve vadi manzaralı, doğayla iç içe lüks villa konseptinde konut projesi. Özel havuz ve bahçeler.',
    year: 2023,
    area: 22000,
    features: ['Özel Havuz', 'Geniş Bahçeler', 'Orman Manzarası', 'Akıllı Ev Sistemi', 'Güvenlikli Site']
  },
  {
    id: 5,
    title: 'Altın Boynuz Ofisleri',
    category: 'Ticari',
    location: 'Beyoğlu, İstanbul',
    image: `${IMAGE_BASE}proje5.jpg`,
    description: 'A+ ofis konseptinde, modern iş merkezleri için yüksek teknolojili ticari yapı. Merkezi konumda prestijli adres.',
    year: 2022,
    area: 18000,
    features: ['A+ Ofis', 'Merkezi Konum', 'Yüksek Tavan', 'Fiber İnternet', 'Vale Hizmeti']
  },
  {
    id: 6,
    title: 'Sahil Konakları',
    category: 'Villa',
    location: 'Beylikdüzü, İstanbul',
    image: `${IMAGE_BASE}proje6.jpg`,
    description: 'Deniz manzaralı müstakil villalar. Her villada özel plaj erişimi, kapalı havuz ve geniş teraslar.',
    year: 2023,
    area: 12000,
    features: ['Deniz Manzarası', 'Özel Plaj', 'Kapalı Havuz', 'Akıllı Ev', 'Peyzaj Bahçe']
  },
  {
    id: 7,
    title: 'Merkez Plaza',
    category: 'Ticari',
    location: 'Şişli, İstanbul',
    image: `${IMAGE_BASE}proje7.jpg`,
    description: 'Çok katlı plaza binası. Perakende alanları, ofis katları ve konferans salonları içeren karma kullanımlı proje.',
    year: 2021,
    area: 25000,
    features: ['Alışveriş Alanı', 'Konferans Salonu', 'Restoran Katı', 'Otopark', '24 Saat Güvenlik']
  },
  {
    id: 8,
    title: 'Yeşil Vadi Evleri',
    category: 'Lüks Konut',
    location: 'Üsküdar, İstanbul',
    image: `${IMAGE_BASE}proje8.jpg`,
    description: 'Geniş yeşil alanlarla çevrili, doğal yaşamı şehir merkezinde sunan premium konut projesi.',
    year: 2022,
    area: 14000,
    features: ['Geniş Yeşil Alan', 'Çocuk Parkı', 'Yürüyüş Yolları', 'Sosyal Tesisler', 'Kapalı Havuz']
  },
  {
    id: 9,
    title: 'Tarihi Han İhyası',
    category: 'Restorasyon',
    location: 'Eminönü, İstanbul',
    image: `${IMAGE_BASE}proje9.jpg`,
    description: 'Osmanlı dönemi hanının restore edilerek butik otel ve kültür merkezine dönüştürülmesi projesi.',
    year: 2020,
    area: 4500,
    features: ['Tarihi Yapı', 'Butik Otel', 'Kültür Merkezi', 'Özgün Taş İşçiliği', 'Restorasyon Ödülü']
  },
  {
    id: 10,
    title: 'Modern Yaşam Sitesi',
    category: 'Kentsel Dönüşüm',
    location: 'Maltepe, İstanbul',
    image: `${IMAGE_BASE}proje10.jpg`,
    description: 'Eski site yapısının tamamen yenilenerek modern standartlarda yeniden inşa edilmesi. Akıllı bina sistemleri.',
    year: 2023,
    area: 18500,
    features: ['Akıllı Bina', 'Depreme Dayanıklı', 'Enerji Verimli', 'Geniş Sosyal Alanlar', 'Spor Tesisleri']
  },
  {
    id: 11,
    title: 'Kuzey Yıldızı Rezidans',
    category: 'Lüks Konut',
    location: 'Ataşehir, İstanbul',
    image: `${IMAGE_BASE}proje11.jpg`,
    description: 'Gökdelen tarzı lüks rezidans. Panoramik şehir manzarası ve 5 yıldız otel konforu.',
    year: 2022,
    area: 28000,
    features: ['Gökdelen', 'Panoramik Manzara', 'Concierge Hizmeti', 'Spa & Wellness', 'Yüzme Havuzu']
  },
  {
    id: 12,
    title: 'Mavi Marmara Konutları',
    category: 'Lüks Konut',
    location: 'Kartal, İstanbul',
    image: `${IMAGE_BASE}proje12.jpg`,
    description: 'Deniz manzaralı konut kompleksi. Marina ve yat kulübü erişimi ile premium yaşam.',
    year: 2023,
    area: 16000,
    features: ['Deniz Manzarası', 'Marina Erişimi', 'Özel Plaj', 'Su Sporları', 'Restoran']
  },
  {
    id: 13,
    title: 'Anadolu İş Merkezi',
    category: 'Ticari',
    location: 'Pendik, İstanbul',
    image: `${IMAGE_BASE}proje13.jpg`,
    description: 'Anadolu yakasının en büyük iş merkezi. Lojistik depo alanları ve ofis katlarıyla karma kullanım.',
    year: 2021,
    area: 32000,
    features: ['Lojistik Depo', 'Ofis Katları', 'Yüksek Tavan', 'Rampa Sistemi', 'Güvenlik']
  },
  {
    id: 14,
    title: 'Piri Reis Villaları',
    category: 'Villa',
    location: 'Tuzla, İstanbul',
    image: `${IMAGE_BASE}proje14.jpg`,
    description: 'Denize sıfır konumda müstakil villalar. Her villa özel iskele ve yat bağlama yeri.',
    year: 2023,
    area: 9500,
    features: ['Denize Sıfır', 'Özel İskele', 'Yat Bağlama', 'Bahçe', 'Deniz Manzarası']
  },
  {
    id: 15,
    title: 'Gökkuşağı Apartmanı',
    category: 'Kentsel Dönüşüm',
    location: 'Bağcılar, İstanbul',
    image: `${IMAGE_BASE}proje15.jpg`,
    description: 'Riskli yapının yıkılarak yerine güvenli, modern apartmanın inşa edilmesi. Deprem yönetmeliğine uygun.',
    year: 2022,
    area: 7200,
    features: ['Deprem Dayanıklı', 'Modern Tasarım', 'Asansör', 'Jeneratör', 'Otopark']
  },
  {
    id: 16,
    title: 'Levent Loft Projesi',
    category: 'Lüks Konut',
    location: 'Levent, İstanbul',
    image: `${IMAGE_BASE}proje16.jpg`,
    description: 'Endüstriyel tasarım anlayışıyla loft daireler. Yüksek tavanlar ve geniş açık alan konsepti.',
    year: 2023,
    area: 11000,
    features: ['Loft Tasarım', 'Yüksek Tavan', 'Açık Mutfak', 'Geniş Teraslar', 'Şehir Merkezi']
  },
  {
    id: 17,
    title: 'Galata Restorasyon',
    category: 'Restorasyon',
    location: 'Karaköy, İstanbul',
    image: `${IMAGE_BASE}proje17.jpg`,
    description: 'Galata bölgesindeki tarihi binaların restore edilerek sanat galerisi ve kafeler olarak kullanıma açılması.',
    year: 2021,
    area: 2800,
    features: ['Tarihi Bina', 'Sanat Galerisi', 'Cafe', 'Özgün Mimari', 'Turizm Bölgesi']
  },
  {
    id: 18,
    title: 'Büyükada Köşk Onarımı',
    category: 'Restorasyon',
    location: 'Adalar, İstanbul',
    image: `${IMAGE_BASE}proje18.jpg`,
    description: 'Tarihi Büyükada köşkünün özgün ahşap işçiliği korunarak restore edilmesi.',
    year: 2020,
    area: 1800,
    features: ['Ahşap Köşk', 'Özgün Malzeme', 'Tarihi Eser', 'Bahçe Düzenlemesi', 'Ada Mimarisi']
  },
  {
    id: 19,
    title: 'Maslak Business Tower',
    category: 'Ticari',
    location: 'Maslak, İstanbul',
    image: `${IMAGE_BASE}proje19.jpg`,
    description: 'Modern iş kulesi. LEED sertifikalı yeşil bina. Yüksek teknoloji ve enerji verimliliği.',
    year: 2022,
    area: 35000,
    features: ['LEED Sertifikalı', 'Yeşil Bina', 'Yüksek Teknoloji', 'Helipad', 'Panoramik Manzara']
  },
  {
    id: 20,
    title: 'Florya Bahçeleri',
    category: 'Lüks Konut',
    location: 'Florya, İstanbul',
    image: `${IMAGE_BASE}proje20.jpg`,
    description: 'Sahil şeridinde bahçeli konutlar. Her konut özel bahçe ve deniz erişimi ile donatıldı.',
    year: 2023,
    area: 13000,
    features: ['Sahil Şeridi', 'Özel Bahçe', 'Deniz Erişimi', 'Peyzaj', 'Güvenlikli']
  },
  {
    id: 21,
    title: 'Kanyon Evleri',
    category: 'Kentsel Dönüşüm',
    location: 'Kağıthane, İstanbul',
    image: `${IMAGE_BASE}proje21.jpg`,
    description: 'Kağıthane vadisindeki eski yapıların modern rezidansa dönüştürülmesi. Çevre dostu tasarım.',
    year: 2022,
    area: 19000,
    features: ['Vadi Manzarası', 'Çevre Dostu', 'Yeşil Çatı', 'Bisiklet Yolu', 'Yağmur Suyu Toplama']
  },
  {
    id: 22,
    title: 'Güneşli Rezidans',
    category: 'Lüks Konut',
    location: 'Güneşli, İstanbul',
    image: `${IMAGE_BASE}proje22.jpg`,
    description: 'Güneş enerjisi sistemleri ile donatılmış çevre dostu rezidans. Enerji maliyeti sıfır yaşam.',
    year: 2023,
    area: 12500,
    features: ['Güneş Enerjisi', 'Enerji Pozitif', 'Akıllı Kontrol', 'Isı Yalıtımı', 'Yeşil Bina']
  },
  {
    id: 23,
    title: 'Zekeriyaköy Villaları',
    category: 'Villa',
    location: 'Sarıyer, İstanbul',
    image: `${IMAGE_BASE}proje23.jpg`,
    description: 'Orman içinde lüks villalar. Her villa geniş bahçe, havuz ve modern mimari.',
    year: 2022,
    area: 18000,
    features: ['Orman İçi', 'Müstakil Villa', 'Özel Havuz', 'Geniş Bahçe', 'Modern Mimari']
  },
  {
    id: 24,
    title: 'Boğaz Manzaralı Konutlar',
    category: 'Lüks Konut',
    location: 'Bebek, İstanbul',
    image: `${IMAGE_BASE}proje24.jpg`,
    description: 'Boğaz\'ın eşsiz manzarasına sahip ultra lüks konutlar. Her daire geniş teraslar ve premium malzeme.',
    year: 2023,
    area: 8000,
    features: ['Boğaz Manzarası', 'Ultra Lüks', 'Geniş Teraslar', 'Concierge', 'Vale Hizmeti']
  },
  {
    id: 25,
    title: 'Bakırköy Sahil Sitesi',
    category: 'Kentsel Dönüşüm',
    location: 'Bakırköy, İstanbul',
    image: `${IMAGE_BASE}proje25.jpg`,
    description: 'Sahil şeridindeki eski sitenin modern, depreme dayanıklı konutlara dönüştürülmesi.',
    year: 2021,
    area: 21000,
    features: ['Sahil Şeridi', 'Deniz Manzarası', 'Modern Tasarım', 'Deprem Dayanıklı', 'Sosyal Tesis']
  },
  {
    id: 26,
    title: 'İstinye Marina Projesi',
    category: 'Ticari',
    location: 'İstinye, İstanbul',
    image: `${IMAGE_BASE}proje26.jpg`,
    description: 'Marina, alışveriş merkezi ve konut kompleksi içeren karma kullanımlı proje.',
    year: 2023,
    area: 42000,
    features: ['Marina', 'AVM', 'Konut', 'Restoran', 'Yat Kulübü']
  },
  {
    id: 27,
    title: 'Çamlıca Köşkü',
    category: 'Lüks Konut',
    location: 'Çamlıca, İstanbul',
    image: `${IMAGE_BASE}proje27.jpg`,
    description: 'Çamlıca tepelerinde lüks konut. 360 derece şehir ve Boğaz manzarası.',
    year: 2022,
    area: 6500,
    features: ['Tepe Konumu', '360° Manzara', 'Lüks İç Mekan', 'Özel Bahçe', 'Helipad']
  },
  {
    id: 28,
    title: 'Moda Sahil Apartmanı',
    category: 'Kentsel Dönüşüm',
    location: 'Moda, İstanbul',
    image: `${IMAGE_BASE}proje28.jpg`,
    description: 'Moda sahilindeki eski yapının karakteri korunarak modern standartlarda yenilenmesi.',
    year: 2021,
    area: 5200,
    features: ['Sahil Konumu', 'Tarihi Karakter', 'Modern İç Mekan', 'Deniz Manzarası', 'Merkezi']
  },
  {
    id: 29,
    title: 'Haliç Kültür Merkezi',
    category: 'Restorasyon',
    location: 'Eyüpsultan, İstanbul',
    image: `${IMAGE_BASE}proje29.jpg`,
    description: 'Tersane binasının kültür merkezi ve müzeye dönüştürülmesi. Endüstriyel miras korundu.',
    year: 2020,
    area: 8500,
    features: ['Endüstriyel Miras', 'Kültür Merkezi', 'Müze', 'Restorasyon Ödülü', 'Haliç Manzarası']
  },
  {
    id: 30,
    title: 'Başakşehir Şehir Konutları',
    category: 'Kentsel Dönüşüm',
    location: 'Başakşehir, İstanbul',
    image: `${IMAGE_BASE}proje30.jpg`,
    description: 'Geniş kapsamlı kentsel dönüşüm projesi. Yeni şehir merkezi konsepti.',
    year: 2022,
    area: 45000,
    features: ['Şehir Merkezi', 'Geniş Proje', 'Parklar', 'Okullar', 'Alışveriş']
  },
  {
    id: 31,
    title: 'Havalimanı Lojistik Merkezi',
    category: 'Ticari',
    location: 'Arnavutköy, İstanbul',
    image: `${IMAGE_BASE}proje31.jpg`,
    description: 'Havalimanına yakın mega lojistik kompleks. Modern depolama ve dağıtım merkezi.',
    year: 2023,
    area: 68000,
    features: ['Mega Lojistik', 'Yüksek Tavan', 'Rampa Sistemi', 'Soğuk Hava Deposu', 'Gümrük Ofisi']
  },
];

// Anasayfada Öne Çıkarılan Projeler (İlk 3)
export const PROJECTS = ALL_PROJECTS.slice(0, 3);

export const COMPANY_INFO = {
  address: 'İstanbul',
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
