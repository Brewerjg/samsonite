import { useState } from 'react'
import Link from "next/link"
export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            <section className="faq-area faq-bg" data-background="/assets/img/bg/faq_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60">
                                <h2 className="title">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
                            <div className="faq-img-wrap">
                                <img src="/assets/img/LduoWork.png" alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/RduoWork.png" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                                    <h2 className="title">FAQ</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-wrap">
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed "}>
                                            What is pressure washing?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 1 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Pressure washing uses high-pressure water to clean surfaces by removing dirt, grime, mold,
                                                and other contaminants. It is commonly used on driveways, patios, roofs, and building exteriors.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed "}>
                                            What is soft washing?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 2 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Soft washing is a low-pressure washing technique that uses specialized cleaning solutions to
                                                safely remove dirt, mold, algae, and stains from delicate surfaces like roofs, siding, and painted
                                                exteriors. Soft washing is effective for surfaces that could be damaged by high-pressure water,
                                                making it a gentler alternative to traditional pressure washing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed "}>
                                            What services do you offer?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 3 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Residential Pressure Washing: Driveways, patios, decks, siding, roofs, gutters, and more.<br/>
                                                Commercial Pressure Washing: Storefronts, parking lots, sidewalks, building exteriors,
                                                dumpster pads, and industrial equipment.<br/>
                                                Soft Washing Services: Roofs, siding, fences, and any delicate or painted surfaces.<br/>
                                                Specialty Services: Graffiti removal, oil stain removal, heavy equipment cleaning, and
                                                post-construction clean-up.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed "}>
                                            What’s the difference between pressure washing and soft washing?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 4 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Pressure washing uses high-pressure water to blast away dirt, which is effective on hard,
                                                durable surfaces like concrete. Soft washing, on the other hand, uses a combination of low
                                                pressure and eco-friendly cleaning solutions to gently clean more delicate surfaces, such as
                                                roofs, vinyl siding, or wood, without causing damage.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed "}>
                                            Is soft washing safe for my property?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 5 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Yes, soft washing is safe for most delicate surfaces. It is particularly ideal for surfaces that could
                                                be damaged by the high-pressure spray of traditional pressure washing, such as roofs, painted
                                                surfaces, and older wood. Soft washing effectively removes mold, algae, and stains without
                                                harming the surface.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/faq" className="btn">More FAQ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
