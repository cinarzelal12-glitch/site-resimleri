
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

const RAW_IMAGE_BASE = "https://raw.githubusercontent.com/cinarzelal12-glitch/site-resimleri/main/";

// Tüm 31 Proje Verisi
export const ALL_PROJECTS = [
  { id: 1, title: 'Zümrüt Rezidans', category: 'Lüks Konut', location: 'Kadıköy, İstanbul', image: `${RAW_IMAGE_BASE}proje1.jpg` },
  { id: 2, title: 'Çınar Apartmanı', category: 'Kentsel Dönüşüm', location: 'Beşiktaş, İstanbul', image: `${RAW_IMAGE_BASE}proje2.jpg` },
  { id: 3, title: 'Eski Şehir Restorasyonu', category: 'Restorasyon', location: 'Fatih, İstanbul', image: `${RAW_IMAGE_BASE}proje3.jpg` },
  { id: 4, title: 'Vadi Panorama', category: 'Lüks Konut', location: 'Sarıyer, İstanbul', image: `${RAW_IMAGE_BASE}proje4.jpg` },
  { id: 5, title: 'Altın Boynuz Ofisleri', category: 'Ticari', location: 'Beyoğlu, İstanbul', image: `${RAW_IMAGE_BASE}proje5.jpg` },
  { id: 6, title: 'Sahil Konakları', category: 'Villa', location: 'Beylikdüzü, İstanbul', image: `${RAW_IMAGE_BASE}proje6.jpg` },
  { id: 7, title: 'Merkez Plaza', category: 'Ticari', location: 'Şişli, İstanbul', image: `${RAW_IMAGE_BASE}proje7.jpg` },
  { id: 8, title: 'Yeşil Vadi Evleri', category: 'Lüks Konut', location: 'Üsküdar, İstanbul', image: `${RAW_IMAGE_BASE}proje8.jpg` },
  { id: 9, title: 'Tarihi Han İhyası', category: 'Restorasyon', location: 'Eminönü, İstanbul', image: `${RAW_IMAGE_BASE}proje9.jpg` },
  { id: 10, title: 'Modern Yaşam Sitesi', category: 'Kentsel Dönüşüm', location: 'Maltepe, İstanbul', image: `${RAW_IMAGE_BASE}proje10.jpg` },
  { id: 11, title: 'Kuzey Yıldızı Rezidans', category: 'Lüks Konut', location: 'Ataşehir, İstanbul', image: `${RAW_IMAGE_BASE}proje11.jpg` },
  { id: 12, title: 'Mavi Marmara Konutları', category: 'Lüks Konut', location: 'Kartal, İstanbul', image: `${RAW_IMAGE_BASE}proje12.jpg` },
  { id: 13, title: 'Anadolu İş Merkezi', category: 'Ticari', location: 'Pendik, İstanbul', image: `${RAW_IMAGE_BASE}proje13.jpg` },
  { id: 14, title: 'Piri Reis Villaları', category: 'Villa', location: 'Tuzla, İstanbul', image: `${RAW_IMAGE_BASE}proje14.jpg` },
  { id: 15, title: 'Gökkuşağı Apartmanı', category: 'Kentsel Dönüşüm', location: 'Bağcılar, İstanbul', image: `${RAW_IMAGE_BASE}proje15.jpg` },
  { id: 16, title: 'Levent Loft Projesi', category: 'Lüks Konut', location: 'Levent, İstanbul', image: `${RAW_IMAGE_BASE}proje16.jpg` },
  { id: 17, title: 'Galata Restorasyon', category: 'Restorasyon', location: 'Karaköy, İstanbul', image: `${RAW_IMAGE_BASE}proje17.jpg` },
  { id: 18, title: 'Büyükada Köşk Onarımı', category: 'Restorasyon', location: 'Adalar, İstanbul', image: `${RAW_IMAGE_BASE}proje18.jpg` },
  { id: 19, title: 'Maslak Business Tower', category: 'Ticari', location: 'Maslak, İstanbul', image: `${RAW_IMAGE_BASE}proje19.jpg` },
  { id: 20, title: 'Florya Bahçeleri', category: 'Lüks Konut', location: 'Florya, İstanbul', image: `${RAW_IMAGE_BASE}proje20.jpg` },
  { id: 21, title: 'Kanyon Evleri', category: 'Kentsel Dönüşüm', location: 'Kağıthane, İstanbul', image: `${RAW_IMAGE_BASE}proje21.jpg` },
  { id: 22, title: 'Güneşli Rezidans', category: 'Lüks Konut', location: 'Güneşli, İstanbul', image: `${RAW_IMAGE_BASE}proje22.jpg` },
  { id: 23, title: 'Zekeriyaköy Villaları', category: 'Villa', location: 'Sarıyer, İstanbul', image: `${RAW_IMAGE_BASE}proje23.jpg` },
  { id: 24, title: 'Boğaz Manzaralı Konutlar', category: 'Lüks Konut', location: 'Bebek, İstanbul', image: `${RAW_IMAGE_BASE}proje24.jpg` },
  { id: 25, title: 'Bakırköy Sahil Sitesi', category: 'Kentsel Dönüşüm', location: 'Bakırköy, İstanbul', image: `${RAW_IMAGE_BASE}proje25.jpg` },
  { id: 26, title: 'İstinye Marina Projesi', category: 'Ticari', location: 'İstinye, İstanbul', image: `${RAW_IMAGE_BASE}proje26.jpg` },
  { id: 27, title: 'Çamlıca Köşkü', category: 'Lüks Konut', location: 'Çamlıca, İstanbul', image: `${RAW_IMAGE_BASE}proje27.jpg` },
  { id: 28, title: 'Moda Sahil Apartmanı', category: 'Kentsel Dönüşüm', location: 'Moda, İstanbul', image: `${RAW_IMAGE_BASE}proje28.jpg` },
  { id: 29, title: 'Haliç Kültür Merkezi', category: 'Restorasyon', location: 'Eyüpsultan, İstanbul', image: `${RAW_IMAGE_BASE}proje29.jpg` },
  { id: 30, title: 'Başakşehir Şehir Konutları', category: 'Kentsel Dönüşüm', location: 'Başakşehir, İstanbul', image: `${RAW_IMAGE_BASE}proje30.jpg` },
  { id: 31, title: 'Havalimanı Lojistik Merkezi', category: 'Ticari', location: 'Arnavutköy, İstanbul', image: `${RAW_IMAGE_BASE}proje31.jpg` },
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
