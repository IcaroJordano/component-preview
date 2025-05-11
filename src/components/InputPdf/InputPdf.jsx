import { useEffect, useRef, useState } from "react";
import { TbArrowBigUpLine } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";

const InputPdf = () => {
  const [pdfName, setPdfName] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const containerRef = useRef(null);

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

  return (
    <div >
          {pdfUrl && (
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-96 mb-4 border rounded"
        ></iframe>
      )}
      <input
        onChange={handleChangePdf}
        id="InputForm"
        className="hidden"
        accept="application/pdf"
        type="file"
      />
      <label htmlFor="InputForm" className="w-full flex text-neutral-500">
        <p className="flex items-center border py-3 text-sm ps-4 border-e-0 rounded-e-none rounded-md w-9/12 border-neutral-300">
          <FaFileAlt className={`${pdfName ? "" : "me-2"} me-2`} />
          <span className="w-9/12 overflow-hidden flex text-ellipsis whitespace-nowrap">
  {pdfName ? pdfName : "Anexe um arquivo"}
  <BiCheck
            className={`${pdfName ? "text-green-500 text-xl ms-2" : "hidden"}`}
          />
</span>


          
        </p>
        <div className="flex items-center border px-2 justify-center rounded-s-none rounded-md w-3/12 border-neutral-300">
          <MdOutlineFileUpload className="text-2xl me-2" />
          <span className="lg:flex hidden">Upload</span>


        </div>
      </label>
    </div>
  );
};

export default InputPdf;
