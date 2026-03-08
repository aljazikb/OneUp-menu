
//
function Item({item}) {

    return(
        <>
        
         <div className=" bg-white/95 rounded-lg px-2 py-2  shadow-xl ring ring-gray-900/5 flex items-center ">
              
              <div className="w-3xs ">
                <img className="rounded img-fluid " src={item.img} alt={item.name}/>
            </div>
            <div className="flex flex-col items-end gap-1 flex-1">
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
              <span>${item.price}</span>
            </div>
        </div>
     
        </>
    )
}


export default Item;

