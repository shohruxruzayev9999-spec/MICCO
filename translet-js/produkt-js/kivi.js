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

            about5: "kivi tami",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            kiwi1: "micco Kivi Tamligi",
            kiwi2: "Kivi ta’miga ega",
            kiwi3: "Micco — kivi ta’mli tetiklantiruvchi ichimlik bo‘lib, uning yoqimli nordon va yangi ta’mi har bir qultumda zavq bag‘ishlaydi. Kun davomida o‘zingizni tetik va bardam his qilishingizga yordam beradi.",
            kiwi4: "Organizmni tozalovchi ichimlik <br> Kivi tabiiy antioksidantlarga boy bo‘lib, organizmni zararli moddalardan tozalashga yordam beradi. Micco kivi ichimligi tanangizga engil va yengil his-tuyg‘ularni baxsh etadi.",
            kiwi5: "Hazm jarayoniga foydali <br> Kivida tabiiy tolalar bo‘lib, u hazm qilish tizimini qo‘llab-quvvatlaydi. <br> Micco kivi ta’mli ichimligi iste’mol qilish hazm jarayonini yaxshilashga yordam beradi.",
            kiwi6: "Quvvat beruvchi tabiiy tarkib <br> Micco kivi ichimligi tarkibida energiya beruvchi tabiiy moddalar mavjud. <br> U jismoniy va aqliy faollikni oshirishga yordam beradi.",
            
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

            about5: "Kiwi flavor",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            kiwi1: "micco kiwi Fullness",
            kiwi2: "Kiwi flavor",
            kiwi3: "Micco is a refreshing kiwi-flavored drink with a pleasant sour and fresh taste that will delight you with every sip. It will help you feel refreshed and energetic throughout the day.",
            kiwi4: "A detoxifying drink <br> Kiwi is rich in natural antioxidants and helps cleanse the body of harmful substances. Micco kiwi drink will give your body a light and airy feeling.",
            kiwi5: "Good for digestion <br> Kiwi contains natural fiber, which supports the digestive system. <br> Consuming Micco kiwi-flavored drink helps improve digestion.",
            kiwi6: "Energizing natural ingredients <br> Micco kiwi drink contains natural energizing ingredients. <br> It helps increase physical and mental activity.",

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

            about5: "киви вкус",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            kiwi1: "Микко Киви Тамлиги",
            kiwi2: "вкус киви",
            kiwi3: "Micco — освежающий напиток со вкусом киви, с приятным кисло-сливочным и свежим вкусом, который будет радовать вас с каждым глотком. Он поможет вам чувствовать себя бодрым и энергичным в течение всего дня.",
            kiwi4: "Детоксикационный напиток <br> Киви богат природными антиоксидантами и помогает очистить организм от вредных веществ. Напиток Micco Kiwi подарит вашему телу ощущение легкости и воздушности.",
            kiwi5: "Полезен для пищеварения. <br> Киви содержит натуральную клетчатку, которая поддерживает пищеварительную систему. <br> Употребление напитка Micco со вкусом киви помогает улучшить пищеварение.",
            kiwi6: "Энергетические натуральные ингредиенты <br> Напиток Micco Kiwi содержит натуральные энергетические ингредиенты. <br> Помогает повысить физическую и умственную активность.",

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

            about5: "киви дәмі",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            kiwi1: "Микко киви тамлиги",
            kiwi2: "киви дәмі",
            kiwi3: "Micco - сергітетін киви хош иістендірілген, жағымды қаймақ және балғын дәмі бар сусын, ол сізді әр жұтым сайын қуантады. Бұл күні бойы сергек және жігерлі сезінуге көмектеседі.",
            kiwi4: "Детокс сусыны <br> Киви табиғи антиоксиданттарға бай және ағзаны зиянды заттардан тазартуға көмектеседі. Micco Kiwi сусыны сіздің денеңізге жеңілдік пен сергектік сезімін береді.",
            kiwi5: "Ас қорытуға жақсы. <br> Киви құрамында ас қорыту жүйесін қолдайтын табиғи талшық бар. <br> Киви дәмі бар Micco сусыны ас қорытуды жақсартуға көмектеседі.",
            kiwi6: "Энергетикалық табиғи ингредиенттер <br> Micco Kiwi сусынында табиғи энергия ингредиенттері бар. <br> Физикалық және психикалық белсенділікті арттыруға көмектеседі.",
            
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
