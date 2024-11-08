import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="/assets/img/water_swi.jpg">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">About Us</h2>
                                        <div className="footer-content">
                                            <p>There are many variations of passages of Lore Ipsum available, but the majori have alteration in some form, by injected humour, ondomised word which don't look</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Our Services</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />Single Ply Roofing</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />Modified Roofing</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />Built-Up Roofing</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />Metal Roofing</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />Vegetative Roofing</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />Specialty Metal</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Quick Links</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Terms  Conditions</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Tax  Vat</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Refund Policy</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Typically Solutions</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Our Process</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget">
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
