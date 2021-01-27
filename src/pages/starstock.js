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
      <Header title="StarStock Mobile Application" />
      <CoverImage src={StarstockCoverImage} focusX={'50%'} focusY={'20%'} />
      <Section>
        <ContentWrapper>
          <h2>Build a “galactic stock market” app</h2>
          <p>
            StarStock App is an application I designed in
            order to solve specific problems from the commercial products for stock markets with imagination of galactic stock market which manages the planet transaction.<br />
          </p>
          <br />
          <h3>Why galactic stock market app?</h3>
          <p>
            Nowadays, most existing apps focus on the financial stock market. Looking ahead to the more distant future, there will be high chance to be needed an app for buying, selling, and managing planets as stocks in the space world.
          </p>
          <p>
            It is not just in my imagination, but actually there are video games that involve the galaxy market and galaxy trade in the real world, and the movie Star Wars showed the galactic economy part of the story.
          </p>
          <p>
            The resulting application might be suitable for easier trade of stars with search for star stocks by categorization, related news article curation service, and star stock recommendation service based on the user's preferences.
          </p>

          <h3>User stories and Usability</h3>

          <p>This is where StarStock app comes into play:</p>
          <ul>
            <li>
             <b>Search</b> for star stocks that you want.
            </li>
            <li>
              Show the <b>market flow</b> and <b>market prices</b> for buyers and sellers in a list.
            </li>
            <li>
              <b>Buy star stocks</b> with comparison for multiple planets and get the stocks that fits your <b>circumtances</b> and <b>preferences.</b>
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
          <p> The usability requirements should consider design elements, such as keeping design consistent, using signifiers, etc. </p>
          <p>This is what I consider for StarStock app:</p>
             <li>Keep the design concept of the app like space and planets with dark colors.</li>
             <li>The signifiers should be simple and easy to understand.</li>
             <li>Buttons include the text.</li> 
             <li>Consider security part since the application is related to the payment process.</li>
          <br />
          <h3>Task Analysis</h3>
          <p> This is an example of task analysis on one of the user stories. </p>
          <LargeImage src={StarstockImage5} />
          
          <br />
          <br />
          <h3> Design Alternative for the User Interface of the app </h3> 
           
          <LargeImage src={StarstockImage0} />
          <p>
          A basic system color for UI Design consists of 7 colors. 
          </p>
          <p>
           According to the design requirements, I keep a cosmic image using the dark blue / deep dark blue color as a main background color. Since the button or any content like icons should be noticeable and clickable, I chose their color as yellow (Yellow is a complementary color of dark blue or purple.) the most. For the badges and buttons that uses for significant decision such as buying/selling stocks and saving operation, I used 
           fluorescent colors. 
          </p>

          <p> Here is the affordances and the signifiers I used for those affordances.</p>
          <LargeImage src={StarstockImage1} />

          <br />
          {/* <h3>Analyzing existing stock market apps</h3> */}
          
          <h3>Prototyping</h3>
          <p>
            Here are the example screens of StarStock app: 
          </p>
  
 
  
          <LargeImage src={StarstockImage2} />
          <p> I produced a high fidelity prototype of the application using Adobe XD. 
            As you can see, there 4 different screens in the process of searching for stocks. 
          </p>
          <h5>Searching interested star stocks</h5>
          <p>
            In the first screen, you can view the news by categorizing the stocks with keywords. When you search for stocks like Mars, the result of your search displays your interest planet. The result contains a horizontal bar graph to show the percentage of positive and negative news depends on the artificial analysis curating system. When you click the related keywords in the pill shape buttons, it brings the daily news that are associated with the planet you are interested in and the keywords you selected. The reason why the daily news are shown as two column is because that can show the news titles as summary as many as possible.             
          </p>
          <p>
            When you scroll down the second screen above will appear with keywords you chose as bigger yellow texts on the top. In the center of the screen, you can see the stars around Mars (the one you searched) with the name, red color, and sphere shape. If you press one star, it turns as bluish color star and presents related news for that star. 
          </p>
          <h5>Finding your fits</h5>
          <p>Moreover, in order for the first-time users or beginners who are not familiar with star stocks, the application has user settings for the stock recommendations. If you inputs your total budget for star stocks and the range of risks you can afford, you can know what your volatility type for stocks is. When you are happy with your result, hit SAVE and your type will be saved in your settings.</p>

          <LargeImage src={StarstockImage3} />
          <h5>Checking the list of star stocks</h5>

          <p>
            With starstock app, you can simply view the list of the stars including the image, name, chip to describe a stock of a particular quality, and the amount currently being traded. 
            The color of the price text is meaningful based on the common color scheme use in the stock market. Green indicates the stock is trading higher than the previous day's close. Red indicates the stock is trading lower than the previous day's close. Blue or white means the stock is unchanged from the previous closing price. 
          </p>
          <p>
            When you swipe from right to left on the item, the buttons for redirecting to the buying or selling options will appear. 
          </p>
          <br />
          
          <LargeImage src={StarstockImage4} />
          <p>
            The application can also be useful if you want to get information of the galaxy. After you chose the galaxy you are interested in, the actual photo of the star displays with other stars that are located around the star. If you swipe the card at the bottom of the screen that includes the detail of the star, then you can view the star that is next to the star you viewed. When you go to 'Show Charts', it exhibits the stock trading chart (candle chart). You can check other scopes like profitability, growth, stability, and projection in the next page.  
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
