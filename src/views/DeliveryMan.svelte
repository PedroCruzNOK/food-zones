<script>
	import { Link } from 'svelte-routing';
</script>

<div class="row ">
  <main>
    <div class="position-relative overflow-hidden  bg-light pb-5">
      <div class="col-md-12">
        <div class="row justify-content-center">
          <div class="col-8">
            <h4
              class="display-3 fw-normal wow animated rubberBand"
              data-animation="flash"
            >
              ¿Quieres ser Repartidor?
            </h4>
            <p>
              Llena el siguiente formulario y te contactaremos lo más pronto
              posible
            </p>
            <form action="" autocomplete="off">
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
                  <label for="email">Correo electronico</label>
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
                  <label for="formFileLg" class="form-label"
                    >Adjunta tu CV</label
                  >
                  <input
                    class="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                  />
                </div>

                <div class="col-auto">
                  <button type="button" class="btn btn-primary"
                    >Enviar Registro</button
                  >
                  <Link to="/colaboradores" class="btn btn-secondary me-md-2" type="button">Regresar</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
</style>
