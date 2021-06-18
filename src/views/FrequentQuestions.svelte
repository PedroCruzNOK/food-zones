<script>
  const showHide = (element) => {
    let id = element.srcElement.parentNode.parentNode.lastChild.id;
   console.log(id)
  };
</script>

<div class="row margin-t">
  <main>
    <div class="position-relative overflow-hidden  bg-light">
      <div class="col-md-12">
        <div class="row justify-content-center">
          <div class="col-8">
            <h4
              class="display-3 fw-normal wow animated rubberBand py-5"
              data-animation="flash"
            >
              Preguntas Frecuentes
            </h4>

            <div class="accordion pb-5" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header " id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                    on:click={(event) => showHide(event)}
                  >
                    1. ¿La app es compatible en Android?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse "
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    Si, la app está disponible tanto en Android como en IOS.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="pregunta-2">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pregunta-2-collapseThree"
                    aria-expanded="false"
                    aria-controls="pregunta-2-collapseThree"
                  >
                    2. ¿Cómo puedo crear mi Monedero Electrónico?
                  </button>
                </h2>
                <div
                  id="pregunta-2-collapseThree"
                  class="accordion-collapse collapse "
                  aria-labelledby="pregunta-2"
                >
                  <div class="accordion-body">
                    El monedero electrónico se crea automáticamente al crear una
                    cuenta.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="pregunta-3">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pregunta-3-collapseThree"
                    aria-expanded="false"
                    aria-controls="pregunta-3-collapseThree"
                  >
                    3. ¿En qué países está disponible FoodZone?
                  </button>
                </h2>
                <div
                  id="pregunta-3-collapseThree"
                  class="accordion-collapse collapse "
                  aria-labelledby="pregunta-3"
                >
                  <div class="accordion-body">
                    Por el momento está disponible en Estados Unidos y en
                    México.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="pregunta-4">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#pregunta-4-collapseThree"
                    aria-expanded="false"
                    aria-controls="pregunta-4-collapseThree"
                  >
                    4. ¿Cuánto cuesta descargar la app?
                  </button>
                </h2>
                <div
                  id="pregunta-4-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="pregunta-4"
                >
                  <div class="accordion-body">
                    La app es totalmente gratuita.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    5. ¿En dónde puedo utilizar mis puntos del monedero
                    electrónico?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    En cualquier establecimiento que esté dado de alta con
                    FoodZone.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  .margin-t {
    margin-top: 100px;
  }
</style>
