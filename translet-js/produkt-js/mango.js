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

            about5: "Mango tami",
            about6: "Bosh bo'lim",
            about7: "Mijozlar",
            about8: "Haqimizda",

            mango1: "micco mango Tamligi",
            mango2: "Mango ta’miga ega",
            mango3: "Micco — mango ta’mli tetiklantiruvchi ichimlik bo‘lib, uning shirin va o‘zgacha mazasi sizga tropik kayfiyat ulashadi. Har bir qultum sizni quvvatlantirib, issiq kunlarda tetiklik baxsh etadi.",
            mango4: "Micco Mango Ta’mining Foydalari <br> Micco mango ta’mli ichimligi tabiiy tarkibi va foydali xususiyatlari bilan ajralib turadi. <br> U organizmni zarur vitaminlar bilan boyitib, kun davomida yaxshi kayfiyat taqdim etadi.",
            mango5: "Terini go‘zallashtiruvchi ichimlik <br> Mango tarkibidagi foydali moddalari terining sog‘lom va yorqin bo‘lishiga yordam beradi. <br> Micco mango ichimligi tabiiy tarkibi bilan terini namlantirishga ko‘maklashadi.",
            mango6: "Immunitetni mustahkamlovchi tarkib <br> Mango ko‘p miqdorda C vitamini va antioksidantlarga ega bo‘lib, organizmni kasalliklarga qarshi bardoshli qiladi. <br> Micco mango ichimligi immun tizimingizni mustahkamlashga ko‘mak beradi.",
            
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

            about5: "Mango flavor",
            about6: "Home",
            about7: "Customers",
            about8: "About us",

            mango1: "micco mango Fullness",
            mango2: "It tastes like mango.",
            mango3: "Micco is a refreshing mango-flavored drink with a sweet and unique taste that will give you a tropical feeling. Every sip will energize you and give you a refreshing drink on hot days.",
            mango4: "Benefits of Micco Mango Flavor <br> Micco mango flavor drink is distinguished by its natural composition and beneficial properties. <br> It enriches the body with essential vitamins and provides a good mood throughout the day.",
            mango5: "A drink that beautifies the skin <br> The beneficial substances contained in mango help to make the skin healthy and radiant. <br> Micco mango drink helps to moisturize the skin with its natural composition.",
            mango6: "Immune-boosting ingredients <br> Mango is rich in vitamin C and antioxidants, which make the body more resistant to diseases. <br> Micco mango drink helps strengthen your immune system.",

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

            about5: "манго вкус",
            about6: "Основной раздел",
            about7: "Клиенты",
            about8: "О нас",

            mango1: "микко манго полнота",
            mango2: "На вкус как манго.",
            mango3: "Micco — освежающий напиток со вкусом манго, сладким и уникальным вкусом, который подарит вам тропическое ощущение. Каждый глоток зарядит вас энергией и даст вам освежающий напиток в жаркие дни.",
            mango4: "Преимущества напитка Micco со вкусом манго <br> Напиток Micco со вкусом манго отличается натуральным составом и полезными свойствами. <br> Он обогащает организм необходимыми витаминами и обеспечивает хорошее настроение на весь день.",
            mango5: "Напиток, который украшает кожу. <br> Полезные вещества, содержащиеся в манго, помогают сделать кожу здоровой и сияющей. <br> Напиток Micco mango помогает увлажнить кожу благодаря своему натуральному составу.",
            mango6: "Ингредиенты, повышающие иммунитет. <br> Манго богато витамином С и антиоксидантами, которые делают организм более устойчивым к болезням. <br> Напиток из манго Micco помогает укрепить вашу иммунную систему.",

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
        },
        kz: {
            about1: "Негізгі бөлім",
            about2: "біз туралы",
            about3: "Біздің өнімдер",
            about4: "Байланыс",

            about5: "манго дәмі",
            about6: "Негізгі бөлім",
            about7: "Клиенттер",
            about8: "Біз туралы",

            mango1: "Микко манго толықтығы",
            mango2: "Дәмі манго сияқты.",
            mango3: "Micco - тәтті және ерекше дәмі бар сергітетін манго хош иісті сусын, ол сізге тропикалық сезім сыйлайды. Әрбір жұтым сізге қуат беріп, ыстық күндерде сергітетін сусын береді.",
            mango4: "Манго хош иісі бар Micco сусынының артықшылықтары <br> Манго хош иісі бар Micco сусынының табиғи құрамы мен пайдалы қасиеттері бар. <br> Ол ағзаны қажетті витаминдермен байытады және күні бойы жақсы көңіл-күйді қамтамасыз етеді.",
            mango5: "Теріні көркейтетін сусын. <br> Манго құрамындағы пайдалы заттар теріңізді сау және жылтыр етеді. <br> Micco манго сусыны табиғи құрамының арқасында теріні ылғалдандыруға көмектеседі.",
            mango6: "Иммунитетті көтеретін ингредиенттер. <br> Манго С дәрумені мен антиоксиданттарға бай, бұл денені ауруға төзімді етеді. <br> Micco манго сусыны иммундық жүйені нығайтуға көмектеседі.",
            
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
