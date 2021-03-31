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
import StarstockImage5 from 'img/articles/starstock/starstock5.png'
import StarstockImage6 from 'img/articles/starstock/starstock6.png'
import StarstockImage7 from 'img/articles/starstock/starstock7.png'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const Starstock = () => {
  return (
    <GlobalWrapper>
      <Header title="StarStock" />
      <CoverImage src={StarstockCoverImage} focusX={'50%'} focusY={'20%'} />
      <Section>
        <ContentWrapper>
          <h2>Build a “galactic stock market” mobile application</h2>
          <p>
            StarStock App is an application I designed to solve specific problems from the commercial products for stock markets with the imagination of the galactic stock market which manages the planet transaction.<br />
          </p>
          <br />
          <h3>Why a galactic stock market app?</h3>
          <p>
            Nowadays, most existing apps focus on the financial stock market. Looking ahead more distant future, there will be a high chance to be needed an app for buying, selling, and managing planets as stocks in the space world.
          </p>
          <p>
            It is not just from my imagination, but actually, there are video games that involve the galaxy market and galaxy trade in the real world, and the movie Star Wars showed the galactic economy part of the story.
          </p>
          <p>
            The resulting application might be suitable for easier-trade of stars with the search function for star stocks by categorization, related news article curation service, and star stock recommendation service based on the user's preferences.
          </p>

          <h3>User Stories</h3>

          <p>Where StarStock app will come into play:</p>
          <ul>
            <li>
             <b>Search</b> for star stocks that you want.
            </li>
            <li>
              Show the <b>market flow</b> and <b>market prices</b> for buyers and sellers in a list.
            </li>
            <li>
              <b>Buy star stocks</b>  with comparison for multiple planets and get stock that fits your <b>circumstances</b> and <b>preferences.</b>
            </li>
            <li>
              <b>Sell star stocks</b> and get the money back to my account.
            </li>
            <li>
              Check the <b>profit</b> and <b>loss ratio</b> like portfolios.
            </li>
          </ul>
          <br />
          <h3>Usability / Design requirements</h3>
          <p>The usability requirements should consider design elements, such as keeping the design consistent, using signifiers, etc. </p>
          <p>What I consider for the StarStock app:</p>
             <li>Keep the design concept of the app like space and planets with dark colors.</li>
             <li>The signifiers should be simple and easy to understand.</li>
             <li>Buttons include the text.</li> 
             <li>Consider security since the application is related to the payment process.</li>
          <br />
          <h3>Task Analysis</h3>
          <p>The below image is an example of task analysis on one of the user stories. </p>
          <LargeImage src={StarstockImage5} />
          
          <br />
          <br />
          <h3> Design Alternative for the User Interface of the app </h3> 
           
          <LargeImage src={StarstockImage0} />
          <p>
          A standard system color for UI Design consists of 7 colors.
          </p>
          <p>
           According to the design requirements, I keep a cosmic image using the dark blue / deep dark blue color as the background base color. Since the button or any content like icons should be noticeable and clickable, I chose their color as yellow (Yellow is a complementary color of dark blue or purple.) the most. Since the badges and buttons are for significant decisions such as buying/selling stocks and savings, I set fluorescent colors for them.
          </p>

          <p>Here are the affordances and the signifiers I used for those affordances.</p>
          <LargeImage src={StarstockImage1} />

          <br />
          {/* <h3>Analyzing existing stock market apps</h3> */}
          
          <h3>Prototyping</h3>
          <p>
            Here are the example screens of StarStock app: 
          </p>
  
 
  
          <LargeImage src={StarstockImage2} />
          <p> I produced a high-fidelity prototype of the application using Adobe XD. As you can see, there are four different screens in the process of searching for stocks.
          </p>
          <h5>Searching interesting star stocks</h5>
          <p>
            On the first screen, you can view the news by categorizing the stocks with keywords. When you search for a star like Mars, the result of your search displays your interest planet. The search result contains a horizontal bar graph to show the percentage of positive and negative news depends on the artificial analysis curating system. When you click the related keywords in the pill shape buttons, it brings the relevant daily news articles to the planet you are interested in and the keywords you selected. The reason the daily news articles showed as two-columns is because users can view the news titles as summary as many as possible.
          </p>
          <p>
           When you scroll down on the second screen above, the yellow color text will appear with keywords you chose on the top. On the center of the second screen, you can view the stars around Mars (the one you searched) with the name of a star, red color, and sphere shape. If you press one star, it turns a bluish color star and presents related news for that star. 
          </p>
          <h5>Finding your fits</h5>
          <p>Moreover, in order for beginners who are not familiar with star stocks, the application gives stock recommendations based on user settings. If you input your total budget value and the range of risks you can afford, you can know what your volatility type for stocks is. When you are happy with your result, hit SAVE, and a customized type will be set in your settings.</p>

          <LargeImage src={StarstockImage3} />
          <h5>Checking the list of star stocks</h5>

          <p>
            With starstock app, you can simply view the list of the stars including the image, name, chip to describe a stock of a particular quality, and the amount currently being traded. 
            The color of the price text is meaningful based on the standardized on color scheme use in the stock market. Green indicates the stock is trading higher than the last day's close. Red indicates the stock is trading lower than the previous day's close. Blue or white means the stock is unchanged from the previous closing price. 
          </p>
          <p>
             The application is serviceable if you want to get information about the galaxy. When you pick on a star, the photo of stars displays along with the other nearby stars. If you swipe the cards at the bottom of the screen that includes the star's details, you can also view another star that is closed to the stars you just viewed. If you go 'Show Charts', it exhibits the stock trading chart (candle chart). You can check other scopes like profitability, growth, stability, and projection on the next page.  
          </p>
          <LargeImage src={StarstockImage6} />
          <p>
            There are more features for the starstock app.
          </p>
          <br />
          <h3> User Testing for the prototype</h3> 
           <p> Here is an example of the usability test consent form: </p>
           <LargeImage src={StarstockImage7} />
          <br />
          <h3>Feedback welcome</h3>
          <p>
            If you have ideas to make this application better, please let me know
            via <a href="https://twitter.com/haeminryu_">Twitter</a>. Thank you for reading! 
          </p>
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default Starstock
