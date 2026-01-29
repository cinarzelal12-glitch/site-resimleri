
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
  image: string;
  description: string;
}

// Tüm 31 Proje Verisi
export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje1.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Kentsel dönüşüm kapsamında yenilenen bölgede prestijli yaşam alanı.'
  },
  {
    id: 2,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje2.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Boğaz manzaralı konumda lüks yaşam alanı.'
  },
  {
    id: 3,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje3.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Tarihi dokuyu koruyarak çağdaş yaşam standardı.'
  },
  {
    id: 4,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje4.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Doğayla iç içe sakin yaşam alanı.'
  },
  {
    id: 5,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje5.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. İş merkezi konumunda prestijli ofis alanları.'
  },
  {
    id: 6,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje6.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz manzaralı lüks yaşam.'
  },
  {
    id: 7,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje7.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Şehir merkezinde ulaşım avantajlı konum.'
  },
  {
    id: 8,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje8.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Doğayla iç içe villa yaşamı.'
  },
  {
    id: 9,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje9.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Depreme dayanıklı modern yapı.'
  },
  {
    id: 10,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje10.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Aile dostu modern yaşam alanı.'
  },
  {
    id: 11,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje11.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Boğaz manzaralı villa yaşamı.'
  },
  {
    id: 12,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje12.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Prestijli iş merkezi.'
  },
  {
    id: 13,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje13.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Aile dostu geniş daireler.'
  },
  {
    id: 14,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje14.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Prestijli bölgede lüks yaşam.'
  },
  {
    id: 15,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje15.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz manzaralı modern yaşam.'
  },
  {
    id: 16,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje16.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Modern ofis alanları.'
  },
  {
    id: 17,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje17.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Osmanlı mimarisi restorasyonu.'
  },
  {
    id: 18,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje18.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz kenarında yaşam.'
  },
  {
    id: 19,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje19.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Yüksek kule, geniş manzara.'
  },
  {
    id: 20,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje20.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Doğayla iç içe sakin yaşam.'
  },
  {
    id: 21,
    title: 'Merkezi Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje21.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Şehir merkezinde lüks yaşam.'
  },
  {
    id: 22,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje22.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Endüstriyel tasarım.'
  },
  {
    id: 23,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje23.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Müstakil villa yaşamı.'
  },
  {
    id: 24,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje24.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Boğaza nazır lüks yaşam.'
  },
  {
    id: 25,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje25.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Aile dostu site yaşamı.'
  },
  {
    id: 26,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje26.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Marina kenarında lüks yaşam.'
  },
  {
    id: 27,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje27.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Şehir manzaralı villalar.'
  },
  {
    id: 28,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje28.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Deniz kenarında konfor.'
  },
  {
    id: 29,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje29.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Tarihi bina yenileme.'
  },
  {
    id: 30,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje30.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Modern şehir yaşamı.'
  },
  {
    id: 31,
    title: 'Modern Konut Projesi',
    category: 'Tamamlanmış Projemiz',
    image: `${IMAGE_BASE}proje31.jpg`,
    description: 'İnce işçiliğin ve mimari zekanın buluştuğu bu proje sayesinde güvende yaşayacağınız modern bir konut sunduk sizlere. Stratejik konum.'
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
