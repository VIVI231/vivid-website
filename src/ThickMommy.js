import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

const ThickMommy = () => {
  const notify = () => {
    setCount(count + 1)
    if (count <= 5){
      toast("AHH");
      
    }
    else {
      toast("AKU CROT BANG AHAHAHAHAH");
      setthick("/absurd.jpg")
    }
  };
  const [count, setCount] = useState(0);
  const [thick, setthick] = useState("/thickmommy.jpg");
  return (
    <div>
      <h4>HIDUP SEPERTI LARRY</h4>
      <i>Hidup seperti larry</i>
      {count}
      <button onClick={notify}>TUSUK</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <img src={thick} className="thickmommyuwu"></img>
    </div>
  );
};

export default ThickMommy;
