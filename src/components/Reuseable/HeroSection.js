import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection ({img , title, subtitle , heroClass })  {
  return (
    <BackgroundImage
         className={heroClass}
         fluid={img}
    >
        <h1 className="text-white text-center text-uppercase display-4">{title}</h1>
        <div>
            <h1 className="text-danger">{subtitle}</h1>
        </div>
    </BackgroundImage>
  )
}
