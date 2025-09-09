import { useState } from "react";

const Modal = ({ setIsOpen }) => {
    const [form,setForm]=useState({
        name:"",
        email:"",
        phone:"",
        DOB:""
    })

    const change=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const check=(data)=>{
        const date=new Date();
        const selectDate=new Date(data.DOB);
        date.setHours(0,0,0,0);
        selectDate.setHours(0,0,0,0);
        if(data.phone.length<10){
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return false;
        }
        if(selectDate>date){
            alert("Invalid date of birth. Date of birth cannot be in future.");
            return false;
        }
        return true;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(check(form)){
            setIsOpen(false);
        }
        
    }
  return (
    <div className="modal" onClick={()=>setIsOpen(false)}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={form.name} name="name" onChange={(e)=>change(e)} required />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" value={form.email} name="email" onChange={(e)=>change(e)} required />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value={form.phone} name="phone" onChange={(e)=>change(e)} required />
          </div>
          <div className="form-item">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" value={form.DOB} name="DOB" onChange={(e)=>change(e)} required />
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
