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
  import Restaurant from "./views/Restaurant.svelte";
  import DeliveryMan from "./views/DeliveryMan.svelte";
  import Menuprueba from "./components/Menuprueba.svelte";

</script>

<div class="container-fluid">
  <Router >
    <Header />
    <Route path="/">
      <Home />
    </Route>
    <Route path="/prueba">
      <Menuprueba />
    </Route>

    <Route path="colaboradores">
      <Partners />
    </Route>
    <Route path="nosotros">
      <About />
    </Route>
    <Route path="preguntas-frecuentes/">
      <FrequentQuestions />
    </Route>
    <Route path="pedir">
      <Pedir />
    </Route>
    <Route path="noticias">
      <Noticias />
    </Route>
    <Route path="terminos-condiciones">
      <TermsAndConditions />
    </Route>
    <Route path="contacto">
      <ContactUs />
    </Route>
    <Route path="restaurante">
      <Restaurant />
    </Route>

    <Route path="repartidor">
      <DeliveryMan />
    </Route>

    <Footer />
  </Router>
</div>

<style>
</style>
