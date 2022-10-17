import i18n from "./main" 

export const translate = (key: string, variable: string) => {
    if (!key) {
        return '';
    }
    return i18n.global.t(key, variable);
};