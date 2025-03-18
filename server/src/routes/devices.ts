import express, { Request, Response } from "express";

const router = express.Router();

interface Device {
  id: number;
  name: string;
  status: "on" | "off";
}

// Données temporaires
let devices: Device[] = [
  { id: 1, name: "Lumière Salon", status: "on" },
  { id: 2, name: "Climatisation", status: "off" }
];

// 🔍 Lire tous les devices
router.get("/", (req: Request, res: Response) => {
  res.json(devices);
});

// ➕ Ajouter un device
router.post("/", (req: Request, res: Response) => {
  const newDevice: Device = { id: Date.now(), ...req.body };
  devices.push(newDevice);
  res.status(201).json(newDevice);
});

// 🗑 Supprimer un device
router.delete("/:id", (req: Request, res: Response) => {
  devices = devices.filter(device => device.id !== parseInt(req.params.id));
  res.json({ message: "Device supprimé" });
});

export default router;
