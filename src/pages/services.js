import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Coursecart from "../components/Cart/Coursecart"
import Bundlecart from "../components/Cart/Bundlecart"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
       title="PRODUCTS"
       subtitle=""
       heroClass="about-background"

     />
<Infoblock heading="ABOUT OUR PRODUCTS" />
<Coursecart courses={data.mycourses}/>
<Bundlecart bundles={data.mybundles}/>
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
      },
      mybundles: allContentfulBundles {
        edges {
          node {
            id
            title
            price
            image {
              fixed(width: 200, height: 120) {
                ...GatsbyContentfulFixed_tracedSVG

              }
            }
          }
        }
      }
}
 `

export default AboutPage
