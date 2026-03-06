import SearchForm from "./components/SearchForm";
import ResultCard from "./components/ResultCard";
import { useErrorSearch } from "./hooks/useErrorSearch";
import Historico from "./components/Historico";

function App() {
  const {
    marcaSelect,
    setMarcaSelect,
    codigoDigitado,
    setCodigoDigitado,
    resultado,
    buscou,
    buscarErro,
    handleKeyDown,
    historico,
    buscarPorHistorico,
    limparHistorico,
  } = useErrorSearch();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">AC Error Finder</h1>
        <SearchForm
          marcaSelect={marcaSelect}
          setMarcaSelect={setMarcaSelect}
          codigoDigitado={codigoDigitado}
          setCodigoDigitado={setCodigoDigitado}
          onBuscar={buscarErro}
          handleKeyDown={handleKeyDown}
        />
        <ResultCard resultado={resultado} buscou={buscou} />
        <Historico
          historico={historico}
          onBuscar={buscarPorHistorico}
          onLimpar={limparHistorico}
        />
      </div>
    </div>
  );
}

export default App;
