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
          chronicleDescription1: "1. Developing a web application for creating and editing Chronicle Services configuration files. Chronicle Services is a framework for building systems based on microservice architecture.",
          done: "What have been done:",
          chronicleItem1: "displaying the system structure using React Flow;",
          chronicleItem2: "forms for working with data on ChakraUI, React Hook Forms, React Select;",
          chronicleItem3: "storing states in Session storage using Zustand;",
          chronicleItem4: "undo/redo functionality with Zundo;",
          chronicleItem5: "context menu, copying as addition to Reactflow functionality;",
          chronicleItem6: "editing microservices directly in YAML config;",
          chronicleItem7: "search bar for app components navigation;",
          chronicleItem8: "app adaptation to dark and light themes;",
          chronicleItem9: "project decomposition into Core and Editor modules;",
          chronicleItem10: "Grafana plugin as new module for monitoring microservice system.",
          chronicleDescription2: "2. Developing a frontend for an application to display real-time quotes.",
          chronicleItem11: "login and register pages;",
          chronicleItem12: "UI using Chakra UI;",
          chronicleItem13: "charts with quotes using Recharts.",
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
          leeds: "The University of Leeds",
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
          chronicleDescription1: "1. Разработка веб-приложения для создания и редактирования конфигурационных файлов Chronicle Services. Chronicle Services — фреймворк для построения систем на основе микросервисвисной архитектуры.",
          done: "Реализовал:",
          chronicleItem1: "отображение структуры системы с помощью React Flow;",
          chronicleItem2: "формы для работы с данными на ChakraUI, React Hook Forms, React Select;",
          chronicleItem3: "хранение состояний в Session storage с помощью Zustand;",
          chronicleItem4: "функционал undo/redo с помощью Zundo;",
          chronicleItem5: "дополнение функционала Reactflow: контекстное меню, копирование;",
          chronicleItem6: "редактирование микросервисов напрямую в YAML конфиге;",
          chronicleItem7: "search bar для поиска компонентов;",
          chronicleItem8: "адаптацию приложения под темную и светлые темы;",
          chronicleItem9: "декомпозицию проекта на модули Сore и Editor;",
          chronicleItem10: "новый модуль — Grafana плагин для мониторинга микросервисной системы.",
          chronicleDescription2: "2. Разработка фронтенда приложения для отображения котировок в реальном времени.",
          chronicleItem11: "страницу входа и регистрации;",
          chronicleItem12: "UI с помощью ChakraUI;",
          chronicleItem13: "графики с котировками с помощью Recharts.",
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