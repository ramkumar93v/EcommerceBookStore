import React, { Component } from "react";


const ModalPopup = ({children,title, footer, closeModal}) => {
  return (
    <div className="container">
      <div
        className="modal fade in"
        id="myModal"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>
                &times;
              </button>
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className="modal-body">
            {children}
            </div>
            <div className="modal-footer" style={{display:footer === 'false' ? 'none':'block'}}>
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade in"></div>
    </div>
  );
};

export default ModalPopup;
