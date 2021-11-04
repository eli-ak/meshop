import Header from './Components/Header/Header'; 
import Footer  from './Components/Footer/Footer'; 
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { Route ,BrowserRouter as Router } from "react-router-dom";
import AboutUs from './screens/AboutUs';
import cartscreen from './screens/cartscreen';
import SingInScreen from './screens/SingInScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
   return (
     <Router>
     <Header />
     <main className="wrapper pt-5">
       <Container>
         <Route path="/" component={HomeScreen} exact />
         <Route path="/aboutus" component={AboutUs}/>
         <Route path="/cartscreen" component={cartscreen}/>
         <Route path="/signinscreen" component={SingInScreen}/>
        <Route path="/product/:id" component={ProductScreen}/>




            </Container>

     </main>
     <Footer/>
     </Router>
   );
}
     export default App;
   



     