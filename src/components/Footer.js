import logo from "../assets/logo.svg";
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer>
                <p>Deployed with 3-click-deployment</p>
                <Link href={`/`}>Root page</Link>
                <br></br>
                <Link href={`/scripts`}>Scripts page</Link>
                <br></br>
                <Link href={`/about`}>About page</Link>
                <br></br>
                <Link href={`/${'does-not-exist-' + Math.floor(Math.random() *10)}`}>Contact random page</Link>
                {/*<img src={logo.src} className="App-logo" alt="logo"/>*/}
            </footer>
        </>
    );
}

export default Footer;