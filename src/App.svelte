<script>
	import {Router, Link, Route} from "svelte-routing";
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Home from './views/Home.svelte'
import Partners from "./views/Partners.svelte";
import About from "./views/About.svelte";
import Questions from "./views/Questions.svelte";
import Conditions from "./views/Conditions.svelte";
import Contact from "./views/Contact.svelte";
</script>


	<div>
		
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
				<Questions />	
			</Route>
			<Route path="/terminos-condiciones">
				<Conditions />	
			</Route>
			<Route path="/contacto">
				<Contact />	
			</Route>
			<Footer></Footer>
		</Router>
		<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
	</div>


<style >



</style>