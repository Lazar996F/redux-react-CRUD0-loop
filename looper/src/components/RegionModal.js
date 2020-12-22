import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import CreateRegionMutation from "../mutations/CreateRegionMutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RemoveItemModal from "../components/RemoveItemModal";
import { BounceLoader } from "react-spinners";

function RegionModal(props) {
  const [regionName, setRegionName] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    isLoading && setLoading(false);
  }, [isLoading]);

  const notifySuccess = () => {
    toast.success(`SUCCESS`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = (err) => {
    toast.error(`${err}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const responseCondition = (res, isCompleted) => {
    setLoading(isCompleted);
    if (res.message) {
      notifyError(res.message);
    } else {
      notifySuccess();
    }
  };

  const createRegionSubmit = () => {
    setLoading(true);
    CreateRegionMutation(regionName, (res, isCompleted) =>
      responseCondition(res, isCompleted)
    );
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create or remove Region</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup
          className="mb-3"
          onChange={(e) => setRegionName(e.target.value)}
        >
          <FormControl
            placeholder="Region's name"
            aria-label="Region's name"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button onClick={createRegionSubmit} variant="outline-primary">
              Create
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {isLoading && <BounceLoader color="blue" />}
        <RemoveItemModal items={props.items} type="region" />
      </Modal.Body>
      {isLoading && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </Modal>
  );
}
export default RegionModal;
