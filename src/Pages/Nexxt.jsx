import React, { useContext, useState, useEffect } from 'react'
import { context } from '../main';
import { useNavigate } from 'react-router-dom';
export default function Nexxt() {
  const [state, setState]=useState("");

  const {id, day, setre, setbill, setTime}=useContext(context);

  const navigateTo=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();

      const borrowDateObj = new Date(day);
      const returnDateObj = new Date(state);
      console.log(borrowDateObj,returnDateObj);
      const timeDifference = returnDateObj - borrowDateObj;
      const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

      let cost=0;

      if(dayDifference===0){
          cost=5;
      }
      else{
        if(dayDifference<=7){
          cost=5*dayDifference;
        }
        if(dayDifference>=7){
          cost=5*7;
          cost+=10*(dayDifference-7);
        }
      }

      setre(state);
      setTime(dayDifference);
      setbill(cost);

      const response=await fetch("http://localhost:5000/api/use/moreinfo",
        {method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId:id, returnDate:state, billAmount: cost }), 
        });
        console.log(response);

        navigateTo("/calcu");
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">returnDate</label>
          <input type="date" value={state} name="borrowDate" onChange={(e)=>{setState(e.target.value)}} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
