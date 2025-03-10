import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: {
        name: "Yegor Sidorenko",
        qualification: "Frontend Developer",
        about: "Born in Russia. Former senior email marketing manager. I like dogs, hiking, coffee and Chinese tea. Speak Russian and English.",
        experience: {
          title: "Experience",
          time: "December 2023 — December 2024",
          chronicleDescription1: "1. Developing a web application for creating and editing Chronicle Services configuration files. Chronicle Services is a framework for building systems based on microservice architecture.",
          done: "What have been done:",
          chronicleItem1: "displaying the system structure using React Flow;",
          chronicleItem2: "forms made with ChakraUI, React Hook Forms, React Select;",
          chronicleItem3: "async forms validation;",
          chronicleItem4: "state management using Zustand;",
          chronicleItem5: "undo/redo functionality with Zundo;",
          chronicleItem6: "context menu, copying as addition to React Flow functionality;",
          chronicleItem7: "editing microservices with forms and/or YAML-editor;",
          chronicleItem8: "search bar for quick in-app navigation;",
          chronicleItem9: "app adaptation to dark and light themes;",
          chronicleItem10: "project decomposition into modules;",
          chronicleItem11: "app implementation as Grafana plugin extension to monitor microservices base system.",
          chronicleDescription2: "2. Developing frontend prototype for trading application with real-time FX quotes.",
          chronicleItem12: "login and register pages;",
          chronicleItem13: "UI using Chakra UI;",
          chronicleItem14: "charts using Recharts;",
          chronicleItem15: "trading FX tiles and order book;",
          chronicleItem16: "using WebSocket to recieve data from backend.",
        },
        education: {
          title: "Education",
          hse: "Higher School of Economics (Saint Petersburg)",
          qualification1: "Master",
          program1: "Applied and Interdisciplinary History 'Usable Pasts'",
          sfedu: "Southern Federal University",
          qualification2: "Bachelor",
          program2: "International relations",
        },
        courses: {
          title: "Courses",
          yandex: "Yandex Praktikum",
          program1: "Web Developer",
          leeds: "The University of Leeds (UK)",
          program2: "General English Programme (B2)"
        }
      }
    },
    rus: {
      translation: {
        name: "Егор Сидоренко",
        qualification: "Frontend-разработчик",
        about: "Родился в Краснодарском крае, живу в Санкт-Петербурге. В прошлом - email-маркетолог. Женат. Собачник. Люблю ходить в походы и заваривать китайский чай.",
        experience: {
          title: "Опыт работы",
          time: "Декабрь 2023 — Декабрь 2024",
          chronicleDescription1: "1. Разработка веб-приложения для создания и редактирования конфигурационных файлов Chronicle Services. Chronicle Services — фреймворк для построения систем на основе микросервисвисной архитектуры.",
          done: "Реализовал:",
          chronicleItem1: "отображение структуры системы с помощью React Flow;",
          chronicleItem2: "формы с использованием ChakraUI, React Hook Forms, React Select;",
          chronicleItem3: "асинхронная валидация форм;",
          chronicleItem4: "хранение состояний с помощью Zustand;",
          chronicleItem5: "функционал undo/redo с помощью Zundo;",
          chronicleItem6: "дополнение функционала React Flow: контекстное меню, копирование;",
          chronicleItem7: "редактирование микросервисов в формах или в YAML-редакторе;",
          chronicleItem8: "search bar для навигации и поиска компонентов;",
          chronicleItem9: "адаптацию приложения под темную и светлые темы;",
          chronicleItem10: "декомпозицию проекта на модули",
          chronicleItem11: "новый модуль — Grafana плагин для мониторинга микросервисной системы.",
          chronicleDescription2: "2. Разработка прототипа приложения для отображения котировок в реальном времени.",
          chronicleItem12: "страницу входа и регистрации;",
          chronicleItem13: "UI с помощью ChakraUI;",
          chronicleItem14: "графики с котировками с помощью Recharts;",
          chronicleItem15: "плитки с валютами и книга ордеров;",
          chronicleItem16: "получение данных с backend с помощью WebSocket.",
        },
        education: {
          title: "Образование",
          hse: "Высшая школа экономики (Санкт-Петербург)",
          qualification1: "Магистр",
          program1: "Прикладная и междисциплинарная история (англоязычная)",
          sfedu: "Южный федеральный университет (Ростов-на-Дону)",
          qualification2: "Бакалавр",
          program2: "Международные отношения",
        },
        courses: {
          title: "Курсы и повышение квалификации",
          yandex: "Яндекс Практикум",
          program1: "Веб-разработчик",
          leeds: "Университет Лидса (Великобритания)",
          program2: "Английский язык (B2)"
        }
      }
    }
  },
  lng: "eng", 
  fallbackLng: "eng"
});