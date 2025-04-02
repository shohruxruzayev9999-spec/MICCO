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

            about5: "Nok tami",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            nok1: "micco Nok Tamligi",
            nok2: "Nok ta’miga ega",
            nok3: "Micco - tabiiy nok ta'mli ichimlik bo'lib, sizni silliq va yoqimli ta'mi bilan tetiklashtiradi. Har bir qultum tanangizni namlaydi va chanqog'ingizni qondiradi.",
            nok4: "Tabiiy tetiklik manbai <br> Nok o‘zining yengil va mayin ta’mi bilan organizmga tabiiy quvvat bag‘ishlaydi. <br> Micco nok ichimligi kun davomida tetik va faol bo‘lishga yordam beradi.",
            nok5: "Tinchlantiruvchi ta’sirga ega <br> Nok mevasida organizmni bo‘shashtiruvchi tabiiy moddalar mavjud bo‘lib, Micco ichimligi stress va charchoqni kamaytirishga yordam beradi.",
            nok6: "Dalada ham, sport zalida ham ideal ichimlik <br> Micco nok ichimligi nafaqat issiq kunlarda chanqoqbosdi, balki sport bilan shug‘ullanayotganlar uchun ham mukammal tanlov. <br> U organizmning suyuqlik balansini saqlashga yordam beradi.",
            
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

            about5: "Pear flavor",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            nok1: "micco Pear Filling",
            nok2: "It tastes like pear.",
            nok3: "Micco is a natural pear-flavored drink that will refresh you with its smooth and pleasant taste. Every sip will hydrate your body and quench your thirst.",
            nok4: "A natural source of refreshment <br> Pear, with its light and delicate taste, gives the body a natural boost of energy. <br> Micco pear drink helps you stay refreshed and active throughout the day.",
            nok5: "Has a calming effect <br> Pear fruit contains natural substances that relax the body, and Micco drink helps reduce stress and fatigue.",
            nok6: "The ideal drink for both the field and the gym <br> Micco pear drink is not only a thirst quencher on hot days, but also a perfect choice for those involved in sports. <br> It helps maintain the body's fluid balance.",

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

            about5: "Груша вкус",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            nok1: "Начинка из груши микко",
            nok2: "На вкус как груша.",
            nok3: "Micco — это натуральный напиток со вкусом груши, который освежает вас своим мягким и приятным вкусом. Каждый глоток увлажняет ваш организм и утоляет жажду.",
            nok4: "Натуральный источник освежения. <br> Груша, с ее легким и нежным вкусом, дает организму естественный заряд энергии. <br> Грушевый напиток «Микко» поможет вам оставаться свежими и активными в течение дня.",
            nok5: "Оказывает успокаивающее действие. Плоды груши содержат натуральные вещества, которые расслабляют организм, а напиток «Микко» помогает снять стресс и усталость.",
            nok6: "Идеальный напиток как для игры, так и для спортзала. <br> Напиток из груши Микко не только утоляет жажду в жаркие дни, но и является идеальным выбором для тех, кто занимается спортом. <br> Он помогает поддерживать баланс жидкости в организме.",

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

            about5: "Алмұрт дәмі",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            nok1: "Микко алмұрт салмасы",
            nok2: "Дәмі алмұрт сияқты.",
            nok3: "Micco - табиғи алмұрт хош иісті сусын, ол сізді тегіс және жағымды дәмімен сергітеді. Әрбір жұтым денеңізді ылғалдандырады және шөліңізді басады.",
            nok4: "Сергітудің табиғи көзі. <br> Алмұрт өзінің жеңіл және нәзік дәмімен денеге табиғи қуат береді. <br> Микко алмұрт сусыны күні бойы сергек және белсенді болуға көмектеседі.",
            nok5: "Тыныштандыратын әсері бар. Алмұрт жемістерінде денені босаңсытатын табиғи заттар бар, ал Микко сусыны стресс пен шаршауды жеңілдетуге көмектеседі.",
            nok6: "Ойынға да, жаттығу залына да тамаша сусын. <br> Микко алмұрт сусыны ыстық күндерде шөлді қандырып қана қоймайды, сонымен қатар спортпен айналысатындар үшін тамаша таңдау болып табылады. <br> Ол ағзадағы сұйықтық балансын сақтауға көмектеседі.",
            
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
