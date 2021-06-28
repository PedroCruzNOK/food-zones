<script>
    import {Router, Link, Route} from "svelte-routing";   
</script>

<nav class="navbar navbar-expand-lg navbar-dark mt-0 sticky-top bgf">
    <div class="container-fluid m-0">
        <img src="./img/Logo foodzone.png" alt="" class="imagen-logo2" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
                <Link to="/" class="nav-link active activo">Home</Link>
                <Link to="colaboradores" class="nav-link active activo"
                    >Colaboradores</Link
                >
                <Link to="nosotros" class="nav-link active activo"
                    >Nosotros</Link
                >
                <Link to="noticias" class="nav-link active activo"
                    >Noticias</Link
                >
                <Link to="pedir" class="nav-link active activo">Pedido</Link>
                <Link to="preguntas-frecuentes" class="nav-link active activo"
                >Preguntas
                </Link>
                <Link to="terminos-condiciones" class="nav-link active activo"
                    >Términos</Link
                >
                <Link to="contacto" class="nav-link active activo">Contacto</Link>
            </div>
        </div>
    </div>
</nav>
    <style>
        .imagen-logo2{
            width: 3em;
            height: auto; 
        }
    .bgf{
        background-color: #e03c36;
       
    }
</style>