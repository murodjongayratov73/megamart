import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Asosiy
          "home": "Home",
          "products": "Products",
          "about": "About",
          "contact": "Contact",
          "blog": "Blog",
          "support": "Support",
          "cart": "Cart",
          "search": "Search essentials, groceries and more...",
          "viewAll": "View All",
          "save": "Save",
          "buyNow": "Buy Now",
          "addToCart": "Add to Cart",
          "remove": "Remove",
          "checkout": "Checkout",
          "emptyCart": "Cart is empty",
          "total": "Total",
          "items": "items",
          "loading": "Loading...",

          // Products1
          "grabBestDeal": "Grab the best deal on",
          "smartphones": "Smartphones",

          // Products2
          "shopTopCategories": "Shop From",
          "topCategories": "Top Categories",
          "mobile": "Mobile",
          "cosmetics": "Cosmetics",
          "electronics": "Electronics",
          "furniture": "Furniture",
          "watches": "Watches",
          "decor": "Decor",
          "accessories": "Accessories",

          // Products3
          "daily": "Daily",
          "essentials": "Essentials",
          "upTo50": "UP to 50% OFF",

          // Product Detail
          "brand": "Brand",
          "ram": "RAM",
          "storage": "Storage",
          "color": "Color",
          "quantity": "Quantity",
          "backToProducts": "Back to Products",
          "productNotFound": "Product not found!",
          "allProducts": "All Products",

          // Filter
          "groceries": "Groceries",
          "premiumFruits": "Premium Fruits",
          "homeKitchen": "Home & Kitchen",
          "fashion": "Fashion",
          "beauty": "Beauty",
          "homeImprovement": "Home Improvement",
          "sportsToys": "Sports, Toys & Luggage",

          // Notification
          "addedToCart": "added to cart",
          "removedFromCart": "removed from cart",
          "orderSuccess": "Your order has been successfully completed!",
          "emptyCartError": "Cart is empty!",

          // 404
          "pageNotFound": "404 - Page not found",

          // Footer qismi
          "contactUs": "Contact Us",
          "emailUs": "Email Us",
          "callUs": "Call Us",
          "followUs": "Follow Us",
          "customerServices": "Customer Services",
          "aboutUs": "About Us",
          "termsConditions": "Terms & Conditions",
          "faq": "FAQ",
          "privacyPolicy": "Privacy Policy",
          "ewastePolicy": "E-waste Policy",
          "cancellationReturnPolicy": "Cancellation & Return Policy",
          "popularCategories": "Most Popular Categories",
          "staples": "Staples",
          "beverages": "Beverages",
          "personalCare": "Personal Care",
          "homeCare": "Home Care",
          "babyCare": "Baby Care",
          "vegetablesFruits": "Vegetables & Fruits",
          "snacksFoods": "Snacks & Foods",
          "dairyBakery": "Dairy & Bakery",
          "copyright": "© 2022 All rights reserved. Reliance Retail Ltd.",

          // Reklama qismi
          "topBrands": "Top",
          "electronicsBrands": "Electronics Brands",
          "iphone": "IPHONE",
          "realme": "REALME",
          "xiaomi": "XIAOMI",
          "upTo80Off": "UP to 80% OFF"
        }
      },
      uz: {
        translation: {
          // Asosiy
          "home": "Asosiy",
          "products": "Mahsulotlar",
          "about": "Biz haqimizda",
          "contact": "Aloqa",
          "blog": "Blog",
          "support": "Yordam",
          "cart": "Savat",
          "search": "Qidiruv...",
          "viewAll": "Barchasi",
          "save": "Tejash",
          "buyNow": "Sotib olish",
          "addToCart": "Savatga qo'shish",
          "remove": "O'chirish",
          "checkout": "Buyurtma berish",
          "emptyCart": "Savat bo'sh",
          "total": "Jami",
          "items": "ta mahsulot",
          "loading": "Yuklanmoqda...",

          // Products1
          "grabBestDeal": "Eng yaxshi taklif",
          "smartphones": "Smartfonlar",

          // Products2
          "shopTopCategories": "Kategoriyalar",
          "topCategories": "bo'yicha xarid qiling",
          "mobile": "Telefonlar",
          "cosmetics": "Kosmetika",
          "electronics": "Elektronika",
          "furniture": "Mebel",
          "watches": "Soatlar",
          "decor": "Dekor",
          "accessories": "Aksessuarlar",

          // Products3
          "daily": "Kundalik",
          "essentials": "mahsulotlar",
          "upTo50": "50% gacha chegirma",

          // Product Detail
          "brand": "Brend",
          "ram": "Operativ xotira",
          "storage": "Doimiy xotira",
          "color": "Rang",
          "quantity": "Soni",
          "backToProducts": "Barcha mahsulotlar",
          "productNotFound": "Mahsulot topilmadi!",
          "allProducts": "Barcha mahsulotlar",

          // Filter
          "groceries": "Oziq-ovqat",
          "premiumFruits": "Premium mevalar",
          "homeKitchen": "Uy va oshxona",
          "fashion": "Moda",
          "beauty": "Go'zallik",
          "homeImprovement": "Uy ta'miri",
          "sportsToys": "Sport, o'yinchoqlar",

          // Notification
          "addedToCart": "savatga qo'shildi",
          "removedFromCart": "savatchadan o'chirildi",
          "orderSuccess": "Buyurtmangiz muvaffaqiyatli amalga oshirildi!",
          "emptyCartError": "Savat bo'sh!",

          // 404
          "pageNotFound": "404 - Sahifa topilmadi",

          // Footer qismi
          "contactUs": "Biz bilan bog'lanish",
          "emailUs": "Email",
          "callUs": "Telefon",
          "followUs": "Bizni kuzatib boring",
          "customerServices": "Mijozlarga xizmat",
          "aboutUs": "Biz haqimizda",
          "termsConditions": "Foydalanish shartlari",
          "faq": "Ko'p so'raladigan savollar",
          "privacyPolicy": "Maxfiylik siyosati",
          "ewastePolicy": "E-chiqindi siyosati",
          "cancellationReturnPolicy": "Bekor qilish va qaytarish siyosati",
          "popularCategories": "Ommabop kategoriyalar",
          "staples": "Oziq-ovqat",
          "beverages": "Ichimliklar",
          "personalCare": "Shaxsiy parvarish",
          "homeCare": "Uy parvarishi",
          "babyCare": "Bola parvarishi",
          "vegetablesFruits": "Sabzavotlar va mevalar",
          "snacksFoods": "Gazaklar va taomlar",
          "dairyBakery": "Sut mahsulotlari va non",
          "copyright": "© 2022 Barcha huquqlar himoyalangan. Reliance Retail Ltd.",

          // Reklama qismi
          "topBrands": "Top",
          "electronicsBrands": "Elektronika brendlari",
          "iphone": "IPHONE",
          "realme": "REALME",
          "xiaomi": "XIAOMI",
          "upTo80Off": "80% gacha chegirma"
        }
      },
      ru: {
        translation: {
          // Asosiy
          "home": "Главная",
          "products": "Товары",
          "about": "О нас",
          "contact": "Контакты",
          "blog": "Блог",
          "support": "Поддержка",
          "cart": "Корзина",
          "search": "Поиск...",
          "viewAll": "Все",
          "save": "Экономия",
          "buyNow": "Купить",
          "addToCart": "В корзину",
          "remove": "Удалить",
          "checkout": "Оформить заказ",
          "emptyCart": "Корзина пуста",
          "total": "Итого",
          "items": "товаров",
          "loading": "Загрузка...",

          // Products1
          "grabBestDeal": "Лучшее предложение на",
          "smartphones": "Смартфоны",

          // Products2
          "shopTopCategories": "Покупки по",
          "topCategories": "категориям",
          "mobile": "Телефоны",
          "cosmetics": "Косметика",
          "electronics": "Электроника",
          "furniture": "Мебель",
          "watches": "Часы",
          "decor": "Декор",
          "accessories": "Аксессуары",

          // Products3
          "daily": "Ежедневные",
          "essentials": "товары",
          "upTo50": "Скидка до 50%",

          // Product Detail
          "brand": "Бренд",
          "ram": "ОЗУ",
          "storage": "Память",
          "color": "Цвет",
          "quantity": "Количество",
          "backToProducts": "Все товары",
          "productNotFound": "Товар не найден!",
          "allProducts": "Все товары",

          // Filter
          "groceries": "Продукты",
          "premiumFruits": "Премиум фрукты",
          "homeKitchen": "Дом и кухня",
          "fashion": "Мода",
          "beauty": "Красота",
          "homeImprovement": "Ремонт",
          "sportsToys": "Спорт, игрушки",

          // Notification
          "addedToCart": "добавлен в корзину",
          "removedFromCart": "удален из корзины",
          "orderSuccess": "Ваш заказ успешно оформлен!",
          "emptyCartError": "Корзина пуста!",

          // 404
          "pageNotFound": "404 - Страница не найдена",

          // Footer qismi
          "contactUs": "Связаться с нами",
          "emailUs": "Эл. почта",
          "callUs": "Телефон",
          "followUs": "Подписывайтесь на нас",
          "customerServices": "Обслуживание клиентов",
          "aboutUs": "О нас",
          "termsConditions": "Условия использования",
          "faq": "Часто задаваемые вопросы",
          "privacyPolicy": "Политика конфиденциальности",
          "ewastePolicy": "Политика утилизации",
          "cancellationReturnPolicy": "Политика отмены и возврата",
          "popularCategories": "Популярные категории",
          "staples": "Продукты",
          "beverages": "Напитки",
          "personalCare": "Личная гигиена",
          "homeCare": "Уход за домом",
          "babyCare": "Уход за детьми",
          "vegetablesFruits": "Овощи и фрукты",
          "snacksFoods": "Закуски и продукты",
          "dairyBakery": "Молочные продукты и выпечка",
          "copyright": "© 2022 Все права защищены. Reliance Retail Ltd.",

          // Reklama qismi
          "topBrands": "Топ",
          "electronicsBrands": "бренды электроники",
          "iphone": "IPHONE",
          "realme": "REALME",
          "xiaomi": "XIAOMI",
          "upTo80Off": "Скидка до 80%"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;