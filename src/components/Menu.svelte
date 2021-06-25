<script>
  import {Router, Link, Route} from "svelte-routing";

  const collapseMenu = () => {
    if (window.innerWidth < 992) {
      document
        .querySelector("#navbarTogglerDemo01")
        .classList.replace("collapse", "collapsing");
      document.querySelector("#navbarTogglerDemo01").classList.remove("show");
      document.querySelector("#navbarTogglerDemo01").classList.add("collapse");
    }
  };
</script>

<div class="main_menu_bg ">
  <div class="row main-menu">
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <img src="./img/Logo foodzone.png" alt="" class="imagen-logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
        </div>

        <div class="col-sm-12 col-md-10">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav px-0 ">
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="/" class="nav-link active activo">Home</Link>
              </li>
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="colaboradores" class="nav-link active activo"
                  >Colaboradores</Link
                >
              </li>
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="nosotros" class="nav-link active activo"
                  >Nosotros</Link
                >
              </li>
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="pedir" class="nav-link active activo">Pedido</Link>
              </li>
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="noticias" class="nav-link active activo"
                  >Noticias</Link
                >
              </li>
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="preguntas-frecuentes" class="nav-link active activo"
                  >Preguntas
                </Link>
              </li>
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="terminos-condiciones" class="nav-link active activo"
                  >Términos</Link
                >
              </li>
              <li class="nav-item" on:click={collapseMenu}>
                <Link to="contacto" class="nav-link active activo"
                  >Contacto</Link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

<style>
  .main-menu {
    margin-left: 10%;
    margin-right: 10%;
  }
  .imagen-logo {
    width: 30%;
    height: auto;
    z-index: 100000000111111;
  }
  .navbar-nav {
    margin-left: 30%;
  }
  .navbar-nav:hover {
    color: black;
  }
  .navbar-toggler {
    margin-left: 20%;
    color: white;
  }
  .main_menu_bg {
    background-color: rgba(black, black, black, 0.5);
  }
  .navbar-toggler-icon {
    color: white;
    z-index: 11111111111110000000000000;
  }
  @media only screen and (min-width: 320px) and (max-width: 991px) {
    .imagen-logo {
      width: 10%;
      margin-top: 0%;
    }
  }
</style>
