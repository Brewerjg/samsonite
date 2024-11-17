import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import StackedContact from "@/components/sections/StackedContact"
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Window Washing">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/windowScrub.png" alt="window washing, window cleaning,window cleaning services, Little Rock, Benton, Bryant, Searcy, Conway, Arkansas" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">The BEST Window Washing Services serving Little Rock, Benton, Bryant, Searcy, and Conway.</h2>
                                            <p>At Samsonite Painting & More, we provide top-notch exterior window cleaning services for homes in Little Rock, Benton, Bryant, Searcy and Conway Arkansas. We understand that keeping your windows clean can be a daunting task, which is why we offer our expertise to make it easy for you.<br/><p></p><br/>
                                            Our team of experienced professionals uses high-quality equipment and specialized solutions to leave your windows sparkling clean and free of streaks. We also take the time to check for any damage to your windows and ensure that they are correctly sealed to prevent leaks and drafts.<br/><p></p><br/>
                                            We recommend having your windows cleaned at least twice a year, but for optimal results, we suggest having them washed four times annually. This will help maintain your windows' appearance and prevent the buildup of dirt and grime.<br/><p></p><br/>
                                            Our services cater to both residential and commercial buildings of all sizes. We are fully insured and guarantee our customers' satisfaction with our work. We also specialize in pressure washing services, gutter cleaning, roof cleaning, house washing and concrete cleaning to keep your whole property clean and refreshed. Schedule an appointment with us today to experience the difference professional window cleaning can make.
                                            </p>
                                            
                                            <h2 className="title-two mt-50 ">Top Rated Pressure Washing Services</h2>
                                            <p>With our expert pressure washing techniques and state-of-the-art equipment, we can effectively remove all the built-up dirt and grime, leaving your home looking fresh and revitalized. Our team of skilled professionals is committed to delivering outstanding results, and our Google 5-star reviews are a testament to our dedication to customer satisfaction. Trust us to provide you with a house washing, window cleaning or painting service that will not only enhance the curb appeal of your home but also protect its value for years to come.</p>
                                            <div className="service-benefits-wrap ">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/windowSpray.png" alt="window washing, window cleaning,window cleaning services, Little Rock, Benton, Bryant, Searcy, Conway, Arkansas" />
                                                        
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
                                                    <li><Link href="/paint">Paint & Stain<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/homeWash">Residential Cleaning<i className="fas fa-arrow-right" /></Link></li>
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