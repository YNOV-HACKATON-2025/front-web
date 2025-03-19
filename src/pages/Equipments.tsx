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
  const [newSensor, setNewSensor] = useState<NewSensor>({
    name: "",
    roomId: "",
    type: "",
    unit: "",
    value: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewSensor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      <div className="w-100 flex justify-between items-center gap-4">
        <h1 className="text-2xl text-zinc-900 font-bold">
          Nos <span className="text-amber-500">Equipements</span>
        </h1>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all duration-300"
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
          Ajouter
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
                const type = formData.get("type") as string;
                const value = ["radiator", "light"].includes(type)
                  ? formData.get("value") === "on" ? "true" : "false"
                  : (formData.get("value") as string);

                const newSensor: NewSensor = {
                  name: formData.get("name") as string,
                  roomId: formData.get("roomId") as string,
                  type,
                  unit: formData.get("unit") as string,
                  value,
                };
                addSensor(newSensor);
                setIsModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l'appareil
                </label>
                <input
                  type="text"
                  name="name"
                  value={newSensor.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  placeholder="Ex: TempSensor1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pièce
                </label>
                <select
                  name="roomId"
                  value={newSensor.roomId}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="" disabled>Sélectionnez une pièce</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type d'appareil
                </label>
                <select
                  name="type"
                  value={newSensor.type}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="" disabled>Sélectionnez un type</option>
                  <option value="camera">Caméra</option>
                  <option value="radiator">Radiateur</option>
                  <option value="humidity">Hygromètre</option>
                  <option value="light">Lumière</option>
                  <option value="fan">Ventilateur</option>
                  <option value="speaker">Haut-parleur</option>
                  <option value="thermometer">Thermomètre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unité
                </label>
                <input
                  type="text"
                  name="unit"
                  value={newSensor.unit}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  placeholder="Ex: °C"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Valeur
                </label>
                {["radiator", "light"].includes(newSensor.type) ? (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="value"
                      checked={newSensor.value === "true"}
                      onChange={(e) => {
                        setNewSensor((prev) => ({
                          ...prev,
                          value: e.target.checked ? "true" : "false",
                        }));
                      }}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"></div>
                  </label>
                ) : (
                  <input
                    type="text"
                    name="value"
                    value={newSensor.value}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                    placeholder="Ex: 25"
                  />
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all duration-300"
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
                const type = formData.get("type") as string;
                const value = ["radiator", "light"].includes(type)
                  ? formData.get("value") === "on" ? "true" : "false"
                  : (formData.get("value") as string);

                const updatedData: UpdatedSensorData = {
                  name: formData.get("name") as string,
                  type,
                  unit: formData.get("unit") as string,
                  value,
                };
                updateSensor(selectedSensor.id, updatedData);
                setIsEditModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l'appareil
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedSensor.name}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type d'appareil
                </label>
                <input
                  type="text"
                  name="type"
                  defaultValue={selectedSensor.type}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unité
                </label>
                <input
                  type="text"
                  name="unit"
                  defaultValue={selectedSensor.unit}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Valeur
                </label>
                {["radiator", "light", "camera", "fan"].includes(selectedSensor.type) ? (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="value"
                      className="sr-only peer"
                      defaultChecked={selectedSensor.value === "true"}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"></div>
                  </label>
                ) : (
                  <input
                    type="text"
                    name="value"
                    defaultValue={selectedSensor.value}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      <div className="w-full rounded-xl mt-6 relative overflow-hidden">
        <div className="overflow-x-auto animate-fadeIn">
          <table className="w-full text-sm text-left bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="text-xs uppercase bg-zinc-100">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">ID</th>
                <th scope="col" className="px-6 py-3 font-medium">Nom appareil</th>
                <th scope="col" className="px-6 py-3 font-medium">Pièce</th>
                <th scope="col" className="px-6 py-3 font-medium">Type</th>
                <th scope="col" className="px-6 py-3 font-medium">Unité</th>
                <th scope="col" className="px-6 py-3 font-medium">Valeur</th>
                <th scope="col" className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr
                  key={device.id}
                  className="border-b hover:bg-zinc-50 transition-colors duration-200"
                >
                  <td className="px-6 py-3 text-gray-800">{device.id}</td>
                  <td className="px-6 py-3 font-medium text-gray-900">{device.name}</td>
                  <td className="px-6 py-3">
                    {rooms.find((room) => room.id === device.roomId)?.name || "Inconnu"}
                  </td>
                  <td className="px-6 py-3">{device.type}</td>
                  <td className="px-6 py-3">{device.unit}</td>
                  <td className="px-6 py-3">
                    {["radiator", "light"].includes(device.type) ? (
                      <span className={`px-2 py-1 rounded-full text-xs ${device.value === "true" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                        {device.value === "true" ? "Allumé" : "Éteint"}
                      </span>
                    ) : (
                      device.value
                    )}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditModal(device)}
                        className="p-1.5 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-all duration-300"
                        title="Modifier"
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
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>

                      <button
                        onClick={() => deleteSensor(device.id)}
                        className="p-1.5 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-red-100 hover:text-red-600 transition-all duration-300"
                        title="Supprimer"
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
              {devices.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                    Aucun équipement trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Equipments;