import React from "react";
import {useTranslation} from 'react-i18next'

function Home() {
  const {t} = useTranslation()
  return( 
  <div>
    <section id="hero-banner">
      <div className="banner-inner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1> {t("home-start-h")} <b></b></h1>
              <p>
              {t("home-start-p")}
              </p>
              <a className="btn btn-primary btn-lg" href="#">{t("home-start-btn")}</a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">{t("home-services-h")}</h2>
          <p className="wow fadeInDown">
          {t("home-services-p")}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="features">
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">
            <div className="media service-box">
              
                <i className="fa fa-futbol-o"></i>

              <div className="media-body">
                <h4 className="media-heading">{t("service-1-h")}</h4>
                <p>
                {t("service-1-p")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
            <div className="media service-box">
              
                <i className="fa fa-compass"></i>

              <div className="media-body">
                <h4 className="media-heading">{t("service-2-h")}</h4>
                <p>
                {t("service-2-p")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms">
            <div className="media service-box">
              
                <i className="fa fa-database"></i>

              <div className="media-body">
                <h4 className="media-heading">{t("service-3-h")}</h4>
                <p>
                {t("service-3-p")}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
              <div className="media service-box">
                
                  <i className="fa fa-bar-chart"></i>
  
                <div className="media-body">
                  <h4 className="media-heading">{t("service-4-h")}</h4>
                  <p>
                  {t("service-4-h")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
              <div className="media service-box">
                
                  <i className="fa fa-paper-plane-o"></i>
  
                <div className="media-body">
                  <h4 className="media-heading">{t("service-5-h")}</h4>
                  <p>
                  {t("service-5-p")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="500ms">
              <div className="media service-box">
                
                  <i className="fa fa-bullseye"></i>
  
                <div className="media-body">
                  <h4 className="media-heading">{t("service-6-h")}</h4>
                  <p>
                  {t("service-6-p")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">{t("home-about-h")}</h2>
          <p className="wow fadeInDown">
          {t("home-about-p")}
          </p>
        </div>

        <div className="row">
          <div className="col-sm-6 wow fadeInLeft">
            <img className="img-responsive" src="/dist/images/about.png" alt="" />
          </div>

          <div className="col-sm-6 wow fadeInRight">
            <h3 className="column-title">{t("home-spa-h")}</h3>
            <p>
            {t("home-spa-p-1")}
            </p>
            <p>
            {t("home-spa-p-2")}
            </p>
            <ul className="listarrow">
              <li><i className="fa fa-angle-double-right"></i>{t("service-1-h")}</li>
              <li><i className="fa fa-angle-double-right"></i>{t("service-2-h")}</li>
              <li><i className="fa fa-angle-double-right"></i>{t("service-3-h")}</li>
              <li><i className="fa fa-angle-double-right"></i>{t("service-4-h")}</li>
              <li><i className="fa fa-angle-double-right"></i>{t("service-5-h")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="our-team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">{t("home-team-h")}</h2>
          <p className="wow fadeInDown">
          {t("home-team-p")}
          </p>
        </div>

        <div className="row text-center">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
              <div className="team-img">
                <img className="img-responsive" src="/dist/images/team/01.jpg" alt="" />
              </div>
              <div className="team-info">
                <h3>{t("home-team-1-h")}</h3>
                <span>{t("home-team-1-span")}</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">
              <div className="team-img">
                <img className="img-responsive" src="/dist/images/team/02.jpg" alt="" />
              </div>
              <div className="team-info">
                <h3>{t("home-team-2-h")}</h3>
                <span>{t("home-team-2-span")}</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>

    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">{t("home-gallery-h")}</h2>
          <p className="wow fadeInDown">
          {t("home-gallery-p")}
          </p>
        </div>

        <div className="text-center">
          <ul className="portfolio-filter" style={{display: "none"}}>
            <li><a className="active" href="#" data-filter="*">All Works</a></li>
            <li><a href="#" data-filter=".designing">Aroma</a></li>
            <li><a href="#" data-filter=".mobile">Manicure</a></li>
            <li><a href="#" data-filter=".development">Body Spa</a></li>
          </ul>
        </div>

        <div className="portfolio-items">
          <div className="portfolio-item designing">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/01.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="/dist/images/portfolio/01.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>

          <div className="portfolio-item mobile development">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/02.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="/dist/images/portfolio/02.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>

          <div className="portfolio-item designing">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/03.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="/dist/images/portfolio/03.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>

          <div className="portfolio-item mobile">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/04.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="/dist/images/portfolio/04.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>

          <div className="portfolio-item designing development">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/05.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="/dist/images/portfolio/05.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>

          <div className="portfolio-item mobile">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/06.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="/dist/images/portfolio/06.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>

          <div className="portfolio-item designing development">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/07.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="images/portfolio/07.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>

          <div className="portfolio-item mobile">
            <div className="portfolio-item-inner">
              <img className="img-responsive" src="/dist/images/portfolio/08.jpg" alt="" />
              <div className="portfolio-info">
                <a className="preview" href="images/portfolio/08.jpg" rel="prettyPhoto"><i className="fa fa-eye"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

    <section className="testimonial-area" id="testimonial">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">{t("home-testi-h")}</h2>
          <p className="wow fadeInDown">
          {t("home-testi-p")}
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: '0px'}}>
              <div className="row">
                <div className="col-xs-12">
                  <blockquote>
                  {t("testimonial-1-bq")}
                  </blockquote>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3">
                  <img src="/dist/images/pic1.jpg" alt="client" />
                </div>
                <div className="col-xs-9 half-gutter">
                  <h5>{t("person-1")}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: '0px'}}>
              <div className="row">
                <div className="col-xs-12">
                  <blockquote>
                  {t("testimonial-2-bq")}
                  </blockquote>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3">
                  <img src="/dist/images/pic2.jpg" alt="client" />
                </div>
                <div className="col-xs-9 half-gutter">
                  <h5>{t("person-2")}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: '0px'}}>
              <div className="row">
                <div className="col-xs-12">
                  <blockquote>
                  {t("testimonial-3-bq")}
                  </blockquote>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3">
                  <img src="/dist/images/pic1.jpg" alt="client" />
                </div>
                <div className="col-xs-9 half-gutter">
                  <h5>{t("person-3")}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">{t("home-contact-h")}</h2>
          <p className="wow fadeInDown">
          {t("home-contact-p")}
          </p>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <div className="container contact-info">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="contact-form">
                <h3>{t("home-contact-info")}</h3>

                <address>
                  <strong>Aroma Spa, Inc.</strong><br />
                  12345 NewYork, Street 125<br />
                  United States 94107<br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="contact-form">
                <form id="main-contact-form" name="contact-form" method="post" action="#">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" className="form-control" rows="8" placeholder="Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">{t("home-contact-btn")}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  </div>)

}

export default Home;
