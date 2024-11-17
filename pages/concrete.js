import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import StackedContact from "@/components/sections/StackedContact"
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Concrete Cleaning">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/driveCleaning.png" alt="Pressure Washing Services, Concrete Cleaning Services, Little Rock, Benton, Bryant, Searcy, Conway" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">The BEST Concrete Washing Services serving Little Rock, Benton, Bryant, Searcy, and Conway.</h2>
                                            <p>At Samsonite Painting & More, we take pride in providing our customers with high-quality concrete cleaning services in the area. Our team of experienced and knowledgeable professionals are committed to delivering exceptional concrete cleaning results that last, utilizing the most effective cleaning technology to remove dirt and debris.<br/><p></p><br/>
                                            Our friendly and helpful staff will be there to assist you every step of the way, and we offer free estimates so that you know exactly what to expect. We also understand the importance of convenience, so we offer flexible scheduling to make it easier for you to find a time that works for you.<br/><p></p><br/>
                                            With our meticulous approach, we ensure that every nook and cranny of your concrete is thoroughly cleaned. Our powerful pressure washing techniques penetrate deep into the surface, removing embedded dirt and grime that ordinary cleaning methods can't reach. You'll be amazed at the transformative effect our cleaning process has on your concrete, revealing its true beauty and restoring its original luster.
                                            </p>
                                            <div className="service-benefits-wrap ">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="roof-img">
                                                            <img src="/assets/img/conClean.png" alt="Pressure Washing Services, Concrete Cleaning Services, Little Rock, Benton, Bryant, Searcy, Conway" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 mb-30">
                                                        <div className="benefits-content">
                                                            
                                                            <p>Say goodbye to stains and dirt that mar the appearance of your concrete surfaces. Our team is dedicated to providing you with top-notch concrete cleaning, house washing, roof cleaning, window cleaning and gutter cleaning services that will exceed your expectations. Let us handle the hard work while you sit back and enjoy the remarkable results.</p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                            <p>When you choose Samsonite Painting & More Exterior Cleaning for your residential or commercial concrete cleaning needs, you can trust that you are getting the highest quality services from a family-owned business. Let us take care of your concrete surfaces, so you can enjoy a clean and inviting outdoor space. Contact us today to get started!</p>
                                            <div className="service-benefits-wrap ">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="roof-img">
                                                            <img src="/assets/img/sidewalkBnA.png" alt="Pressure Washing Services, Concrete Cleaning Services, Little Rock, Benton, Bryant, Searcy, Conway" />
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
                                                    <li><Link href="/paint">Paint & Stain<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget widget-bg" data-background="/assets/img/conClean.png">
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