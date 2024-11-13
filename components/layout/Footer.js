import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="/assets/img/water_swi.jpg">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-7">
                                    <div className="footer-widget text-center">
                                        <h2 className="fw-title">About Us</h2>
                                        <div className="footer-content">
                                            <p>Samsonite Painting & More, LLC in Little Rock offers professional pressure washing and painting services to enhance both residential and commercial properties.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="footer-widget text-center">
                                        <h2 className="fw-title">Our Services</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/homeWash"><i className="fas fa-angle-double-right" />House Washing</Link></li>
                                                <li><Link href="/roof"><i className="fas fa-angle-double-right" />Roof Cleaning</Link></li>
                                                <li><Link href="/commercial"><i className="fas fa-angle-double-right" />Commercial Washing</Link></li>
                                                <li><Link href="/gutter"><i className="fas fa-angle-double-right" />Gutter Cleaning</Link></li>
                                                <li><Link href="/window"><i className="fas fa-angle-double-right" />Window Washing</Link></li>
                                                <li><Link href="/concrete"><i className="fas fa-angle-double-right" />Concrete Cleaning</Link></li>
                                                <li><Link href="/paint"><i className="fas fa-angle-double-right" />Paint and Stain</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget text-center">
                                        <h2 className="fw-title">Instagram Posts</h2>
                                        <div className="footer-instagram">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="https://www.instagram.com/reel/C_-2R_9OkLp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="insta-img" src="/assets/img/instagram/instaTenn.png" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/reel/DAJSBaUuj6I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="insta-img" src="/assets/img/instagram/instaComm.png" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/reel/DCFaHtfP5UU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="insta-img" src="/assets/img/instagram/instaBrick.png" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/reel/C7VjI1bulBj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="insta-img" src="/assets/img/instagram/instaSam.png" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/reel/C-YSQi5uvC8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="insta-img" src="/assets/img/instagram/instaStain.png" alt="" /></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/reel/C1uwUguuMRC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="insta-img" src="/assets/img/instagram/instaStem.png" alt="" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="footer-logo-area">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-3 col-md-12">
                                        <div className="logo">
                                            <Link href="/index"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="footer-contact">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <span>Phone No</span>
                                                <Link href="/tel:0123456789">+000 (123) 456 88</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6">
                                        <div className="footer-social">
                                            <h2 className="title">Follow Us:</h2>
                                            <ul className="list-wrap">
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p>© Copyright {new Date().getFullYear()}. All Right Reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-bootom-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="/contact">Privacy Policy</Link></li>
                                            <li><Link href="/contact">Terms  Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
