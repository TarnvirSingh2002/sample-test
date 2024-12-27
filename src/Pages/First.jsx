import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { context } from '../main';

export default function First() {

  const navigate=useNavigate();

  const {setid, setday} = useContext(context);

  const [state, setState]= useState({
    bookId:"",
    bookTitle:"",
    name:"",
    contact:'',
    borrowDate:'',
  });
  const handleChane=(e)=>{
    setState({...state,[e.target.name]:[e.target.value]});
  }

  const handleclick=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/use/sith",
      {method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({bookId:state.bookId[0], bookTitle:state.bookTitle[0], name:state.name[0], 
        contact:state.contact[0],
        borrowDate:state.borrowDate[0]
      }), 
      });
      setid(state.bookId);
      setday(state.borrowDate);
      console.log(response);
      navigate('/next');

  }
  return (
    <>
      <form onSubmit={handleclick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">bookId</label>
          <input type= "text" value={state.bookId} name="bookId" onChange={handleChane} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">bookTitle</label>
          <input type= "text" value={state.bookTitle} name="bookTitle" onChange={handleChane} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">name</label>
          <input type= "text" value={state.name} name="name" onChange={handleChane} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">contact</label>
          <input type="Number" value={state.contact} name="contact" onChange={handleChane} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">borrowDate</label>
          <input type="date" value={state.borrowDate} name="borrowDate" onChange={handleChane} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


    </>
  )
}
