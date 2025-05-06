import { useState } from "react";
import validarCPF from "./validarCpf";
import { BiCheck } from "react-icons/bi";
import { GoAlertFill } from "react-icons/go";

const InputCpt = () => {
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleCpfChange = (e) => {
    let rawValue = e.target.value.replace(/\D/g, "");

    if (rawValue.length > 11) rawValue = rawValue.slice(0, 11);

    if (rawValue.length === 11) {
      validarCPF(rawValue, setIsValid);
    } else {
      setIsValid(true);
    }
    let formatted = rawValue
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");

    setCpf(formatted);
  };

  return (
    <div>
      <input
        value={cpf}
        onChange={handleCpfChange}
        placeholder="000.000.000-00"
        className={`focus:underline text-neutral-600 underline-offset-2   focus:outline-none focus:ring-0 w-full border-b-2 ${
          cpf.length != 0 ? "border-purple-800 " : "border-red-500"
        } pb-2`}
      />
      {cpf.length === 14 && <CpfFeedback isValid={isValid} />}
    </div>
  );
};

const CpfFeedback = ({ isValid }) => (
  <div
    className={`border-x-4 bg-neutral-50 py-4 ${
      isValid
        ? "border-green-600 text-green-600"
        : "border-amber-500 text-amber-500"
    } shadow-lg mt-4 flex items-center ps-8 gap-4`}
  >
    {isValid ? (
      <BiCheck className="bg-green-500 text-white rounded-full" />
    ) : (
      <GoAlertFill />
    )}
    CPF {isValid ? "válido" : "inválido"}
  </div>
);

export default InputCpt;
