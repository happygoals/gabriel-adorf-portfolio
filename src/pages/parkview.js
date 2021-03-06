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
import ParkviewImage2 from 'img/articles/parkview/mainlogin.jpg'
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
      <CoverImage src={ParkviewCoverImage} focusX={'44%'} focusY={'35%'} />
      <Section>
        <ContentWrapper>
          <h2>Project Background and Description</h2>

          <p>
            The primary purpose of this project is to improve upon the previous generation of the Indoor Navigation Mobile Application that was created for the Parkview Regional Medical Campus (PRMC) in Fort Wayne, Indiana. 
          </p>

          <p>
            PRMC is investing in improving the patient experience and is a leading institution in the medical industry. The project aims to leverage new technologies which focused on the patient experience to keep PRMC ahead of the competitors.
          </p>
         <p>
            The application uses Bluetooth low energy to power the real-time application positioning functionality,  creating an easy-to-understand navigation system.
         </p>
          <LargeImage src={ParkviewImage1} alt="Software Diagram" />
        </ContentWrapper>
        <ContentWrapper>
          <h2>Project Scope Description</h2>
          <h4>Problem</h4>
          <p>Information in the database currently is not used.</p>
          <h4>Reason</h4>        
          <p>The patient's user data and navigation data in the hospital can be efficiently managed to help guide patients.</p>
          <p> * Example Data: Age, Time, Handicapped</p>
         <p>
          <b>Solution development of a web application</b> that provides analyzed data to administrative staff in a comprehensive manner, and allows the data to be manipulated or viewed in a variety of formats.
         </p>
          <p>
           For example, Parkview employees can use a web application to determine the most populated time and by which age group or gender. This effect would allow for an in-depth look at particular patient demographics, giving Parkview the tools to improve their services.
         </p>
         <h2>My role for this project</h2>
          <p>
           We created a <b>web application</b> that analyzes and presents created data in a heatmap and a chart of frequent routes for Parkview Hospital's Utilization. As a <b>designer</b> and a <b>front-end developer</b> for this web development project, I managed the product design process from sketch to actual production build with considering user experiences.
         </p>
        </ContentWrapper>
        <br />
        <LargeImage src={ParkviewImage2} alt="Main Login" />
          <ContentWrapper>
          <p> This is a Parkview Analytics Main login Page. The diamond shape of the central login window is designed in consideration of the shape of the Parkview Hospital logo. To keep the main theme color of Parkview Health, the main color of the application pages uses green. For ease of identification, white is used to highlight button text that makes the user goes to different pages.
            </p>
            <iframe src="https://player.vimeo.com/video/392363121" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </ContentWrapper>
        <br />
        <LargeImage src={ParkviewImage4} alt="Heatmap Page" />
        <ContentWrapper>
          <p> A heat map page allows the staff to view the population of the spot and check the most popular department, most popular beacon number, and least popular beacon number. </p>
          <p> I added the sun and moon icons at the bottom of the time picker to let you know at a glance whether it is daytime or nighttime when setting the time range on the heatmap controller. In addition, the color of the time picker bar is designed as a gradient green color in consideration of the sun rising and setting. The time of day when the sun goes down is expressed in dark green, and the time of day when the sun rises is expressed in lighter green. </p>
          <p>All setting texts and result boxes that have meaning are displayed together with text and icon so that the user can easily understand the meaning with just the icon.</p> 
          <iframe src="https://player.vimeo.com/video/392362627" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          
        </ContentWrapper>     
  <br />
        <LargeImage src={ParkviewImage5} alt="Route Page" />
       <ContentWrapper>
          <p> This is a routing map page for understanding routing patterns on the first floor of the hospital. Each series of bubbles on the route chart represent a route taken. The size of the bubble on the chart represents the frequency of the route. When clicking on a bubble, it draws the corresponding route on the map. </p>
          <br />
          <iframe src="https://player.vimeo.com/video/392360253" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </ContentWrapper>
      <ContentWrapper>
          <h2>Project Aspirations and Description</h2>

          <p>
            This iteration of the project focused on three key features web development, targeted advertisements, and improved mobile application navigation. 
          </p>

          <p>
            These include web development utilizing data and business analytics, targeted advertisements that will promote Parkview technologies, and improved mobile application navigation to assisted disabled patients. 
          </p>
         <p>
             Each feature served to enhance PRMC's quality of service, revenue generation, and modern appeal.
         </p>
        </ContentWrapper>
        <ContentWrapper>
          <h2>Final Demo and Poster</h2>
          <iframe src="https://player.vimeo.com/video/392363121" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </ContentWrapper>
        <FullSizeImage src={ParkviewImage6} alt="Poster" />
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Pakview
