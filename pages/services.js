import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Services1 from "@/components/sections/Services1"
import ContactForm from "@/components/sections/ContactForm"

export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout breadcrumbTitle="Services">
                <div>
                    <Services1 />
                    {/* area-bg */}
                    <div className="area-bg">
                        <div className="area-background-img jarallax" data-background="/assets/img/apartCleaning.jpg" />
                        {/* appointment-area */}
                        <section className="appointment-area pt-115">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title white-title mb-60">
                                            <span className="sub-title">Your roof require professional attention</span>
                                            <h2 className="title">Book Your Appointment</h2>
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
                                            <p>There are many variations of passages Ipsum available but the</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon02.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>There are many variations of passages Ipsum available but the</p>
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