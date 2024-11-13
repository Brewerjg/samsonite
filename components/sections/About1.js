import Link from "next/link"


export default function About1() {
    

    return (
        <>
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap ">
                                <img  src="/assets/img/workTrailer.png" alt="" className="wow fadeInRight fam" data-wow-delay=".4s" />
                                <img src="/assets/img/tigerPaint.png" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
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
                                            <h6 className="title">Professional and Experienced </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">About Our Company</span>
                                    <h2 className="title tg-element-title">We’re Committed to Roofing Excellence</h2>
                                   
                                </div>
                                <p>Samsonite Painting & More, LLC in Little Rock offers professional pressure washing and painting services to enhance both residential and commercial properties. Their skilled team specializes in removing tough stains like oil, grease, mold, and mildew to restore the pristine condition of homes and businesses. In addition to pressure washing, Samsonite provides high-quality, affordable painting services to refresh and elevate the look of any property, with free estimates and a commitment to transparent, reliable service.</p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check" />We offer expert pressure washing and painting services to residential and commercial properties.</li>
                                        <li><i className="fas fa-check" />Removes tough stains and rejuvenates properties using top-quality equipment.</li>
                                        <li><i className="fas fa-check" />Free estimates and transparent service with a focus on quality and customer satisfaction.</li>
                                        
                                    </ul>
                                </div>
                                <Link href="/about" className="btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
