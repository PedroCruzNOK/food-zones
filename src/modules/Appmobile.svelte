<script>
  import { Router, Link, Route } from "svelte-routing";
</script>
<section id="mobaileapps" class="mobailapps px-0">
    <div class="slider_overlay ">
      <div class="container">
        <div class="row">
          <div class="main_mobail_apps_content wow zoomIn ">
            <div class="col-md-5 col-sm-12 text-center in ">
              <img src="./img/FZ3.png" alt="" />
            </div>
            <div class="col-md-6 col-sm-12 in">
              <div class="single_monail_apps_text">
                <h4>Descarga nuestra app ahora!</h4>
                <h1>
                  Mobile App <span>Disponible en la PlayStore</span>
                </h1>
  
                <Link to="/"><img src="assets/images/google.png" alt="" /></Link>
                <Link to ="/"><img src="assets/images/apps.png" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <style>
    .in{
      display: inline-block;
    }
  </style>