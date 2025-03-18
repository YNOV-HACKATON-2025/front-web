import { useState, useEffect } from "react";
import { Room } from "../components/home-setup";

// Définir le type Room
interface RoomType {
  id: string;
  name: string;
  picture: string;
}

const Home = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  useEffect(() => {
    fetch("https://hackathon.vanhovev.com/rooms/")
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
        if (data.length > 0) {
          setSelectedRoom(data[0]);
        }
      })
      .catch((error) => console.error("Erreur lors de la récupération des pièces :", error));
  }, []);

  return (
    <div className="w-full p-2 sm:p-4 lg:p-8 relative">
      <div className="w-100 flex justify-between items-center gap-4">
        <h1 className="text-2xl text-zinc-900 font-bold">Bonjour Kake</h1>
      </div>

      <div className="w-full rounded-xl mt-4 h-[700px] relative overflow-y-scroll">
        <div className="absolute inset-0 rounded-xl">
          <div className="w-full h-full flex flex-col items-center py-6">
            <div className="flex items-center gap-4 p-1 rounded-lg bg-zinc-900/30 shadow-sm shadow-white/10">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  className={`flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white cursor-pointer rounded-lg ${selectedRoom?.id === room.id ? "bg-white/30" : "hover:bg-white/10"
                    } transition-all duration-300`}
                  onClick={() => setSelectedRoom(room)}
                >
                  {room.name}
                </button>
              ))}
            </div>
            <div className="w-full max-w-6xl mx-auto mt-6 transition-all duration-500">
              {selectedRoom ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white/90">{selectedRoom.name}</h2>
                    <span className="px-3 py-1 text-xs font-medium bg-zinc-800/50 text-white/80 rounded-full border border-white/10">
                      ID: {selectedRoom.id}
                    </span>
                  </div>
                  <div className="p-6 transition-all duration-300">
                    <Room roomId={selectedRoom.id} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64">
                  <div className="animate-pulse w-10 h-10 mb-4"></div>
                  <p className="text-sm">Sélectionnez une pièce pour afficher les détails</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;