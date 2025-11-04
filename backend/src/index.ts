import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Interface pour typer le corps de la requête POST
interface SommeRequestBody {
  n: number;
}

// Middleware pour parser le JSON
app.use(express.json());

// Route GET simple
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express");
});

// Route POST avec typage et gestion d’erreurs
app.post(
  "/somme",
  (req: Request<{}, {}, SommeRequestBody>, res: Response) => {
    try {
      const { n } = req.body;

      // Validation de la donnée
      if (typeof n !== "number" || isNaN(n)) {
        return res
          .status(400)
          .json({ error: "Le champ 'n' est requis et doit être un nombre" });
      }

      const resultat = n * n;

      res.status(200).json({
        message: "Calcul effectué avec succès",
        resultat,
      });
    } catch (error) {
      console.error("Erreur dans /somme :", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
);

// Middleware global d’erreur 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erreur globale :", err.message);
  res.status(500).json({ error: "Une erreur interne est survenue" });
});

app.listen(PORT, () => {
  console.log(` Serveur démarré sur http://localhost:${PORT}`);
});
