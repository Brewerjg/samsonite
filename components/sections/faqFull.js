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
                                                How to install Exclusive Addons Plugin?
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(6)}>
                                            <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed "}>
                                            Will pressure washing or soft washing damage my surfaces?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 6 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Pressure washing is safe when used correctly but may cause damage to delicate surfaces if
                                                improper pressure settings are used.

                                                Soft washing is designed to be gentle and non-abrasive, ensuring that your roof, siding, and
                                                other delicate surfaces are cleaned without harm.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(7)}>
                                            <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed "}>
                                            How often should I have my property pressure washed or soft washed?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 7 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Residential: Pressure washing should be done 1-2 times a year. Soft washing of roofs is
                                                typically needed every 3-5 years, or when you notice mold or algae buildup.<br/>
                                                Commercial: Exterior pressure washing should be done every 3 -12 months, depending on
                                                environmental conditions and foot traffic. Soft washing may be necessary for cleaning delicate
                                                building exteriors.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(8)}>
                                            <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed "}>
                                            Do you use environmentally friendly products?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 8 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Yes, we use commercial products and eco-friendly cleaning products only around ponds, lakes,
                                                and according to OSHA regulations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(9)}>
                                            <button className={isActive.key == 9 ? "accordion-button" : "accordion-button collapsed "}>
                                            Can you remove mold, algae, or mildew?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 9 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Yes! Both pressure washing and soft washing are effective for removing mold, mildew, and
                                                algae. Soft washing is particularly effective for roof cleaning and siding where mold or algae
                                                growth may be prevalent.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(10)}>
                                            <button className={isActive.key == 10 ? "accordion-button" : "accordion-button collapsed "}>
                                            How long does a pressure washing or soft washing service take?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 10 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Pressure washing: Residential jobs generally take 2-4 hours, while commercial jobs may take a
                                                full day depending on the size.<br/>
                                                Soft washing: Roofs or siding typically take 2-3 hours for residential properties, depending on
                                                the level of cleaning needed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(11)}>
                                            <button className={isActive.key == 11 ? "accordion-button" : "accordion-button collapsed "}>
                                            Is pressure washing or soft washing covered by insurance?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 11 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Yes, we are fully insured. Our pressure washing and soft washing services are covered under
                                                our liability insurance, ensuring that your property is protected throughout the process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(12)}>
                                            <button className={isActive.key == 12 ? "accordion-button" : "accordion-button collapsed "}>
                                            Will soft washing remove stains or tough marks?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 12 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Yes, soft washing can effectively remove stains from roofs, siding, and other delicate surfaces,
                                                including mold, algae, and general grime. For more stubborn stains (e.g., rust or oil stains), we
                                                may use additional cleaning solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(13)}>
                                            <button className={isActive.key == 13 ? "accordion-button" : "accordion-button collapsed "}>
                                            Do I need to be home during the service?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 13 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>For residential pressure washing or soft washing, it’s not necessary to be home, though we
                                                recommend being available for an initial walkthrough to discuss any concerns. For commercial
                                                services, we will coordinate with you to ensure minimal disruption to your operations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(14)}>
                                            <button className={isActive.key == 14 ? "accordion-button" : "accordion-button collapsed "}>
                                            How much does pressure washing or soft washing cost?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 14 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Pricing depends on several factors, such as the size of the area, the surface type, and the level
                                                of cleaning required. Contact us for a free estimate to get an accurate quote tailored to your
                                                specific needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(15)}>
                                            <button className={isActive.key == 15 ? "accordion-button" : "accordion-button collapsed "}>
                                            What should I do to prepare for the service?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 15 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Residential: Clear driveways, walkways, and patios of vehicles and outdoor furniture. For soft
                                                washing, remove any plants or items from around the roof or siding that may be sensitive to
                                                cleaning solutions.<br/>
                                                Commercial: We will work with you to schedule the service at a time that minimizes disruption to
                                                your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(16)}>
                                            <button className={isActive.key == 16 ? "accordion-button" : "accordion-button collapsed "}>
                                            How do I know if I need pressure washing or soft washing?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 16 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Use pressure washing for durable surfaces like concrete, driveways, or brick.<br/>
                                                Use soft washing for delicate surfaces such as roofs, vinyl siding, and painted wood. If you're
                                                unsure, we will evaluate your surfaces and recommend the best approach..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(17)}>
                                            <button className={isActive.key == 17 ? "accordion-button" : "accordion-button collapsed "}>
                                            What areas do you serve?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 17 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>We serve both residential and commercial clients in Little Rock, Benton, Bryant, Searcy, and
                                                Conway in Central Arkansas and surrounding areas. Contact us to check if we cover your specific location.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(18)}>
                                            <button className={isActive.key == 18 ? "accordion-button" : "accordion-button collapsed "}>
                                            Do you offer any guarantees or warranties?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 18 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>We stand by the quality of our work. If you're not satisfied with the results, we'll work with you to
                                                make it right. Your satisfaction is our #1 priority.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(19)}>
                                            <button className={isActive.key == 19 ? "accordion-button" : "accordion-button collapsed "}>
                                            How can I schedule a service or get a quote?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 19 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Scheduling a service or receiving a free quote is easy!<br/> Call us at 501.533.9213,<br/> email us at
                                                samsonitepaintingandmore@gmail.com,<br/>
                                                Our team will promptly respond to discuss your needs and schedule the best time for your
                                                service.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(20)}>
                                            <button className={isActive.key == 20 ? "accordion-button" : "accordion-button collapsed "}>
                                            Why choose your pressure washing and soft washing services?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 20 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>Experienced and trained technicians
                                                Fully insured and licensed<br/>

                                                Commercial and Eco-friendly cleaning solutions
                                                Satisfaction guaranteed<br/>
                                                Professional, reliable service at competitive prices<br/>
                                                For more information or to schedule your pressure washing or soft washing service, don’t
                                                hesitate to get in touch with us!</p>
                                            </div>
                                        </div>
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
