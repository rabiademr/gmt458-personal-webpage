# Rabia Demir — GMT458 Kişisel Web Sayfam

Bu siteyi Hacettepe Üniversitesi GMT458 Web GIS dersi için hazırladım. Kendimi, projelerimi, stajlarımı ve sevdiğim yerleri aynı yerde anlatmak istedim. HTML, CSS ve JavaScript kullandım; proje doğrudan bir web sunucusunda çalışıyor.

[Canlı site](https://rabiademr.github.io/gmt458-personal-webpage/) · [GitHub](https://github.com/rabiademr/gmt458-personal-webpage)

## Tasarımda ne düşündüm?

Koyu renkleri ve turkuaz detayları seçtim. Ana sayfada küçük bir portre, iki proje kartı ve kendi fotoğraflarımdan oluşan “Haritaların ötesinde” bölümü var. Ziyaretçinin önce kim olduğumu görmesini, sonra projelerime veya sevdiğim yerlere kolayca ulaşmasını istedim. Fotoğraflardan haritaya doğrudan geçilebiliyor.

Arka plandaki ince çizgiler haritacılıkla olan bağımı hatırlatıyor. Bölümler kaydırırken bir kez beliriyor; proje görselleri üzerine gelince hafifçe yakınlaşıyor. Destekleyen tarayıcılarda sayfalar arasında kısa bir geçiş var, diğerlerinde normal bağlantılar çalışıyor. Hareketi azaltma tercihi açık olduğunda animasyonları kapatıyorum. Telefonda kartlar alt alta geliyor.

Portre ve hobi fotoğrafları benim sağladığım gerçek fotoğraflar. Ana sayfadaki iki uydu görünümlü proje kapağı yapay zekâyla üretilmiş temsili görseller; analiz sonucu değiller. Gerçek analiz görselleri, çalışma alanı ve raporlar proje detaylarında ayrı duruyor.

## Haritaları neden ikiye ayırdım?

Ödevde hem OpenLayers hem Leaflet kullanmamız isteniyor. İkisini aynı şey için tekrar etmek yerine farklı amaçlarla kullandım. OpenLayers tarafında akademik çalışmalarımı ve staj kurumlarını; Leaflet tarafında hobilerimi ve sevdiğim yerleri gösteriyorum. Böylece ziyaretçi hangi haritada ne bulacağını daha kolay anlayabiliyor.

### OpenLayers: projelerim ve stajlarım

Wadi As-Sirhan çalışmamda yalnızca bir konum işaretlemek istemedim. Gerçek çalışma sınırını GeoJSON olarak ekledim. Verinin koordinatlarını web haritasında kullanılan EPSG:3857 sistemine dönüştürdüm. Ocak 2020, Şubat 2020 ve Nisan 2023 tarım alanı maskeleri arasında geçiş yapılabiliyor. Orijinal GeoTIFF çıktıları tarayıcıda gösterilebilen PNG katmanlarına dönüştürüldü; sınıfları korumak için en yakın komşu yöntemi kullanıldı. Tarım alanı sınıfı sarı, diğer pikseller şeffaf.

Gösterilen alan değerleri orijinal analiz tablosundan geliyor; ekrandaki piksellerden yeniden hesaplanmıyor. Uydu ve sokak altlıkları, katman açma/kapama ve saydamlık kontrolü ekledim. Uydu altlığı seçilen aya ait Sentinel-2 görüntüsü değil; konumu anlamak için kullanılan bir arka plan. Bunu sayfada da belirttim.

Crop Masking ile GEOINSIGHT birbirine bağlı ama ayrı çalışmalarım. Açıklamalarını ve PDF bağlantılarını ayrı tuttum. Haritadaki sınır Crop Masking çalışmasına ait; GEOINSIGHT’ın bütün kapsamını temsil ettiğini söylemiyorum. MAPEG ve YMN için kurum konumları ile staj fotoğraflarını da ekledim. YMN arazi fotoğraflarının kurum ofisinde çekildiği anlamına gelmiyor.

OpenLayers’ın farklı veri ve katman türlerini bir arada yönetebilmesini bu çalışma için uygun buldum. Buna karşılık kaynak, katman, stil ve projeksiyon ayarlarını öğrenmek daha fazla kod ve zaman gerektirdi.

### Leaflet: sevdiğim yerler ve hobilerim

Bu haritada on bir kişisel yer var: Gym Center, Rolls’n Smiles, Deli Yengeç, Coffee Break, Bozburun, Etmanyak, Bozcaada, Kapadokya, Ahal Teke, Eymir ve Erciyes. Her birini kendi fotoğrafım ve kısa bir açıklamayla bağladım. İşaretçiye tıklanınca fotoğraf, açıklama ve bağlantılar açılıyor.

Leaflet’in işaretçi ve açılır pencere yapısı bu fikir için kullanışlıydı. Daha karmaşık bir uygulamada ek eklentiler veya özel kod gerekebilir. Leaflet de GeoJSON ve görüntü katmanları gösterebiliyor; iki haritayı ayırmam bir tasarım tercihi.

Koordinatları adres ve harita kaynaklarından eşleştirdim. Bazıları kurum, tesis veya bölgeyi temsil eden yaklaşık noktalar. Fotoğrafların tam çekildiği yeri bildiğimi iddia etmiyorum. Kaynakları aşağıya ekledim.

## Fotoğrafları ve bağlantıları nasıl ekledim?

Fotoğrafları bilgisayarımdaki Downloads klasörüne bağlamak yerine projenin assets/images klasörüne kopyaladım. Sayfalarda göreli dosya yolları kullandım. Böylece dosyalar GitHub’a birlikte yüklendiğinde fotoğraflar da açılabiliyor. Hobi kartları ve harita pencereleri aynı fotoğraf dosyasını kullanıyor; gereksiz kopyalar oluşturmuyorum. Gerçek fotoğrafları değiştirmedim, yalnızca arayüzdeki boyut ve kırpılmalarını CSS ile ayarladım.

Örneğin leaflet.html#bozcaada bağlantısı haritada Bozcaada’yı açıyor ve fotoğraflı pencereyi gösteriyor. Google Maps bağlantıları ayrı bir harita hizmetinde konumu açıyor. PDF’ler de proje içindeki göreli yollarla bağlandı. Türkçe/İngilizce tercihimi localStorage ile saklıyorum; sonraki sayfada aynı dil devam ediyor.

## Ödevdeki iki harita sorununu nasıl çözdüm?

İşaretçilerin uzaktan görünürken üst üste binmesini azaltmak için iki haritada da yakınlaştırma eşiğini 10 seçtim. Yakınlaştırma değiştiğinde kontrol ediliyor: 10’un altında işaretçiler gizleniyor, 10 ve üzerinde gösteriliyor. Bu çözüm yakın ölçekte birbirine çok yakın bütün noktaları ayırmayı garanti etmiyor; ödevde istenen eşik davranışını uyguluyor.

Dünyanın tekrarlanmasını Leaflet’te noWrap ve harita sınırlarıyla; OpenLayers’ta wrapX: false ve görünüm sınırlarıyla engelledim. Her iki haritanın da en düşük yakınlaştırmasını 3 olarak belirledim.

## Sayfalar

- index.html: kendim, seçtiğim projeler ve hobi fotoğrafları.
- about.html: eğitimim, iletişim bilgilerim, MAPEG ve YMN stajlarım.
- projects.html: iki ayrı çalışma, PDF’ler ve gerçek analiz görsellerini içeren tablo.
- hobbies.html: hobilerim, fotoğraf ve seyahat galerilerim.
- leaflet.html: kişisel yerlerim.
- openlayers.html: akademik proje ve staj haritam.
- maps.html: eski bağlantıların da çalışması için OpenLayers haritası.

Harita kütüphaneleri ve altlıklar internet bağlantısı gerektiriyor. Yerel inceleme için VS Code Live Server kullanıyorum.

## Yapay zekâdan ne öğrendim?

ChatGPT/Codex’ten HTML/CSS düzeni, JavaScript etkileşimleri, iki dilin yönetilmesi, hata ayıklama ve arayüzü kontrol etme konularında yardım aldım. Özellikle yakınlaştırma olaylarıyla işaretçi görünürlüğünü değiştirmeyi, dünya tekrarını kapatmayı, projeksiyon dönüşümünü, yerel dosya yolu ile web bağlantısı arasındaki farkı ve göreli yolları öğrendim. GeoTIFF’leri web katmanına dönüştürme ve erişilebilir menü/hareket azaltma düzenlemelerinde de yardım aldım.

İçerikleri, fotoğrafları ve kişisel açıklamaları ben sağladım; bütün kodu tek başıma yazdığımı söylemiyorum. Toplam yapay zekâ kullanım sürem için yaklaşık 10 saatlik bir tahmin vermiştim. Bu süre kronometreyle ölçülmedi ve son tasarım oturumunu da kapsayacak şekilde teslimden önce kendi kullanımımı tekrar değerlendirmem gerekiyor. Ödev önce sorunları araştırıp sonra çözülemeyen konularda AI kullanmamızı istiyor; yapmadığım bir araştırmayı yapmışım gibi anlatmıyorum.

## Ödev kontrolü ve teslim

- En az üç HTML dosyası: var, toplam yedi.
- CSS animasyonu: var.
- Görselli tablo: projects.html içinde iki gerçek analiz görseliyle var.
- OpenLayers ve Leaflet: ikisi de var.
- İşaretçi yakınlaştırma eşiği ve dünya tekrarının engellenmesi: iki haritada da uygulanmış.
- Farklı günlerde en az üç commit: geçmişte 5, 9 ve 10 Ekim 2026 görünüyor; tarihler değiştirilmedi.
- GitHub üzerinde barındırma: GitHub Pages kullanıyorum.
- AI ile öğrendiklerim ve yaklaşık kullanım süresi: yukarıda açıkladım.

Teslim 12 Ekim, akran değerlendirmesi 23 Ekim 2026. Sisteme kayıt oldum, ancak test bağlantısının kaydı hata nedeniyle doğrulanamadı. Resmî proje alanına teslim ve üç öğrenciye ayrıntılı değerlendirme verme adımları hâlâ ayrı işler. Son bir gerçek telefon kontrolünü de yapmam gerekiyor. Genel kalite puanı hocanın değerlendirmesine bağlı.

## Veri ve konum kaynakları

[OpenLayers](https://openlayers.org/) · [Leaflet](https://leafletjs.com/)

Aşağıdaki teknik kaynak notlarını koordinat ve veri kökenlerini kaybetmemek için korudum.

- Gym Center: [tesis](https://centergym.com.tr/yda-park-avenue/), [koordinat kaynağı](https://mapcarta.com/W606411043). Park Avenue yerleşkesini temsil eder.
- Rolls’n Smiles: https://mekanlar.com/mekan/rollsn-smiles-barbaros
- Deli Yengeç: https://www.bugunnereye.com/ankara/deli-yengec
- Coffee Break: https://menuburada.com/amp-restoran-coffee-break-universiteler-ankara/
- Bozburun: https://mapcarta.com/12946408
- Etmanyak: https://menuburada.com/etmanyak-burger-sosis-alacaatli-ankara/
- Bozcaada: https://mapcarta.com/Bozcaada
- Kapadokya/Göreme: https://mapcarta.com/G%C3%B6reme
- Ahal Teke: https://www.ahalteketeniskulubu.com/ (yapılandırılmış konum verisi).
- Eymir: https://geographic.org/geographic_names/name.php?c=turkey&fid=6202&uni=9163815
- Erciyes: https://mapcarta.com/W815651521
- MAPEG: https://www.mapeg.gov.tr/Sayfa/iletisim (kurumun harita bağlantısı).
- YMN: https://www.ymnproje.com (kurumun harita yerleştirmesi).

Çalışma sınırı assets/data/wadi-aoi.geojson dosyasında, tarım maskesi tarih/alan/eşik ve koordinat sınırları assets/data/crop-masks-metadata.json dosyasında kayıtlı. Orijinal analiz çıktılarımı kullandım. YMN fotoğrafları sağladığım staj defterindeki görsellerden alındı; sabit kanatlı İHA fotoğrafı Ankara-6494 ölçümünden ayrı bir taş ocağı ziyaretine ait.

Temsili proje kapaklarını hazırlamak için yerleşim taslağındaki iki harita görünümünü referans verip yazısız iki uydu tarzı kapak istedim. Yerleşik Imagegen aracı kullanıldı. Son dosya assets/images/project-covers.png; kapaklar CSS ile iki ayrı kartta gösteriliyor.
