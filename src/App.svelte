<script>
	import ContactUs from './views/ContactUs.svelte';
	import FrequentQuestions from './views/FrequentQuestions.svelte';
	import TermsAndConditions from './views/TermsAndConditions.svelte';
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./modules/Header.svelte";
  import Footer from "./modules/Footer.svelte";
  import Home from "./views/Home.svelte";
  import Partners from "./views/Partners.svelte";
  import About from "./views/About.svelte";
  import Questions from "./views/Questions.svelte";
  import Conditions from "./views/Conditions.svelte";
  import Contact from "./views/Contact.svelte";
</script>

		
		<Router>
			<Header></Header>
			<Route path="/">
				<Home />		
			</Route>
			<Route path="/colaboradores">
				<Partners />	
			</Route>
			<Route path="/nosotros">
				<About />	
			</Route>
			<Route path="/preguntas-frecuentes">
				<FrequentQuestions />	
			</Route>
			<Route path="/terminos-condiciones">
				<TermsAndConditions />	
			</Route>
			<Route path="/contacto">
				<ContactUs />	
			</Route>
			<Footer></Footer>
		</Router>




<style >



</style>

