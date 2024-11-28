import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'

export default function Navbar() {
    return(
        <>
            <nav>
                <div className='flex aic gap-10'>
                    <img src={ logo } alt="logo" />
                    <p className="cyber textc-cyber-1 textn-cyber-1 text-36 textw-700">CYBER</p>
                </div>
                <ul>
                    <li><Link to="" className='textc-cyber-1h'>Home</Link></li>
                    <li><Link to="" className='textc-cyber-1h'>About</Link></li>
                    <li><Link to="" className='textc-cyber-1h'>Donations</Link></li>
                    <li><Link to="" className='textc-cyber-1h'>Branches</Link></li>
                    <li><Link to="" className='textc-cyber-1h'>Profile</Link></li>
                </ul>
            </nav>
        </>
    )
}
