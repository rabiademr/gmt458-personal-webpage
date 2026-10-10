const favoritePlaces = [
  {
    "id": "deli-yengec",
    "name": "Deli Yengeç",
    "coordinates": [
      39.89704,
      32.86691
    ],
    "address": "Gaziosmanpaşa · Filistin Caddesi 2/B · Ankara",
    "en": "My favorite meze spot in the city.",
    "tr": "Şehirdeki en sevdiğim mezeci.",
    "source": "https://www.bugunnereye.com/ankara/deli-yengec",
    "image": "assets/images/deli-yengec.jpeg",
    "maps": "https://www.google.com/maps/search/?api=1&query=39.89704,32.86691"
  },
  {
    "id": "coffee-break",
    "name": "Coffee Break · Hacettepe Beytepe",
    "coordinates": [
      39.862672,
      32.73583
    ],
    "address": "Hacettepe Üniversitesi · Beytepe Kampüsü · Ankara",
    "en": "The place where we have spent the most time over the past four years.",
    "tr": "Son dört yıldır en çok vakit geçirdiğimiz yer.",
    "source": "https://menuburada.com/amp-restoran-coffee-break-universiteler-ankara/",
    "image": "assets/images/coffee-break.jpeg",
    "maps": "https://www.google.com/maps/search/?api=1&query=39.862672,32.73583"
  },
  {
    "id": "bozburun",
    "name": "Bozburun Körfezi",
    "coordinates": [
      36.63466,
      28.01445
    ],
    "address": "Marmaris · Muğla",
    "en": "The place where I feel happiest.",
    "tr": "Kendimi en mutlu hissettiğim yer.",
    "noteEn": "A representative point in the gulf, not the exact photo location.",
    "noteTr": "Körfezi temsil eden nokta; fotoğrafın çekildiği tam konum değildir.",
    "source": "https://mapcarta.com/12946408",
    "image": "assets/images/bozburun.jpeg",
    "maps": "https://www.google.com/maps/search/?api=1&query=36.63466,28.01445"
  },
  {
    "id": "etmanyak",
    "name": "Etmanyak · Beytepe / Çayyolu",
    "coordinates": [
      39.863835,
      32.695272
    ],
    "address": "Alacaatlı · Beyler Caddesi 36/1 · Ankara",
    "en": "My favorite burger spot in the city — especially the sour cherry burger.",
    "tr": "Şehirdeki en sevdiğim hamburgerci; özellikle vişneli hamburgeri.",
    "source": "https://menuburada.com/etmanyak-burger-sosis-alacaatli-ankara/",
    "image": "assets/images/etmanyak.jpeg",
    "maps": "https://www.google.com/maps/search/?api=1&query=39.863835,32.695272"
  },
  {
    "id": "bozcaada",
    "name": "Bozcaada",
    "coordinates": [
      39.8172,
      26.0227
    ],
    "address": "Bozcaada · Çanakkale",
    "tr": "Her defasında kendimi ait hissettiğim yer.",
    "en": "The place where I feel I belong, every time.",
    "noteTr": "Adayı temsil eden nokta; fotoğrafın çekildiği tam konum değildir.",
    "noteEn": "A representative point on the island, not the exact photo location.",
    "source": "https://mapcarta.com/Bozcaada",
    "image": "assets/images/bozcaada.jpeg",
    "maps": "https://www.google.com/maps/search/?api=1&query=Bozcaada"
  },
  {
    "id": "cappadocia",
    "name": "Kapadokya · Cappadocia",
    "coordinates": [
      38.6421,
      34.8296
    ],
    "address": "Göreme · Nevşehir",
    "tr": "Tekrar gittiğimde bile aynı hissi bulamadığım o an.",
    "en": "That moment whose feeling I could never recapture, even when I returned.",
    "noteTr": "Göreme üzerinden bölgeyi temsil eden nokta; fotoğrafın tam konumu değildir.",
    "noteEn": "A representative point in Göreme for the region, not the exact photo location.",
    "source": "https://mapcarta.com/G%C3%B6reme",
    "image": "assets/images/cappadocia.jpeg",
    "maps": "https://www.google.com/maps/search/?api=1&query=Cappadocia+Goreme"
  },
  {
    "id": "ahalteke",
    "name": "Ahal Teke Tenis Kulübü",
    "coordinates": [
      39.9329,
      32.8122
    ],
    "address": "Emniyet · Alparslan Türkeş Caddesi No:12 · Ankara",
    "tr": "Ahal Teke’de tenis oynamayı, kortta hareket etmeyi ve oyunumu geliştirmeyi seviyorum.",
    "en": "I enjoy playing tennis at Ahal Teke, staying active on court and improving my game.",
    "source": "https://www.ahalteketeniskulubu.com/",
    "image": "assets/images/ahalteke-tennis.jpeg",
    "noteTr": "Kulübün sitesindeki yaklaşık tesis konumu; belirli bir kortun konumu değildir.",
    "noteEn": "Approximate facility location from the club website, not a specific court.",
    "maps": "https://www.google.com/maps/search/?api=1&query=39.9329,32.8122"
  },
  {
    "id": "eymir",
    "name": "Eymir Gölü",
    "coordinates": [
      39.82522,
      32.82758
    ],
    "address": "Eymir Gölü · Ankara",
    "tr": "Eymir’de bisiklet sürmeyi ve göl çevresinde doğayla vakit geçirmeyi seviyorum.",
    "en": "I enjoy cycling at Lake Eymir and spending time in nature around the lake.",
    "source": "https://geographic.org/geographic_names/name.php?c=turkey&fid=6202&uni=9163815",
    "image": "assets/images/eymir-cycling.jpeg",
    "noteTr": "Gölü temsil eden nokta; fotoğrafın çekildiği tam konum değildir.",
    "noteEn": "A representative lake location, not the exact photo location.",
    "maps": "https://www.google.com/maps/search/?api=1&query=39.82522,32.82758"
  },
  {
    "id": "erciyes",
    "name": "Erciyes Kayak Merkezi",
    "coordinates": [
      38.55875,
      35.49291
    ],
    "address": "Erciyes · Kayseri",
    "tr": "Erciyes’te kayak yapmayı, kışın dağda vakit geçirmeyi ve pistlerde kendimi geliştirmeyi seviyorum.",
    "en": "I enjoy skiing at Erciyes, spending winter days in the mountains and improving on the slopes.",
    "source": "https://mapcarta.com/W815651521",
    "image": "assets/images/erciyes-skiing.jpeg",
    "noteTr": "Kayak bölgesini temsil eden nokta; fotoğrafın veya belirli bir pistin tam konumu değildir.",
    "noteEn": "A representative ski-area location, not the exact photo location or a specific slope.",
    "maps": "https://www.google.com/maps/search/?api=1&query=38.55875,35.49291"
  }
];
