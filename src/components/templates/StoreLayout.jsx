// components/StoreLayout.jsx
import React from "react";

const StoreLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 text-center text-xl font-bold">
        🌱 PlantStore
      </header>

      {/* Conteúdo */}
      <main className="flex-1 p-6 bg-green-50">{children}</main>

      {/* Footer */}
      <footer className="bg-green-700 text-white p-4 text-center">
        © 2025 PlantStore - Todos os direitos reservados
      </footer>
    </div>
  );
};

export default StoreLayout;
