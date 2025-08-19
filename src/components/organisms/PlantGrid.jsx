import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import PlantCard from "../molecules/plantCard/PlantCard";

// Import das imagens das plantas
import Samambaia from "../../assets/images/plants/samambaia.jpg";
import Suculenta from "../../assets/images/plants/suculenta.jpeg";
import EspadaDeSaoJorge from "../../assets/images/plants/espada-de-sao-jorge-46.jpg";
import Jiboia from "../../assets/images/plants/jiboia.jpg";
import AloeVera from "../../assets/images/plants/aloe-vera.jfif";
import Cacto from "../../assets/images/plants/cacto.jfif";


// Lista de plantas
const plants = [
  { id: "1", name: "Samambaia", price: 29.9, light: "shade", image: Samambaia },
  { id: "2", name: "Suculenta", price: 19.9, light: "sun", image: Suculenta },
  { id: "3", name: "Espada-de-São-Jorge", price: 49.9, light: "shade", image: EspadaDeSaoJorge },
  { id: "4", name: "Jiboia", price: 39.9, light: "sun", image: Jiboia },
  { id: "5", name: "Aloe Vera", price: 24.9, light: "sun", image: AloeVera },
  { id: "6", name: "Cacto", price: 14.9, light: "sun", image: Cacto },
];

export default function PlantGrid() {
  // Detecta tamanho da tela
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  // Define número de colunas
  let columns = 3;
  if (isMobile) columns = 1;
  else if (isTablet) columns = 2;

  // Define tamanho das colunas do Grid
  const smCols = columns === 2 ? 6 : 12;
  const mdCols = columns === 3 ? 4 : 12;

  return (
    <Grid container spacing={2}>
      {plants.map((plant) => (
        <Grid item xs={12} sm={smCols} md={mdCols} key={plant.id}>
          <PlantCard plant={plant} />
        </Grid>
      ))}
    </Grid>
  );
}
