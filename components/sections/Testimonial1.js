import Slider from "react-slick"
const settings = {
    dots: true,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
}


export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area pt-115 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="testimonial-img">
                                <img src="/assets/img/house_wash.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Testimonials</span>
                                    <h2 className="title tg-element-title">Read What People are Saying About the Only Google 5 Star Rated Painting and Pressure Washing Company in Arkansas </h2>
                                </div>
                                <Slider {...settings} className="testimonial-active">
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>Samsonite is extremely professional, dedicated, and his work speaks for its self. He has always shown great response time and outstanding services here at the University of Arkansas at Pine Bluff. We look forward to more business with him and his crew  in the near future.</p>
                                        </div>
                                        <div className="testimonial-avatar">
                                            
                                            <div className="avatar-content">
                                                <h6 className="title">Justin S.</h6>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>It took awhile to do all my projects but they were handled professionally with contact always! I can not describe how fantastic they handled everything I gave them! All my decks, five of them look brand new, they are over 20 years old! I cannot wait to work with them on staining them all in the spring! If you want it done, with personalized service, this is the team you want!</p>
                                        </div>
                                        <div className="testimonial-avatar">
                                            
                                            <div className="avatar-content">
                                                <h6 className="title">William S.</h6>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>I have used several painting companies before but I am beyond pleased with Samsonite Painting. First the professionalism of CJ and his willingness to achieve everything I needed done won me over! Then the work was amazing. They take pride in their work and it shows! Highly recommend and i will be doing more business in the future! Thank you</p>
                                        </div>
                                        <div className="testimonial-avatar">
                                            
                                            <div className="avatar-content">
                                                <h6 className="title">Blake V.</h6>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
