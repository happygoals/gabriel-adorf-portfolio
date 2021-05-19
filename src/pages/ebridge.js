import React from 'react'
import styled from 'styled-components'

import GlobalWrapper from 'components/global-wrapper'
import media from 'utils/media-queries'

import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import FullSizeImage from 'components/article/fullsizeimage'

import CoverSrc from 'img/articles/ebridge/ebridge-main-laptop.jpg'
import DiagramSrc from 'img/articles/ebridge/ebridge-diagram.png'
import ProblemSrc from 'img/articles/ebridge/ebridge-problem.jpg'
import ResumeGallery from 'img/articles/ebridge/ebridge-resume-gallery.jpg'
import UI2Src from 'img/articles/ebridge/lifetime-app2.jpg'
import TasksSrc from 'img/articles/ebridge/lifetime-tasks.jpg'
import OnboardingSrc from 'img/articles/ebridge/lifetime-illustration.svg'
import DesktopSrc from 'img/articles/ebridge/lifetime-desktop.jpg'
import PaperPlaneSrc from 'img/articles/ebridge/lifetime-paperplane.svg'
import TypeIconsSrc from 'img/articles/ebridge/lifetime-typeicons.svg'
import IconsSrc from 'img/articles/ebridge/lifetime-icons.svg'
import ColorsSrc from 'img/articles/ebridge/lifetime-colors.jpg'
import LetterBoxSrc from 'img/articles/ebridge/lifetime-letterbox.jpg'
import LogoSrc from 'img/articles/ebridge/lifetime-logo.svg'
import HeartSpinnerSrc from 'img/articles/ebridge/lifetime-logoanimation.gif'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ImageGrid = styled.div`
  background: #f2f2f2;
  max-width: 100%;
  padding: 40px;
  margin: 32px 0;
  text-align: center;
  ${media.lg`
    padding: 32px;
    margin: 0 0 24px 0;
  `}
  ${media.md`
    margin: 0;
    margin: 0 0 16px 0;
  `}
  ${media.sm`
    padding: 16px;
  `}
`

const Img = styled.img`
  max-width: calc(100% - 96px);
  max-height: 300px;
  margin: 8px;
  display: inline-block;
  ${media.xl`
    max-height: 240px;
  `}
  ${media.lg`
    max-height: 200px;
  `}
  ${media.md`
    max-height: 120px;
    margin: 4px;
  `}
  ${media.sm`
    max-height: 80px;
    margin: 2px;
  `}
`

const Ebridge = () => {
  return (
    <GlobalWrapper>
      <Header title="E-Bridge: The Bridge to the dream job" />
      <CoverImage src={CoverSrc} focusX={'35%'} focusY={'50%'} />
      <Section>
        <ContentWrapper>
          <h2>Covid 19 has disrupted face-to-face interaction between recruiters and candidates.</h2>
          <h3>Shallow networking and resume spreading does not help with recruiting.</h3>
          <p>
            Students want to interact with professionals who understand the position. There are not many virtual tools that give candidates more chances to get reached and hired. 
          </p>
            <FullSizeImage src={ProblemSrc} />
          
          <h3>Recruiters need a tool to manage a number of resumes</h3>
         
          <p>
            Resumes are a great way by which you can identify quality talent but they have a major problem: recruiters have a hard time managing and organizing these resumes to pick the relevant ones. 
            E-bridge is the tool to collect, parse, search, and manage resumes from your job seekers. The features of E-bridge extend beyond just managing resumes and sorting them into stacks, but into the customized hiring process.
          </p>
    
        </ContentWrapper>
        <FullSizeImage src={DiagramSrc} />
        <ContentWrapper>
          <h3>Our Activity Diagram</h3>
          <p>
           Each view starts with candidates create profiles and Professionals create their accounts. 
           The steps candidates would do from their view (Candidate View), and the steps recruiters would do from their view (Professional View). 
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h2> Project Goals</h2> 
          <h3> Instant Connect </h3>
            <p> It allows users to connect instantly to dream candidates and jobs. </p>
          <h3> Right Candidates </h3>
            <p> Recruiters can get to know candidates beyond the resume line. </p>
          <h3> Self-improvement </h3>
            <p> Users can understand the most valuable skill, train and get certified, get challenged through projects. </p>
          <h2>Our approach</h2>     
         </ContentWrapper>
          <FullSizeImage src={ResumeGallery} />
        <ContentWrapper>
          <h3>Resume Gallery & Video Gallery</h3>
          <p>
            Candidates must upload their resumes on the system as they create their profiles. 
            After finishing the profile settings, our system will have predefined suggested questions for the candidates to address in a short 3 minutes video. 
            They must complete these steps for the profile to be visible to recruiters on the gallery. 
            E-bridge adds the candidate's resumes and videos to the resume & video gallery. 
            The galleries are categorized by a particular group, such as job title, major, and location.

          </p>
          <h3>Resume Gallery</h3>
          <p>
            Visible to recruiters by school/majors/work authorization, etc. This feature can be used as a resume cloud for the recruiter. The system suggests resume to include the predefined keywords once candidate uploads their resume. Recruiters can search by skills and find the resumes containing the skills they need. Wish-list / favorite resume increase points for the candidate. An algorithm to suggest potential resumes to recruiters based on the current openings will help the initial recruiting process.
          </p>
          <h3>Video Gallery</h3>
          <p>
            Videos will be visible to recruiters by college majors/positions.
            This video gallery feature eliminates the need for phone screen interviews and helps recruiters select people to go straight to interviews with people in their positions.
            Recruiters can use the wish list option to archive their favorite videos and can promote candidates once the recruiter takes the opening position.
            An algorithm to suggest videos to recruiters based on the current openings will help the interview process management. 
          </p>
          
        </ContentWrapper>
        <ContentWrapper>
          <h3>Earning Badges</h3>
          <p>
            Current job-seeking platforms allow users to add skills to their profiles. However, it is a fact that it is difficult to know if those listed skills are <b>VALID</b>.
          </p>
          <p>
            Therefore, a new system, E-bridge Badges System, will allow candidates to “<b>prove</b>” their skills, which will also help recruiters save time in the interview process.
          </p>
            <h3>Badges System</h3>
          <p>
            This system allows user to upgrade their badges by earning points in reliable ways.
          </p>
            <h4>Work Experiences / Projects</h4>
          <p>
            Users can add their experience and projects they have completed. 
            They can also add a video of themselves to talk about those projects and experiences.
          </p>
            <h4>Certificates / Degrees</h4>
          <p>
            Users can submit their proof of certificates/degrees to earn points. 
            The points can vary based on the level of the degree. We will look into their courses and GPA to make the decision.
          </p>
          <p> Ex: Bachelor’s 100 pts. Master’s 150 pts.  </p>
            <h4>Referrals</h4>
          <p>
            Users can request other users to approve their skills. 
            The points for each request can be different based on the job level of who makes the approval.
          </p>
            <h4>Tests / Lectures</h4>
          <p>
            There are tests/exams for skills/experiences listed in the profile. 
            Points and requirements can vary depending on the levels. 
            Users can earn points from the lectures that are guaranteed. The material of the courses can be from beginner to advanced topics.
          </p>
          <h3>Application Progress Bar</h3>
            <h4><b>For Recruiters</b></h4>
              <h4>Transparent Recruiting</h4>
                <p>Share and adhere to a timeline</p>
                <p>Set probation goals</p>
                <p>Key takeaways</p>
              <h4>Smooth Recruiting</h4>
                <p>Streamline with technology</p>
                <p>Brief candidates before the interview</p>
            <h4><b>For Candidates</b></h4>
              <h4>Smart Applying</h4>
                <p>Track the application status</p>
                <p>Save the time to apply for the position</p>
              <h4>Motivated Applying</h4>
                 <p>Prove  your growth</p>
                 <p>Inform users of how close they are to completing a series of tasks by showing the completion steps along the way.</p>
        </ContentWrapper>
        <ContentWrapper>
          <h2>To make Live Q&A Chat Effectively</h2>
          <h3>Virtual Job Expo</h3>
          <p>
            Candidate submit questions,
            Collect questions about the position/company 
          </p>
          <p>
            Analyze similar keyword from questions,
            Group the topic of the questions using AI,
            Remove  duplicated questions,
            Simplify the questions and show them on the list
          </p>
          <p>
            Candidates vote for the questions that they want to ask,
            View the answers with the search bar,
            Recruiters answer the general question list 
          </p>
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Ebridge
