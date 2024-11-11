import Link from "next/link"

export default function Features1() {
    return (
        <>
            <section className="features-area pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="features-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="features-item-inner">
                                    <div className="features-content">
                                        <h4 className="title">100+ 5 Star Reviews</h4>
                                        <img className="gstars" src="/assets/img/Gstars.png" alt="" />
                                        <span><p></p></span>
                                    </div>
                                    <div className="features-icon">
                                        <img src="/assets/img/icon/Star.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="features-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="features-item-inner">
                                    <div className="features-content">
                                        <h4 className="title">Free Quotes</h4>
                                        <p>Quotes are free! Our professional staff will be happy to answer any questions you may have.</p>
                                        
                                    </div>
                                    <div className="features-icon">
                                        <img  src="/assets/img/icon/features_icon02.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="features-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="features-item-inner">
                                    <div className="features-content">
                                        <h4 className="title">Top Notch Equipment</h4>
                                        <p>To ensure the best results, we use the best equipment available in the industry.</p>
                                        
                                    </div>
                                    <div className="features-icon">
                                        <img src="/assets/img/icon/features_icon03.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
