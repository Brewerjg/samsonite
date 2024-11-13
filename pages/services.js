import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Services1 from "@/components/sections/Services1"
import ContactSection from "@/components/sections/contactSection"

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

                    <ContactSection />

                </div>

            </Layout>
        </>
    )
}