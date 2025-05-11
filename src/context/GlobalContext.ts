export enum Lang {
    EN = 'en',
    FR = 'fr'
}

var lang : Lang;

export function setLang(value : Lang) {
    lang = value
}

export function getLang() {
    return lang
}