import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const About = () => {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Hello. I'm Haemin Ryu, a prospective HCI graduate student living in Fort Wayne, IN, USA. I create harmony between humans and products.
          </Big>
          <p>
            People are the reason behind everything I do. I love thinking about changes to make the user experience and human life better.
          </p>
          <p>
            Currently, I'm a software developer and support businesses to better accomplish their business objectives by solving complex business problems with the customization and maintaining their website at CirrusABS.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work, I'm passionate about my family, <a href="https://500px.com/p/happygoals?view=photos">taking photos</a>, <a href="https://www.instagram.com/haeminyourfreetime">cooking</a>,
            and playing the bass guitar. 
          </p>
          <p>
             In October 2020, I attended 33th ACM User Interface Software and Technology Symposium as a <a href="https://medium.com/acm-uist/uist-day-3-was-a-great-final-day-thank-you-all-4a5dd9e052ac">student volunteer</a> in publicity team for the HCI community. 
          </p>
        </Fragment>
      }
    />
  )
}

export default About
