<script>
  import ContactUs from "./views/ContactUs.svelte";
  import FrequentQuestions from "./views/FrequentQuestions.svelte";
  import TermsAndConditions from "./views/TermsAndConditions.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./modules/Header.svelte";
  import Footer from "./modules/Footer.svelte";
  import Home from "./views/Home.svelte";
  import Partners from "./views/Partners.svelte";
  import About from "./views/About.svelte";
  import Pedir from "./views/Pedir.svelte";
  import Noticias from "./views/Noticias.svelte";
  import Questions from "./views/Questions.svelte";
  import Restaurant from "./views/Restaurant.svelte";
  import DeliveryMan from "./views/DeliveryMan.svelte";

</script>

<div class="container-fluid">
  <Router >
    <Header />
    <Route path="food-zone/">
      <Home />
    </Route>

    <Route path="food-zone/colaboradores/">
      <Partners />
    </Route>
    <Route path="food-zone/nosotros/">
      <About />
    </Route>
    <Route path="food-zone/preguntas-frecuentes/">
      <FrequentQuestions />
    </Route>
    <Route path="food-zone/pedir/">
      <Pedir />
    </Route>
    <Route path="food-zone/noticias/">
      <Noticias />
    </Route>
    <Route path="food-zone/terminos-condiciones/">
      <TermsAndConditions />
    </Route>
    <Route path="food-zone/contacto/">
      <ContactUs />
    </Route>
    <Route path="food-zone/restaurante/">
      <Restaurant />
    </Route>

    <Route path="food-zone/repartidor/">
      <DeliveryMan />
    </Route>

    <Footer />
  </Router>
</div>

<style>
</style>
