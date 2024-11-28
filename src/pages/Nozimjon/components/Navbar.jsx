import './Navbar.css'
import logo from './img/logo.png'

export default function Navbar() {
    return(
        <>
            <nav>
                <img src={ logo } alt="logo" />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Donations</a></li>
                    <li><a href="">Branches</a></li>
                    <li><a href="">Profile</a></li>
                </ul>
            </nav>
        </>
    )
}
