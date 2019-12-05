import React, { useEffect } from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery'
import Scrollspy from 'react-scrollspy'
import smoothscroll from 'smoothscroll-polyfill'
import WOW from 'wowjs'

import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Dashboard from "../images/dashboard.png";
import Iphone from "../images/iphone.jpg";
import Laptop from "../images/laptop.png";
import Perspective from "../images/perspective.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/animate.css";
import "../styles/main.scss";

global.jQuery = require('jquery');
require('bootstrap');

const IndexPage = () => {
  useEffect(() => {
    smoothscroll.polyfill();
    const wow = new WOW.WOW();
    wow.init()
  }, []);

  const handleNavMenuItemClick = (e) => {
    if(e.currentTarget.hash) {
      e.preventDefault();
      let hash = e.currentTarget.hash
      window.scroll({ top: document.querySelector(hash).offsetTop, left: 0, behavior: 'smooth' });
    }
  }

  return (
  <>
    <div className="navbar-wrapper">
            <nav className="navbar navbar-default navbar-fixed-top navbar-scroll" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#page-top" onClick={handleNavMenuItemClick}>WEBAPPLAYERS</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                      <Scrollspy className="nav navbar-nav navbar-right" items={['page-top', 'features', 'team', 'testimonials', 'pricing', 'contact']} currentClassName="active">
                        <li><a className="page-scroll" onClick={handleNavMenuItemClick} href="#page-top">Home</a></li>
                        <li><a className="page-scroll" onClick={handleNavMenuItemClick} href="#features">Features</a></li>
                        <li><a className="page-scroll" onClick={handleNavMenuItemClick} href="#team">Team</a></li>
                        <li><a className="page-scroll" onClick={handleNavMenuItemClick} href="#testimonials">Testimonials</a></li>
                        <li><a className="page-scroll" onClick={handleNavMenuItemClick} href="#pricing">Pricing</a></li>
                        <li><a className="page-scroll" onClick={handleNavMenuItemClick} href="#contact">Contact</a></li>
                      </Scrollspy>
                    </div>
                </div>
            </nav>
    </div>
    <div id="page-top">
      <div id="inSlider" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#inSlider" data-slide-to="0" className="active"></li>
              <li data-target="#inSlider" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
              <div className="item active">
                  <div className="container">
                      <div className="carousel-caption">
                          <h1>We craft<br/>
                              brands, web apps,<br/>
                              and user interfaces<br/>
                              we are IN+ studio</h1>
                          <p>Lorem Ipsum is simply dummy text of the printing.</p>
                          <p>
                              <a className="btn btn-lg btn-primary" href="#" role="button">READ MORE</a>
                              <a className="caption-link" href="#" role="button">Inspinia Theme</a>
                          </p>
                      </div>
                      <div className="carousel-image wow zoomIn">
                          <img src={Laptop} alt="laptop"/>
                      </div>
                  </div>
                  <div className="header-back one"></div>

              </div>
              <div className="item">
                  <div className="container">
                      <div className="carousel-caption blank">
                          <h1>We create meaningful <br/> interfaces that inspire.</h1>
                          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                          <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                      </div>
                  </div>
                  <div className="header-back two"></div>
              </div>
          </div>
          <a className="left carousel-control" href="#inSlider" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#inSlider" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div>
    </div>

    <section id="features" className="container services">
        <div className="row">
            <div className="col-sm-3">
                <h2>Full responsive</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
            </div>
            <div className="col-sm-3">
                <h2>LESS/SASS Files</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
            </div>
            <div className="col-sm-3">
                <h2>6 Charts Library</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
            </div>
            <div className="col-sm-3">
                <h2>Advanced Forms</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
            </div>
        </div>

    <div className="container features">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="navy-line"></div>
                <h1>Over 40+ unique view<br/> <span className="navy"> with many custom components</span> </h1>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 text-center wow fadeInLeft">
                <div>
                    <i className="fa fa-mobile features-icon"></i>
                    <h2>Full responsive</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
                <div className="m-t-lg">
                    <i className="fa fa-bar-chart features-icon"></i>
                    <h2>6 Charts Library</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
            </div>
            <div className="col-md-6 text-center  wow zoomIn">
                <img src={Perspective} alt="dashboard" className="img-responsive" />
            </div>
            <div className="col-md-3 text-center wow fadeInRight">
                <div>
                    <i className="fa fa-envelope features-icon"></i>
                    <h2>Mail pages</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
                <div className="m-t-lg">
                    <i className="fa fa-google features-icon"></i>
                    <h2>AngularJS version</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="navy-line"></div>
                <h1>Discover great feautres</h1>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
            </div>
        </div>
        <div className="row features-block">
            <div className="col-lg-6 features-text wow fadeInLeft">
                <small>INSPINIA</small>
                <h2>Perfectly designed </h2>
                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                <a href="" className="btn btn-primary">Learn more</a>
            </div>
            <div className="col-lg-6 text-right wow fadeInRight">
                <img src={Dashboard} alt="dashboard" className="img-responsive pull-right" />
            </div>
        </div>
      </div>
    </section>

    <section id="team" className="gray-section team">
        <div className="container">
            <div className="row m-b-lg">
                <div className="col-lg-12 text-center">
                    <div className="navy-line"></div>
                    <h1>Our Team</h1>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 wow fadeInLeft">
                    <div className="team-member">
                        <img src={Avatar3} className="img-responsive img-circle img-small" alt="" />
                        <h4><span className="navy">Amelia</span> Smith</h4>
                        <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus. </p>
                        <ul className="list-inline social-icon">
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member wow zoomIn">
                        <img src={Avatar1} className="img-responsive img-circle" alt="" />
                        <h4><span className="navy">John</span> Novak</h4>
                        <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                        <ul className="list-inline social-icon">
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 wow fadeInRight">
                    <div className="team-member">
                        <img src={Avatar2} className="img-responsive img-circle img-small" alt="" />
                        <h4><span className="navy">Peter</span> Johnson</h4>
                        <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                        <ul className="list-inline social-icon">
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            </li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="navy-line"></div>
                    <h1>Even more great feautres</h1>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                </div>
            </div>
            <div className="row features-block">
                <div className="col-lg-3 features-text wow fadeInLeft">
                    <small>INSPINIA</small>
                    <h2>Perfectly designed </h2>
                    <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                    <a href="" className="btn btn-primary">Learn more</a>
                </div>
                <div className="col-lg-6 text-right m-t-n-lg wow zoomIn">
                    <img src={Iphone} className="img-responsive" alt="dashboard" />
                </div>
                <div className="col-lg-3 features-text text-right wow fadeInRight">
                    <small>INSPINIA</small>
                    <h2>Perfectly designed </h2>
                    <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                    <a href="" className="btn btn-primary">Learn more</a>
                </div>
            </div>
        </div>

    </section>

    <section id="testimonials" className="navy-section testimonials">

        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center wow zoomIn">
                    <i className="fa fa-comment big-icon"></i>
                    <h1>
                        What our users say
                    </h1>
                    <div className="testimonials-text">
                        <i>"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."</i>
                    </div>
                    <small>
                        <strong>12.02.2014 - Andy Smith</strong>
                    </small>
                </div>
            </div>
        </div>

    </section>
    <section className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="navy-line"></div>
                    <h1>More and more extra great feautres</h1>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 features-text">
                    <small>INSPINIA</small>
                    <h2>Perfectly designed </h2>
                    <i className="fa fa-bar-chart big-icon pull-right"></i>
                    <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                </div>
                <div className="col-lg-5 features-text">
                    <small>INSPINIA</small>
                    <h2>Perfectly designed </h2>
                    <i className="fa fa-bolt big-icon pull-right"></i>
                    <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 features-text">
                    <small>INSPINIA</small>
                    <h2>Perfectly designed </h2>
                    <i className="fa fa-clock-o big-icon pull-right"></i>
                    <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                </div>
                <div className="col-lg-5 features-text">
                    <small>INSPINIA</small>
                    <h2>Perfectly designed </h2>
                    <i className="fa fa-users big-icon pull-right"></i>
                    <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                </div>
            </div>
        </div>

    </section>
    <section id="pricing" className="pricing">
        <div className="container">
            <div className="row m-b-lg">
                <div className="col-lg-12 text-center">
                    <div className="navy-line"></div>
                    <h1>App Pricing</h1>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 wow zoomIn">
                    <ul className="pricing-plan list-unstyled">
                        <li className="pricing-title">
                            Basic
                        </li>
                        <li className="pricing-desc">
                            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                        </li>
                        <li className="pricing-price">
                            <span>$16</span> / month
                        </li>
                        <li>
                            Dashboards
                        </li>
                        <li>
                            Projects view
                        </li>
                        <li>
                            Contacts
                        </li>
                        <li>
                            Calendar
                        </li>
                        <li>
                            AngularJs
                        </li>
                        <li>
                            <a className="btn btn-primary btn-xs" href="#">Signup</a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-4 wow zoomIn">
                    <ul className="pricing-plan list-unstyled selected">
                        <li className="pricing-title">
                            Standard
                        </li>
                        <li className="pricing-desc">
                            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                        </li>
                        <li className="pricing-price">
                            <span>$22</span> / month
                        </li>
                        <li>
                            Dashboards
                        </li>
                        <li>
                            Projects view
                        </li>
                        <li>
                            Contacts
                        </li>
                        <li>
                            Calendar
                        </li>
                        <li>
                            AngularJs
                        </li>
                        <li>
                            <strong>Support platform</strong>
                        </li>
                        <li className="plan-action">
                            <a className="btn btn-primary btn-xs" href="#">Signup</a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-4 wow zoomIn">
                    <ul className="pricing-plan list-unstyled">
                        <li className="pricing-title">
                            Premium
                        </li>
                        <li className="pricing-desc">
                            Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                        </li>
                        <li className="pricing-price">
                            <span>$160</span> / month
                        </li>
                        <li>
                            Dashboards
                        </li>
                        <li>
                            Projects view
                        </li>
                        <li>
                            Contacts
                        </li>
                        <li>
                            Calendar
                        </li>
                        <li>
                            AngularJs
                        </li>
                        <li>
                            <a className="btn btn-primary btn-xs" href="#">Signup</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row m-t-lg">
                <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg">
                    <p>*Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. <span className="navy">Various versions</span>  have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </div>

    </section>

    <section id="contact" className="gray-section contact">
        <div className="container">
            <div className="row m-b-lg">
                <div className="col-lg-12 text-center">
                    <div className="navy-line"></div>
                    <h1>Contact Us</h1>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                </div>
            </div>
            <div className="row m-b-lg">
                <div className="col-lg-3 col-lg-offset-3">
                    <address>
                        <strong><span className="navy">Company name, Inc.</span></strong><br/>
                        795 Folsom Ave, Suite 600<br/>
                        San Francisco, CA 94107<br/>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                </div>
                <div className="col-lg-4">
                    <p className="text-color">
                        Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam veritatis quis ad perspiciatis, totam corporis laboriosam veritatis, consectetur adipisicing elit quos non quis ad perspiciatis, totam corporis ea,
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <a href="mailto:test@email.com" className="btn btn-primary">Send us mail</a>
                    <p className="m-t-sm">
                        Or follow us on social platform
                    </p>
                    <ul className="list-inline social-icon">
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                    <p><strong>&copy; 2015 Company Name</strong><br/> consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </div>
        </div>
    </section>
  </>
)
}

export default IndexPage
