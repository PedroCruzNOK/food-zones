<script>
  const showAnswer = (element) => {
    if (element.srcElement.nextSibling.nextSibling.style.display == "none") {
      element.srcElement.nextSibling.nextSibling.style.display = "block";
    } else {
      if (element.srcElement.nextSibling.nextSibling.style.display == "block") {
        element.srcElement.nextSibling.nextSibling.style.display = "none";
      }
    }
  };
</script>

<div class="row margin-t">
  <main>
    <div class="position-relative overflow-hidden  bg-light">
      <div class="col-md-12">
        <div class="row justify-content-center">
          <div class="col-8">
            <h4
              class="display-3 fw-normal wow animated rubberBand"
              data-animation="flash"
            >
              Preguntas Frecuentes
            </h4>
            <ul class="list-group list-group-flush wow animated bounceInLeft">
              <li class="list-group-item">
                <p class="fw-bold" on:click={(event) => showAnswer(event)}>
                  1. ¿La app es compatible en Android?
                </p>
                <span style="display:none;">
                  Si, la app está disponible tanto en Android como en IOS.
                </span>
              </li>
              <li class="list-group-item">
                <p class="fw-bold" on:click={(event) => showAnswer(event)}>
                  2. ¿Cómo puedo crear mi Monedero Electrónico?
                </p>
                <span style="display:none;">
                  El monedero electrónico se crea automáticamente al crear una
                  cuenta.
                </span>
              </li>
              <li class="list-group-item">
                <p class="fw-bold" on:click={(event) => showAnswer(event)}>
                  3. ¿En qué países está disponible FoodZone?
                </p>
                <span style="display:none;" on:click={(event) => showAnswer(event)}>
                  Por el momento está disponible en Estados Unidos y en México.
                </span>
              </li>
              <li class="list-group-item" on:click={(event) => showAnswer(event)}>
                <p class="fw-bold">4. ¿Cuánto cuesta descargar la app?</p>
                <span style="display:none;">
                  La app es totalmente gratuita.</span
                >
              </li>
              <li class="list-group-item" on:click={(event) => showAnswer(event)}>
                <p class="fw-bold">
                  5. ¿En dónde puedo utilizar mis puntos del monedero
                  electrónico?
                </p>
                <span style="display:none;" on:click={(event) => showAnswer(event)}>
                  En cualquier establecimiento que esté dado de alta con
                  FoodZone.
                </span>
              </li>
            </ul>
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
