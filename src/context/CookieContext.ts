export function setCookie(name : string, value : string, days : number, path : string = '/', domain : string = '', secure : boolean = false) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }

    const cookieString = `${name}=${encodeURIComponent(value)}${expires}; path=${path}${domain ? `; domain=${domain}` : ''}${secure ? '; secure' : ''}`;
    document.cookie = cookieString;
}

export function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts != undefined && parts.length === 2) return parts.pop().split(';').shift();
    return null;
}