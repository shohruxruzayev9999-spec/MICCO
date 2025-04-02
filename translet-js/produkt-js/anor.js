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

            about5: "Anor tami",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            anor1: "micco Anor Tamligi",
            anor2: "Anor ta’miga ega",
            anor3: "Micco — anor ta’mli tetiklantiruvchi ichimlik bo‘lib, tabiiy tarkibi bilan ajralib turadi. Har bir qultumida anorning nordon va shirin ta’mini his qilasiz, organizmingiz yangi kuch bilan to‘ladi.",
            anor4: "Micco Anor Ta’mining Afzalliklari <br> Micco anor ta’mli ichimligi nafaqat mazali, balki foydali xususiyatlarga ham ega. Uning tarkibida tabiiy vitamin va minerallar bo‘lib, tanani quvvatlantirishga yordam beradi.",
            anor5: "Yurak salomatligi uchun foydali <br> Anor yurak uchun foydali bo‘lgan tabiiy antioksidantlarga boy. Micco anor ichimligi qon aylanishini yaxshilashga va yurak faoliyatini qo‘llab-quvvatlashga yordam beradi.",
            
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
        },
        en: {
            about1: "Home",
            about2: "About Us",
            about3: "Our products",
            about4: "Communication",

            about5: "Pomegranate flavor",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            anor1: "micco Pomegranate Whole",
            anor2: "It tastes like pomegranate.",
            anor3: "Micco is a refreshing pomegranate-flavored drink with a natural composition. With every sip, you will feel the sour and sweet taste of pomegranate, and your body will be filled with new strength.",
            anor4: "Benefits of Micco Pomegranate Flavor <br> Micco pomegranate flavor drink is not only delicious, but also has beneficial properties. It contains natural vitamins and minerals that help energize the body.",
            anor5: "Good for heart health <br> Pomegranate is rich in natural antioxidants that are good for the heart. Micco pomegranate drink helps improve blood circulation and support heart function.",

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
        },
        ru: {
            about1: "Основной раздел",
            about2: "о нас",
            about3: "Наши продукты",
            about4: "Коммуникация",

            about5: "Гранат вкус",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            anor1: "micco Гранат Целый",
            anor2: "На вкус как гранат.",
            anor3: "Micco — освежающий напиток со вкусом граната и натуральным составом. С каждым глотком вы почувствуете кисло-сладкий вкус граната, а ваш организм наполнится новыми силами.",
            anor4: "Преимущества напитка Micco со вкусом граната <br> Напиток Micco со вкусом граната не только вкусный, но и обладает полезными свойствами. Он содержит натуральные витамины и минералы, которые помогают заряжать организм энергией.",
            anor5: "Полезен для здоровья сердца <br> Гранат богат натуральными антиоксидантами, полезными для сердца. Гранатовый напиток Micco помогает улучшить кровообращение и поддерживает работу сердца.",

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
            home96: "Все права защищены. Дизайн и производство",
        },
        kz: {
            about1: "Негізгі бөлім",
            about2: "біз туралы",
            about3: "Біздің өнімдер",
            about4: "Байланыс",

            about5: "Анар дәмі",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            anor1: "micco Анар тұтас",
            anor2: "Дәмі анар сияқты.",
            anor3: "Micco - анар дәмі мен табиғи ингредиенттері бар сергітетін сусын. Әр жұтым сайын сіз анардың тәтті және қышқыл дәмін сезінесіз, денеңіз жаңа күшке толы болады.",
            anor4: "Анар хош иісі бар Micco сусынының артықшылықтары <br> Анар дәмі бар Micco сусыны дәмді ғана емес, сонымен қатар пайдалы қасиеттерге ие. Оның құрамында денені қуаттандыруға көмектесетін табиғи витаминдер мен минералдар бар.",
            anor5: "Жүрек денсаулығына пайдалы <br> Анар жүрекке пайдалы табиғи антиоксиданттарға бай. Micco гранат сусыны қан айналымын жақсартуға көмектеседі және жүрек жұмысын қолдайды.",
            
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
            home96: "Барлық құқықтар қорғалған. Дизайн және өндіріс",
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
