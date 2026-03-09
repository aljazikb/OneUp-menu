 
import { useState } from 'react';
import './photo/oneupLogo.jpg'
import logo from './photo/oneupLogo.jpg';
import Items from "./items";
import Footer from "./component/Footer"
import Menu from "./component/Menu"
import Header from './component/Header';


function App() {

  const [activeCategory, setActiveCategory] = useState("الكل")

  const filtered = activeCategory === "الكل"? Items: Items.filter(item => item.category === activeCategory)
  

  return (
    <>
    <div className=" w-screen min-h-screen flex flex-col  ">
      {/* Header */}
        <Header activeCategory={activeCategory} setActiveCategory={setActiveCategory} />


      <div className=" flex items-center justify-center overflow-x-hidden bg-bottom-left bg-no-repeat pb-10 " style={{ backgroundImage: `url(${logo})` }}>
        <div className=" bg-purple-900/60 rounded-lg px-4 py-4  ">
          <Menu menu={filtered} />
        </div>
    
     </div>
      <Footer />
    
    </div>
   
    </>
  )
}

export default App
