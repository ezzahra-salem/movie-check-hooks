import { useState } from "react";
const Add = ({ fatma }) => {
  const [addm, setaddm] = useState({});
  return (
    <div className='form'>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setaddm({ ...addm, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Rate"
        onChange={(e) => setaddm({ ...addm, rate: e.target.value })}
      />
      <input
        type="text"
        placeholder="image"
        onChange={(e) => setaddm({ ...addm, Imag: e.target.value })}
      />
      <button onClick={() => fatma(addm)}>ok </button>
    </div>
  );
};

export default Add;
