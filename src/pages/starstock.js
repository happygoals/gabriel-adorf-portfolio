import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import media from 'utils/media-queries'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import CoverImage from 'components/article/coverimage'
import LargeImage from 'components/article/largeimage'

import StarstockCoverImage from 'img/articles/starstock/starstockapp.jpg'
import StarstockImage0 from 'img/articles/starstock/starstock0.jpg'
import StarstockImage1 from 'img/articles/starstock/starstock1.jpg'
import StarstockImage2 from 'img/articles/starstock/starstock2.jpg'
import StarstockImage3 from 'img/articles/starstock/starstock3.jpg'
import StarstockImage4 from 'img/articles/starstock/starstock4.jpg'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Starstock = () => {
  return (
    <GlobalWrapper>
      <Header title="StarStock Mobile Application" />
      <CoverImage src={StarstockCoverImage} focusX={'50%'} focusY={'20%'} />
      <Section>
        <ContentWrapper>
          <h2>Build a “galactic stock market” app</h2>
          <p>
            StarStock App is an application I designed in
            order to learn human computer interaction design and solve specific problems from the commercial products for stock markets.<br />
          </p>
          <br />
          <h3>Why galactic stock market app?</h3>
          <p>
            Most existing apps focus on the financial stock market. In the future, there will be high chance to be needed an app  for buying, selling, and managing planets as stocks in the space world.
          </p>
          <p>
            The resulting color schemes might be suitable for logos or classic
            graphic design, but they rarely work for UI Design, where most of
            the time you need to work with a few base colors (that are often set
            by brand guidelines) and a whole range of different variations and
            shades.
          </p>
          <p>
            What Steve doesn't describe exactly is how he finds those colors:
            <i>
              "...you just need to fill in the gaps in between", "Trust your
              eyes, not the numbers."
            </i>
          </p>

          <p>This is where StarStock app comes into play:</p>
          <ul>
            <li>
              Build <b>smooth color schemes</b> that flow from one color to
              another
            </li>
            <li>
              <b>Finetune hue, saturation value gradients</b> of your palette
              and of each color swatch individually
            </li>
            <li>
              Import, analyze and <b>edit existing color schemes</b>, find
              errors or automatically find the most similar colors from a new
              palette to a list of legacy colors from your codebase
            </li>
          </ul>
          <br />
          <h3>Building a new color palette</h3>
          <p>
            To create a new color palette, click on the plus icon in the left
            sidebar and delete all sample colors by clicking on backspace. You
            can now add your base color by clicking "add swatch" or hitting the
            spacebar and entering the HEX-Value in the right sidebar.
          </p>
  
            <h3>User stories and Usability/design requirements</h3>
              <p> The usability requirements should consider design elements we have discussed in class, such as keeping design consistent, using signifiers, etc. </p>
              <p>As a buyer and seller, I would like to search for stocks so that I can see the market flow and stock prices.</p>
              <p> As a buyer, I would like to buy stocks such that I can get the stocks between multiple planets.</p>
              <p> As a seller, I would like to sell stocks such that I can get the money back to my account.</p>
              <p> As a buyer and a seller, I would like to check the profit and loss ratio.</p>
  
          <h4>Usability / design requirements</h4>
             <p>Keep the design concept of the app like space and planets with dark colors.</p>
             <p>The signifiers should be simple and easy to understand.</p>
             <p>Consider security part since the application is related to the payment process.</p>
  
          <h3>Task Analysis</h3>
  
  
          <h3> Design Alternative for the UI of the app </h3> 
            <p> I clearly label the affordances and the signifiers you use for those affordances. </p> 
  
          <LargeImage src={StarstockImage0} />
          <p>
            When adding more swatches you can see that three curves form: one
            for the hue, one for the saturation and one for the value
            (=brightness) of the colors.
          </p>
          <LargeImage src={StarstockImage1} />
          <p>
            A basic palette for UI Design consists of 8-10 shades where the hue
            stays the same for all shades, the value goes up and the saturation
            goes down <b>smoothly</b> as the colors get lighter.
          </p>
          <br />
          <h3>Analyzing existing stock market apps</h3>
          <p>
            If you already have a color palette and you want to know if it can
            be optimized, import the colors one by one or write the palette down
            in the special JSON format (example can be seen whan clicking on
            import) and batch import your palette.
          </p>
          <p>
            Here is the palette Steve Schoger uses in his example in Refactoring
            UI:
          </p>
  
 
  
          <LargeImage src={StarstockImage2} />
         <p> I produced a HIGH-FIDELITY PROTOTYPE of the application using Adobe XD. </p>
            <p>
            As you can see there is a little ditch in the value envelope curve
            and the saturation curve is round in the beginning and falls off in
            a linear way suddenly, nothing too serious but it's clear that Steve
            has chosen his colors by "trusting his eyes" and not his numbers ;).
          </p>
          <p>
            You can edit lines by dragging the handles around or by selecting
            two handles and clicking on "interpolate" (only linear interpolation
            is supported at the moment).
          </p>
          <LargeImage src={StarstockImage3} />
          <p>
            When you are happy with your result, simply export your new colors
            again.
          </p>
          <br />
          <h3>Mapping old colors to new ones</h3>
          <p>
            You will often somehow find yourself in a situation where you have
            built a wonderful new color palette, but your legacy code does not
            reflect the beauty of it as a lot of different shades and colors
            have piled up over time.
          </p>
          <p>
            With starstock app, you can import those (legacy) colors and find the
            most similar colors from your new palettes automatically. You will
            also immediatly spot when colors are too far off, and you need to
            introduce more colors in your palettes.
          </p>
          <LargeImage src={StarstockImage4} />
          <p>
            It can also be useful if you want to add shades to your palette and
            need to rename all existing colors.
          </p>
  
          <h3> User Testing for the prototype</h3> 
 <p> Usability test consent form </p>

  <p>
This is a study about galactic stock market application, a tool buying, selling, and managing stocks between
multiple planets stock markets in a generic Sci-Fi Galactic Federation. The goal of this project is to make
the mobile application for galactic stock market appealing, intuitive and user friendly. Your participation
will help us achieve this goal.
Please read this form and sign it.
In this usability test:
● You will be asked to perform certain tasks on a computer.
● We will also offer you an interview on the tasks you have performed.
Participation is voluntary in this survey of usability. Both details will be kept strictly secret. To help
improve the Kinect StarStock application, the descriptions and findings can be used. However, you can
withdraw your testing consent at any time and reschedule participation.
Please contact Haemin Ryu at ryuh01@pfw.edu if you have any questions after today, I read and
understood the details on this form and answered all my questions.
______________________________ _________________
Signature Date

List of Tasks

1. Open the StarStock application
2. Learn by tutorial and click “Skip” button
3. Create your account and sign in using your new account
4. Press the pin numbers to make sure authorization can be worked
5. Try to customize the application setting on Settings
6. Try to feel all the screens by swiping the screens
User Feedback Survey

1. How convenient was the steps of the application? Was it easy and clear to follow the instruction or
signifier?
2. Were you able to access the settings page?
3. How do you feel about the selecting date and time on galaxy stock trading chart?
4. Did the buttons and scroll screens work efficiently and smoothly?
5. Is the user interface simple? Or complex?
6. How do you think of the processes(steps) of the app usage experience? Is it understandable and
intuitive?
7. Are the locations of the navigation bar, buttons, texts, contents proper?
  
  </p>
          <br />
          <h3>Feedback welcome</h3>
          <p>
            If you have ideas how to make this tool better, please let me know
            via <a href="https://twitter.com/haeminryu_">Twitter</a>.
          </p>
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Starstock
