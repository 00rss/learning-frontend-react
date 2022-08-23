import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [dataApi, setdataApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/notes")
      .then((res) =>
        res.status === 200
          ? res.json()
          : console.log(`error status: ${res.status}`)
      )
      .then((data) => {
        console.log(data);
        setdataApi(data);
      });
  }, []);
  useEffect(() => {
    console.log(dataApi);
  }, [dataApi]);
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-slate-200 gap-10">
      <div className="text-2xl bg-gradient-to-t from-slate-600 to-slate-800 h-28 w-[min(500px,90%)] flex justify-center items-center">
        <p className="text-center">Home</p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        {dataApi &&
          dataApi.map((item, i) => (
            <div key={i} className="w-[min(400px,90%)] border-2 p-2">
              <h1>{`Nota: ${i + 1}`}</h1>
              <section className="flex flex-row">
                <h1>date: </h1>
                <p>{item.date}</p>
              </section>
              <section className="flex flex-col">
                <h1>content: </h1>
                <p>{item.content}</p>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
