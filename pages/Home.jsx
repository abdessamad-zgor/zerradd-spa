import React from "react";

function Home() {
  return( 
  <div>
    <section id="hero-banner">
      <div className="banner-inner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>More Beautiful than <b>EVER</b></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisici <br />
                Praesent eget risus.
              </p>
              <a className="btn btn-primary btn-lg" href="#">Packages</a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">Whats Best For You</h2>
          <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br />
            semper aliquam quis mattis quam.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="features">
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">
            <div className="media service-box">
              
                <i className="fa fa-futbol-o"></i>

              <div className="media-body">
                <h4 className="media-heading">Aroma Therapy</h4>
                <p>
                  Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters
                  greater
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
            <div className="media service-box">
              
                <i className="fa fa-compass"></i>

              <div className="media-body">
                <h4 className="media-heading">Face Massage</h4>
                <p>
                  Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters
                  greater
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms">
            <div className="media service-box">
              
                <i className="fa fa-database"></i>

              <div className="media-body">
                <h4 className="media-heading">Manicure</h4>
                <p>
                  Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend
                  ipsum.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
              <div className="media service-box">
                
                  <i className="fa fa-bar-chart"></i>
  
                <div className="media-body">
                  <h4 className="media-heading">Body Spa</h4>
                  <p>
                    Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend
                    ipsum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
              <div className="media service-box">
                
                  <i className="fa fa-paper-plane-o"></i>
  
                <div className="media-body">
                  <h4 className="media-heading">Head Massage</h4>
                  <p>
                    Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend
                    ipsum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="500ms">
              <div className="media service-box">
                
                  <i className="fa fa-bullseye"></i>
  
                <div className="media-body">
                  <h4 className="media-heading">Hair Spa</h4>
                  <p>
                    Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend
                    ipsum.
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
          <h2 className="section-title wow fadeInDown">Who we are</h2>
          <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br />
            semper aliquam quis mattis quam.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-6 wow fadeInLeft">
            <img className="img-responsive" src="/dist/images/about.png" alt="" />
          </div>

          <div className="col-sm-6 wow fadeInRight">
            <h3 className="column-title">Our Beauty Studio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam
              quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa,
              eu eleifend ipsum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam
              quis mattis quam adipiscing elit. Praesent eget risus vitae massa.
            </p>
            <ul className="listarrow">
              <li><i className="fa fa-angle-double-right"></i>Aroma Therapy</li>
              <li><i className="fa fa-angle-double-right"></i>Manicure</li>
              <li><i className="fa fa-angle-double-right"></i>Massage</li>
              <li><i className="fa fa-angle-double-right"></i>Body Spa</li>
              <li><i className="fa fa-angle-double-right"></i>Hair Spa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="our-team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">OUR TEAM</h2>
          <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br />
            semper aliquam quis mattis quam.
          </p>
        </div>

        <div className="row text-center">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
              <div className="team-img">
                <img className="img-responsive" src="/dist/images/team/01.jpg" alt="" />
              </div>
              <div className="team-info">
                <h3>Micky Deo</h3>
                <span>Founder</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
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
                <h3>Mike Timobbs</h3>
                <span>Sr. Dresser</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">
              <div className="team-img">
                <img className="img-responsive" src="/dist/images/team/03.jpg" alt="" />
              </div>
              <div className="team-info">
                <h3>Remo Silvaus</h3>
                <span>Sr. Therapist</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">
              <div className="team-img">
                <img className="img-responsive" src="/dist/images/team/04.jpg" alt="" />
              </div>
              <div className="team-info">
                <h3>Niscal Deon</h3>
                <span>Massager</span>
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
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
          <h2 className="section-title wow fadeInDown">Gallery</h2>
          <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br />
            semper aliquam quis mattis quam.
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

    <section id="business-stats">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">Healty Report</h2>
          <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br />
            semper aliquam quis mattis quam.
          </p>
        </div>

        <div className="row text-center">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
              <div className="business-stats" data-digit="6850" data-duration="1000"></div>
              <strong>Clients</strong>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">
              <div className="business-stats" data-digit="1465" data-duration="1000"></div>
              <strong>Trainer</strong>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">
              <div className="business-stats" data-digit="4325" data-duration="1000"></div>
              <strong>Programs</strong>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">
              <div className="business-stats" data-digit="2568" data-duration="1000"></div>
              <strong>Successes</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonial-area" id="testimonial">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">Testimonial</h2>
          <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br />
            semper aliquam quis mattis quam.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: '0px'}}>
              <div className="row">
                <div className="col-xs-12">
                  <blockquote>
                    Sontrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classNameical
                    Layears old. belief, Lorem Ipsuis not simply
                  </blockquote>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3">
                  <img src="/dist/images/pic1.jpg" alt="client" />
                </div>
                <div className="col-xs-9 half-gutter">
                  <h5>John Bond</h5>
                  <h6>Lorem Ipsuis simply</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: '0px'}}>
              <div className="row">
                <div className="col-xs-12">
                  <blockquote>
                    Tontrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classNameical
                    Layears old. belief, Lorem Ipsuis not simply
                  </blockquote>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3">
                  <img src="/dist/images/pic2.jpg" alt="client" />
                </div>
                <div className="col-xs-9 half-gutter">
                  <h5>John Bond</h5>
                  <h6>Lorem Ipsuis simply</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: '0px'}}>
              <div className="row">
                <div className="col-xs-12">
                  <blockquote>
                    Aontrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classNameical
                    Layears old. belief, Lorem Ipsuis not simply
                  </blockquote>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3">
                  <img src="/dist/images/pic1.jpg" alt="client" />
                </div>
                <div className="col-xs-9 half-gutter">
                  <h5>John Bond</h5>
                  <h6>Lorem Ipsuis simply</h6>
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
          <h2 className="section-title wow fadeInDown">Contact Us</h2>
          <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br />
            semper aliquam quis mattis quam.
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
                <h3>Contact Info</h3>

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
                  <button type="submit" className="btn btn-primary">Send Message</button>
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
