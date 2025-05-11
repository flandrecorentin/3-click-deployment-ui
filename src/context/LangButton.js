'use client'

import  { useEffect } from 'react';

import {getLang, setLang, Lang} from "./GlobalContext";
import {setCookie} from "./CookieContext";
import {updateDictionnary} from "@/context/Dictionnary";

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts != undefined  && parts.length === 2) {
        // @ts-ignore
        return parts.pop().split(';').shift();
    }
    return null;
}

function LangButton() {

    // useEffect run only one time after rendering
    useEffect(() => {
        // const cookieLang = getCookie('lang')
        // if (cookieLang === null || cookieLang === undefined) {
        //     console.log("Default lang is ", Lang.EN)
        //     // clickLang(Lang.EN)
        //     setLang(value)
        //     setCookie('lang', value, 1)
        // }
        if (getCookie('lang') === null) setCookie('lang', Lang.EN, 1)
        // setLang(getCookie('lang'))
        console.log('cookie at useEffect: ' + getCookie('lang'))
    }, []);

    function clickLang(value) {
        console.log('clickLang with ' + value)
        if (value === getLang()) {
            console.log(value + ' is already the current lang in cookie')
            return;
        }
        // setLang(value)
        setCookie('lang', value, 1)
        updateDictionnary()
        console.log("he")
        location.reload()
        // console.log(getCookie('lang'))
    }

    return (
        <>
            <button onClick={() => clickLang(Lang.EN)}>switch EN</button>
            <button onClick={() => clickLang(Lang.FR)}>switch FR</button>
        </>
    )
}

export default LangButton;