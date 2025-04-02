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

            about5: "Mahsulotlarimiz",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            about9: "Mahsulotlarimiz",
            about10: "Olma",
            about11: "Micco olma ichimligi tabiiy, tetiklantiruvchi va yoqimli lazzatga ega.",
            about111: "Fikrlar",
            about12: "Kirish",
            about13: "Banan",
            about14: "Banan ta’mli Micco ichimligi tetiklik bag‘ishlaydi.",
            about15: "Fikrlar",
            about16: "Kirish",
            about17: "Anor",
            about18: "Micco ichimligi anor ta’mi bilan juda mazali.",
            about19: "Fikrlar",
            about20: "Kirish",
            about21: "Kivi",
            about22: "Kivi ta’mli Micco ichimligi tetiklik baxsh etadi.",
            about23: "Fikrlar",
            about24: "Kirish",
            about25: "Mango",
            about26: "Mango ta’mli Micco ichimligi haqiqiy tropik lazzatga ega.",
            about27: "Fikrlar",
            about28: "Kirish",
            about29: "Nok",
            about30: "Men har kuni Micco ichimligidan nok ta’mini tanlayman",
            about31: "Fikrlar",
            about32: "Kirish",

            home52: "Qanday ishlaymiz",
            home53: "Micco milliy mahsulotimizning tayyorlanish jarayoni.",
            home54: "1-Bosqich <br>Yer osti tabiiy artesian suvlarini qazib olish.",
            home55: "Micco ichimligi 5 bosqichli filtrdan o‘tib, yuqori tozalik va xavfsizlikni ta’minlaydi.",
            home56: "Bosqichlar.",
            home57: "Chig'anoq filtri <br> Ko'mir filtri <br> Kartrij <br> Osmos membranasi <br> Ultrabinafsha filtri",
            home58: "2-Bosqich<br> Pasterizatsiya",
            home59: "Bu bosqichda filterlardan o'tgan tabiiy suv kerakli ingredientlar, aroma va tabiiy sharbat bilan boyitilib 93-95 daraja qaynatiladi.",
            home60: "3-Bosqich Qadoqlash",
            home61: "Tayyor bo'lgan mahsulot 0,5 va 1 litr hajmli plastik idishlarga qaynoq holatda quyiladi.",
            
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

            about5: "Our products",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            about9: "Our products",
            about10: "Apple",
            about11: "Micco apple drink has a natural, refreshing and pleasant flavor.",
            about111: "Thoughts",
            about12: "Enter",
            about13: "Banana",
            about14: "The banana-flavored Micco drink is refreshing.",
            about15: "Thoughts",
            about16: "Enter",
            about17: "Pomegranate",
            about18: "Micco drink is very tasty with its pomegranate flavor.",
            about19: "Thoughts",
            about20: "Enter",
            about21: "Kiwi",
            about22: "The kiwi-flavored Micco drink is refreshing.",
            about23: "Thoughts",
            about24: "Enter",
            about25: "Mango",
            about26: "Micco Mango Drink has a real tropical flavor.",
            about27: "Thoughts",
            about28: "Enter",
            about29: "Pear",
            about30: "I choose the pear flavor of Micco every day.",
            about31: "Thoughts",
            about32: "Enter",

            home52: "How we work",
            home53: "The process of making our national product Micco.",
            home54: "Stage 1 - Extraction of underground natural artesian water.",
            home55: "Micco drink passes through a 5-stage filter, ensuring high purity and safety.",
            home56: "Steps.",
            home57: "Shell filter <br> Carbon filter <br> Cartridge <br> Osmosis membrane <br> Ultraviolet filter",
            home58: "Stage 2<br> Pasteurization",
            home59: "At this stage, natural water that has passed through filters is enriched with the necessary ingredients, aromas, and natural juices and boiled to 93-95 degrees.",
            home60: "Stage 3: Packaging",
            home61: "The finished product is poured into 0.5 and 1 liter plastic containers while boiling.",

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

            about5: "о нас",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            about9: "Наши продукты",
            about10: "Яблоко",
            about11: "Яблочный напиток «Микко» имеет натуральный, освежающий и приятный вкус.",
            about111: "Мысли",
            about12: "Входить",
            about13: "Банан",
            about14: "Напиток Micco со вкусом банана освежает.",
            about15: "Мысли",
            about16: "Входить",
            about17: "Гранат",
            about18: "Напиток «Микко» очень вкусный, со вкусом граната.",
            about19: "Мысли",
            about20: "Входить",
            about21: "киви",
            about22: "Напиток Micco со вкусом киви освежает.",
            about23: "Мысли",
            about24: "Входить",
            about25: "манго",
            about26: "Напиток Micco Mango имеет настоящий тропический вкус.",
            about27: "Мысли",
            about28: "Входить",
            about29: "Груша",
            about30: "Каждый день я выбираю грушевый вкус Micco.",
            about31: "Мысли",
            about32: "Входить",

            home52: "Как мы работаем",
            home53: "Процесс изготовления нашего национального продукта Микко.",
            home54: "1 этап - Добыча подземных природных артезианских вод.",
            home55: "Напиток Micco проходит через 5-ступенчатую фильтрацию, что обеспечивает высокую чистоту и безопасность.",
            home56: "Шаги.",
            home57: "Фильтр Shell <br> Угольный фильтр <br> Картридж <br> Мембрана осмоса <br> Ультрафиолетовый фильтр",
            home58: "Этап 2<br> Пастеризация",
            home59: "На этом этапе природная вода, прошедшая через фильтры, обогащается необходимыми компонентами, ароматами и натуральными соками и кипятится до 93-95 градусов.",
            home60: "Этап 3: Упаковка",
            home61: "Готовый продукт разливают в пластиковые емкости емкостью 0,5 и 1 л при кипячении.",

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

            about5: "біз туралы",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            about9: "Біздің өнімдер",
            about10: "Алма",
            about11: "Микко алма сусынының табиғи, сергітетін және жағымды дәмі бар.",
            about111: "Ойлар",
            about12: "Енгізіңіз",
            about13: "Банан",
            about14: "Micco банан хош иісті сусын сергітеді.",
            about15: "Ойлар",
            about16: "Енгізіңіз",
            about17: "Анар",
            about18: "Микко сусыны өте дәмді, анар хош иісі бар.",
            about19: "Ойлар",
            about20: "Енгізіңіз",
            about21: "киви",
            about22: "Киви хош иісі бар Micco сусыны сергітеді.",
            about23: "Ойлар",
            about24: "Енгізіңіз",
            about25: "манго",
            about26: "Micco Mango сусынының нағыз тропикалық дәмі бар.",
            about27: "Ойлар",
            about28: "Енгізіңіз",
            about29: "Алмұрт",
            about30: "Күн сайын мен Micco алмұрт дәмін таңдаймын.",
            about31: "Ойлар",
            about32: "Енгізіңіз",

            home52: "Біз қалай жұмыс істейміз",
            home53: "Ұлттық өніміміз Микконың жасалу процесі.",
            home54: "1-кезең – жер асты табиғи артезиан суларын алу.",
            home55: "Micco сусыны 5 сатылы фильтрациядан өтеді, бұл жоғары тазалық пен қауіпсіздікті қамтамасыз етеді.",
            home56: "Қадамдар.",
            home57: "Қабық сүзгісі <br> Көміртекті фильтр <br> Картридж <br> Осмос мембранасы <br> Ультракүлгін сүзгі",
            home58: "2-кезең<br> Пастерлеу",
            home59: "Бұл кезеңде сүзгілерден өткен табиғи су қажетті компоненттермен, хош иістермен және табиғи шырындармен байытылып, 93-95 градусқа дейін қайнатылады.",
            home60: "3-кезең: Қаптама",
            home61: "Дайын өнім қайнаған кезде сыйымдылығы 0,5 және 1 литр пластикалық ыдыстарға құйылады.",
            
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
