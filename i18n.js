import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./shared/translations";

i18n.use(initReactI18next).init(
{
    resources
}
)