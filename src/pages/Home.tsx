import { useState } from "react";
import { Salon } from "../components/home-setup";
import { roomParts } from "../constants";

const Home = () => {
  const [room, setRoom] = useState(1);

  return (
    <div className="w-full p-2 sm:p-4 lg:p-8 relative">
      <div className="w-100 flex justify-between items-center gap-4">
        <h1 className="text-2xl text-zinc-900 font-bold">
          Welcome back, <span className="text-amber-500">Mugiwara</span>
        </h1>
        <div className="flex items-center gap-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 flex-shrink-0 align-middle"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 flex-shrink-0 align-middle"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Overall status */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-10">
        <div className="bg-gray-300 p-4 rounded-xl">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Electricité
          </p>
          <p className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-4xl font-bold mt-10">
            250<span className="font-semibold text-sm">KWh</span>
          </p>
        </div>
        <div className="bg-gray-300 p-4 rounded-xl">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Chauffage
          </p>
          <p className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-4xl font-bold mt-10">
            250<span className="font-semibold text-sm">KWh</span>
          </p>
        </div>
        <div className="bg-gray-300 p-4 rounded-xl">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Climatisation
          </p>
          <p className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-4xl font-bold mt-10">
            250<span className="font-semibold text-sm">KWh</span>
          </p>
        </div>
        <div className="bg-gray-300 p-4 rounded-xl">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Eau
          </p>
          <p className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-4xl font-bold mt-10">
            250<span className="font-semibold text-sm">KWh</span>
          </p>
        </div>
        <div className="bg-gray-300 p-4 rounded-xl">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Wi-Fi
          </p>
          <p className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-4xl font-bold mt-10">
            250<span className="font-semibold text-sm">KWh</span>
          </p>
        </div>
        <div className="bg-gray-300 p-4 rounded-xl">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Caméras
          </p>
          <p className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-4xl font-bold mt-10">
            250<span className="font-semibold text-sm">KWh</span>
          </p>
        </div>
      </div>

      {/* Overall management */}
      <div className="w-full border rounded-xl mt-4 h-[700px] relative overflow-hidden">
        <img
          src={roomParts[room - 1]}
          alt="sample"
          className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${
            room ? "translate-x-0" : "-translate-x-20 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50 rounded-xl">
          <div className="w-full h-full flex flex-col justify-between items-center py-6">
            {/* Menus */}
            <div className="flex items-center gap-4 p-1 rounded-lg bg-zinc-900/30 shadow-sm shadow-white/10">
              <button
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white cursor-pointer rounded-lg ${
                  room == 1 ? "bg-white/30" : "hover:bg-white/10"
                } transition-all duration-300`}
                onClick={() => setRoom(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 flex-shrink-0 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
                  <path d="M5 18v2" />
                  <path d="M19 18v2" />
                </svg>
                Salon
              </button>
              <button
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white cursor-pointer rounded-lg ${
                  room == 2 ? "bg-white/30" : "hover:bg-white/10"
                } transition-all duration-300`}
                onClick={() => setRoom(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 flex-shrink-0 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                  <path d="M7 21h10" />
                  <path d="M19.5 12 22 6" />
                  <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
                  <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
                  <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
                </svg>
                Salle à manger
              </button>
              <button
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white cursor-pointer rounded-lg ${
                  room == 3 ? "bg-white/30" : "hover:bg-white/10"
                } transition-all duration-300`}
                onClick={() => setRoom(3)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 flex-shrink-0 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M10 4 8 6" />
                  <path d="M17 19v2" />
                  <path d="M2 12h20" />
                  <path d="M7 19v2" />
                  <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                </svg>
                Douche
              </button>
              <button
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white cursor-pointer rounded-lg ${
                  room == 4 ? "bg-white/30" : "hover:bg-white/10"
                } transition-all duration-300`}
                onClick={() => setRoom(4)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 flex-shrink-0 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 4v16" />
                  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                  <path d="M2 17h20" />
                  <path d="M6 8v9" />
                </svg>
                Chambres
              </button>
              <button
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white cursor-pointer rounded-lg ${
                  room == 5 ? "bg-white/30" : "hover:bg-white/10"
                } transition-all duration-300`}
                onClick={() => setRoom(5)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 flex-shrink-0 align-middle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="3.5 2 6.5 12.5 18 12.5" />
                  <line x1="9.5" x2="5.5" y1="12.5" y2="20" />
                  <line x1="15" x2="18.5" y1="12.5" y2="20" />
                  <path d="M2.75 18a13 13 0 0 0 18.5 0" />
                </svg>
                Extérieur
              </button>
            </div>

            <div className="w-full flex justify-center items-center px-10">
              <Salon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
