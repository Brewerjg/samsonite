import Link from "next/link"
import { useState } from "react"
import Brand1 from "./Brand1"

export default function Banner1() {
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
            <section className="banner-area">
                <div className="banner-shape" data-background="/assets/img/Water_Dro.jpg" />
                <div className="banner-bg" data-background="/assets/img/Homefront.jpg">
                    <div className="banner-content">
                        <h2 className="title wow fadeInDown" data-wow-delay=".2s">Best Painting & Pressure Washhing Services in the Greater Little Rock Area</h2>
                        <p className="wow fadeInUp" data-wow-delay=".2s">We can handle all of your residential or commercial exterior cleaning needs and more.
                        </p>
                        <Link href="/services" className="btn wow fadeInUp" data-wow-delay=".4s">Discover More</Link>
                    </div>
                    <div className="banner-tooltip-wrap">
                        <div className={isActive.key == 1 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(1)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Pressure Washing</h2>
                                <p>Vinyl, Wood, or Brick. We can clean it all and have your home looking like new.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 2 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(2)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Gutter Cleaning</h2>
                                <p>Gutters are often overlooked, but can be a major source of water damage. Let us take care of the dirty work.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 3 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(3)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Paint & Stain</h2>
                                <p>Interior or Exterior. We can get your property looking like new.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
