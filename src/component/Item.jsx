
//
function Item({item}) {

    return(
        <>
        
         <div className=" bg-white/95 rounded-lg px-2 py-2  shadow-xl ring ring-gray-900/5 flex items-center w-full min-w-90">
              
              <div className="flex-shrink-0 w-24 h-24">
                <img className="rounded w-full h-full object-cover" src={item.img} alt={item.name}/>
            </div>
            <div className="flex flex-col items-end gap-1 flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 truncate w-full text-right">{item.name}</h3>
              <p className="text-gray-500 text-sm truncate w-full text-right">{item.desc}</p>
              <span className="text-right">ريـ{item.price }ـال  </span>
            </div>
        </div>
     
        </>
    )
}


export default Item;

