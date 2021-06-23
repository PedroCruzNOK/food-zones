<script>
  import { Router, Link, Route } from "svelte-routing";
</script>

<div class="main_menu_bg ">

    <div class="row main-menu">
      <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
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
            <img src="./img/Logo foodzone.png" alt="" class="imagen-logo">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav px-0 ">
                <li class="nav-item">
                  <Link to="food-zone/" class="nav-link active activo">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="colaboradores" class="nav-link active activo"
                    >Colaboradores</Link
                  >
                </li>
                <li class="nav-item">
                  <Link to="nosotros" class="nav-link active activo">Nosotros</Link>
                </li>
                <li class="nav-item">
                  <Link to="pedir" class="nav-link active activo">Pedido</Link>
                </li>
                <li class="nav-item">
                  <Link to="noticias" class="nav-link active activo">Noticias</Link>
                </li>
                <li class="nav-item">
                  <Link to="preguntas-frecuentes" class="nav-link active activo"
                    >Preguntas
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="terminos-condiciones" class="nav-link active activo"
                    >Terminos</Link
                  >
                </li>
                <li class="nav-item">
                  <Link to="contacto" class="nav-link active activo">Contacto</Link>
                </li>
                <li class="nav-item">
                  <Link to="food-zone/" class="nav-link active activo"><i class="fa fa-phone " /> 775 96 8540</Link>
                </li>
              </ul>
            </div>
          </div>
        
      </nav>
    </div>
</div>

<style>
  .main-menu{
    margin-left: 10%;
    margin-right: 10%;;
  }
 .imagen-logo{
  position: absolute;
  width: 10%;
  height: auto;
  z-index: 100000000;
  margin-top: 6%;
 }
 .navbar-nav{
   margin-left: 30%;
 }
 .navbar-nav:hover{
   color: black;
 }
 .navbar-toggler{
   margin-left: 20%;
   color: white;
 }
  .main_menu_bg {
    background-color: rgba(black, black, black, 0.5);
  }
  .navbar-toggler-icon{
    color:white;
    z-index: 11111111111110000000000000;
  }


</style>
