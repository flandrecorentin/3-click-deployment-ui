// import { useState } from 'react';

function ColorSchemeButton() {
    // const [value, setValue] = useState(12);

    return (
        <>
            {/*<input*/}
            {/*    value={value}*/}
            {/*    onChange={e => setValue(e.target.value)}*/}
            {/*/>*/}
            {/*<button onClick={() => setValue(value + 1)}>*/}
            {/*    Increment value*/}
            {/*</button>*/}
            {/*<p>Hello, the value is {value}</p>*/}

            {/*<button onClick={f}></button>*/}
            <p>test color</p>
        </>
    );
}

export function f() {
    console.log("he")
}

export default ColorSchemeButton;

// function ColorSchemeButton() {
//
//     return (
//         <p>change schem</p>,
//         <button id="darkModeToggle" >Toggle Dark Mode</button>,
//         <button id="darkModeToggle" onClick={changeMode}>Toggle Dark Mode</button>
//     );
// }
//
// export default ColorSchemeButton;
//
// function changeMode() {
//     console.log("hello debug")
//     // document.addEventListener('DOMContentLoaded', () => {
//     //     const darkModeToggle = document.getElementById('darkModeToggle');
//     //     const body = document.body;
//     //
//     //     console.log("debug")
//     //
//     //     // Check if the user has a preference for dark mode
//     //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     //         body.classList.add('dark-mode');
//     //     }
//     //
//     //     darkModeToggle.addEventListener('click', () => {
//     //         body.classList.toggle('dark-mode');
//     //
//     //         // Optionally, save the preference to localStorage
//     //         if (body.classList.contains('dark-mode')) {
//     //             localStorage.setItem('dark-mode', 'enabled');
//     //         } else {
//     //             localStorage.setItem('dark-mode', 'disabled');
//     //         }
//     //     });
//     //
//     //     // Apply saved preference from localStorage
//     //     if (localStorage.getItem('dark-mode') === 'enabled') {
//     //         body.classList.add('dark-mode');
//     //     }
//     // });
// }