import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                settings: {
                    title: "Settings",
                    description: "This is an example of translation in en",
                },
            },
        },
        de: {
            translation: {
                settings: {
                    title: "Einstellungen",
                    description: "Dies ist ein Beispiel für Übersetzung in de",
                },
            },
        },
    },
});
