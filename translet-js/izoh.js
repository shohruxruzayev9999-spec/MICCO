document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.querySelector(".lang-btn");
    const langDropdown = document.querySelector(".lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-dropdown a");

    // Til bo‘yicha tarjimalar
    const translations = {
        uz: {
            about1: "Bosh bo'lim",
            about2: "Biz haqimizda",
            about21: "Mijozlar",
            about3: "Mahsulotlarimiz",
            about4: "Aloqa",

            about5: "Mijozlar Fikri",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            home69: "Mijozlarimiz nima deyishadi",
            home70: "Izohlar",
            home71: "Micco ichimligini birinchi marta sinab ko‘rganimda uning tabiiy ta’mi va yoqimli tetiklantiruvchi xususiyatlari menga juda yoqdi. Endi har kuni ichaman!",
            home72: "Erkinova Soliha",
            home73: "Micco ichimligi energiya va tetiklik baxsh etadi. Ish kunim davomida charchamaslik uchun doimo yonimda bo‘ladi. Uning tabiiy ta’mi juda yoqimli!",
            home74: "Akbarov Jasur",
            home75: "Men sog‘lom turmush tarziga amal qilaman, shuning uchun faqat tabiiy ichimliklar ichaman. Micco tarkibida sun’iy qo‘shimchalar yo‘qligi meni juda quvontiradi!",
            home76: "Yuldosheva Malika",

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
            about21: "Customers",
            about3: "Our products",
            about4: "Communication",

            about5: "Customer Opinion",
            about6: "Home",
            about7: "Customers",
            about8: "Customer Opinion",

            home69: "What our customers say",
            home70: "Notes",
            home71: "When I first tried Micco, I loved its natural taste and pleasantly refreshing properties. Now I drink it every day!",
            home72: "Erkinova Soliha",
            home73: "Micco drink gives me energy and refreshment. It is always with me to keep me going during my working day. Its natural taste is very pleasant!",
            home74: "Akbarov Jasur",
            home75: "I follow a healthy lifestyle, so I only drink natural drinks. I am very happy that Micco does not contain artificial additives!",
            home76: "Yuldosheva Malika",
            

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
            about21: "Клиенты",
            about3: "Наши продукты",
            about4: "Коммуникация",

            about5: "Мнение клиента",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            home69: "Что говорят наши клиенты",
            home70: "Примечания",
            home71: "Когда я впервые попробовал Micco, мне очень понравился его натуральный вкус и приятные освежающие свойства. Теперь я пью его каждый день!",
            home72: "Эркинова Солиха",
            home73: "Напиток Micco дает мне энергию и свежесть. Он всегда со мной, чтобы поддерживать меня в течение рабочего дня. Его натуральный вкус очень приятен!",
            home74: "Акбаров Джасур",
            home75: "Я веду здоровый образ жизни, поэтому пью только натуральные напитки. Очень радует, что в Micco нет искусственных добавок!",
            home76: "Юлдошева Малика",

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
            about21: "Клиенттер",
            about3: "Біздің өнімдер",
            about4: "Байланыс",

            about5: "Клиенттің пікірі",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            home69: "Біздің клиенттер не дейді",
            home70: "Ескертпелер",
            home71: "Мен Micco-ны алғаш рет қолданып көргенімде, оның табиғи дәмі мен жағымды сергітетін қасиеттері маған қатты ұнады. Енді мен оны күнде ішемін!",
            home72: "Еркінова Солиха",
            home73: "Micco сусыны маған қуат пен сергектік береді. Ол жұмыс күні бойы қолдау көрсету үшін әрқашан менімен бірге. Оның табиғи дәмі өте жағымды!",
            home74: "Акбаров Жасур",
            home75: "Мен салауатты өмір салтын ұстанамын, сондықтан мен тек табиғи сусындарды ішемін. Мен Micco-да жасанды қоспалардың жоқтығына өте қуаныштымын!",
            home76: "Юлдошева Малика",
            
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
