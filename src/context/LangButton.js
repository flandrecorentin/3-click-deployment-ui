'use client'

import  { useEffect } from 'react';

import {getLang, setLang, Lang} from "./GlobalContext";
import {getCookie, setCookie} from "./CookieContext";

function LangButton() {

    // useEffect run only one time after rendering
    useEffect(() => {
        if (getCookie('lang') === null || getCookie('lang') === undefined) {
            console.log("Default lang is ", Lang.EN)
            clickLang(Lang.EN)
        }
    }, []);

    function clickLang(value) {
        console.log('clickLang with ' + value)
        setLang(value)
        setCookie('lang', value, 1)
        console.log(getCookie('lang'))
    }

    return (
        <>
            <button onClick={() => clickLang(Lang.EN)}>switch EN</button>
            <button onClick={() => clickLang(Lang.FR)}>switch FR</button>
        </>
    )
}

export default LangButton;