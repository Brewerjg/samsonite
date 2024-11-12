import Link from "next/link"
import { useState } from 'react'

export default function Services1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">What We Do</span>
                                <h2 className="title tg-element-title">Our Services Areas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".2s" data-background="/assets/img/stockPower.jpg" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 1 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/HomeCleaner.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 1 ? "none" : "block"}` }}><Link href="/homeWash">House Washing</Link></h2>
                                    
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/homeWash">House Washing</Link></h2>
                                    <p>House washing is an essential part of maintaining the beauty and integrity of your home. At Samsonite Painting & More Exterior Cleaning, we understand the importance of a clean and well-maintained exterior. With our top-notch pressure washing services we can help you restore the charm and appeal of your house.</p>
                                    <Link href="/homeWash" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s" data-background="/assets/img/roofCleaning.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon02.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 2 ? "none" : "block"}` }}><Link href="/roof">Roof Cleaning</Link></h2>
                                    
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/roof">Roof Cleaning</Link></h2>
                                    <p>Our team of professionals uses advanced techniques and equipment to provide comprehensive cleaning that restores the pristine appearance of your roof. Regular roof cleaning is crucial for preserving its longevity and integrity, as it not only enhances the aesthetic appeal of your home or business but also eliminates harmful debris and bacteria that can cause damage over time.</p>
                                    <Link href="/roof" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="/assets/img/scCleaning.jpg" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 3 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/powerwashing.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 3 ? "none" : "block"}` }}><Link href="/commercial">Commercial Washing</Link></h2>
                                    
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/commercial">Commercial Washing</Link></h2>
                                    <p>We recognize the importance of maintaining the appearance of your commercial property for your tenants and business. Therefore, we offer high-quality pressure washing services to cater to all types of commercial properties, including apartment buildings.</p>
                                    <Link href="/commercial" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".3s" data-background="/assets/img/gutterCleaning.png" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 4 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/Gloves.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 4 ? "none" : "block"}` }}><Link href="/gutter">Gutter Cleaning</Link></h2>
                                    
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/gutter">Gutter Cleaning</Link></h2>
                                    <p>Gutters may seem like a small and insignificant part of your home, but they play a crucial role in maintaining its overall condition. Neglecting regular gutter cleaning can lead to a host of problems that can be costly and time-consuming to fix.</p>
                                    <Link href="/gutter" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="/assets/img/glassPower.jpg" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 5 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/WindowCleaner.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 5 ? "none" : "block"}` }}><Link href="/window">Window Cleaning</Link></h2>
                                    
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/window">Window Cleaning</Link></h2>
                                    <p>Our team of experienced professionals uses high-quality equipment and specialized solutions to leave your windows sparkling clean and free of streaks. We also take the time to check for any damage to your windows and ensure that they are correctly sealed to prevent leaks and drafts.</p>
                                    <Link href="/window" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".9s" data-background="/assets/img/conClean.png" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 6 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/duster.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 6 ? "none" : "block"}` }}><Link href="/concrete">Concrete Cleaning</Link></h2>
                                    
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/concrete">Concrete Cleaning</Link></h2>
                                    <p>With our meticulous approach, we ensure that every nook and cranny of your concrete is thoroughly cleaned. Our powerful pressure washing techniques penetrate deep into the surface, removing embedded dirt and grime that ordinary cleaning methods can't reach. You'll be amazed at the transformative effect our cleaning process has on your concrete, revealing its true beauty and restoring its original luster.</p>
                                    <Link href="/concrete" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".9s" data-background="/assets/img/duoPaint.png" onMouseEnter={() => handleToggle(7)} onMouseLeave={() => handleToggle(7)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 7 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/duster.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 7 ? "none" : "block"}` }}><Link href="/paint">Paint & Stain Services</Link></h2>
                                    
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/paint">Paint & Stain Services</Link></h2>
                                    <p>Transform your home from bland to brilliant with Samsonite Painting & More. Our mission is to craft a space that truly mirrors your unique identity. We specialize in both interior and exterior residential and commercial painting, ensuring every detail is handled with care. For interiors, we meticulously prepare surfaces, filling any holes for a flawless finish. Exteriors receive a thorough wash, ensuring the paint adheres perfectly to a spotless surface</p>
                                    <Link href="/paint" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
