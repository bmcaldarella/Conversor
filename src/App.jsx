import { useState } from "react";
import "./App.css";
import euro from "./assets/euro.png";
import argentina from "./assets/argentina.png";
import colombia from "./assets/colombia.png";
import mex from "./assets/mexico.png";
import usa from "./assets/usa.png";

export default function App() {
  const [change, SetChange] = useState(0);
  const [result0,SetResult0]= useState(0)
  const [result1,SetResult1]= useState(0)
  const [result2,SetResult2]= useState(0)
  const [result3,SetResult3]= useState(0)


  const convertir = (e) => {
    SetChange(e.target.value);
    SetResult0(e.target.value*Currency[1].cambio);
    SetResult1(e.target.value*Currency[2].cambio);
    SetResult2(e.target.value*Currency[3].cambio);
    SetResult3(e.target.value*Currency[4].cambio);
 

  };
  
  const Currency = [
    {
      moneda: "Euro",
      cambio: 1,
    },
    {
      moneda: "Peso argentino",
      cambio: 118.6,
    },
    {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    },
    {
      moneda: "Peso mexicano",
      cambio: 23.2,
    },
    {
      moneda: "Dólar",
      cambio: 1.14,
    },
  ];
  return (
    <>

      <div className="container">

      
        <h1>Conversor de moneda</h1>

      
        

        <div className="forms">
          <label htmlFor="u0">
            <img className="bandera" src={euro} alt="" /> EUR -{" "}
            <span>Euro</span>
          </label>
          <input
            id="u0"
            type="number"
            className="form-control form-control-lg form "
            min={0}
            placeholder="€ 0"
            onChange={convertir}
          />
          <label htmlFor="arg">
            {" "}
            <img className="bandera" src={argentina} alt="" /> ARS -{" "}
            <span>Peso Argentino</span>
          </label>
          <input
            type="number"
            className="form-control  form-control-lg form "
            name="Peso Argentino"
            value={result0}
            id="arg"
            readOnly
          />
          <label htmlFor="col">
            <img className="bandera" src={colombia} alt="" /> COP -{" "}
            <span>Peso Colombiano</span>{" "}
          </label>
          <input
            type="number"
            className="form-control  form-control-lg form"
            name="Peso colombiano"
            value={result1}

            id="col"
            readOnly
          />
          <label htmlFor="mx">
            <img className="bandera" src={mex} alt="" /> MXN -{" "}
            <span>Peso Mexicano</span>{" "}
          </label>
          <input
            type="number"
            className="form-control  form-control-lg form"
            name="Peso Mexicano"
           
            value={result2}

            id="mx"
            readOnly
          />
          <label htmlFor="usd">
            <img className="bandera" src={usa} alt="" /> USD -{" "}
            <span>Dollar Americano</span>
          </label>
          <input
            type="usd"
            className="form-control  form-control-lg form"
            name="Dolar"
            value={result3}
            id="usd"
            readOnly
          />
        </div>
      </div>
    </>
  );
}
