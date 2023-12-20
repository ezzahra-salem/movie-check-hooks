export default function Modal({ showModal, setshowModal }) {
  const handleSubmit = () => {
    // any action that u want when clicking on save changes

    setshowModal(false);
  };

  return (
    showModal === true && (
      <div className="modal-bg">
        <div className="modal">
          <div className="modal-header">
            <h2>Modal name</h2>
            <button onClick={() => setshowModal(false)}>x</button>
          </div>

          <div className="content">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your phone number" />
            <input type="text" placeholder="Your image" />
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="modal-footer">
            <button onClick={() => setshowModal(false)}>Close</button>
            <button onClick={handleSubmit}>Save changes</button>
          </div>
        </div>
      </div>
    )
  );
}
