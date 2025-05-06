import InputCpt from "./components/CpfForm/InputCpf";
import SelectMulti from "./components/SelectMulti";

function App() {
  return (
    <>
      <div className="lg:w-10/12  py-32  mt-4 border-neutral-200 rounded-xl px-8 gap-8 pt-32 lg:pt-8 mx-auto flex flex-col lg:flex-row " >
        <div className="lg:w-4/12">
        <SelectMulti/>

        </div>
        <InputCpt/>

      </div>
    </>
  );
}

export default App;
