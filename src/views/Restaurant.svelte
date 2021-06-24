<script>
  import {Link} from "svelte-routing";
</script>

<section id="slider" class="slider-restaurant">
  <div class="slider_overlay">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-12 col-md-5 wow zoomIn">
          <h1 class="head_title font-weight-bold">
            Un mundo de clientes a tu alcance
          </h1>
          <p class="text-light">
            La plataforma que te brinda la flexibilidad, visibilidad y
            conocimientos que necesitas para conectarte con más clientes.
            Asóciate con nosotros hoy mismo.
          </p>
        </div>
        <div class="col-sm-12 col-md-7">
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
                  placeholder="Direcciòn de tu negocio"
                />
                <label for="direccion">Dirección de tu negocio</label>
              </div>

              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="info"
                  style="height: 100px"
                  rows="10"
                />
                <label for="info">Cuéntanos sobre tu negocio</label>
              </div>
              <p class="text-light">
                Al enviar tu información, aceptas que Food Zone y declaras haber
                leído los <a href="/" class="text-white font-weight-bold"
                  >Términos y condiciones</a
                >
                y la
                <a href="/" class="text-white font-weight-bold"
                  >Política de privacidad</a
                >.
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
      </div>
    </div>
  </div>
</section>
<section class="portfolio">
  <div class="container">
    <div class="row">
      <h4 class="wow animated rubberBand text-center head_title">
        ¿Por qué elegir Food Zone?
      </h4>
      <div class="col-md-sm-12 col-md-4">
        <h3>Realiza entregas a tu manera</h3>
        <p>
          Nuestras ofertas son flexibles para que puedas personalizarlas según
          tus necesidades. Comienza con tus repartidores o con los socios
          repartidores que usan la app de Food Zone.
        </p>
      </div>
      <div class="col-md-sm-12 col-md-4">
        <h3>Aumenta tu visibilidad</h3>
        <p>
          Destácate con publicidad en la app para llegar a más clientes y
          aumentar las ventas.
        </p>
      </div>

      <div class="col-md-sm-12 col-md-4">
        <h3>Conéctate con los clientes</h3>
        <p>
          Usa datos procesables, responde las opiniones u ofrece un programa de
          lealtad para atraer clientes habituales.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="portfolio px-0">
  <div class="container">
    <div class="row">
      <h4 class="wow animated rubberBand text-center head_title">
        ¿Cómo funciona Food Zone para los Restaurantes Socios?
      </h4>
      <div class="col-md-sm-12 col-md-4">
        <h3>Los clientes hacen un pedido</h3>
        <p>
          Un cliente encuentra tu restaurante y realiza un pedido a través de la
          app de Food Zone.
        </p>
      </div>
      <div class="col-md-sm-12 col-md-4">
        <h3>Tú lo preparas</h3>
        <p>El restaurante acepta el pedido y lo prepara.</p>
      </div>

      <div class="col-md-sm-12 col-md-4">
        <h3>Llegan los Socios Repartidores</h3>
        <p>
          Los Socios Repartidores que usan la plataforma Food Zone a recolectar
          el pedido en el restaurante y se lo entregan al cliente.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .slider-restaurant {
    margin-left: -14px;
    margin-right: -13px;
  }
  .portfolio {
    margin-left: -14px;
    margin-right: -13px;
  }
</style>
