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

            about5: "Qulupnay va Banan tami",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            banan1: "micco Banan Tamligi",
            banan2: "Qulupnay va Banan ta’miga ega",
            banan3: "Micco — banan asosidagi energiya manbai bo‘lib, kuningizni tetik va faol boshlashingizga yordam beradi. Quvvat bag‘ishlab, tanangizga energiya beradi. Har bir qultum Micco bilan bananning yoqimli ta’mini his qilib, o‘zingizni bardam va tetik sezishingiz mumkin.",
            banan4: "Micco Banan Ta’mining Foydali Tomonlari: <br> Micco banan ta’mli ichimligi tabiiy tarkibi va foydali xususiyatlari bilan ajralib turadi. Ushbu ichimlik organizm uchun bir qancha muhim afzalliklarga ega:",
            banan5: "Tabiiy energiya manbai <br> Micco banan ta’mli ichimligi tarkibida tabiiy bananlardan olingan foydali moddalar, ayniqsa kaliy ko‘p bo‘lib, yurak va mushaklar faoliyatini yaxshilashga yordam beradi.",
            banan6: "Sun’iy qo‘shimchalarsiz <br> Micco banan ta’mli ichimligi sun’iy rang va konservantlarsiz tayyorlangan bo‘lib, tabiiyligi bilan ajralib turadi. U har qanday yoshdagi insonlar uchun foydali tanlovdir.",
            
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
            home96: "Barcha huquqlar himoyalangan. Dizayn va ishlab chiqarish ",

            adash6: "micco-Nok",
            adash7: "micco-Banan",
        },
        en: {
            about1: "Home",
            about2: "About Us",
            about3: "Our products",
            about4: "Communication",

            about5: "Strawberry and Banana flavor",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            banan1: "micco Banana Filling",
            banan2: "Strawberry and Banana flavors",
            banan3: "Micco is a banana-based energy booster that helps you start your day feeling fresh and active. It gives you power and fuels your body. With every sip of Micco, you enjoy the pleasant taste of banana and feel refreshed and energized.",
            banan4: "Benefits of Micco Banana Flavor: <br> Micco banana flavor drink is distinguished by its natural composition and beneficial properties. This drink has several important benefits for the body:",
            banan5: "A natural source of energy <br> Micco banana-flavored drink is rich in beneficial substances from natural bananas, especially potassium, which helps improve heart and muscle function.",
            banan6: "Without artificial additives <br> Micco banana-flavored drink is made without artificial colors and preservatives, and is characterized by its naturalness. It is a healthy choice for people of all ages.",

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
            home96: "All rights reserved. Design and production",

            adash6: "micco-Pear",
            adash7: "micco-Banana",
        },
        ru: {
            about1: "Основной раздел",
            about2: "о нас",
            about3: "Наши продукты",
            about4: "Коммуникация",

            about5: "Вкус клубники и банана",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            banan1: "Начинка из банана микко",
            banan2: "Вкусы клубники и банана",
            banan3: "Micco — источник энергии на основе банана, который помогает вам начать день бодро и активно. Он придаёт силы и заряжает энергией. С каждым глотком Micco вы ощущаете приятный вкус банана и прилив бодрости.",
            banan4: "Преимущества напитка Micco со вкусом банана:<br> Напиток Micco со вкусом банана отличается натуральным составом и полезными свойствами. Этот напиток имеет ряд важных преимуществ для организма:",
            banan5: "Натуральный источник энергии <br> Напиток Micco со вкусом банана богат полезными веществами из натуральных бананов, особенно калием, который помогает улучшить работу сердца и мышц.",
            banan6: "Без искусственных добавок <br> Напиток Micco со вкусом банана производится без искусственных красителей и консервантов, отличается натуральностью. Это здоровый выбор для людей всех возрастов.",

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
            home96: "Все права защищены. Дизайн и производство",

            adash6: "микко-Груша",
            adash7: "микко-Банан",
        },
        kz: {
            about1: "Негізгі бөлім",
            about2: "біз туралы",
            about3: "Біздің өнімдер",
            about4: "Байланыс",

            about5: "Құлпынай және банан дәмі",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            banan1: "Начинка из банана микко",
            banan2: "Құлпынай және банан дәмі",
            banan3: "Micco — банан негізінде жасалған қуат көзі, ол күніңізді сергек әрі белсенді бастауыңызға көмектеседі. Денеңізге күш-қуат береді. Әрбір ұрттам Micco арқылы бананның жағымды дәмін сезіп, өзіңізді сергек әрі жігерлі сезінесіз.",
            banan4: "Банан дәмі бар Micco сусынының артықшылықтары:<br> Банан дәмі бар Micco сусынының табиғи құрамы және пайдалы қасиеттері бар. Бұл сусынның ағзаға бірқатар маңызды пайдасы бар:",
            banan5: "Табиғи энергия көзі <br> Micco банан хош иісті сусыны табиғи банандардан алынған пайдалы заттарға, әсіресе жүрек пен бұлшықет жұмысын жақсартуға көмектесетін калийге бай.",
            banan6: "Жасанды қоспалар жоқ <br> Micco банан дәмі бар сусын жасанды бояғыштарсыз немесе консерванттарсыз шығарылады және табиғи. Бұл барлық жастағы адамдар үшін сау таңдау.",
            
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
            home96: "Барлық құқықтар қорғалған. Дизайн және өндіріс",

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
