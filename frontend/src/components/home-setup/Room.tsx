import { useState, useEffect } from "react";

const Room = ({ roomId, roomName }) => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    if (roomId) {
      fetch(`https://hackathon.vanhovev.com/sensors?roomId=${roomId}`)
        .then(response => response.json())
        .then(data => setSensors(data))
        .catch(error => console.error("Erreur de récupération des capteurs :", error));
    }
  }, [roomId]);

  const getSensorIcon = (type) => {
    switch (type) {
      case 'temperature':
        return '🌡️';
      case 'humidity':
        return '💧';
      case 'fan':
        return '🌀';
      case 'light':
        return '💡';
      case 'camera':
        return '📷';
      case 'radiator':
        return '♨️';
      case 'speaker':
        return '🔊';
      default:
        return '📡';
    }
  };

  const getSensorColor = (type) => {
    switch (type) {
      case 'temperature':
        return 'bg-red-500';
      case 'humidity':
        return 'bg-blue-500';
      case 'fan':
        return 'bg-green-500';
      case 'light':
        return 'bg-yellow-500';
      case 'camera':
        return 'bg-purple-500';
      case 'blind':
        return 'bg-indigo-500';
      case 'speaker':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sensors.length > 0 ? (
          sensors.map(sensor => (
            <div key={sensor.id} className={`${getSensorColor(sensor.type)} p-6 rounded-lg shadow-lg text-white`}>
              <div className="flex items-center justify-between">
                <div className="text-3xl">{getSensorIcon(sensor.type)}</div>
                <div className="text-right">
                  <p className="text-sm font-semibold">Nom : {sensor.name}</p>
                  <p className="text-lg">{sensor.value} {sensor.unit}</p>
                </div>
              </div>
              <p className="mt-4 text-sm">Type : {sensor.type}</p>
            </div>
          ))
        ) : (
          <p className="text-white">Aucun capteur trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default Room;