import './Nozimjon.css'
import './components.css'
import Navbar from "./components/Navbar"
import { Link } from 'react-router-dom'

export default function Nozimjon() {
    return(
        <>
            <Navbar />
            <main>
                <div className='hidden-gradient w-100 h-100 p-100'>
                    <div className="w-50">
                        <h1 className='text-white text-52'>The best IT team <span className='cursiv text-60 textc-cyber-2 textn-cyber-2'>ever</span> !</h1><br />
                        <p className='text-white'>Our team was founded in 2023, and since then, we've rapidly become one of the most renowned IT companies in the industry. With nearly 20 offices across the globe and a talented team of over 30 collaborators, we are proud of our diverse and dynamic workforce. We've successfully launched a variety of large-scale projects, each making a significant impact in our field. Our commitment to innovation and excellence has positioned us at the forefront of the tech world, and we continue to expand our reach and capabilities every year.</p><br />
                        <Link className='modern-a' to="">Learn<spam className="space"></spam>more →</Link>
                    </div>
                </div>
            </main>
        </>
    )
}
