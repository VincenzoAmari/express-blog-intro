const express = require("express");
const app = express();
const port = 3000;

app.get("/img/:imageName", (req, res) => {
  res.send(`<img src="/img/${req.imageName}" alt="Immagine">`);
});

// Array di post
const posts = [
  {
    titolo: "Ciambellone",
    contenuto:
      "Un dolce soffice e profumato, perfetto per la colazione o la merenda.",
    immagine: "/img/ciambellone.jpeg",
    tags: ["Dolce", "Colazione", "Merenda"],
  },
  {
    titolo: "Cracker alla Barbabietola",
    contenuto:
      "Croccanti e dal colore vivace, questi cracker sono ideali come snack o accompagnamento.",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["Snack", "Salato", "Barbabietola"],
  },
  {
    titolo: "Pane Fritto Dolce",
    contenuto:
      "Una ricetta golosa e semplice, perfetta per riciclare il pane avanzato.",
    immagine: "/img/pane_fritto_dolce.jpg",
    tags: ["Dolce", "Fritto", "Riciclo"],
  },
  {
    titolo: "Pasta alla Barbabietola",
    contenuto:
      "Un primo piatto colorato e saporito, perfetto per sorprendere gli ospiti.",
    immagine: "/img/pasta_barbabietola.jpg",
    tags: ["Pasta", "Primo", "Barbabietola"],
  },
  {
    titolo: "Torta Paesana",
    contenuto: "Un dolce della tradizione lombarda, ricco di sapori e storia.",
    immagine: "/img/torta_paesana.jpg",
    tags: ["Dolce", "Tradizione", "Lombardia"],
  },
];

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
