
const Sidebar = () => {
  return (
    <div className="w-[80px] max-w-[80px] flex flex-col justify-between items-center rounded-s-xl px-4 py-8 bg-zinc-800">
        <a href="/" className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        </a>

        <ul className="w-full flex flex-col gap-1">
            <li>
                <a href="/equipments" className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                    {/* Equipements */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/></svg>
                </a>
            </li>

            <li className="w-full h-px bg-zinc-600/50 my-1"></li>

            <li>
                <a  className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                    {/* Lumière */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </a>
            </li>
            <li className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                {/* Clim */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"/><path d="M6.6 15.6A2 2 0 1 0 10 17v-5"/></svg>
            </li>
            <li className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                {/* Portes */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/></svg>
            </li>
            <li className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                {/* Temperature */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
            </li>
            <li className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                {/* Wifi */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>
            </li>
        </ul>

        <ul className="w-full flex flex-col gap-1">
            <li className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                {/* Paramètre */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            </li>
            <li className="w-full flex justify-center px-2 py-3 text-amber-500/80 rounded-lg hover:bg-zinc-600/50 cursor-pointer transition-all duration-300">
                {/* Help */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar