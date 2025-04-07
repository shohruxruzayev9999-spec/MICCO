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

            about5: "Aloqa",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            main1: "Aloqa",
            main2: "Biz bilan bog'lanish",
            main3: "Hamkorlik uchun",
            main4: "Hamkorligimiz orqali yangi imkoniyatlar ochiladi.",
            main5: "OFIS",
            main6: "Manzil: Toshkent shahar Yangi Hayot tumani Yo'ldosh-10 mavzesi 63-A uy",
            main7: "TELEFON..",
            main8: "+998-95 144 06 07",
            main9: "ELEKTRON POCHTA..",
            main10: "",
            main11: "Ismingiz",
            main12: "Emailingiz",
            main13: "Xabar",
            main14: "XABAR YUBORISH",
            
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

            about5: "Communication",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            main1: "Communication",
            main2: "contact us",
            main3: "For cooperation",
            main4: "New opportunities will open up through our collaboration.",
            main5: "OFFICE",
            main6: "Address: 63-A, Yuldosh-10 area, Yangi Hayot district, Tashkent city",
            main7: "PHONE..",
            main8: "+998-95 144 06 07",
            main9: "EMAIL..",
            main10: "",
            main11: "your name",
            main12: "Your email",
            main13: "Message",
            main14: "SEND MESSAGE",

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

            about5: "Коммуникация",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            main1: "Коммуникация",
            main2: "связаться с нами",
            main3: "Для сотрудничества",
            main4: "Благодаря нашему сотрудничеству откроются новые возможности.",
            main5: "ОФИС",
            main6: "Адрес: город Ташкент, Янги Хаётский район, район Юлдош-10, 63-А",
            main7: "ТЕЛЕФОН..",
            main8: "+998-95 144 06 07",
            main9: "ЭЛЕКТРОННАЯ ПОЧТА..",
            main10: "",
            main11: "Ваше имя",
            main12: "Ваш адрес электронной почты",
            main13: "Сообщение",
            main14: "ОТПРАВИТЬ СООБЩЕНИЕ",

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

            about5: "Негізгі бөлім",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            main1: "Байланыс",
            main2: "бізбен хабарласыңы",
            main3: "Ынтымақтастық үшін",
            main4: "Біздің ынтымақтастығымыздың арқасында жаңа мүмкіндіктер ашылады.",
            main5: "ОФИС",
            main6: "Мекен-жайы: Ташкент қаласы, Янги Хаёт ауданы, Юлдош ауданы-10, 63-А",
            main7: "ТЕЛЕФОН..",
            main8: "+998-95 144 06 07",
            main9: "E-POSTA..",
            main10: "",
            main11: "сіздің атыңыз",
            main12: "Сіздің электронды пошта адресіңіз",
            main13: "Хабарлама",
            main14: "ХАБАРЛАМА ЖІБЕРУ",
            
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
