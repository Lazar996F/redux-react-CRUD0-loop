import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import DeletePlatformMutation from "../mutations/DeletePlatform";
import DeleteRegionMutation from "../mutations/DeleteRegion";

const ListItem = styled.div`
  margin-left: -12em;
`;

const responseCondition = (res) => {
  if (res.message) {
    notifyError(res.message);
  } else if (res) {
    notifySuccess();
  }
};

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
// CONFIRMATION MODAL ****************************
function ConfirmationModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(true);
  }, [props.selectedId]);

  const deleteItem = () => {
    if (props.type === "platform") {
      return DeletePlatformMutation(
        props.selectedId,
        props.passedRegionId,
        (res) => responseCondition(res)
      );
    }
    if (props.type === "region") {
      return DeleteRegionMutation(props.selectedId, (res) =>
        responseCondition(res)
      );
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.item} will be deleted </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              deleteItem();
              handleClose();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function RemoveItemModal(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const itemNames = props.items.map((item) => item.name);
  useEffect(() => {
    const results = itemNames.filter((itemName) =>
      itemName.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, itemNames.length]);

  const handleItem = (e) => {
    setSelectedItem(e.target.value);
    props.items.forEach((element) => {
      if (element.name === e.target.value) {
        setSelectedId(element.id);
      }
    });
  };

  return (
    <div>
      <InputGroup className="mb-3" onChange={handleChange} value={searchTerm}>
        <FormControl
          placeholder="Search"
          aria-label="Platform's name"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          {selectedItem && (
            <ConfirmationModal
              item={selectedItem}
              type={props.type}
              selectedId={selectedId}
              passedRegionId={props.regionId}
            />
          )}
        </InputGroup.Append>
      </InputGroup>
      <ul class="list-group">
        {searchResults.map((item, index) => (
          <li
            key={index}
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <h4>{item}</h4>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              value={item}
              onClick={(e) => {
                handleItem(e);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveItemModal;
