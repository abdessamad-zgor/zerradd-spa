import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./shared/translations";



let initI18nObj = ()=>{
    let i18nInstance =  i18n.use(initReactI18next).createInstance({

        resources,
        defaultNS: "translation",
        fallbackLng: "fr",
        load: 'all',
        react:{
            useSuspense:false
        }
}, (err)=>{
    console.error(err)
})
return i18nInstance
}

let initI18nContext = ()=>{
 i18n.use(initReactI18next).init({

        resources,
        defaultNS: "translation",
        fallbackLng: "fr",
        load: 'all',
        react:{
            useSuspense:false
        }
})
}

export {initI18nObj,initI18nContext};