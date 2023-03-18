let urunler = [
  {
    "ürün-adı": "Samsung s23+",
    "ürün-fiyatı": "30.500 TL",
    "ürün-url": "https://www.samsung.com/tr/smartphones/galaxy-s23/",
    "taksitli-fiyat": {
      "uc-taksit": " 3 x 10.2663 = 30.800 tl",
      "alti-taksit": " 6 x 5.283 = 31.700 tl",
      "oniki-taksit": " 12 x 2.700 = 32.400 tl",
    },
  },
  {
    "ürün-adı": "iPhone 14 Pro Max",
    "ürün-fiyatı": "44.500 TL",
    "ürün-url": "https://www.hepsiburada.com/iphone-14-pro-max-c-80857057",
    "taksitli-fiyat": {
      "uc-taksit": " 3 x 10.2663 = 30.800 tl",
      "alti-taksit": " 6 x 5.283 = 31.700 tl",
      "oniki-taksit": " 12 x 2.700 = 32.400 tl",
    },
  },
  {
    "ürün-adı": "Huawei Mate 50 Pro",
    "ürün-fiyatı": "30.000 TL",
    "ürün-url": "https://consumer.huawei.com/tr",
    "taksitli-fiyat": {
      "uc-taksit": " 3 x 10.2663 = 30.800 tl",
      "alti-taksit": " 6 x 5.283 = 31.700 tl",
      "oniki-taksit": " 12 x 2.700 = 32.400 tl",
    },
  },
  {
    "ürün-adı": "Xiaomi 13 Pro",
    "ürün-fiyatı": "38.900 TL",
    "ürün-url": "https://event.mi.com/tr",
    "taksitli-fiyat": {
      "uc-taksit": " 3 x 10.2663 = 30.800 tl",
      "alti-taksit": " 6 x 5.283 = 31.700 tl",
      "oniki-taksit": " 12 x 2.700 = 32.400 tl",
    },
  },
];
let sayi;
let secenek;
function secProduct() {
  secenek = document.getElementById("phone").value;
  console.log(secenek);

  if (secenek == "samsung") {
    sayi = 0;
  } else if (secenek == "iphone") {
    sayi = 1;
  } else if (secenek == "huawei") {
    sayi = 2;
  } else if (secenek == "xiaomi") {
    sayi = 3;
  }

  document.getElementById("demo").innerHTML =
    urunler[sayi]["ürün-adı"] +
    "<br><br>" +
    urunler[sayi]["ürün-fiyatı"] +
    "<br><br>" +
    "<a href='#'>" +
    urunler[sayi]["ürün-url"] +
    "</a>" +
    "<br><br>" +
    urunler[sayi]["taksitli-fiyat"]["uc-taksit"] +
    "<br><br>" +
    urunler[sayi]["taksitli-fiyat"]["alti-taksit"] +
    "<br><br>" +
    urunler[sayi]["taksitli-fiyat"]["oniki-taksit"];
}
