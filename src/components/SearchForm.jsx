import React from "react";

const SearchForm = ({
  marcaSelect,
  setMarcaSelect,
  codigoDigitado,
  setCodigoDigitado,
  onBuscar,
  handleKeyDown,
}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="marcaSelecionada" className="block mb-1 font-medium">
          Selecione a marca:
        </label>
        <select
          id="marcaSelecionada"
          value={marcaSelect}
          onChange={(e) => setMarcaSelect(e.target.value)}
        >
          <option value="Gree">Gree</option>
          <option value="LG">LG</option>
          <option value="Midea">Midea</option>
          <option value="Daikin">Daikin</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Código do erro:</label>
        <input
          type="text"
          value={codigoDigitado}
          placeholder="EX: E1"
          onChange={(e) => setCodigoDigitado(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 border rounded-xl"
        />
      </div>
      <button
        onClick={onBuscar}
        className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Buscar
      </button>
    </>
  );
};

export default SearchForm;
