import { useState } from "react";
import { BiX } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const options = ["Setor 1", "Setor 2", "Setor 3", "Setor 4", "Setor 5"];

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [itenSelected, setItenSelected] = useState([]);

  return (
    <div className="relative w-full">
      <button
        className="w-full bg-white border-gray-300 rounded-md px-4 py-2 text-left border text-xs text-neutral-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          {itenSelected.length > 0 ? "Selecionado" : "Setor"}{" "}
          <IoMdArrowDropdown />
        </div>

        {itenSelected.length > 0 ? (
          <>
            <div className="flex gap-2 mt-2 flex-wrap">
              {itenSelected.map((itemName) => (
                <span
                  key={itemName}
                  className="bg-sky-800 px-2 items-center justify-between flex text-white rounded-xl py-1"
                >
                  {itemName}
                  <BiX
                    onClick={(e) => {
                      e.stopPropagation(); // Evita abrir/fechar o menu ao clicar no X
                      setItenSelected(
                        itenSelected.filter((item) => item !== itemName)
                      );
                    }}
                    className="ms-2 cursor-pointer"
                  />
                </span>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow mt-1 max-h-60 overflow-auto">
          {/* Select All */}
          <div
            onClick={() => {
              if (itenSelected.length === options.length) {
                setItenSelected([]);
              } else {
                setItenSelected(options);
              }
            }}
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center border-b border-gray-200"
          >
            <input
              type="checkbox"
              className="mr-4 w-3 h-3"
              checked={itenSelected.length === options.length}
              readOnly
            />
            <span className="text-neutral-700  text-xs">
              {itenSelected.length === options.length
                ? "Limpar seleção"
                : "ALL"}
            </span>
          </div>

          {/* Opções normais */}
          {options.map((option) => {
            const isChecked = itenSelected.includes(option);
            return (
              <div
                key={option}
                onClick={() => {
                  if (isChecked) {
                    setItenSelected(
                      itenSelected.filter((item) => item !== option)
                    );
                  } else {
                    setItenSelected([...itenSelected, option]);
                  }
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center"
              >
                <input
                  type="checkbox"
                  className="mr-4 w-3 h-3"
                  checked={isChecked}
                  readOnly
                />
                <span className="text-neutral-400 text-sm">{option}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
