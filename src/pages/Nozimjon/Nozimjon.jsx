import './Nozimjon.css'
import './components.css'
import Navbar from "./components/Navbar"
import { Link } from 'react-router-dom'
import media from './img/media.jpg'
import git from './img/git-logo.png'
import logo from './components/img/logo.png'

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
            <main className='main-3'>
                <div className='hidden-gradient w-100 h-100 p-100'>
                    <div className="w-50">
                        <h1 className='text-white text-52'>Who always  <span className='cursiv text-60 textc-cyber-2 textn-cyber-2'>build</span> our offices?</h1><br />
                        <p className='text-white'>For many years, the construction of our offices has been handled by our very own building company, a team renowned for their expertise and commitment to excellence. Their craftsmanship and attention to detail consistently result in exceptional outcomes, ensuring that every project meets the highest standards. This company has been an invaluable partner, providing us with their unmatched skills and knowledge. In return, we’ve always stood by them, offering our full support and resources to help them thrive. Together, we’ve built a relationship founded on trust, collaboration, and a shared dedication to success.</p><br />
                        <Link className='modern-a' to="">Learn<spam className="space"></spam>more →</Link>
                    </div>
                </div>
            </main>
            <div className="green-zone cont-100 text-white">
                <p className="cursiv textc-cyber-4">Our guarantee</p><br /><br />
                <div className="card-cont">
                    <div className="card-flex">
                        <div className="card">
                            <div className="card-image card-img-1"><div className="hidden-bg border-r-16 h-100 flex jcc aic text-56">PLANNING</div></div>
                            <div className='cont-10 flex col gap-10'>
                                <p>We guarantee a comprehensive planning process that helps you set clear, actionable goals and create a personalized roadmap to success. With our guidance, you'll always know the next steps to take and how to stay on track, ensuring you maximize your potential throughout the course.</p>
                                <Link className='modern-a' to="">Get<spam className="space"></spam>started →</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image card-img-2"><div className="hidden-bg border-r-16 h-100 flex jcc aic text-56">PRACTICING</div></div>
                            <div className='cont-10 flex col gap-10'>
                                <p>Our course guarantees an immersive hands-on experience with extensive practice opportunities tailored to your needs. Whether through real-world simulations, interactive exercises, or challenging tasks, we ensure you build the confidence and expertise to master every skill.</p>
                                <Link className='modern-a' to="">Get<spam className="space"></spam>started →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-flex">
                        <div className="card">
                            <div className="card-image card-img-3"><div className="hidden-bg border-r-16 h-100 flex jcc aic text-56">LEARNING</div></div>
                            <div className='cont-10 flex col gap-10'>
                                <p>We promise an engaging and in-depth learning experience designed to not only broaden your knowledge but also foster a deeper understanding of the subject. With our well-crafted materials, expert guidance, and supportive community, you’ll gain the tools to stay ahead and grow continuously.</p>
                                <Link className='modern-a' to="">Get<spam className="space"></spam>started →</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image card-img-4"><div className="hidden-bg border-r-16 h-100 flex jcc aic text-56">WORKING</div></div>
                            <div className='cont-10 flex col gap-10'>
                                <p>Our guarantee is to prepare you for real-world application of your skills. Through practical assignments, project-based learning, and actionable insights, we ensure you are fully equipped to meet challenges head-on and achieve meaningful success in your career or personal goals.</p>
                                <Link className='modern-a' to="">Get<spam className="space"></spam>started →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blue-zone">
                <div className="flex">
                    <div className="w-50 cont-100">
                        <div className="cursiv textc-cyber-5 text-16">social medias</div>
                        <br /><br /><h1 className='text-44 text-white mt-10'>Find us on social media !</h1>
                        <br /><br /> <p className='text-white'>Join us on our social media platforms to stay up to date with the latest news, updates, and exciting content. Follow us on Instagram, Telegram, Skype, Discord, and more to be the first to know about our new projects, announcements, and offers. We are committed to building a strong community and staying connected with you. Plus, as a token of our appreciation for your support, we offer exclusive rewards and bonuses to our followers. Stay informed, engage with us, support our journey, and enjoy special perks! Follow us now and let’s achieve great things together!</p>
                    </div>
                    <div className="w-50 flex jcc aie"><img className='media' src={media} alt="media" /></div>
                </div>
            </div>
            <div className="black-zone-modern">
                <div className="flex">
                    <div className="w-50 flex jcc aic"><img className='media' src={git} alt="media" /></div>
                    <div className="w-50 cont-100">
                        <div className="cursiv textc-cyber-1 text-16">github</div>
                        <br /><br /><h1 className='text-44 text-white mt-10'>Our team on github</h1>
                        <br /><br /> <p className='text-white'>Join us on our social media platforms to stay up to date with the latest news, updates, and exciting content. Follow us on Instagram, Telegram, Skype, Discord, and more to be the first to know about our new projects, announcements, and offers. We are committed to building a strong community and staying connected with you. Plus, as a token of our appreciation for your support, we offer exclusive rewards and bonuses to our followers. Stay informed, engage with us, support our journey, and enjoy special perks! Follow us now and let’s achieve great things together!</p>
                    </div>
                </div>
            </div>
            <footer className='p-20 flex col'>
                <div className='flex p-10 w-100 jcsa aic'>
                    <h1 className="cyber text-64">cyber</h1>
                    <div className="logo-zone flex gap-10">
                        <div className="logo"><Link className='footer-a a-1' to=''><i class="bi bi-telegram"></i></Link></div>
                        <div className="logo"><Link className='footer-a a-1' to=''><i class="bi bi-skype"></i></Link></div>
                        <div className="logo"><Link className='footer-a a-2' to=''><i class="bi bi-instagram"></i></Link></div>
                        <div className="logo"><Link className='footer-a a-1' to=''><i class="bi bi-discord"></i></Link></div>
                        <div className="logo"><Link className='footer-a a-3' to=''><i class="bi bi-youtube"></i></Link></div>
                        <div className="logo"><Link className='footer-a a-4' to=''><i class="bi bi-snapchat"></i></Link></div>
                    </div>
                </div>
                <div className='cont-100'>
                    <div className='flex jcsa'><p className="cyber">© copyright 2023</p><p className="cyber">® registered 2023</p><p className="cyber">privacy policy</p><p className="cyber">good security</p><p className="cyber">protect.</p></div><br /><br />
                    <div className='flex gap-30'>
                        <div>
                            <p className="cursiv">links</p>
                            <ul>
                                <li><Link to='/'>Nozimjon</Link></li>
                                <li><Link to=''>Farruh</Link></li>
                                <li><Link to='/asad'>Asadbek</Link></li>
                                <li><Link to=''>Ruxsora</Link></li>
                                <li><Link to=''>Sunnatbek</Link></li>
                                <li><Link to=''>Diyorbek</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="cursiv">media</p>
                            <ul>
                                <li><Link to=''>Youtube</Link></li>
                                <li><Link to=''>Tiktok</Link></li>
                                <li><Link to=''>Skype</Link></li>
                                <li><Link to=''>Snapchat</Link></li>
                                <li><Link to=''>Instagram</Link></li>
                                <li><Link to=''>Discord</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="cursiv">more</p>
                            <ul>
                                <li><Link to=''>Home</Link></li>
                                <li><Link to=''>About</Link></li>
                                <li><Link to=''>Donations</Link></li>
                                <li><Link to=''>Branches</Link></li>
                                <li><Link to=''>Profile</Link></li>
                                <li><Link to=''>Forum</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="cursiv">about us</p>
                            Our team was founded in 2023, and since then, we've rapidly become one of the most renowned IT companies in the industry. With nearly 30 offices across the globe and a talented team of over 30 collaborators, we are proud of our diverse and dynamic workforce. We've successfully launched a variety of large-scale projects, each making a significant impact in our field. Our commitment to innovation and excellence has positioned us at the forefront of the tech world, and we continue to expand our reach and capabilities every year.
                        </div>
                        <div>
                            <p className="cursiv">our locations</p>
                            Our company operates globally, with around 30 offices and a team of 150 talented professionals. We work with modern technologies in comfortable, inspiring spaces and offer the best features for both employees and clients. If you want to join a dynamic team, explore our career opportunities—competitive salaries, a brilliant team environment, and personal growth await you! No experience? No problem! We provide comprehensive IT training to help you gain the skills you need. With our support, we guarantee you’ll be ready to find your place in the world of IT.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
