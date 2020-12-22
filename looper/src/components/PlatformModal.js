import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import CreatePlatform from "../mutations/CreatePlatform";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RemoveItemModal from "../components/RemoveItemModal";
import { BounceLoader } from "react-spinners";

function PlatformModal(props) {
  const [platformName, setPlatformName] = useState("");
  const [regionId, setRegionId] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setRegionId(props.regionId);
  }, [props.regionId]);

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
    } else if (res) {
      notifySuccess();
    }
  };

  const createPlatformSubmit = () => {
    setLoading(true);
    CreatePlatform(platformName, props.regionId, (res, isCompleted) =>
      responseCondition(res, isCompleted)
    );
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create or remove Platform</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup
          className="mb-3"
          onChange={(e) => setPlatformName(e.target.value)}
        >
          <FormControl
            placeholder="Platform's name"
            aria-label="Platform's name"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button
              onClick={() => createPlatformSubmit()}
              variant="outline-primary"
            >
              Create
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {isLoading && <BounceLoader color="blue" />}
        <RemoveItemModal
          items={props.items}
          regionId={regionId}
          type="platform"
        />
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

export default PlatformModal;
