import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { ru } from "./locales/ru";
import { tr } from "./locales/tr";
import { ge } from "./locales/ge";
import { am } from "./locales/am";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en,
    ru,
    tr,
    ge,
    am,
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        debug: true,
        interpolation: {
            escapeValue: false
        },
        resources,
        lng: localStorage.getItem("userLanguage") || "ru",
    });

export default i18n;