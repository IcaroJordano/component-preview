import { useState } from "react";
import { TbArrowBigUpLine } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { BiX } from "react-icons/bi";

const FormPdf = () => {
  const [pdfName, setPdfName] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleChangePdf = (event) => {
    const file = event.target.files[0];
    if (file?.type === "application/pdf") {
      setPdfName(file.name);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    } else {
      setPdfName("");
      setPdfUrl(null);
    }
  };

  const handleRemovePdf = () => {
    setPdfName("");
    setPdfUrl(null);
  };

  return (
    <div className="w-full">
      {/* PDF VISUALIZAÇÃO */}
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-96 mb-4 border rounded"
        ></iframe>
      )}

      {/* ÁREA DE INPUT */}
      <input
        type="file"
        id="InputForm"
        accept="application/pdf"
        onChange={handleChangePdf}
        className="hidden"
      />

      {/* SE PDF FOI SELECIONADO */}
      {pdfName ? (
        <label htmlFor="InputForm" className="border rounded-sm text-neutral-800 text-sm py-3 items-center justify-between px-4 flex border-neutral-300 bg-neutral-100">
          <p className="flex items-center">
            <FaFileAlt className="me-2" />

            <span className="w-9/12 lg:w-10/12 overflow-hidden text-ellipsis whitespace-nowrap">
              {pdfName ? pdfName : "Anexe um arquivo"}
            </span>
          </p>
          <BiX
            onClick={handleRemovePdf}
            className="cursor-pointer text-xl"
            title="Remover PDF"
          />
        </label>
      ) : (
        // SE NENHUM PDF FOI SELECIONADO
        <div className="border border-neutral-300 gap-2 rounded-sm text-neutral-500 py-12 text-sm flex items-center flex-col w-full bg-neutral-100">
          <TbArrowBigUpLine className="text-6xl text-neutral-500" />
          <p className="font-semibold">Arraste um arquivo aqui</p>
          <p>ou</p>
          <label
            htmlFor="InputForm"
            className="bg-sky-900 py-2 text-neutral-200 text-center rounded-xs px-3 text-base cursor-pointer"
          >
            Selecione o arquivo
          </label>
        </div>
      )}
    </div>
  );
};

export default FormPdf;
