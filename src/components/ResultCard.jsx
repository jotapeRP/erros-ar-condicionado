import React from "react";

const ResultCard = ({ resultado, buscou }) => {
  if (!buscou) return null;

  if (!resultado) {
    return (
      <div className="mt-6 bg-yellow-50 border border-yellow-400 rounded-2xl p-4 text-center">
        Código não encontrado
      </div>
    );
  }
  return (
    <div className="mt-6 bg-red-50 border border-red-400 rounded-2xl p-4 shadow-md">
      <h2 className="text-xl font-bold text-red-700 mb-2">
        {resultado.codigo} - {resultado.descricao}
      </h2>
      <h3 className="font-semibold mt-3">Possíveis causas:</h3>
      <ul className="list-disc list-inside txt-sm">
        {resultado.causas.map((causa, index) => (
          <li key={index}>{causa}</li>
        ))}
      </ul>
      <h3 className="font-semibold mt-3">Soluções:</h3>
      <ul className="list-disc list-inside text-sm">
        {resultado.solucao.map((sol, index) => (
          <li key={index}>{sol}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultCard;
