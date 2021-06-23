
<script>
    import { Router, Link, Route } from "svelte-routing";
</script>

<section id="footer_widget" class="footer_widget px-0">
    <div class="container">
      <div class="row ">
        <div class="ms-3">
          <div class="col-md-6 in px-0">
            <div class="single_widget wow fadeIn" data-wow-duration="2s">
              <h4>Contacto</h4>
  
              <div class="single_widget_info">
                <p>
                  <i class="bi bi-house"></i>  La Paz, Puebla, México, 72160. 
                  <a href="tel:222 620 0600"><span ><i class="bi bi-telephone"></i>  Teléfono: (222) 620 0600</span></a>
                  <span><i class="bi bi-envelope"></i>  Email: contacto@foodzone.com</span>
                </p>
              </div>
  
              <div class="footer_socail_icon">
                <a href="google.com"><img src="./img/facebook.png" alt="" class="redIcon"></a>
                <a href="google.com"><img src="./img/instagram.png" alt="" class="redIcon"></a>
                <a href="google.com"><img src="./img/gorjeo.png" alt="" class="redIcon"></a>
                <a href="google.com"><img src="./img/linkedin.png" alt="" class="redIcon"></a>
                
               
              </div>
            </div>
          </div>
  
          <div class="col-md-5 in">
            <div class="single_widget wow fadeIn" data-wow-duration="4s">
              <h4>Categorías</h4>
              
              <div class="">
                <ul class="">
                  <li class="">
                    <Link to="/" class=" activo">Home</Link>
                  </li>
                  <li class="">
                    <Link to="colaboradores" class=" activo"
                      >Colaboradores</Link
                    >
                  </li>
                  <li class="">
                    <Link to="nosotros" class="activo">Nosotros</Link>
                  </li>

                  <li class="">
                    <Link to="pedir" class=" activo">Pedido</Link>
                  </li>
                 
                  <li class="">
                    <Link to="noticias" class=" activo">Noticias</Link>
                  </li>
                  <li class="">
                    <Link to="preguntas-frecuentes" class=" activo"
                      >Preguntas
                    </Link>
                  </li>
                  <li class="">
                    <Link to="terminos-condiciones" class=" activo"
                      >Terminos</Link
                    >
                  </li>
                  <li class="nav-item">
                    <Link to="contacto" class="activo">Contacto</Link>
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
    .single_widget_info{
      color: white;
    }
    a{
      color:white;
    }
    .redIcon{
      width: 35px;
      height: auto;
      margin-right: 10px;
      
    }
    .footer_widget{
      margin-left: -14px;
      margin-right: -13px;
    }

  </style>