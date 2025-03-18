import express, { Request, Response } from "express";

const router = express.Router();

interface Room {
  id: number;
  name: string;
}

// Données temporaires
let rooms: Room[] = [
  { id: 1, name: "Salon" },
  { id: 2, name: "Chambre" }
];

// 🔍 Lire toutes les pièces
router.get("/", (req: Request, res: Response) => {
  res.json(rooms);
});

// ➕ Ajouter une pièce
router.post("/", (req: Request, res: Response) => {
  const newRoom: Room = { id: Date.now(), ...req.body };
  rooms.push(newRoom);
  res.status(201).json(newRoom);
});

// 🗑 Supprimer une pièce
router.delete("/:id", (req: Request, res: Response) => {
  rooms = rooms.filter(room => room.id !== parseInt(req.params.id));
  res.json({ message: "Pièce supprimée" });
});

export default router;
