import Modal from "../components/Modal";
import { useEffect, useState } from "react";

type Sensor = {
  id: number;
  name: string;
  roomId: string;
  topic: string;
  type: string;
  unit: string;
  value: string;
};

type Room = {
  id: string;
  name: string;
};

type NewSensor = {
  name: string;
  roomId: string;
  type: string;
  unit: string;
  value: string;
};

type UpdatedSensorData = {
  name: string;
  type: string;
  unit: string;
  value: string;
};

const Equipments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [devices, setDevices] = useState<Sensor[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedSensor, setSelectedSensor] = useState<Sensor | null>(null);

  const fetchDevices = async () => {
    try {
      const response = await fetch("https://hackathon.vanhovev.com/sensors", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setDevices(data);
      }
    } catch (error) {
      alert("Erreur lors de la récupération des capteurs : " + error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await fetch("https://hackathon.vanhovev.com/rooms", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setRooms(data);
      }
    } catch (error) {
      alert("Erreur lors de la récupération des pièces : " + error);
    }
  };

  const addSensor = async (newSensor: NewSensor) => {
    try {
      const response = await fetch("https://hackathon.vanhovev.com/sensors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSensor),
      });

      if (response.ok) {
        const addedSensor = await response.json();
        setDevices([...devices, addedSensor]);
        alert("Capteur ajouté avec succès !");
      }
    } catch (error) {
      alert("Erreur lors de l'ajout du capteur : " + error);
    }
  };

  const updateSensor = async (id: number, updatedData: UpdatedSensorData) => {
    try {
      const response = await fetch(`https://hackathon.vanhovev.com/sensors/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const updatedSensor = await response.json();
        setDevices(devices.map((device) =>
          device.id === id ? updatedSensor : device
        ));
        alert("Capteur mis à jour avec succès !");
      }
    } catch (error) {
      alert("Erreur lors de la mise à jour du capteur : " + error);
    }
  };

  const deleteSensor = async (id: number) => {
    try {
      const response = await fetch(`https://hackathon.vanhovev.com/sensors/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDevices(devices.filter((device) => device.id !== id));
        alert("Capteur supprimé avec succès !");
      }
    } catch (error) {
      alert("Erreur lors de la suppression du capteur : " + error);
    }
  };

  useEffect(() => {
    fetchDevices();
    fetchRooms();
  }, []);

  const openEditModal = (sensor: Sensor) => {
    setSelectedSensor(sensor);
    setIsEditModalOpen(true);
  };

  return (
    <div className="w-full p-2 sm:p-4 lg:p-8 relative">
      <div className="w-full flex justify-between items-center gap-4">
        <h1 className="text-2xl text-zinc-900 font-bold">
          Nos <span className="text-amber-500">Equipements</span>
        </h1>
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-1.5 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          onClick={() => setIsModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span className="text-xs font-medium">Ajouter</span>
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Ajouter un équipement</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const newSensor: NewSensor = {
                  name: formData.get("name") as string,
                  roomId: formData.get("roomId") as string,
                  type: formData.get("type") as string,
                  unit: formData.get("unit") as string,
                  value: formData.get("value") as string,
                };
                addSensor(newSensor);
                setIsModalOpen(false);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nom de l'appareil
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: TempSensor1"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Pièce
                </label>
                <select
                  name="roomId"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Type d'appareil
                </label>
                <input
                  type="text"
                  name="type"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: temperature, humidity, fan, light, radiator, speaker"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Unité
                </label>
                <input
                  type="text"
                  name="unit"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: °C"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Valeur
                </label>
                <input
                  type="text"
                  name="value"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: 25"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-black rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {isEditModalOpen && selectedSensor && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Modifier l'équipement</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const updatedData: UpdatedSensorData = {
                  name: formData.get("name") as string,
                  type: formData.get("type") as string,
                  unit: formData.get("unit") as string,
                  value: formData.get("value") as string,
                };
                updateSensor(selectedSensor.id, updatedData);
                setIsEditModalOpen(false);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nom de l'appareil
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedSensor.name}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Type d'appareil
                </label>
                <input
                  type="text"
                  name="type"
                  defaultValue={selectedSensor.type}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Unité
                </label>
                <input
                  type="text"
                  name="unit"
                  defaultValue={selectedSensor.unit}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Valeur
                </label>
                <input
                  type="text"
                  name="value"
                  defaultValue={selectedSensor.value}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-black rounded"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      <div className="relative overflow-x-auto sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nom appareil
              </th>
              <th scope="col" className="px-6 py-3">
                Room ID
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Unité
              </th>
              <th scope="col" className="px-6 py-3">
                Valeur
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr
                key={device.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{device.id}</td>
                <td className="px-6 py-4">{device.name}</td>
                <td className="px-6 py-4">{device.roomId}</td>
                <td className="px-6 py-4">{device.type}</td>
                <td className="px-6 py-4">{device.unit}</td>
                <td className="px-6 py-4">{device.value}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(device)}
                      className="w-7 h-7 flex justify-center items-center rounded-md border border-300 bg-white text-zinc-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 flex-shrink-0 align-middle"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    </button>

                    <button
                      onClick={() => deleteSensor(device.id)}
                      className="w-7 h-7 flex justify-center items-center rounded-md border border-300 bg-white text-zinc-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 flex-shrink-0 align-middle"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equipments;