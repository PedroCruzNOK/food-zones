<script>
    import { Router, Link, Route } from "svelte-routing";
  </script>

<div class="main_menu_bg">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
              
              <Link to="/" class="navbar-brand our_logo" href="#"><img
                  src="./img/Logo foodzone.png"
                  alt=""
                  class="tam-img" />
              </Link>
            </div>
            <nav class="navbar navbar-expand-lg colorLetras">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="bi bi-justify colorLetras"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul class="navbar-nav me-auto mb-2 mr-2 mb-lg-2 position-absolute top-0 end-0">
                    <li class="nav-item">
                      <Link to="/" class="nav-link active">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/colaboradores" class="nav-link active">Colaboradores</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/nosotros" class="nav-link active">Nosotros</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/pedir" class="nav-link active">Pedido</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/noticias" class="nav-link active">Noticias</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/preguntas-frecuentes" class="nav-link active">Preguntas </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/terminos-condiciones" class="nav-link active">Terminos</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contacto" class="nav-link active">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <style>

  .tam-img {
    width: 40%;
    height: auto;
  }
  .colorLetras{
    color: white;
  }
  .main_menu_bg{
    background-color: rgba(black, black, black, 0.5);
  }
  
</style>
