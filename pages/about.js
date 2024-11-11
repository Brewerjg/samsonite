import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import ContactForm from "@/components/sections/ContactForm"
import Work1 from "@/components/sections/Work1"
import Link from "next/link"
import Slider from "react-slick"
const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function About() {

    return (
        <>
            <Layout breadcrumbTitle="About Us">

                <section className="about-area inner-about-area pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                                <div className="about-img-wrap">
                                    <img src="/assets/img/about_fam.jpg" alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                    
                                    <div className="about-experiences-wrap">
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/license.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Fully Licensed & Insured</h6>
                                            </div>
                                        </div>
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon02.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Professional and Experienced</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">About Our Company</span>
                                        <h2 className="title">We’re Committed to Roofing Excellence</h2>
                                    </div>
                                    <p>Welcome to Samsonite Painting & More, LLC, your premier destination for enhancing the appearance and value of your residential or commercial spaces. Located in the heart of Little Rock, we are committed to making your property the envy of the neighborhood throughout the year.<br/><p></p><br/>
                                    At Samsonite Painting & More, we specialize in top-notch pressure washing services, ensuring that every corner of your property, be it a home or a business, shines with cleanliness and care. Our expert team is equipped to handle even the toughest stains - from car oil and grease to challenging mold and mildew. Our goal is to rejuvenate your property, restoring its pristine condition with the utmost efficiency and reliability.<br/><p></p><br/>
                                    But that's not all! In addition to our exceptional pressure washing services, we offer affordable and high-quality painting solutions. Whether you're looking to refresh your home's exterior or give your business a new look, our painting services are designed to add that perfect finishing touch, enhancing the beauty and ambiance of your space.<br/><p></p><br/>
                                    Experience the difference with Samsonite Painting & More, LLC. We pride ourselves on using only the best pressure washer tools available in the market, ensuring that your outdoor areas are perfect for entertainment and relaxation all year round. We believe in transparent and upfront service, which is why we offer free initial estimates for all our services.<br/><p></p><br/>
                                    Ready to transform your property? Contact us today at 501-533-9213 for more information and to discover why we are the leading painting and pressure washing company in Little Rock.<br/><p></p><br/>
                                    Let us help you make your property standout - Samsonite Painting & More, LLC is here to deliver the best in service and quality
                                    </p>
                                    <div className="about-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check" />100+ 5 Star Reviews on Google</li>
                                            <li><i className="fas fa-check" />Service with a Smile</li>
                                            <li><i className="fas fa-check" />Free Quotes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-area-end */}
                {/* work-area */}
                <Work1 />
                <div>
                    {/* area-bg */}
                    <div className="area-bg">
                        <div className="area-background-img jarallax" data-background="/assets/img/apartCleaning.jpg" />
                        {/* appointment-area */}
                        <section className="appointment-area pt-115">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title white-title mb-60">
                                            <span className="sub-title">Ready to Transform Your Property</span>
                                            <h2 className="title">Contact Us Today!</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="appointment-inner" data-background="/assets/img/bg/appointment_bg.jpg">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="appointment-form">
                                            <ContactForm />
                                            </div>
                                        </div>
                                        <div className="col-xl-5">
                                            <div className="appointment-img">
                                                <img src="/assets/img/cjsOutdoorbg.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* appointment-area-end */}
                    </div>
                    {/* area-bg-end */}
                    {/* support-area */}
                    <section className="support-area pt-115 pb-70">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon01.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>We'll respond within 24 hours.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon02.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Free Quote</h4>
                                            <p>As always, we offer free and transparent estimates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon03.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>There are many variations of passages Ipsum available but the</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
               


            </Layout>
        </>
    )
}