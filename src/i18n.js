import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales/resources";

const langMap = {
	"en-IN": "en",
	"fr": "fr"
}

i18n  
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: langMap[window.navigator.language],
    fallbackLng: 'en',

    keySeparator: '.',

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    ns: ['allstate'],
    defaultNS: 'allstate'
  });

  export default i18n;