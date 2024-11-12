import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
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
            <ul className="navigation">
                <li className="menu-item-has-children"><Link href="#">Home</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="/index-2">Home Two</Link></li>
                        <li><Link href="/index-3">Home Three</Link></li>
                        <li><Link href="/index-4">Home Four</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fas fa-angle-down" /></div></li>
                <li><Link href="/about">About us</Link></li>
                <li className="menu-item-has-children"><Link href="#">Services</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/services">All Services</Link></li>
                        <li><Link href="/homeWash">Residential Washing</Link></li>
                        <li><Link href="/roof">Roof Cleaning</Link></li>
                        <li></li>
                        <li><Link href="/gutter">Gutter Cleaning</Link></li>
                        <li>
                        <Link href="/commercial">Commercial Services</Link></li>
                        <li><Link href="/window">Window Washing</Link></li>
                        <li><Link href="/concrete">Concrete Cleaning</Link></li>
                        <li><Link href="/paint">Paint and Stain</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fas fa-angle-down" /></div></li>
                <li className="active menu-item-has-children"><Link href="/B&A">Before & After</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/project">Project Page</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                        
                    </ul>
                    
                    <div className="dropdown-btn" onClick={() => handleToggle(4)}><span className="fas fa-angle-down" /></div></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    )
}
