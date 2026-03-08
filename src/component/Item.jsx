
//
function Item({item}) {

    return(
        <>
        
         <div className="flex flex-col gap-6 bg-white/95 rounded-lg px-2 py-2 ring shadow-xl ring-gray-900/5 ">
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                 
                </svg>
              </span>
            </div>
            <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">{item.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
              {item.desc}
            </p>
            <span>${ item.price}</span>
        </div>
     
        </>
    )
}


export default Item;

