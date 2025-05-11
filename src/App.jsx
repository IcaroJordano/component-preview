import InputCpt from "./components/CpfForm/InputCpf";
import FormPdf from "./components/FormPdf/FormPdf";
import InputPdf from "./components/InputPdf/InputPdf";
import SelectMulti from "./components/SelectMulti";

function App() {
  return (
    <div className="bg-neutral-100 py-8 m-0">
      <div className="lg:w-8/12  bg-neutral-50 lg:border lg:shadow py-32  mt-4 lg:mt-0 border-neutral-200 rounded-xl px-8 gap-16 pt-32 lg:pt-8 mx-auto flex flex-col  ">
        <FormPdf />
        <InputPdf />
        <div className="hidden lg:flex gap-4">
          <div className="lg:w-6/12 ">
            <FormPdf />
          </div>
          <div className="lg:w-6/12 ">
            <InputPdf />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
