import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import StackedContact from "@/components/sections/StackedContact"
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Paint and Stain Services">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/proPaint.png" alt="" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">The BEST Painting and Staining Services serving Little Rock, Benton, Bryant, Searcy, and Conway.</h2>
                                            <p>We are Samsonite Painting & More, a premier provider of pressure washing and exterior cleaning services in the Central Arkansas area, including Little Rock, Benton, Bryant, Searcy and Conway. Our expert team provides comprehensive services to keep your home or business looking its best.<br/><p></p><br/>
                                            Transform your home from bland to brilliant with Samsonite Painting & More. Our mission is to craft a space that truly mirrors your unique identity. We specialize in both interior and exterior residential and commercial painting, ensuring every detail is handled with care. For interiors, we meticulously prepare surfaces, filling any holes for a flawless finish. Exteriors receive a thorough wash, ensuring the paint adheres perfectly to a spotless surface.<br/><p></p><br/>
                                            </p>
                                            <div className="service-benefits-wrap ">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="roof-img">
                                                            <img src="/assets/img/duoPaint.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 mb-30">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Consider our commercial painting services for various needs</h2>
                                                            
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Refreshing a specific room in your office</li>
                                                                <li><i className="fas fa-check-circle" />Painting a newly constructed space to bring it to life.</li>
                                                                <li><i className="fas fa-check-circle" />Accommodating new tenants in your property who wish to personalize the space.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                            <p>Our services extend to both commercial interior and exterior painting. We are dedicated to creating the ideal color scheme that aligns with your vision for your commercial environment.<br/><p></p><br/>
                                            At Samsonite Painting & More, we understand that each house and business has different needs. That's why we offer a range of services to meet your specific requirements. Our team has the knowledge and equipment to deliver outstanding results, from cleaning siding, roofs, and gutters to decks.
                                            <br/><p></p><br/>
                                            Samsonite Painting & More is your go-to for transformative painting solutions. Contact us today to book a service or get a free quote.
                                            </p>
                                            <div className="service-benefits-wrap ">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="roof-img">
                                                            <img src="/assets/img/exPaint.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 mb-30">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Why Choose Us</h2>
                                                            <p>If you're looking for professional, cost-effective house washing, gutter cleaning or roof cleaning services for your home or commercial property in Central Arkansas, Samsonite Painting & More is the ideal choice. Contact us today to book a service or get a free quote.</p>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licenced and Insured</li>
                                                                <li><i className="fas fa-check-circle" />Customer Satisfaction Guarantee</li>
                                                                <li><i className="fas fa-check-circle" />Professional and Transparent Process. No Hidden Charges</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Other Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="/roof">Roof Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/commercial">Commercial Washing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/gutter">Gutter Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/window">Window Washing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/homeWash">Residential Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/concrete">Concrete Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Quote</h4>
                                            <StackedContact />
                                        </div>
                                        
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                </div>

            </Layout>
        </>
    )
}