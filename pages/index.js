import Layout from "@/components/layout/Layout"
import Faq1 from "@/components/sections/Faq1"
import Banner1 from "@/components/sections/Banner1"
import Brand1 from "@/components/sections/Brand1"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Project1 from "@/components/sections/Project1"
import Team1 from "@/components/sections/Team1"
import Counter1 from "@/components/sections/Counter1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Blog1 from "@/components/sections/Blog1"
import Work1 from "@/components/sections/Work1"
import Work2 from "@/components/sections/Work2"

export default function Home() {

    return (
        <>
            <Layout headerCls="menu-area-four" headerTop>
                <Banner1 />
                <Features1 />
                <Services1 />
                <Work2 />
                <Work1 />
                <About1 />
                <Faq1 />
                <Testimonial1 />
                {/* <Newsletter1 /> */}
            </Layout>
        </>
    )
}