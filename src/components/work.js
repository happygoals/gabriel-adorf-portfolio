import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import KellerkindLogo from 'img/kellerkindlogo'
import PalettteAppLogo from 'img/palettteapplogo'
import LifeTimeLogo from 'img/lifetimelogo'
import BamLogo from 'img/bamlogo'

const LifeTimeLink = <Link to="/lifetime">Read More</Link>
const PalettteLink = <Link to="/palettteapp">Read More</Link>
const KellerkindLink = <Link to="/kellerkind">Read More</Link>
const BamLink = <Link to="/bam">Read More</Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Project</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={LifeTimeLogo()}
            title="E-Bridge"
            abstract="E-Bridge is an online two-sided employment platform designed to instantly connect technical talent with job opportunities after the COVID-19 crisis. This solution will help students, companies, and the community in face-to-face interaction between recruiters and candidates."
            link={LifeTimeLink}
          />
          <Project
            logo={PalettteAppLogo()}
            title="StarStock"
            abstract="StarStock is a galactic stock market application for buying, selling, and managing stocks between multiple planets stock markets."
            link={PalettteLink}
          />
          <Project
            logo={BMWLogo()}
            title="BMW InPA 5.0.6 Tool"
            abstract="A redesign project for a BMW InPA 5.0.6 desktop application to allow everyday BMW InPA tool users to have more control over how their car functions."
            link={KellerkindLink}
          />
          <Project
            logo={BamLogo()}
            title="Indoor Navigation: Improved Accessibility for Peoople with Disabilities"
            abstract="A web application that analyzes generated data and presents it in a heatmap and a frequent routes chart. With the application, Parkview can understand routing trends and optimize space utilization."
            link={BamLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
