import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Header from 'components/header'
import Spirograph from 'components/spirograph'
import CoverImage from 'components/article/coverimage'

import MainCoverImage from 'img/main/me_041120.jpg'


const HeroSection = styled.section`
  height: 50vh;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${media.sm`
    height: calc(50vh - 76px);
  `}
`

const Hero = () => {
  return (
    <HeroSection> 
      <Header />
      <CoverImage src={MainCoverImage} focusX={'28%'} focusY={'55%'} />
    </HeroSection>
  )
}
export default Hero
