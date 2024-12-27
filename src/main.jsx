import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export const context=createContext();

const Sta=()=>{
  const [id, setid]=useState("");
  const [day, setday]=useState("");
  const [time, setTime]=useState("");
  const [re, setre]=useState("");
  const [bill, setbill]=useState(0);
  return(
    <context.Provider value={{id, setid, day, setday, re, setre, time, setTime, bill, setbill}}>
        <App/>
    </context.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Sta/>
  </StrictMode>
)
