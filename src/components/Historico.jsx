import React from "react";

const Historico = ({ historico, onBuscar, onLimpar }) => {
  return (
    <div className="mt-6 bg-gray-50 border rounded-2xl p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Últimas Buscas</h3>
        <button
          onClick={onLimpar}
          className="text-sm text-red-600 hover:underline"
        >
          Limpar
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {historico.map((item, index) => (
          <button
            key={index}
            onClick={() => onBuscar(item.codigo)}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-xl text-sm hover:bg-blue-200"
          >
            {item.codigo}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Historico;
