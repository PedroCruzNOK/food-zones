<script>
  import { Router, Link, Route } from "svelte-routing";
</script>

<div class="preloader"><div class="loaded">&nbsp;</div></div>
<header id="home" class="navbar-fixed-top">
  <div class="header_top_menu clearfix">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-md-offset-3 col-sm-12 text-right">
          <div class="call_us_text">
            <Link to="/"><i class="fa fa-phone" />(222) 620 0600</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="main_menu_bg">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>

              <Link to="/" class="navbar-brand our_logo" href="#"
                ><img
                  src="./img/Logo foodzone.png"
                  alt=""
                  class="tam-img"
                /></Link
              >
            </div>
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right listado">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Colaboradores</Link></li>
                <li><Link to="/">Nosotros</Link></li>
                <li><Link to="/">Preguntas frecuentes</Link></li>
                <li><Link to="/">Terminos y condiciones</Link></li>
                <li><Link to="/">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</header>

<section id="slider" class="slider">
  <div class="slider_overlay">
    <div class="container">
      <div class="row">
        <div class="main_slider text-center">
          <div class="col-md-12">
            <div class="main_slider_content wow zoomIn" data-wow-duration="1s">
              <h1>Food Zone</h1>
              <p>
                FOOD ZONE, es un software con acceso vía Web, y APP’s de iOS y Android para facilitar la interacción entre usuarios y los establecimientos de la Industria de Alimentos y Bebidas, la Industria de la Hospitalidad, y la Industria del Entretenimiento. 
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="abouts" class="abouts">
  <div class="container">
    <div class="row">
      <div class="abouts_content">
        <div class="col-md-6">
          <div
            class="single_abouts_text text-center wow slideInLeft"
            data-wow-duration="1s"
          >
            <img src="assets/images/ab.png" alt="" />
          </div>
        </div>

        <div class="col-md-6">
          <div
            class="single_abouts_text wow slideInRight"
            data-wow-duration="1s"
          >
            <h4>About us</h4>
            <h3>WE ARE TASTY</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's stan
            </p>

            <p>
              dard dummy text ever since the 1500s,when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesettingdard dummy text ever since the 1500s,when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting
            </p>

            <a class="btn btn-primary">click here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="features" class="features">
  <div class="slider_overlay">
    <div class="container">
      <div class="row">
        <div
          class="main_features_content_area  wow fadeIn"
          data-wow-duration="3s"
        >
          <div class="col-md-12">
            <div class="main_features_content text-left">
              <div class="col-md-6">
                <div class="single_features_text">
                  <h4>Special Recipes</h4>
                  <h3>Taste of Precious</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    stan
                  </p>
                  <p>
                    dard dummy text ever since the 1500s,when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesettingdard dummy text
                    ever since the 1500s,when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting
                  </p>

                  <a href="" class="btn btn-primary">click here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="portfolio" class="portfolio">
  <div class="container">
    <div class="row">
      <div
        class="portfolio_content text-center  wow fadeIn"
        data-wow-duration="5s"
      >
        <div class="col-md-12">
          <div class="head_title text-center">
            <h4>Delightful</h4>
            <h3>Experience</h3>
          </div>

          <div class="main_portfolio_content">
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p1.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p2.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p3.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p4.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p5.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p6.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p7.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
              <img src="assets/images/p8.png" alt="" />
              <div class="portfolio_images_overlay text-center">
                <h6>Italian Source Mushroom</h6>
                <p class="product_price">$12</p>
                <a href="" class="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="ourPakeg" class="ourPakeg">
  <div class="container">
    <div class="main_pakeg_content">
      <div class="row">
        <div class="head_title text-center">
          <h4>Amazing</h4>
          <h3>Delicious</h3>
        </div>

        <div class="single_pakeg_one text-right wow rotateInDownRight">
          <div class="col-md-6 col-md-offset-6 col-sm-8 col-sm-offset-4">
            <div class="single_pakeg_text">
              <div class="pakeg_title">
                <h4>Drinks</h4>
              </div>

              <ul>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="single_pakeg_two text-left wow rotateInDownLeft">
          <div class="col-md-6 col-sm-8">
            <div class="single_pakeg_text">
              <div class="pakeg_title">
                <h4>Main course</h4>
              </div>

              <ul>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="single_pakeg_three text-left wow rotateInDownRight">
          <div class="col-md-6 col-md-offset-6 col-sm-8 col-sm-offset-4">
            <div class="single_pakeg_text">
              <div class="pakeg_title">
                <h4>Desserts</h4>
              </div>

              <ul>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
                <li>
                  Tuna Roast
                  Source........................................................$24.5
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="mobaileapps" class="mobailapps">
  <div class="slider_overlay">
    <div class="container">
      <div class="row">
        <div class="main_mobail_apps_content wow zoomIn">
          <div class="col-md-5 col-sm-12 text-center">
            <img src="./img/FZ3.png" alt="" />
          </div>
          <div class="col-md-7 col-sm-12">
            <div class="single_monail_apps_text">
              <h4>Happy to Announce</h4>
              <h1>
                Mobile App <span>is Available in every OS platform.</span>
              </h1>

              <a href=""><img src="assets/images/google.png" alt="" /></a>
              <a href=""><img src="assets/images/apps.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="footer_widget" class="footer_widget">
  <div class="container">
    <div class="row">
      <div class="footer_widget_content text-center">
        <div class="col-md-4">
          <div class="single_widget wow fadeIn" data-wow-duration="2s">
            <h3>Take it easy with location</h3>

            <div class="single_widget_info">
              <p>
                112-Legere ancillae vix ne.

                <span>Te elit putent propriae eum,</span>
                <span>aliquip nominati</span>
                <span class="phone_email">phone: 00 000 000</span>
                <span>Email: support@templatemela.com</span>
              </p>
            </div>

            <div class="footer_socail_icon">
              <a href=""><i class="fa fa-facebook" /></a>
              <a href=""><i class="fa fa-google-plus" /></a>
              <a href=""><i class="fa fa-twitter" /></a>
              <a href=""><i class="fa fa-linkedin" /></a>
              <a href=""><i class="fa fa-pinterest-p" /></a>
              <a href=""><i class="fa fa-youtube" /></a>
              <a href=""><i class="fa fa-phone" /></a>
              <a href=""><i class="fa fa-camera" /></a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="single_widget wow fadeIn" data-wow-duration="4s">
            <h3>Take it easy with location</h3>

            <div class="single_widget_info">
              <p>
                <span class="date_day">Monday To Friday</span>
                <span>8:00am to 10:00pm(Breakfast)</span>
                <span>11:00am to 10:00pm(Lunch/Diner)</span>

                <span class="date_day">Saturday & Sunday</span>
                <span>10:00am to 11:00pm(Brunch)</span>
                <span>11:00am to 12:00pm(Lunch/Dinner)</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="single_widget wow fadeIn" data-wow-duration="5s">
            <h3>Take it easy with location</h3>

            <div class="single_widget_form text-left">
              <form action="#" id="formid">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="first name"
                    required=""
                  />
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <!-- end of form-group -->

                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="3"
                    placeholder="Message"
                  />
                </div>

                <input
                  type="submit"
                  value="click here"
                  class="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--Footer-->

<div class="scrollup">
  <a href="#"><i class="fa fa-chevron-up" /></a>
</div>

<style>
  .tam-img {
    width: 40%;
    height: auto;
  }
  .listado {
    display: inline-block;
  }
</style>
