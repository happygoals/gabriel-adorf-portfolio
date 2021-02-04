import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import CoverImage from 'components/article/coverimage'
import LargeImage from 'components/article/largeimage'
import TwoImage from 'components/article/twoimage'
import FullSizeImage from 'components/article/fullsizeimage'

import ParkviewCoverImage from 'img/articles/parkview/parkview-cover.jpg'
import ParkviewImage1 from 'img/articles/parkview/software_diagram.png'
import ParkviewImage2 from 'img/articles/parkview/mainlogin.png'
import ParkviewImage3 from 'img/articles/parkview/heatmap2.png'
import ParkviewImage4 from 'img/articles/parkview/heatmap.png'
import ParkviewImage5 from 'img/articles/parkview/routemap.png'
import ParkviewImage6 from 'img/articles/parkview/poster.png'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Pakview = () => {
  return (
    <GlobalWrapper>
      <Header title="Indoor Navigation: Improved Accessibility for People with Disabilities" />
      <CoverImage src={ParkviewCoverImage} focusX={'44%'} focusY={'85%'} />
      <Section>
        <ContentWrapper>
          <h2>Products with extra bäm effect</h2>

          <p>
            Bäm is a brand and registered trademark by Dr. Johannes Jacubeit,
            under which he has bundled and marketed various smaller projects and
            (mostly climbing) products in the past. The common denominator is
            the motto &quot;Bäm - make things happen.&quot;
          </p>

          <p>
            Bäm - Afterclimb is a soothing gel for the hands, which provides for
            a faster healing of the skin after sports climbing. I have provided
            packaging, CI and web designs for it.
          </p>
        </ContentWrapper>
        <LargeImage src={ParkviewImage1} alt="Software Diagram" />
        <br />
        <LargeImage src={ParkviewImage2} alt="Main Login" />
        <br />
        <TwoImage
          src1={ParkviewImage3}
          alt1="Heatmap Example"
          src2={ParkviewImage4}
          alt2="Heatmap Page"
        />
        <br />
        <FullSizeImage src={ParkviewImage5} alt="Route Page" />
          <br />
        <FullSizeImage src={ParkviewImage6} alt="Poster" />
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Bam
