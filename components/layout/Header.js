import Link from "next/link"
import { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)

    const [isToggled, setToggled] = useState(false)
    const handleToggled = () => {
        setToggled(!isToggled)
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }


    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>

            {headerTop &&
                <div className="header-top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li>Samsonite Painting and More</li>
                                        <li><i className="fas fa-phone-alt" /><Link href="tel:5015339213">501-533-9213</Link></li>
                                        <li><i className="fas fa-envelope" /><Link href="mailto:samsonitepaintingandmore@gmail.com">samsonitepaintingandmore@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3">
                                <div className="header-top-right">
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/SamsonitePaintingAndMore"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/samsonite-painting-and-pressure-washing-llc-689b01248/?trk=public_post_feed-actor-name"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://www.instagram.com/samsonite_painting_and_more/?hl=en"><i className="fab fa-instagram" /></Link></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <header>
                <div id="sticky-header" className={`menu-area  ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleToggled}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo different-logo">
                                            <Link href="/"><img src="/assets/img/logo/fbLogo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/"><img src="/assets/img/logo/fbLogo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                            <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About us</Link></li>
                                                <li className="menu-item-has-children"><Link href="/#">Services</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/services">All Services</Link></li>
                                                        <li><Link href="/homeWash">Residential Washing</Link></li>
                                                        <li><Link href="/roof">Roof Cleaning</Link></li>
                                                        <li></li>
                                                        <li><Link href="/gutter">Gutter Cleaning</Link></li>
                                                        <li>
                                                        <Link href="/commercial">Commercial Services</Link></li>
                                                        <li><Link href="/window">Window Washing</Link></li>
                                                        <li><Link href="/concrete">Concrete Cleaning</Link></li>
                                                        <li><Link href="/paint">Paint and Stain</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/faq">FAQ</Link></li>
                                                {/* <li className="menu-item-has-children"><Link href="/#">Before & After</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/project">Project Page</Link></li>
                                                        <li><Link href="/project-details">Project Details</Link></li>
                                                        
                                                    </ul>
                                                </li> */}
                                                {/* <li className="menu-item-has-children"><Link href="/#">Blog</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/blog">Our Blog</Link></li>
                                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn"><Link href="/contact" className="btn">Free Quote</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleToggled}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/fbLogo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="https://www.facebook.com/SamsonitePaintingAndMore"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="https://www.instagram.com/samsonite_painting_and_more/?hl=en"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="https://www.linkedin.com/in/samsonite-painting-and-pressure-washing-llc-689b01248/?trk=public_post_feed-actor-name"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
