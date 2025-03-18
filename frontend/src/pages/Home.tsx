import { useState, useEffect } from "react";
import { roomParts } from "../constants";
import { Room } from "../components/home-setup";

const Home = () => {
  const [rooms, setRooms] = useState([]); 
  const [selectedRoom, setSelectedRoom] = useState(null);


  useEffect(() => {
    fetch("https://hackathon.vanhovev.com/rooms/")
      .then(response => response.json())
      .then(data => {
        setRooms(data);
        if (data.length > 0) {
          setSelectedRoom(data[0]);
        }
      })
      .catch(error => console.error("Erreur lors de la récupération des pièces :", error));
  }, []);

  return (
    <div className="w-full p-2 sm:p-4 lg:p-8 relative">
      <div className="w-100 flex justify-between items-center gap-4">
        <h1 className="text-2xl text-zinc-900 font-bold">Welcome,</h1>
      </div>

      <div className="w-full border rounded-xl mt-4 h-[700px] relative overflow-y-scroll">
        {selectedRoom && (
          <img
            src={selectedRoom.imageUrl}
            alt={selectedRoom.name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            onError={(e) => { e.target.src = 'default-image-url'; }} 
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50 rounded-xl">
          <div className="w-full h-full flex flex-col justify-between items-center py-6">
            <div className="flex items-center gap-4 p-1 rounded-lg bg-zinc-900/30 shadow-sm shadow-white/10">
              {rooms.map(room => (
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

            <div className="w-full flex justify-center items-center px-10">
              {selectedRoom && <Room roomId={selectedRoom.id} roomName={selectedRoom.name} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;