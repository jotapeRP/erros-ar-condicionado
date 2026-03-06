import { useState, useEffect } from "react";
import erros from "../data/erros.json";

export function useErrorSearch() {
  const [marcaSelect, setMarcaSelect] = useState("Gree");
  const [codigoDigitado, setCodigoDigitado] = useState("");
  const [resultado, setResultado] = useState(null);
  const [buscou, setBuscou] = useState(false);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const historicoSalvo = localStorage.getItem("historicoErros");

    if (historicoSalvo) {
      setHistorico(JSON.parse(historicoSalvo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("historicoErros", JSON.stringify(historico));
  }, [historico]);

  const buscarErro = () => {
    if (!codigoDigitado.trim()) return;

    const codigoNormalizado = codigoDigitado.trim().toUpperCase();

    const encontrado = erros.find(
      (item) =>
        item.marca === marcaSelect &&
        item.codigo.toUpperCase() === codigoNormalizado,
    );
    setResultado(encontrado || null);
    setBuscou(true);

    setHistorico((prev) => [
      { marcaSelect, codigo: codigoNormalizado, data: new Date() },
      ...prev.slice(0, 4),
    ]);

    setCodigoDigitado("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buscarErro();
    }
  };

  const buscarPorHistorico = (codigoHistorico) => {
    setCodigoDigitado(codigoHistorico);

    const encontrado = erros.find(
      (item) =>
        item.marca === marcaSelect &&
        item.codigo.toUpperCase() === codigoHistorico.toUpperCase(),
    );

    setResultado(encontrado || null);
    setBuscou(true);
  };

  const limparHistorico = () => {
    setHistorico([]);
  };

  return {
    marcaSelect,
    setMarcaSelect,
    codigoDigitado,
    setCodigoDigitado,
    resultado,
    buscou,
    historico,
    buscarErro,
    handleKeyDown,
    buscarPorHistorico,
    limparHistorico,
  };
}
