import logo from "../assets/logo.svg";
import Link from "next/link";

function Footer() {
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
            <footer>
                <p>Deployed with 3-click-deployment</p>
                <Link href={`/contact`}>Contact page</Link>
                <br></br>
                <Link href={`/${'does-not-exist-' + Math.floor(Math.random() *10)}`}>Contact random page</Link>
                <img src={logo.src} className="App-logo" alt="logo"/>
            </footer>
        </>
    );
}

export default Footer;