import {
  FaSmileBeam,
  FaMountain,
  FaMapMarkedAlt,
  FaClock,
} from "react-icons/fa";

export const destinations = [
  {
    title: {
      uz: "Marg'ilon — Rishton — Qo'qon",
      ru: "Маргилан — Риштан — Коканд",
      en: "Margilan — Rishtan — Kokand",
    },
    img: "./images/popular-1.jpg",
    description: null,
    aos: "fade-right",
  },
  {
    title: {
      uz: "Samarqand + Buxoro",
      ru: "Самарканд + Бухара",
      en: "Samarkand + Bukhara",
    },
    img: "./images/popular-2.jpg",
    description: {
      uz: "Yer yuzining sayqali va Islom dinining quvvati deya ta'rif berilgan betakror maskanlarni ziyorat qilishingiz uchun ajoyib imkoniyat!",
      ru: "Уникальная возможность посетить места, описанные как украшение Земли и духовная сила ислама!",
      en: "A unique opportunity to visit places described as the ornament of the Earth and the power of Islam!",
    },
    aos: "zoom-in-up",
    wide: true,
  },
  {
    title: {
      uz: "Qo'qon — Rishton",
      ru: "Коканд — Риштан",
      en: "Kokand — Rishtan",
    },
    img: "./images/popular-3.jpg",
    description: null,
    aos: "fade-left",
  },
  {
    title: {
      uz: "Burj Khalifa",
      ru: "Бурдж-Халифа",
      en: "Burj Khalifa",
    },
    img: "./images/dubai-1.jpg",
    description: {
      uz: "Dunyoning eng baland minorasi — Dubayning ramzi. Unutilmas manzara va yoritilgan kechalar.",
      ru: "Самая высокая башня в мире — символ Дубая. Незабываемый вид и сверкающие ночи.",
      en: "The tallest tower in the world — a symbol of Dubai. Unforgettable view and glittering nights.",
    },
    aos: "flip-left",
  },
  {
    title: {
      uz: "Palm Jumeirah",
      ru: "Пальма Джумейра",
      en: "Palm Jumeirah",
    },
    img: "./images/dubai-2.jpg",
    description: {
      uz: "Sun'iy orol — Palm Jumeirah, hashamatli mehmonxonalar va plyajlar joylashgan maskan.",
      ru: "Искусственный остров — Пальма Джумейра с роскошными отелями и пляжами.",
      en: "Artificial island — Palm Jumeirah, home to luxurious hotels and beaches.",
    },
    aos: "fade-up",
  },
  {
    title: {
      uz: "Dubai Mall",
      ru: "Дубай Молл",
      en: "Dubai Mall",
    },
    img: "./images/dubai-3.jpg",
    description: {
      uz: "Jahonning eng yirik savdo markazi, ichida akvarium, muz maydoni va yana ko‘p narsa mavjud.",
      ru: "Крупнейший торговый центр в мире, с аквариумом, катком и многим другим внутри.",
      en: "The world's largest shopping mall, featuring an aquarium, ice rink, and much more inside.",
    },
    aos: "zoom-in",
  },
  {
    title: {
      uz: "Sharm El-Sheikh",
      ru: "Шарм-эль-Шейх",
      en: "Sharm El-Sheikh",
    },
    img: "./images/sharm-el-sheikh.jpg",
    description: {
      uz: "Qizil dengiz sohilidagi mashhur kurort shahri. Toza plyajlar, ajoyib suv osti dunyosi va zamonaviy dam olish maskanlari.",
      ru: "Популярный курортный город на берегу Красного моря. Чистые пляжи, удивительный подводный мир и современные курорты.",
      en: "A popular resort city on the Red Sea coast. Clean beaches, stunning underwater world, and modern vacation spots.",
    },
    aos: "fade-up",
    wide: true,
  },
];
export const features = [
  {
    icon: <FaSmileBeam size={60} className="text-blue-500" />,
    title: {
      uz: "Mijozlar mamnunligi",
      ru: "Удовлетворенность клиентов",
      en: "Customer Satisfaction",
    },
    description: {
      uz: "Biz mijozlarimizga eng yaxshi xizmat va unutilmas tajriba taqdim etamiz.",
      ru: "Мы предоставляем нашим клиентам лучший сервис и незабываемые впечатления.",
      en: "We provide our clients with the best service and unforgettable experiences.",
    },
  },
  {
    icon: <FaMountain size={60} className="text-blue-500" />,
    title: {
      uz: "Haqiqiy sarguzasht",
      ru: "Настоящее приключение",
      en: "Real Adventure",
    },
    description: {
      uz: "Sizga chinakam sarguzashtga boy sayohat tajribasini taqdim qilamiz.",
      ru: "Мы предлагаем вам насыщенный настоящими приключениями туристический опыт.",
      en: "We offer you a travel experience full of real adventure.",
    },
  },
  {
    icon: <FaMapMarkedAlt size={60} className="text-blue-500" />,
    title: {
      uz: "Tajribali yo‘l ko‘rsatuvchilar",
      ru: "Опытные гиды",
      en: "Experienced Guides",
    },
    description: {
      uz: "Faqat eng malakali va tajribali gidlar xizmatini taqdim qilamiz.",
      ru: "Мы предоставляем услуги только самых квалифицированных и опытных гидов.",
      en: "We provide services only from the most qualified and experienced guides.",
    },
  },
  {
    icon: <FaClock size={60} className="text-blue-500" />,
    title: {
      uz: "Vaqt bo‘yicha moslashuvchanlik",
      ru: "Гибкость по времени",
      en: "Flexibility in Timing",
    },
    description: {
      uz: "Sizning sayohat vaqtingizga moslashamiz va qulaylik yaratamiz.",
      ru: "Мы подстраиваемся под ваше время путешествия и создаем комфорт.",
      en: "We adapt to your travel time and provide convenience.",
    },
  },
];
