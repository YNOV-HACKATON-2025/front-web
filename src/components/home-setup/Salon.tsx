
const Salon = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
        <div className="bg-zinc-900/70 p-4 rounded-lg shadow-md shadow-white/10 text-white">
            <div className="flex justify-between items-center gap-2">
                <p className="font-medium text-sm">Climatisation</p>
                <label className="group relative inline-flex cursor-pointer flex-col items-center">
                    <input className="peer sr-only" type="checkbox" />
                    <div className="relative h-5 w-[40px] rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 after:absolute after:left-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-amber-600 peer-checked:after:translate-x-5 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
                    <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent"></span>
                    <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(167,139,250,0.5)]"></span>
                    </div>
                </label>
            </div>
            <div className="flex justify-between mt-4">
                <div>
                    <p className="text-2xl font-semibold">18°<span className="text-sm">C</span></p>
                    <p className="text-xs text-zinc-400 font-light">Température actuelle</p>
                </div>
                <div>
                    <button className="w-5 h-5 flex justify-center items-center rounded-md text-white bg-zinc-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                    </button>
                    <button className="w-5 h-5 flex justify-center items-center rounded-md text-white bg-zinc-500 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 flex-shrink-0 align-middle -rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                    </button>
                </div>
            </div>
            <div className="mt-6 text-white">
                <div className="w-full flex justify-between items-center gap-2">
                    <p className="text-xs">Mode</p>
                    <button className="text-xs px-2 py-1 rounded-md bg-zinc-500">Froid</button>
                </div>
                <div className="w-full flex justify-between items-center gap-2 mt-2">
                    <p className="text-xs">Allumage auto</p>
                    <button className="text-xs px-2 py-1 rounded-md bg-zinc-500">10:00</button>
                </div>
                <div className="w-full flex justify-between items-center gap-2 mt-2">
                    <p className="text-xs">Extinction auto</p>
                    <button className="text-xs px-2 py-1 rounded-md bg-zinc-500">19:00</button>
                </div>
                <div className="w-full flex justify-between items-center gap-2 mt-2">
                    <p className="text-xs">Vent</p>
                    <button className="text-xs px-2 py-1 rounded-md bg-zinc-500">Moyen</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
            <div className="bg-zinc-900/70 p-4 rounded-lg text-white shadow-md shadow-white/10">
                <div className="flex justify-between items-center gap-2">
                    <p className="font-medium text-sm">Lumière</p>
                    <label className="group relative inline-flex cursor-pointer flex-col items-center">
                        <input className="peer sr-only" type="checkbox" />
                        <div className="relative h-5 w-[40px] rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 after:absolute after:left-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-amber-600 peer-checked:after:translate-x-5 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
                        <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent"></span>
                        <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(167,139,250,0.5)]"></span>
                        </div>
                    </label>
                </div>
            </div>
            <div className="bg-zinc-900/70 p-4 rounded-lg text-white shadow-md shadow-white/10">
                <div className="flex justify-between items-center gap-2">
                    <p className="font-medium text-sm">Samsung Smart TV</p>
                    <label className="group relative inline-flex cursor-pointer flex-col items-center">
                        <input className="peer sr-only" type="checkbox" />
                        <div className="relative h-5 w-[40px] rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 after:absolute after:left-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-amber-600 peer-checked:after:translate-x-5 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
                        <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent"></span>
                        <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(167,139,250,0.5)]"></span>
                        </div>
                    </label>
                </div>
                <div className="mt-6 flex justify-between gap-2">
                    <div className="flex gap-2">
                        {Array.from({ length: 4 }).map((_) => (
                            <div className="w-8 h-8 rounded-md bg-zinc-500"></div>
                        ))}
                    </div>
                    <div className="w-8 h-8 rounded-md bg-zinc-500"></div>
                </div>
            </div>
            <div className="bg-zinc-900/70 p-4 rounded-lg text-white shadow-md shadow-white/10">
                <div className="flex justify-between items-center gap-2">
                    <p className="font-medium text-sm">Wi-Fi (Orange)</p>
                    <label className="group relative inline-flex cursor-pointer flex-col items-center">
                        <input className="peer sr-only" type="checkbox" />
                        <div className="relative h-5 w-[40px] rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 after:absolute after:left-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-amber-600 peer-checked:after:translate-x-5 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
                        <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent"></span>
                        <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(167,139,250,0.5)]"></span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div className="flex items-end">
            <div className="w-full bg-zinc-900/70 p-4 rounded-lg text-white shadow-md shadow-white/10">
                <div className="flex flex-col justify-between gap-2">
                    <p className="font-medium text-sm">Lorem Ipsum Dolor</p>
                    <div className="flex justify-between gap-2">
                        <p className="text-xs text-zinc-400 font-light">Muet</p>
                        <label className="group relative inline-flex cursor-pointer flex-col items-center">
                            <input className="peer sr-only" type="checkbox" />
                            <div className="relative h-5 w-[40px] rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 after:absolute after:left-1 after:top-1 after:h-3 after:w-3 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-amber-600 peer-checked:after:translate-x-5 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
                            <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent"></span>
                            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(167,139,250,0.5)]"></span>
                            </div>
                        </label>
                    </div>
                    <p className="text-[10px] text-zinc-400 font-light leading-tight">En cours de lecture <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 flex-shrink-0 align-middle inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg></p>
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-white text-sm max-w-sm truncate">Sidiki Diabaté - Ma chérie, na bizou kélé la</p>
                        <div className="w-5 h-5 rounded-full bg-gray-500/50 flex-shrink-0 align-middle"></div>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 flex justify-center items-center rounded-md bg-zinc-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                        <button className="w-8 h-8 flex justify-center items-center rounded-md bg-zinc-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>
                        </button>
                        <button className="w-8 h-8 flex justify-center items-center rounded-md bg-zinc-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 align-middle -rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-zinc-900/70 p-4 rounded-lg text-white shadow-md shadow-white/10">
            <p className="font-semibold">Gestion du salon</p>
            <p className="text-sm text-gray-400 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eius dolor inventore nobis non necessitatibus, sequi blanditiis illo error velit, expedita sed tempora sit eum accusantium laudantium qui animi laborum.</p>
        </div>
    </div>
  )
}

export default Salon