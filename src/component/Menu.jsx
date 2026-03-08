import Item from"./Item"

//menu is an array of food
function Menu({menu,Type}){


    return(

        <>

        <div className="grid grid-cols-1 gap-6">
            
            {menu.map((item) => (
                <Item key={item.id} item={item} />
             ))}
        </div>
      
      
        
        </>
    )
}



export default Menu;