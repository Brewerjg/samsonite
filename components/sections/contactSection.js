import ContactForm from "./ContactForm"


export default function contactSection() {
    return (
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
    )
}