document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.querySelector(".lang-btn");
    const langDropdown = document.querySelector(".lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-dropdown a");

    // Til bo‘yicha tarjimalar
    const translations = {
        uz: {
            about1: "Bosh bo'lim",
            about2: "Biz haqimizda",
            about3: "Mahsulotlarimiz",
            about4: "Aloqa",

            about5: "Biz haqimizda",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            about9: "micco haqida",
            about10: "MICCO ICHIMLIGIGA XUSH KELIBSIZ",
            about12: "Micco – tabiiy mevalardan tayyorlangan ichimlik bo‘lib, tanangizni tetiklantiradi va energiya beradi. Har bir qultum Micco bilan o‘zingizni tetik va bardam his qilasiz.",
            about13: "Micco sun’iy rang va konservantlarsiz tayyorlanadi. U sog‘lom hayot tarzi uchun ideal tanlov bo‘lib, ajoyib lazzati bilan sizni quvontiradi.",
            about14: "Tabiiy tarkib",
            about15: "Foydali vitaminlar",
            about16: "Ajoyib lazzat",
            about17: "Sof mevalar",
            about18: "Sog‘lom hayot",
            about19: "Tetiklik baxsh etadi",
            about20: "Mahsulotlarimiz",

            about21: "Ishonch uchun",
            about22: "Sertifikatlar",

            home82: "Aloqa",
            home83: "Tel..",
            home84: "Email..",
            home85: "Manzil: Toshkent shahar Yangi Hayot tumani Yo'ldosh-10 mavzesi 63-A uy",
            home86: "Bo'limlar",
            home87: "Biz haqimizda",
            home88: "Mahsulotlarimiz",
            home89: "Mijozlar",
            home90: "Aloqa",
            home91: "Micco mahsulotlari",
            home92: "micco-Anor",
            home93: "micco-Olma",
            home94: "micco-Kivi",
            home95: "micco-Mango",
            home96: "Barcha huquqlar himoyalangan. Dizayn va ishlab chiqarish SMK WEB",

            adash6: "micco-Nok",
            adash7: "micco-Banan",
        },
        en: {
            about1: "Home",
            about2: "About Us",
            about3: "Our products",
            about4: "Communication",

            about5: "About Us",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            about9: "about micco",
            about10: "WELCOME TO MICCO DRINKS",
            about12: "Micco is a drink made from natural fruits that refreshes and energizes your body. With every sip of Micco, you will feel refreshed and energetic.",
            about13: "Micco is made without artificial colors and preservatives. It is an ideal choice for a healthy lifestyle and will delight you with its great taste.",
            about14: "Natural composition",
            about15: "Useful vitamins",
            about16: "Great flavor",
            about17: "Pure fruits",
            about18: "Healthy life",
            about19: "Gives freshness",
            about20: "Our products",

            about21: "For confidence",
            about22: "Certificates",
            

            home82: "Communication",
            home83: "Tel..",
            home84: "Email..",
            home85: "Address: 63-A, Yuldosh-10 area, Yangi Hayot district, Tashkent city",
            home86: "Departments",
            home87: "about Us",
            home88: "Our products",
            home89: "Customers",
            home90: "Communication",
            home91: "Micco products",
            home92: "micco-Pomegranate",
            home93: "micco-Apple",
            home94: "micco-Kiwi",
            home95: "micco-Mango",
            home96: "All rights reserved. Design and production SMK WEB",

            adash6: "micco-Pear",
            adash7: "micco-Banana",
        },
        ru: {
            about1: "Основной раздел",
            about2: "о нас",
            about3: "Наши продукты",
            about4: "Коммуникация",

            about5: "о нас",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            about9: "о Микко",
            about10: "ДОБРО ПОЖАЛОВАТЬ В MICCO DRINKS",
            about12: "Micco — это напиток из натуральных фруктов, который освежает и заряжает энергией ваш организм. С каждым глотком Micco вы почувствуете себя обновленным и энергичным.",
            about13: "Micco производится без искусственных красителей и консервантов. Это идеальный выбор для здорового образа жизни, который порадует вас своим прекрасным вкусом.",
            about14: "Натуральный состав",
            about15: "Полезные витамины",
            about16: "Отличный вкус",
            about17: "Чистые фрукты",
            about18: "Здоровый образ жизни",
            about19: "Придает свежесть",
            about20: "Наши продукты",

            about21: "Для уверенности",
            about22: "Сертификаты",

            home82: "Коммуникация",
            home83: "Тел..",
            home84: "Email..",
            home85: "Адрес: город Ташкент, Янги Хаётский район, район Юлдош-10, 63-А",
            home86: "Отделы",
            home87: "о нас",
            home88: "Наши продукты",
            home89: "Клиенты",
            home90: "Коммуникация",
            home91: "Продукция Микко",
            home92: "микко-гранат",
            home93: "micco-Apple",
            home94: "микко-Киви",
            home95: "микко-Манго",
            home96: "Все права защищены. Дизайн и производство SMK WEB",

            adash6: "микко-Груша",
            adash7: "микко-Банан",
        },
        kz: {
            about1: "Негізгі бөлім",
            about2: "біз туралы",
            about3: "Біздің өнімдер",
            about4: "Байланыс",

            about5: "біз туралы",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            about9: "Микко туралы",
            about10: "MICCO DRINKS-ке ҚОШ КЕЛДІҢІЗ",
            about12: "Micco - бұл сіздің денеңізді сергітетін және қуаттандыратын табиғи жемістерден жасалған сусын. Micco-ның әрбір жұтымы арқылы сіз өзіңізді сергек және жігерлі сезінесіз.",
            about13: "Micco жасанды бояғыштарсыз немесе консерванттарсыз жасалған. Бұл сізді керемет дәмімен қуанта алатын салауатты өмір салты үшін тамаша таңдау.",
            about14: "Табиғи композиция",
            about15: "Пайдалы витаминдер",
            about16: "Тамаша дәм",
            about17: "Таза жемістер",
            about18: "Салауатты өмір салты",
            about19: "Балғындық береді",
            about20: "Наши продукты",

            about21: "Сенімді болу үшін",
            about22: "Сертификаттар",
            
            home82: "Байланыс",
            home83: "Тел..",
            home84: "Email..",
            home85: "Мекен-жайы: Ташкент қаласы, Янги Хаёт ауданы, Юлдош ауданы-10, 63-А",
            home86: "кафедралар",
            home87: "біз туралы",
            home88: "Біздің өнімдер",
            home89: "Клиенттер",
            home90: "Байланыс",
            home91: "Mikko өнімдері",
            home92: "мико гранаты",
            home93: "micco-Apple",
            home94: "Микко-Киви",
            home95: "Мико-манго",
            home96: "Барлық құқықтар қорғалған. Дизайн және өндіріс SMK WEB",

            adash6: "Микко-банан",
            adash7: "Микко-Алмұрт",
        }
    };

    let currentLang = localStorage.getItem("lang") || "uz";
    setLanguage(currentLang);

    // **Til menyusini ochish va yopish (mobil versiya uchun)**
    langBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        langDropdown.classList.toggle("show-dropdown");
    });

    // **Tilni tanlash**
    langOptions.forEach(option => {
        option.addEventListener("click", function (e) {
            e.preventDefault();
            setLanguage(option.dataset.lang);
            langDropdown.classList.remove("show-dropdown");
        });
    });

    // **Foydalanuvchi boshqa joyga bossin, menyu yopiladi**
    document.addEventListener("click", function (e) {
        if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
            langDropdown.classList.remove("show-dropdown");
        }
    });

    function setLanguage(lang) {
        if (!translations[lang]) return;

        Object.keys(translations[lang]).forEach(id => {
            let el = document.getElementById(id);
            if (el) {
                el.innerHTML = translations[lang][id]; // ✅ `innerHTML` ishlatilmoqda
            } else {
                console.warn(`Element topilmadi: #${id}`);
            }
        });

        localStorage.setItem("lang", lang);

        // **Tanlangan tilni tugmachada aks ettirish**
        const selectedLang = document.querySelector(`.lang-dropdown a[data-lang="${lang}"]`);
        if (selectedLang) {
            const selectedFlag = selectedLang.querySelector("img").src;
            const selectedText = selectedLang.textContent.trim();
            langBtn.innerHTML = `<img src="${selectedFlag}" class="flag-icon"> ${selectedText}`;
        }
    }
});
