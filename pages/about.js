import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
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
                                                <img src="/assets/img/icon/about_icon01.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">We have more than 10 years of experiences</h6>
                                            </div>
                                        </div>
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon02.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">We use professional and experienced person</h6>
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
                                            <li><i className="fas fa-check" />32k Partners have worked us.</li>
                                            <li><i className="fas fa-check" />Professional and experienced human resources.</li>
                                            <li><i className="fas fa-check" />Provide the best roof services</li>
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
                {/* work-area-end */}
                {/* history-area */}
                <section className="history-area pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="history-img-wrap">
                                    <ul className="list-wrap">
                                        <li>
                                            <img src="/assets/img/images/history_img01.jpg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/images/history_img02.jpg" alt="" />
                                            <VideoPopup />
                                        </li>
                                        <li>
                                            <img src="/assets/img/images/history_img03.jpg" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <div className="section-title mb-20">
                                        <span className="sub-title">Our Roofing History</span>
                                        <h2 className="title">Roofing when an unknown printer took to make type book</h2>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majori our as have suffered alteration in some form, by injected humour, or randomised word which don't look even slightly believable.</p>
                                    <div className="history-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check-circle" />Technology management</li>
                                            <li><i className="fas fa-check-circle" />Roofing Solutions</li>
                                            <li><i className="fas fa-check-circle" />Modern Worker Working here</li>
                                            <li><i className="fas fa-check-circle" />Quick Response</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* history-area-end */}
               


            </Layout>
        </>
    )
}