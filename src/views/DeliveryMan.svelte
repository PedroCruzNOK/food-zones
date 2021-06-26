<script>
  import { Link } from "svelte-routing";
</script>
<section class="portfolio " id="portfolio">
  <main>
    <div class="container">
      <div class="row">
        <h4 class="wow animated rubberBand text-center head_title" id="">
          ¿Quieres ser repartidor?
        </h4>
        <h3 class="wow animated rubberBand text-center pb-2" id="">
          ¡Contáctanos para formar parte de nuestro equipo!
        </h3>
        <div class="col-md-6 col-sm-12">
          <p class="wow animated zoomIn text-center h3 pt-5">
            Gana un mínimo de 7.280 MXN por tus primeros 200 repartos en
            Puebla*.
          </p>
        </div>
        <div class="col-md-6 col-sm-12 pt-5">
          <form action="" autocomplete="off">
            <p class="h5 animated zoomIn">
              Llena el siguiente formulario y te contactaremos lo más pronto
              posible
            </p>
            <div class="row wow zoomIn">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  placeholder="Nomnbre completo"
                />
                <label for="nombre">Nombre completo</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Correo electronico"
                />
                <label for="email">Correo electrónico</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class="form-control"
                  id="tel"
                  placeholder="Teléfono"
                />
                <label for="tel">Teléfono</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="direccion"
                  placeholder="Ciudad en dónde te encuentras"
                />
                <label for="direccion">Ciudad en dónde te encuentras</label>
              </div>

              <div class=" mb-3">
                <label for="formFileLg" class="form-label">Adjunta tu CV</label>
                <input
                  class="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>

              <p>
                Al continuar, acepto las <a href="/">condiciones de uso</a> de
                Food Zone y reconozco haber leído su
                <a href="·">política de privacidad</a> .
              </p>
              <p>
                También acepto que Food Zone o sus representantes puedan
                contactar conmigo por email, teléfono o SMS (así como a través
                de medios automatizados) a través del email o del teléfono que
                he indicado, incluso con fines promocionales.
              </p>

              <div class="col-auto">
                <button type="button" class="btn btn-primary"
                  >Enviar Registro</button
                >
                <Link
                  to="colaboradores"
                  class="btn btn-secondary me-md-2"
                  type="button">Regresar</Link
                >
              </div>
            </div>
          </form>
        </div>
        <img src="./assets/images/Fz-1.png" alt="" class="hero-bottom-img" />
      </div>

      <div class="row">
        <h4 class="wow animated rubberBand text-center head_title" id="">
          Ingresos útiles para ti
        </h4>

        <div class="col-sm-12 col-md-4">
          <h3 class="text-center mb-3">Cobra rápidamente</h3>
          <p>
            Recibirás tus ingresos automáticamente cada semana. Los conductores
            de mercados con pago instantáneo pueden retirar dinero hasta 5 veces
            al día.
          </p>
        </div>
        <div class="col-sm-12 col-md-4">
          <h3 class="text-center mb-3">Elige tu horario y gana dinero</h3>
          <p>
            Sin jefes y sin tener que ir a la oficina. Podrás empezar y terminar
            cuando te interese.
          </p>
        </div>
        <div class="col-sm-12 col-md-4">
          <h3 class="text-center mb-3">Planifica tu jornada con facilidad</h3>
          <p>
            Conoce las tendencias por hora, establece tus preferencias y
            consulta las promociones: todo desde el mismo lugar.
          </p>
        </div>
      </div>
    </div>
  </main>
</section>
<style>
  .hero-bottom-img {
    max-width: 100%;
    width: 100%;
  }
  .portfolio{
    margin-left: -14px;
    margin-right: -13px;
  }
</style>
