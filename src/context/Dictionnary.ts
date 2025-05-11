// 'use client'

import { useEffect } from 'react';
import {getLang, Lang} from "@/context/GlobalContext";
import en from '../../dictionnaries/en.json';
import fr from '../../dictionnaries/fr.json';
// import {getCookie} from "@/context/CookieContext";

export let dictionnary : DictionnaryInterface = updateDictionnary();

export function updateDictionnary() : DictionnaryInterface {
    console.log('update dictionnary for' + getCookie('lang'))
    switch (getCookie('lang')) {
        case Lang.EN: return en
        // case Lang.EN: window.location.reload(); return en
        case Lang.FR: return fr
        // case Lang.FR: window.location.reload(); return fr
        default : return en
    }
}

export function getCookie(name: string) {
    if (document == null ||  undefined) return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts != undefined  && parts.length === 2) {
        // @ts-ignore
        return parts.pop().split(';').shift();
    }
    return null;
}