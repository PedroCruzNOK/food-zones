<script>
    import { Router, Link, Route } from "svelte-routing";
  </script>

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
                <li><Link to="/colaboradores">Colaboradores</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                <li><Link to="/terminos-condiciones">Terminos y condiciones</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
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
  .listado {
    display: inline-block;
  }
</style>
