import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import StackedContact from "@/components/sections/StackedContact"
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Commercial Services">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/duoWork.png" alt="Commercial Cleaning Services, Commercial Pressure Washing, Central Arkansas, Little Rock, Benton, Bryant, Searcy, Conway" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Central Arkansas' #1 Commercial Cleaning Service Serving Areas in: Little Rock, Benton, Bryant, Searcy and Conway</h2>
                                            <p>Welcome to Samsonite Painting & More, the leading commercial pressure washing service provider in Central Arkansas. We recognize the importance of maintaining the appearance of your commercial property for your tenants and business. Therefore, we offer high-quality pressure washing services to cater to all types of commercial properties, including apartment buildings.<br/><p></p><br/>

                                            Our team of skilled professionals uses advanced equipment to clean and restore the exterior of your property thoroughly. We can remove dirt, grime, and stains while restoring the original color and shine of your building's surfaces. We have the required knowledge and equipment to execute the job correctly.<br/><p></p><br/>

                                            Our commercial pressure washing services include:
                                            </p>
                                            <div className="benefits-content mt-10">
                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Cleaning the exterior of buildings</li>
                                                                <li><i className="fas fa-check-circle" />Cleaning concrete and sidewalks</li>
                                                                <li><i className="fas fa-check-circle" />Cleaning parking lots and garages</li>
                                                                <li><i className="fas fa-check-circle" />Cleaning dumpster and trash areas</li>
                                                                <li><i className="fas fa-check-circle" />Removing gum and graffiti</li>
                                                                <li><i className="fas fa-check-circle" />Cleaning apartment complexes and breezeways</li>
                                                            </ul>
                                            </div>
                                            
                                            <h2 className="title-two mt-50 ">Safety and Customer Satisfaction is Our Priority</h2>
                                            <p>At Samsonite Painting & More, safety is our top priority. We take all necessary precautions to ensure that our technicians are trained and equipped to work safely and efficiently. We understand the significance of completing the job on time, so we collaborate closely with our clients to minimize disruptions to their tenants and customers.<br/><p></p><br/>
                                            Don't let the appearance of your commercial property suffer any longer. Contact us today to schedule a consultation and receive a free quote for our commercial pressure washing services.<br/><p></p><br/>
                                            Let Samsonite Painting & More take the burden of maintaining all your residential or commercial property's exterior off your hands. We'll keep the exterior of your building or home looking as good as new with our expert window cleaning, roof cleaning and gutter cleaning services
                                            </p>
                                            <div className="service-benefits-wrap ">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="comm-img">
                                                            <img src="/assets/img/signB.png" alt="Commercial Cleaning Services, Commercial Pressure Washing, Central Arkansas, Little Rock, Benton, Bryant, Searcy, Conway" />
                                                            <img src="/assets/img/signA.png" alt="Commercial Cleaning Services, Commercial Pressure Washing, Central Arkansas, Little Rock, Benton, Bryant, Searcy, Conway" />
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
                                                    <li><Link href="/paint">Paint & Stain<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/gutter">Gutter Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/window">Window Washing<i className="fas fa-arrow-right" /></Link></li>
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