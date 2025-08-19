// src/pages/PlantStorage.jsx
import React from "react";
import StoreLayout from "../components/templates/StoreLayout";
import PlantGrid from "../components/organisms/PlantGrid";

const PlantStorage = () => {
  return (
    <StoreLayout>
      <h1 className="text-2xl font-semibold mb-4">🌿 Meu Estoque de Plantas</h1>  
      <PlantGrid />
    </StoreLayout>
  );
};

export default PlantStorage;
