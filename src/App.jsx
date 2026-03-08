 
import './photo/oneupLogo.jpg'
import logo from './photo/oneupLogo.jpg';
import Items from "./items";
import Footer from "./component/Footer"
import Menu from "./component/Menu"


function App() {
  

  return (
    <>
    <div className=" w-screen min-h-screen flex flex-col  ">
      <div className="w-screen min-h-screen flex items-center justify-center overflow-x-hidden bg-bottom-left bg-no-repeat pb-10 " style={{ backgroundImage: `url(${logo})` }}>
        <div className=" bg-purple-900/75 rounded-lg px-4 py-4 mt-100 ">
          <Menu menu={Items} />
        </div>
    
     </div>
      <Footer />
    
    </div>
   
    </>
  )
}

export default App
