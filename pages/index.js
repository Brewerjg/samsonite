import Layout from "@/components/layout/Layout"
import Faq1 from "@/components/sections/Faq1"
import Banner1 from "@/components/sections/Banner1"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import ContactSection from "@/components/sections/contactSection"
import Testimonial1 from "@/components/sections/Testimonial1"


export default function Home() {

    return (
        <>
            <Layout headerCls="menu-area-four" headerTop>
                <Banner1 />
                <Features1 />
                <Services1 />

                <About1 />
                <Faq1 />
                <Testimonial1 />
                <ContactSection />
            </Layout>
        </>
    )
}