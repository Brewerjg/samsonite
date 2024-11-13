import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Services1 from "@/components/sections/Services1"
import ContactSection from "@/components/sections/contactSection"
import Faqfull from "@/components/sections/faqFull"

export default function Faq() {
    

    
    return (
        <>
            <Layout breadcrumbTitle="FAQ">
                <div>
                    
                    <Faqfull/>  
                    <ContactSection />
                </div>

            </Layout>
        </>
    )
}