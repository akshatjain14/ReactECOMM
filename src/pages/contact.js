import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import { FaPhoneVolume } from 'react-icons/fa'
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Contactus from "../components/Contact/Contactus"
const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
       title="CONTACT US"
       subtitle=<FaPhoneVolume/>
       heroClass="about-background"

     />
    <Infoblock heading="HOW CAN WE HELP??" />
    <Contactus/>


  </Layout>
)
 export const query = graphql`
 {
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG

        }
      }
    }
}
 `

export default ContactPage
