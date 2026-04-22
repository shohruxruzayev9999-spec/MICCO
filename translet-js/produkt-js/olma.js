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

            about5: "Olma tami",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            olma1: "micco Olma Tamligi",
            olma2: "Olma ta’miga ega",
            olma3: "Micco — kuningizni yorqin va energiyaga boy boshlash uchun ajoyib tanlov. Tetiklik bag‘ishlab, tanangizga yangi quvvat baxsh etadi. Har bir qultum Micco bilan olma lazzatini his qilib, o‘zingizni tetik va bardam sezishingiz mumkin.",
            olma4: "Micco Olma Tamining Foydali Tomonlari: <br> Micco olma ta’mli ichimligi tabiiy tarkibi va foydali xususiyatlari bilan ajralib turadi. Ushbu ichimlik sog‘liq uchun bir qancha muhim afzalliklarga ega:",
            olma5: "Tabiiy vitamin manbai <br> Micco olma ta’mli ichimligi tarkibida tabiiy olmalardan olingan vitaminlar, ayniqsa C vitamini ko‘p bo‘lib, immunitetni mustahkamlashga yordam beradi.",
            olma6: "Sun’iy qo‘shimchalarsiz <br> Micco olma ta’mli ichimligi sun’iy rang va konservantlarsiz tayyorlangan bo‘lib, tabiiyligi bilan ajralib turadi. U har qanday yoshdagi insonlar uchun foydali tanlovdir.",
            
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

            about5: "Apple flavor",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            olma1: "micco Apple Pie",
            olma2: "Apple has a taste",
            olma3: "Micco is a perfect choice to start your day bright and full of energy. It refreshes you and gives your body new strength. With every sip of Micco, you feel the taste of apple and a burst of freshness.",
            olma4: "Benefits of Micco Apple Flavor: <br> Micco apple flavor drink is distinguished by its natural composition and beneficial properties. This drink has several important health benefits:",
            olma5: "A natural source of vitamins <br> Micco apple-flavored drink is rich in vitamins from natural apples, especially vitamin C, which helps strengthen immunity.",
            olma6: "Without artificial additives <br> Micco apple-flavored drink is made without artificial colors and preservatives, and is characterized by its naturalness. It is a healthy choice for people of all ages.",

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

            about5: "Яблочный вкус",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            olma1: "яблочный пирог микко",
            olma2: "У Apple есть вкус",
            olma3: "Micco — отличный выбор для яркого и энергичного начала дня. Он дарит бодрость и наполняет ваше тело новой силой. С каждым глотком Micco вы чувствуете вкус яблока и прилив энергии.",
            olma4: "Преимущества напитка Micco Apple Flavor:<br> Напиток Micco Apple Flavor отличается натуральным составом и полезными свойствами. Этот напиток имеет ряд важных преимуществ для здоровья:",
            olma5: "Натуральный источник витаминов <br> Напиток «Микко» со вкусом яблок богат витаминами из натуральных яблок, особенно витамином С, который способствует укреплению иммунитета.",
            olma6: "Без искусственных добавок <br> Напиток Micco со вкусом яблока производится без искусственных красителей и консервантов, отличается натуральностью. Это здоровый выбор для людей всех возрастов.",

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
            home93: "micco-Яблоко",
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

            about5: "Алма дәмі",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            olma1: "алма бәліш микко",
            olma2: "Алманың дәмі бар",
            olma3: "Micco — күніңізді жарқын және қуатқа толы бастау үшін керемет таңдау. Ол сергектік сыйлап, денеңізге жаңа күш береді. Әрбір ұрттам Micco арқылы алманың дәмін сезіп, өзіңізді сергек әрі жігерлі сезінесіз.",
            olma4: "Micco Apple Flavor сусынының артықшылықтары:<br> Micco Apple Flavor сусынының табиғи құрамы мен пайдалы қасиеттері бар. Бұл сусынның денсаулыққа пайдалы бірқатар маңызды қасиеттері бар:",
            olma5: "Дәрумендердің табиғи көзі <br> Алма хош иісті Микко сусыны табиғи алмадан алынған дәрумендерге, әсіресе иммундық жүйені нығайтуға көмектесетін С витаминіне бай.",
            olma6: "Жасанды қоспаларсыз <br> Micco алма хош иісті сусын жасанды бояғыштарсыз және консерванттарсыз шығарылады және табиғи. Бұл барлық жастағы адамдар үшін сау таңдау.",
            
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
            home93: "micco-Алма",
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
