import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
       title="I write code"
       subtitle="learncodeonline.in"
       heroClass="hero-background"

     />
<Infoblock heading="ABOUT US" />
<Coursecart courses={data.mycourses}/>
<DualInfoblock heading="OUR TEAM" />
  </Layout>
)
 export const query = graphql`
 {
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG

        }
      }
    },

    mycourses:allContentfulCourses{
      edges{
        node{
          id
          title
          price
          category
          description{
            description
          }
          image{
            fixed(width: 200,height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
}
 `

export default IndexPage
