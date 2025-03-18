
const Sidebar = () => {
  return (
    <div className="w-[80px] max-w-[80px] flex flex-col justify-between items-center px-4 py-8 bg-zinc-800">
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