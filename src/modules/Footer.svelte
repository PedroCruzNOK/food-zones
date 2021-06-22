
<script>
    import { Router, Link, Route } from "svelte-routing";
</script>
<section id="footer_widget" class="footer_widget">
    <div class="container-fluid">
      <div class="row">
        <div class="footer_widget_content text-center">
          <div class="col-md-3 in">
            <div class="single_widget wow fadeIn" data-wow-duration="2s">
              <h4>Ubicacion</h4>
  
              <div class="single_widget_info">
                <p>
                  Acercate y te asesoramos
                  
  
                  <span>Te elit putent propriae eum,</span>
                  <span>aliquip nominati</span>
                  <span class="phone_email"> Teléfono: (222) 620 0600</span>
                  <span>Corre: @foodzone.com</span>
                </p>
              </div>
  
              <div class="footer_socail_icon">
                <a href=""><i class="fa fa-facebook" /></a>
                <a href=""><i class="fa fa-twitter" /></a>
                <a href=""><i class="fa fa-phone" /></a>
               
              </div>
            </div>
          </div>
  
          <div class="col-md-3 in">
            <div class="single_widget wow fadeIn" data-wow-duration="4s">
              <h4>Mas sobre nosotros</h4>
              <br><br>
              <div class="">
                <ul class="">
                  <li class="">
                    <Link to="/" class=" activo">Home</Link>
                  </li>
                  <li class="">
                    <Link to="/colaboradores" class=" activo"
                      >Colaboradores</Link
                    >
                  </li>
                  <li class="">
                    <Link to="/nosotros" class="activo">Nosotros</Link>
                  </li>

                  <li class="">
                    <Link to="/pedir" class=" activo">Pedido</Link>
                  </li>
                  <br>
                  <li class="">
                    <Link to="/noticias" class=" activo">Noticias</Link>
                  </li>
                  <li class="">
                    <Link to="/preguntas-frecuentes" class=" activo"
                      >Preguntas
                    </Link>
                  </li>
                  <li class="">
                    <Link to="/terminos-condiciones" class=" activo"
                      >Terminos</Link
                    >
                  </li>
                  <li class="nav-item">
                    <Link to="/contacto" class="activo">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <div class="scrollup">
    <Link to="/terminos-condiciones"><i class="bi bi-info-lg"></i></Link>
  </div>

  <style>
    .in{
      display: inline-block;
    }

  </style>