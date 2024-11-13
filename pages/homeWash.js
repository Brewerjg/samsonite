import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import StackedContact from "@/components/sections/StackedContact"
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Residential Pressure Washing">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/gray_clean.png" alt="" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">The BEST House Washing Services serving Little Rock, Benton, Bryant, Searcy, and Conway.</h2>
                                            <p>We are Samsonite Painting & More, a premier provider of pressure washing and exterior cleaning services in the Central Arkansas area, including Little Rock, Benton, Bryant, Searcy and Conway. Our expert team provides comprehensive services to keep your home or business looking its best.<br/><p></p><br/>
                                            House washing is an essential part of maintaining the beauty and integrity of your home. At Samsonite Painting & More Exterior Cleaning, we understand the importance of a clean and well-maintained exterior. With our top-notch pressure washing services we can help you restore the charm and appeal of your house.<br/><p></p><br/>
                                            When it comes to house washing, we believe that a clean exterior not only enhances the overall aesthetics of your property but also protects it from potential damage. Over time, dirt, grime, mold, and mildew can accumulate on your home's exterior surfaces, such as siding, brick, and concrete. These contaminants not only make your house look unappealing but can also lead to long-term issues like deterioration, staining, and even structural damage.
                                            </p>
                                            
                                            <h2 className="title-two mt-50 ">Top Rated Pressure Washing Services</h2>
                                            <p>With our expert pressure washing techniques and state-of-the-art equipment, we can effectively remove all the built-up dirt and grime, leaving your home looking fresh and revitalized. Our team of skilled professionals is committed to delivering outstanding results, and our Google 5-star reviews are a testament to our dedication to customer satisfaction. Trust us to provide you with a house washing, window cleaning or painting service that will not only enhance the curb appeal of your home but also protect its value for years to come.</p>
                                            <div className="service-benefits-wrap ">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/Wbefore.png" alt="" />
                                                            <img src="/assets/img/Wafter.png" alt="" />
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
                                                    <li><Link href="/paint">Paint & Stain<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/concrete">Concrete Cleaning<i className="fas fa-arrow-right" /></Link></li>
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