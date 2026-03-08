
import headerImg from "/src/photo/IMG_3061.PNG"

function Header(){

    return (
        <>
         {/* Header */}
          <div className="relative w-full h-64 overflow-hidden">
            
            {/* Background image with dark overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${headerImg})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
        
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 px-4">
              
              {/* Brand name */}
              <h1 className="text-white text-4xl font-extrabold tracking-widest drop-shadow-lg uppercase">
                OneUp
              </h1>
              <p className="text-white/70 text-sm tracking-widest uppercase">Follow us</p>
        
              {/* Social icons */}
              <div className="flex items-center gap-5 mt-1">
                
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
        
                {/* Snapchat */}
                <a href="https://snapchat.com" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.006 2c-1.672 0-4.517.464-6.194 3.14C4.91 6.556 5.047 8.092 5.3 9.16c-.254.132-.64.299-1.072.299-.344 0-.677-.1-.987-.298a.66.66 0 0 0-.367-.109c-.392 0-.874.27-.874.737 0 .621.924.977 1.697 1.148.055.013.12.025.185.038-.177.48-.516 1.13-1.218 1.46a.674.674 0 0 0-.38.627c.044.507.503.856 1.27.993 1.127.2 1.6.79 2.223 1.56.516.638 1.098 1.361 2.16 1.89.825.41 1.79.617 2.868.617 1.081 0 2.052-.21 2.88-.624 1.063-.529 1.644-1.25 2.16-1.889.624-.77 1.095-1.36 2.223-1.56.769-.137 1.226-.486 1.27-.993a.674.674 0 0 0-.38-.626c-.702-.33-1.04-.98-1.218-1.46.065-.014.13-.026.185-.039.773-.17 1.697-.527 1.697-1.148 0-.456-.463-.717-.848-.737a.682.682 0 0 0-.39.109c-.31.198-.643.298-.988.298-.43 0-.817-.167-1.071-.299.252-1.067.389-2.603-.513-4.019C16.524 2.464 13.679 2 12.006 2z"/>
                  </svg>
                </a>
        
                {/* Twitter/X */}
                <a href="https://twitter.com" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-sky-500 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
        
                {/* TikTok */}
                <a href="https://tiktok.com" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-black transition-colors duration-200 backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </a>
        
              </div>
            </div>
          </div>

           {/* Category Filter Bar */}
          <div className="w-full bg-white/10 backdrop-blur-sm px-4 py-3 overflow-x-auto">
            <div className="flex items-center gap-3 w-max mx-auto">
              
              {[
                { label: "الكل"   },
                { label: "قهوة"  },
                { label: "الحلا" },
                { label: "المشروبات"     },
                
              ].map((cat) => (
                <button
                  key={cat.label}
                  className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl bg-white/20 active:bg-purple-600/55 text-black text-xs font-semibold tracking-wide transition-colors duration-200 backdrop-blur-sm border border-white/20 whitespace-nowrap"
                >
                  <span className="text-xl">{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}

            </div>
          </div>
        
        </>
    )
}

export default Header;