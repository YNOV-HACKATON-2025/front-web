import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import des routes
import deviceRoutes from "./routes/devices";
import roomRoutes from "./routes/rooms";

app.use("/api/devices", deviceRoutes);
app.use("/api/rooms", roomRoutes);

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur TypeScript démarré sur http://localhost:${PORT}`);
});
