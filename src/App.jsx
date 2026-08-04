import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { Tasks } from "./components/Tasks.jsx";
import { About } from "./components/About.jsx";
import { Footer } from "./components/Footer.jsx";


const router = createBrowserRouter([
  {
    path:"/",
    element:
    <>
    <Navbar />
    <Home />
    </>
  },

  {
    path:"/Tasks",
    element:
    <>
    <Navbar />
    <Tasks />   
    </>
  },

  {
    path:"/About",
    element:
    <>
    <Navbar />
    <About />
    </>
  },

]);

function App(){
  return(
    <>
    <RouterProvider router={router}/>
    <hr />
    <Footer />
    </>
  )
}

export default App;