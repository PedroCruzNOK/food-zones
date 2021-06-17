<script>
    	import {Router, Link, Route} from "svelte-routing";
</script>

<div class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link to ="/" class="navbar-brand" >Food Zone</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to ="/" class="nav-link active" aria-current="page" >Inicio</Link>
                </li>
                <li class="nav-item">
                    <Link to ="/colaboradores" class="nav-link active" aria-current="page" >Colaboradores</Link>
                </li>
                <li class="nav-item">
                    <Link to ="/nosotros" class="nav-link active" aria-current="page" >Nosotros</Link>
                </li>
                <li class="nav-item">
                    <Link to ="/preguntas-frecuentes" class="nav-link active" aria-current="page" >Preguntas Frecuentes</Link>
                </li>
                <li class="nav-item">
                    <Link to ="/terminos-condiciones" class="nav-link active" aria-current="page" >Terminos y condiciones</Link>
                </li>
                <li class="nav-item">
                    <Link to ="/contacto" class="nav-link active" aria-current="page" >Contacto</Link>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
</div>

<style>

</style>