import { createContext, useContext } from 'react';

export const LANGS = ['az', 'ru', 'en'];

export const CONTACT = {
  phone: '+994 55 651 74 00',
  phoneHref: 'tel:+994556517400',
  whatsapp: 'https://wa.me/994556517400',
  email: 'bluehomeazerbaijan@gmail.com',
  site: 'qarabaghestate.az',
  instagram: 'https://www.instagram.com/qarabaghestate',
  handle: '@qarabaghestate',
};

export const translations = {
  az: {
    nav: { portfolio: 'Portfel', about: 'Haqqımızda', services: 'Xidmətlər', contact: 'Əlaqə', cta: 'Fərdi baxış', menu: 'Menyu', close: 'Bağla' },
    hero: {
      eyebrow: 'Satış · İcarə · İnvestisiya · Bakı',
      title: 'Bakıda lüks həyatın yeni tərifi',
      sub: 'Xəzər sahilində satış və icarə üçün seçilmiş mənzillər, villalar və kommersiya obyektləri. Hər obyekt şəxsən yoxlanılır, hər təklif yalnız sizin üçün hazırlanır.',
      cta: 'Portfelə baxın',
      call: 'Zəng edin',
      scroll: 'Aşağı',
    },
    marquee: ['Satış', 'İcarə', 'Sahil mənzilləri', 'Lüks villalar', 'Kommersiya sahələri', 'İnvestisiya məsləhəti'],
    about: {
      label: 'Haqqımızda',
      heading: 'Qarabağın ruhu, Xəzərin üfüqü.',
      lead: '2024-cü ildə yaradılıb və yüksək gəlirli investisiyalar ilə sahil həyatı üçün yeni standart müəyyən edir.',
      body: 'Biz sizə yüzlərlə elan göstərmirik. Bazarı sizin yerinizə öyrənir, hər obyekti şəxsən yoxlayır və yalnız dəyərinə inandığımız təklifləri gətiririk. İstər alış, istər icarə olsun, hər müştərinin bir şəxsi məsləhətçisi olur və baxışdan müqavilənin imzalanmasına qədər bütün proses bir əldə idarə olunur.',
      caption: 'Məsləhətçimiz müştəri ilə görüşdə',
      stats: [
        { value: '2024', label: 'Bakıda təsis ili' },
        { value: '2', label: 'İstiqamət: satış və icarə' },
        { value: '1 : 1', label: 'Hər müştəriyə şəxsi məsləhətçi' },
        ],
    },
    portfolio: {
      label: 'Eksklüziv portfel',
      heading: 'Seçilmiş iqamətgahlar və aktivlər',
      intro: 'Hər kateqoriyada satış və icarə üçün məhdud sayda obyekt təqdim edirik. Ətraflı məlumat üçün kartın üzərinə gəlin.',
      price: 'Qiymət / icarə haqqı',
      priceValue: 'Sorğu ilə',
      modes: 'Satış · İcarə',
      features: 'Xüsusiyyətlər',
      request: 'Baxış təyin edin',
      items: [
        { type: 'Yaşayış', title: 'Sahil mənzilləri', location: 'Xəzər sahili, Bakı', desc: 'Panoram şüşəli, dənizə açılan, şəxsi terraslı mənzillər. Səhər Xəzər, axşam şəhər işıqları.', tags: ['Dəniz mənzərəsi', 'Terras', 'Konsyerj'] },
        { type: 'Yaşayış', title: 'Lüks villalar', location: 'Abşeron yarımadası', desc: 'Geniş bağ, şəxsi hovuz və tam məxfilik. Şəhərə yaxın, səs-küydən uzaq villalar.', tags: ['Şəxsi hovuz', 'Bağ', 'Mühafizə'] },
        { type: 'Kommersiya', title: 'Kommersiya sahələri', location: 'Mərkəzi Bakı', desc: 'A sinifli ofislər və küçə səviyyəli pərakəndə sahələr. Sabit icarə gəliri üçün seçilmiş ünvanlar.', tags: ['A sinif', 'İcarə gəliri', 'Mərkəzi ünvan'] },
      ],
    },
    statement: {
      text: 'Təqdim etdiyimiz hər obyekti, özümüz üçün seçirmiş kimi diqqətlə seçirik.',
      sign: 'Qarabagh Estate',
    },
    services: {
      label: 'Xidmətlər',
      heading: 'Hər şey nəzarətdə. Məxfi şəkildə.',
      items: [
        { title: 'Satış və icarə', desc: 'Obyektinizi doğru alıcıya satır və ya etibarlı icarəçiyə veririk. Siz isə alış və ya icarə üçün yalnız yoxlanılmış təkliflər alırsınız.' },
        { title: 'Portfelin idarə edilməsi', desc: 'İcarəçi seçimi, texniki xidmət və aylıq hesabatlar. Əmlakınız vaxtınızı almadan gəlir gətirir.' },
        { title: 'Fərdi baxışlar', desc: 'Yalnız qabaqcadan razılaşma ilə, sizə uyğun vaxtda. Obyekti hər detalı ilə tanıyan məsləhətçi sizi müşayiət edir.' },
        { title: 'İnvestisiya məsləhəti', desc: 'Bazar təhlili, gəlirlilik hesablaması və alış strategiyası. Məqsədinizə və müddətinizə uyğun aydın plan.' },
      ],
    },
    promise: {
      label: 'Vədimiz',
      heading: 'Müştərilərimizə verdiyimiz söz',
      prev: 'Əvvəlki',
      next: 'Növbəti',
      items: [
        { quote: 'Sizə heç vaxt özümüz görmədiyimiz obyekti təqdim etmirik. Hər ünvanı əvvəlcə komandamız ziyarət edir.', title: 'Şəxsən yoxlanılmış' },
        { quote: 'Məlumatlarınız və maraqlarınız yalnız sizinlə məsləhətçiniz arasında qalır. Məxfilik xidmətimizin əsasıdır.', title: 'Tam məxfilik' },
        { quote: 'Rəqəmləri olduğu kimi göstəririk. Gəlirlilik hesablamalarımız ehtiyatlıdır, çünki etibar şişirdilmiş vədlərdən daha qiymətlidir.', title: 'Şəffaf rəqəmlər' },
      ],
    },
    contact: {
      label: 'Əlaqə',
      heading: 'Fərdi baxış təyin edin',
      sub: 'Bizə zəng edin və ya yazın. Məsləhətçimiz sizinlə əlaqə saxlayıb, sizə uyğun vaxtda baxış təşkil edəcək.',
      phone: 'Telefon',
      email: 'E-poçt',
      whatsapp: 'WhatsApp-da yazın',
      instagram: 'Instagram',
      copy: 'Kopyala',
      copied: 'Kopyalandı',
    },
    footer: {
      tagline: 'Lüks daşınmaz əmlakın satışı, icarəsi və investisiya məsləhəti. Bakı, Azərbaycan.',
      address: 'Bakı, Azərbaycan',
      hours: 'Yalnız qabaqcadan razılaşma ilə',
      rights: '© 2026 Qarabagh Estate. Bütün hüquqlar qorunur.',
      back: 'Yuxarı',
    },
  },

  ru: {
    nav: { portfolio: 'Портфолио', about: 'О нас', services: 'Услуги', contact: 'Контакты', cta: 'Частный показ', menu: 'Меню', close: 'Закрыть' },
    hero: {
      eyebrow: 'Продажа · Аренда · Инвестиции · Баку',
      title: 'Новый стандарт роскошной жизни в Баку',
      sub: 'Отобранные апартаменты, виллы и коммерческие объекты на Каспийском побережье для продажи и аренды. Каждый объект проверен лично, каждое предложение подготовлено только для вас.',
      cta: 'Смотреть портфолио',
      call: 'Позвонить',
      scroll: 'Вниз',
    },
    marquee: ['Продажа', 'Аренда', 'Апартаменты у моря', 'Виллы класса люкс', 'Коммерческие площади', 'Инвестиционный консалтинг'],
    about: {
      label: 'О компании',
      heading: 'Дух Карабаха, горизонт Каспия.',
      lead: 'Основана в 2024 году и задаёт новый стандарт высокодоходных инвестиций и жизни у моря.',
      body: 'Мы не показываем вам сотни объявлений. Мы изучаем рынок за вас, лично проверяем каждый объект и предлагаем только то, в ценности чего уверены. Покупка или аренда, у каждого клиента есть личный советник, а весь процесс, от показа до подписания договора, ведётся в одних руках.',
      caption: 'Наш советник на встрече с клиентом',
      stats: [
        { value: '2024', label: 'Год основания в Баку' },
        { value: '2', label: 'Направления: продажа и аренда' },
        { value: '1 : 1', label: 'Личный советник для каждого клиента' },
              ],
    },
    portfolio: {
      label: 'Эксклюзивное портфолио',
      heading: 'Избранные резиденции и активы',
      intro: 'В каждой категории мы представляем ограниченное число объектов для продажи и аренды. Наведите на карточку, чтобы узнать подробности.',
      price: 'Цена / аренда',
      priceValue: 'По запросу',
      modes: 'Продажа · Аренда',
      features: 'Особенности',
      request: 'Назначить показ',
      items: [
        { type: 'Жилая', title: 'Апартаменты у моря', location: 'Каспийское побережье, Баку', desc: 'Апартаменты с панорамным остеклением, видом на море и частными террасами. Утром Каспий, вечером огни города.', tags: ['Вид на море', 'Терраса', 'Консьерж'] },
        { type: 'Жилая', title: 'Виллы класса люкс', location: 'Абшеронский полуостров', desc: 'Просторные сады, частный бассейн и полная приватность. Виллы рядом с городом, вдали от шума.', tags: ['Частный бассейн', 'Сад', 'Охрана'] },
        { type: 'Коммерческая', title: 'Коммерческие площади', location: 'Центр Баку', desc: 'Офисы класса А и торговые помещения на первых этажах. Отобранные адреса для стабильного арендного дохода.', tags: ['Класс А', 'Арендный доход', 'Центр города'] },
      ],
    },
    statement: {
      text: 'Каждый объект мы выбираем так, будто выбираем его для себя.',
      sign: 'Qarabagh Estate',
    },
    services: {
      label: 'Услуги',
      heading: 'Всё под контролем. Конфиденциально.',
      items: [
        { title: 'Продажа и аренда', desc: 'Продадим ваш объект подходящему покупателю или сдадим надёжному арендатору. А для покупки или аренды вы получите только проверенные предложения.' },
        { title: 'Управление портфелем', desc: 'Подбор арендаторов, обслуживание и ежемесячные отчёты. Ваша недвижимость приносит доход, не отнимая ваше время.' },
        { title: 'Частные показы', desc: 'Только по предварительной записи, в удобное для вас время. Вас сопровождает советник, знающий объект до мелочей.' },
        { title: 'Инвестиционный консалтинг', desc: 'Анализ рынка, расчёт доходности и стратегия покупки. Понятный план под ваши цели и сроки.' },
      ],
    },
    promise: {
      label: 'Наше слово',
      heading: 'Что мы обещаем клиентам',
      prev: 'Назад',
      next: 'Далее',
      items: [
        { quote: 'Мы никогда не предлагаем объект, который не видели сами. Каждый адрес сначала посещает наша команда.', title: 'Проверено лично' },
        { quote: 'Ваши данные и интересы остаются только между вами и вашим советником. Конфиденциальность лежит в основе нашей работы.', title: 'Полная конфиденциальность' },
        { quote: 'Мы показываем цифры такими, какие они есть. Наши расчёты доходности консервативны, потому что доверие ценнее громких обещаний.', title: 'Честные цифры' },
      ],
    },
    contact: {
      label: 'Контакты',
      heading: 'Назначьте частный показ',
      sub: 'Позвоните или напишите нам. Советник свяжется с вами и организует показ в удобное для вас время.',
      phone: 'Телефон',
      email: 'Эл. почта',
      whatsapp: 'Написать в WhatsApp',
      instagram: 'Instagram',
      copy: 'Копировать',
      copied: 'Скопировано',
    },
    footer: {
      tagline: 'Продажа и аренда элитной недвижимости, инвестиционный консалтинг. Баку, Азербайджан.',
      address: 'Баку, Азербайджан',
      hours: 'Только по предварительной записи',
      rights: '© 2026 Qarabagh Estate. Все права защищены.',
      back: 'Наверх',
    },
  },

  en: {
    nav: { portfolio: 'Portfolio', about: 'About', services: 'Services', contact: 'Contact', cta: 'Private viewing', menu: 'Menu', close: 'Close' },
    hero: {
      eyebrow: 'Sales · Rentals · Investments · Baku',
      title: 'Redefining Luxury Living in Baku',
      sub: 'Selected apartments, villas and commercial properties on the Caspian coast, for sale and for rent. Every property visited in person, every offer prepared for you alone.',
      cta: 'Explore Portfolio',
      call: 'Call us',
      scroll: 'Scroll',
    },
    marquee: ['Sales', 'Rentals', 'Coastal apartments', 'Luxury villas', 'Commercial spaces', 'Investment advisory'],
    about: {
      label: 'About',
      heading: 'The spirit of Qarabagh, the Caspian horizon.',
      lead: 'Established in 2024, setting the new standard for high-return investments and coastal living.',
      body: 'We do not send you hundreds of listings. We study the market for you, visit every property ourselves and bring you only what we believe is worth owning. Buying or renting, every client has one personal advisor, and the whole process, from the first viewing to the signed contract, stays in one pair of hands.',
      caption: 'Our advisor meeting a client',
      stats: [
        { value: '2024', label: 'Founded in Baku' },
        { value: '2', label: 'Lines of business: sales and rentals' },
        { value: '1 : 1', label: 'A personal advisor for every client' },
              ],
    },
    portfolio: {
      label: 'Exclusive Portfolio',
      heading: 'Selected residences & assets',
      intro: 'We represent a limited number of properties for sale and for rent in each category. Hover a card to see the details.',
      price: 'Price / rent',
      priceValue: 'On request',
      modes: 'Sale · Rent',
      features: 'Features',
      request: 'Book a viewing',
      items: [
        { type: 'Residential', title: 'Coastal Apartments', location: 'Caspian coast, Baku', desc: 'Floor-to-ceiling glass, open sea views and private terraces. The Caspian in the morning, the city lights at night.', tags: ['Sea view', 'Terrace', 'Concierge'] },
        { type: 'Residential', title: 'Luxury Villas', location: 'Absheron Peninsula', desc: 'Generous gardens, a private pool and complete privacy. Villas close to the city, far from its noise.', tags: ['Private pool', 'Garden', 'Security'] },
        { type: 'Commercial', title: 'Commercial Spaces', location: 'Central Baku', desc: 'Grade-A offices and street-level retail. Selected addresses for steady rental income.', tags: ['Grade A', 'Rental income', 'Central address'] },
      ],
    },
    statement: {
      text: 'We choose every property we represent as carefully as if we were choosing it for ourselves.',
      sign: 'Qarabagh Estate',
    },
    services: {
      label: 'Services',
      heading: 'Everything handled, discreetly.',
      items: [
        { title: 'Sales & Rentals', desc: 'We sell your property to the right buyer or let it to a reliable tenant. When you are buying or renting, you see only offers we have verified.' },
        { title: 'Portfolio Management', desc: 'Tenant selection, maintenance and monthly reporting. Your property earns without taking your time.' },
        { title: 'Private Viewings', desc: 'By appointment only, at a time that suits you, with an advisor who knows the property in every detail.' },
        { title: 'Investment Advisory', desc: 'Market analysis, yield calculations and acquisition strategy. A clear plan built around your goals and timeline.' },
      ],
    },
    promise: {
      label: 'Our word',
      heading: 'What we promise every client',
      prev: 'Previous',
      next: 'Next',
      items: [
        { quote: 'We never present a property we have not seen ourselves. Our team visits every address first.', title: 'Visited in person' },
        { quote: 'Your details and your interests stay between you and your advisor. Discretion is the foundation of what we do.', title: 'Complete discretion' },
        { quote: 'We show the numbers as they are. Our yield estimates are conservative, because trust is worth more than big promises.', title: 'Honest numbers' },
      ],
    },
    contact: {
      label: 'Contact',
      heading: 'Arrange a private viewing',
      sub: 'Call or write to us. An advisor will get back to you and arrange a viewing at a time that suits you.',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'Message on WhatsApp',
      instagram: 'Instagram',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      tagline: 'Luxury property sales, rentals and investment advisory. Baku, Azerbaijan.',
      address: 'Baku, Azerbaijan',
      hours: 'By appointment only',
      rights: '© 2026 Qarabagh Estate. All rights reserved.',
      back: 'Back to top',
    },
  },
};

export const LangContext = createContext({ lang: 'az', t: translations.az, setLang: () => {} });
export const useLang = () => useContext(LangContext);
