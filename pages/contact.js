import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"
export default function Contact() {

    return (
        <>
            <Layout breadcrumbTitle="Contact Us">
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-form-wrap" data-background="/assets/img/images/contact_form_bg.jpg">
                                    <h2 className="title">Connect With Us</h2>
                                    <p>Send us a message and we' ll respond as soon as possible</p>
                                    <ContactForm /> 
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-info-wrap">
                                    <h2 className="title">Other ways to reach us</h2>
                                    <p>Call or message us and we' ll respond as soon as possible</p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:0123456789">(501) 533-9213</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-envelope" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:
                                                    samsonitepaintingandmore@gmail.com">
                                                    samsonitepaintingandmore@gmail.com</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            
                                        </li>
                                    </ul>
                                </div>
                                {/* contact-map */}
                                <div id="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240801.2820441945!2d-92.29865550671441!3d34.81941197143965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730944976097!5m2!1sen!2sus" height={570} style={{ border: 0, width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    
                                </div>
                                {/* contact-map-end */}
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}