import './App.css'
import Header from './component/Header'
import "./index.css";
import "@popperjs/core"; 
// ✅ Ensure Bootstrap is properly imported
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js
import "./assets/css/owl.carousel.css";
import "./assets/css/vipodha_megamenu.css";
import "./assets/css/style.css"


function App() {


  return (
    <>
       <Header />
    </>
  )
}

export default App
