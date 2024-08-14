import Transcriptor from "./components/Transcriptor";

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-0">
      <h1 className="w-full text-2xl font-semibold text-black text-center p-4">
        Transcriptor
      </h1>
      <Transcriptor />
    </div>
  );
}

export default App;
