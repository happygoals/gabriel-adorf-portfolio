import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import BMWLogo from 'img/bmwlogo'
import StarStockLogo from 'img/starstocklogo'
import EbridgeLogo from 'img/ebridgelogo'
import BamLogo from 'img/bamlogo'

const EbridgeLink = <Link to="/ebridge">Read More</Link>
const StarstockLink = <Link to="/starstock">Read More</Link>
const BMWLink = <a href="https://vimeo.com/392362212">Watch Demo on Vimeo ↗</a>
const BMWLink2 = <a href="https://drive.google.com/file/d/1BQDRDp9zB7wnmT2Y8-V1Cqo7ibkfhxBc/view?usp=sharing">Read More</a>
const ParkviewLink = <a href="https://vimeo.com/392359571/6adb6cafd8">Watch Demo on Vimeo ↗</a>
const ParkviewLink2 = <a href="https://github.com/happygoals/Team7_PFW_Capstone">Read More on GitHub ↗</a>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Project</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={EbridgeLogo()}
            title="E-Bridge"
            abstract="E-Bridge is an online two-sided employment platform designed to instantly connect technical talent with job opportunities after the COVID-19 crisis. This solution will help students, companies, and the community in face-to-face interaction between recruiters and candidates."
            
          />
          <Project
            logo={StarStockLogo()}
            title="StarStock"
            abstract="StarStock is a galactic stock market application for buying, selling, and managing stocks between multiple planets stock markets."
            link={StarstockLink}
          />
          <Project
            logo={BMWLogo()}
            title="BMW InPA 5.0.6 Tool"
            abstract="This is a redesign project for BMW InPA 5.0.6 Tool to allow everyday BMW InPA tool users to have more control over how their car functions."
            link={BMWLink}
            link2={BMWLink2}
          />
          <Project
            logo={BamLogo()}
            title="Indoor Navigation: Improved Accessibility for People with Disabilities"
            abstract="This project is a web application that analyzes and presents created data in a heatmap and a chart of frequent routes. As a designer and frontend developer for this project, I created the application from sketch to actual product with considering user experiences. Parkview hospital could understand routing patterns with the framework and optimize space utilization for people with disabilities."
            link={ParkviewLink}
            link2={ParkviewLink2}
          />
        </Fragment>
      }
    />
  )
}

export default Work
