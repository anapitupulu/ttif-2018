import React from 'react'

import Layout from '../components/layout'

// Images
import logo from '../images/logo.png'
import bniLogo from '../images/bni-logo.jpeg'

const IndexPage = () => (
  <Layout>
    <section id="hero" className="hero-section bg1 bg-cover window-height light-text">
      <div className="heading-block centered-block align-center">
          <div className="container">
              <h5 className="heading-alt"><span className="fas fa-calendar-alt base-clr-txt"></span>nov 8 <span className="fas fa-map-marker-alt base-clr-txt"></span>New York, NY</h5>
              <h1 className="extra-heading">Business Forum on Trade, Tourism & Investment in Indonesia</h1>
              <div className="btns-container">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.eventbrite.com/e/business-forum-on-trade-tourism-and-investment-in-indonesia-registration-50909800584" className="btn btn-md">REGISTER</a>
              </div>
          </div>
      </div>
    </section>

    <header className="header">
      <div className="header-wrapper">
        <div className="container">
          <div className="col-sm-2 col-xs-12 navigation-header">
            <a href="/" className="logo">
              <img src={logo} alt="VentCamp" />
            </a>
            <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-controls="navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          </div>
          <div className="col-sm-10 col-xs-12 navigation-container">
              <div id="navigation" className="navbar-collapse collapse">
                  <ul className="navigation-list pull-left light-text">
                      <li className="navigation-item"><a href="#about" className="navigation-link">About</a></li>
                      <li className="navigation-item"><a href="#speakers" className="navigation-link">Speakers</a></li>
                      <li className="navigation-item"><a href="#sponsors" className="navigation-link">Sponsors</a></li>
                      <li className="navigation-item"><a href="#sessions" className="navigation-link">Sessions</a></li>
                      <li className="navigation-item"><a href="#map" className="navigation-link">Location</a></li>
                  </ul>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.eventbrite.com/e/business-forum-on-trade-tourism-and-investment-in-indonesia-registration-50909800584" className="pull-right buy-btn">Register</a>
              </div>
          </div>
        </div>
      </div>
    </header>

    <section id="about" className="section pt-28">
      <div className="container">
        <div className="row align-center">
          <h3 className="main-headline">About</h3>
        </div>
        <h4>Background</h4>
        <p>Amid global economic uncertainty, Indonesia thrives to maintain its position as the largest economy in South East Asia and one of the most desirable emerging markets in the world. It is currently experiencing a steady 5 percent economic growth. The target is to reach 6 to 7 percent growth to break out of middle income trap and achieve sustainable economic and development goals.</p>
        <p>It is our belief that a stronger US and Indonesia economic partnership can help us achieve this goal while at the same time provide a mutual and beneficial economic opportunities for the two countries. Therefore, Indonesia aims to boost its trade and investment particularly from the US as well as placing a great importance on tourism as one of Indonesia’s strategic sectors that encompasses trade and investment. In order to do so, we will hold a “Business Forum on Trade, Tourism, and Investment in Indonesia”.</p>
        <h4 className="mt-20">Purposes</h4>
        <ul>
          <li>To facilitate an exchange of ideas on promoting trade, tourism and investment in Indonesia and strengthening economic ties between US and Indonesia.</li>
          <li>To promote Indonesia as a remarkable destination for trade, tourism and investment.</li>
          <li>To provide networking opportunities among US and Indonesia’s trade, tourism and investment stakeholders.</li>
        </ul>
      </div>
    </section>

    <section className="bg-primary">
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="media">
                <div className="fas fa-map-marked-alt"></div>
                <div className="media-body">
                  <div className="heading-font">Intercontinental Hotel Times Square</div>
                  <div>300 West 44th Street, 10036, New York, NY</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <div className="fas fa-clock"></div>
                <div className="media-body">
                  <div className="heading-font">Thursday, November 8, 2018</div>
                  <div>8:30 AM to 5 PM</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section id="speakers" className="section align-center">
      <div className="container">
        <h3 className="mb-60 main-headline">Speakers</h3>

        <div className="row">
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Joseph Sahat Raja</h3>
              <p className="text-alt"><small>CEO<br/><br/>Telin</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">William Pegues</h3>
              <p className="text-alt"><small>Director<br/><br/>Structured Finance & Insurance Overseas Private Investment Corporation</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Shinto Nugroho</h3>
              <p className="text-alt"><small>Chief Policy and Government Relations<br/><br/>GO-JEK</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Fajrin Rasyid</h3>
              <p className="text-alt"><small>Co-Founder<br/><br/>Bukalapak</small></p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Arief Hidayat</h3>
              <p className="text-alt"><small>Head of Regional Government of the Special Region of Yogyakarta</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Eri Wibowo</h3>
              <p className="text-alt"><small>Head Division, Financing & Investment<br/><br/>PT Sarana Multi Infrastruktur</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Del Renigar</h3>
              <p className="text-alt"><small>Executive Director, Global Government Affairs & Policy<br/><br/>General Electric</small></p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Anne Patricia Sutanto</h3>
              <p className="text-alt"><small>CEO<br/><br/>PT Pan Brothers Tbk</small></p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-sm-offset-45">
            <div className="speaker">
              <div className="photo-wrapper"><img alt="" src="//placehold.it/500x500" className="img-responsive" /></div>
              <h3 className="name">Mari Elka Pangestu</h3>
              <p className="text-alt"><small>Former Trade Minister of Republic of Indonesia</small></p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="sponsors" className="section align-center">
      <div className="container">
        <h3 className="mb-60 main-headline">Sponsors</h3>
      </div>
      <div className="sponsors">
        <div className="sponsor inline"><img src={bniLogo} alt="" /></div>
      </div>
    </section>

    <section id="sessions" className="section">
      <div className="container">
        <div className="row align-center">
          <h3 className="mb-60 main-headline">One-on-One Sessions</h3>
        </div>
        <p>BFTTI offers participants the chance to have one-on-one sessions with Indonesian companies and government agencies further discuss investment opportunities in Indonesia. In these sessions, participants can have unparalleled insights to get specific answers pertaining to their business and investments which may include the but not limited to:</p>
        <ul>
          <li>Learning about investment opportunities in Indonesia</li>
          <li>Assessing challenges in the market and business environment</li>
          <li>Understanding local regulations</li>
          <li>Finding out how we can help you to identify new business partners</li>
        </ul>
        <h4>Companies</h4>
        <ul>
          <li>General Electric</li>
          <li>Overseas Private Investment Corporation</li>
          <li>Telin (Telkom Indonesia) USA</li>
          <li>Special Region of Yogyakarta (DIY)</li>
        </ul>
        <p>Please contact <a href="mailto:economicny@gmail.com">economicny@gmail.com</a> to schedule an appointment</p>
      </div>
    </section>

    <section id="map" className="mt-60">
      <div className="contacts-wrapper">
        <iframe title="google-maps" className="map-frame" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=intercontinental%20hotel%20times%20square&key=AIzaSyCljp_s1lir-HRjlqpj4IdwCULGFtKnBBY" allowfullscreen></iframe>
        <div className="container contacts-on-map-container">
          <div className="contacts-on-map">
            <h3 className="main-headline mt-0">Location</h3>
            <div><i className="fas fa-map-marked-alt"></i>300 W 44th St, New York, NY 10036</div>
            <div><i className="fas fa-clock"></i>8:30 AM - 5:00 PM</div>
            <div><i className="fas fa-envelope"></i><a href="mailto:economicny@gmail.com">economicny@gmail.com</a></div>
          </div>
        </div>
      </div>
    </section>

    <section className="footer">
      <div className="footer-base">
        <div className="container">
          <div className="col-md-6">
            <p className="text-alt"><small>All&nbsp;Rights Reserved ©&nbsp;2018</small></p>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
