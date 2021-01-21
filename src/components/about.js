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
            Hi. I'm Haemin Ryu, a prospective HCI graduate students living in&nbsp;Fort Wayne, IN, USA. I create
            harmony between human and&nbsp;products.
          </Big>
          <p>
            People are the reason behind everything I do. I love thinking about changes to make the user experience and humans’ life better.
          </p>
          <p>
            Currently, I'm a software engineer and I'm helping other businesses to best achieve their business goals by solving complicated business issues with the customization and maintaining their website in the community at{' '}
            CirrusABS.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about my family, <a href="https://500px.com/p/happygoals?view=photos">traveling</a>, <a href="https://www.instagram.com/haeminyourfreetime">cooking</a>,
            and playing bass guitar.
          </p>
        </Fragment>
      }
    />
  )
}

export default About
