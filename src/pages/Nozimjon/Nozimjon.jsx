import './Nozimjon.css'
import './components.css'
import Navbar from "./components/Navbar"
import { Link } from 'react-router-dom'

export default function Nozimjon() {
    return(
        <>
            <Navbar />
            <main className='main-1'>
                <div className='hidden-gradient w-100 h-100 p-100'>
                    <div className="w-50">
                        <h1 className='text-white text-52'>The best IT team <span className='cursiv text-60 textc-cyber-2 textn-cyber-2'>ever</span> !</h1><br />
                        <p className='text-white'>Our team was founded in 2023, and since then, we've rapidly become one of the most renowned IT companies in the industry. With nearly 30 offices across the globe and a talented team of over 30 collaborators, we are proud of our diverse and dynamic workforce. We've successfully launched a variety of large-scale projects, each making a significant impact in our field. Our commitment to innovation and excellence has positioned us at the forefront of the tech world, and we continue to expand our reach and capabilities every year.</p><br />
                        <Link className='modern-a' to="">Learn<spam className="space"></spam>more →</Link>
                    </div>
                </div>
            </main>
            <main className="main-2">
                <div className="hidden-bg w-100 h-100 p-100 flex">
                    <div className="w-40"></div>
                    <div className='w-60'>
                        <h1 className='text-white text-52'>Where can you <span className='cursiv text-60 textc-cyber-2 textn-cyber-2'>find</span> us ?</h1><br />
                        <p className='text-white'>Our company operates globally, with around 30 offices and a team of 150 talented professionals. We work with modern technologies in comfortable, inspiring spaces and offer the best features for both employees and clients. If you want to join a dynamic team, explore our career opportunities—competitive salaries, a brilliant team environment, and personal growth await you! No experience? No problem! We provide comprehensive IT training to help you gain the skills you need. With our support, we guarantee you’ll be ready to find your place in the world of IT.</p><br />
                        <Link className='modern-a' to="">Find<spam className="space"></spam>work →</Link>
                    </div>
                </div>
            </main>
        </>
    )
}
