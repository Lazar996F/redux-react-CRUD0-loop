import React, { useState, useEffect, useCallback } from "react";
//import { useDispatch } from "react-redux";
//import { setSelectedScan } from "../actions/scanActions";
//import { setSelectedPlatform } from "../actions/platformActions";
//import { setSelectedTerritory } from "../actions/territoriesActions";
import ImageTV from "../images/appleTV.png";
import styled, { css } from "styled-components";
import { Row, Col, Image } from "react-bootstrap";
import Dropdown from "../components/Dropdown";
import PlatformModal from "../components/PlatformModal";
import RegionModal from "../components/RegionModal";
import moment from "moment";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import CreateSpotStatistic from "../mutations/CreateSpotStatistic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  margin: 1em;
`;

const ButtonMy = styled.button`
  margin-top: 15px;
  margin-bottom: 20px;
  margin-bottom: 20px;
  padding-right: 8px;
  padding-top: 0px;
  padding-left: 8px;
  background: linear-gradient(to bottom, #014584, #6a9dbc);
  background-color: #44c767;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  text-shadow: 0px 1px 0px #2f6627;
  border: 0;

  :hover {
    background: linear-gradient(to bottom, #014584 5%, #014584 100%);
    background-color: #82b9d0;
  }
  :active {
    position: relative;
    top: 1px;
  }

  ${(props) =>
    props.type === "text" &&
    css`
      @media screen and (min-width: 1900px) {
        margin-left: 22em;
      }
      margin-top: 15px;
      margin-bottom: 20px;
      margin-bottom: 20px;
      margin-left: 216px;
      padding-right: 11px;
      padding-top: 0p;
      padding-left: 18px;
      background: linear-gradient(to bottom, #014584, #6a9dbc);
      background-color: #44c767;
      border-radius: 4px;
      display: inline-block;
      cursor: pointer;
      color: #fff;
      font-size: 18px;
      text-shadow: 0px 1px 0px #2f6627;
      border: 0;
      font-size: 15px;
      line-height: 37px;
    `}
`;

function Actionbar(props) {
  //const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [regionShow, setRegionShow] = useState(false);
  const regionClose = () => setRegionShow(false);
  const handleRegionShow = () => setRegionShow(true);
  const [scanId, setScanId] = useState("");
  const [platformsByRegion, setPlatformsByRegion] = useState([]);
  const [scansByPlatformId, setScansByPlatform] = useState([]);
  const [regionId, setRegionId] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setPlatformsByRegionId(regionId);
  }, [props.regions]);

  useEffect(() => {
    setLoading(true);
  }, [isLoading]);

  const notifySuccess = () => {
    toast.success(`Statistic created`, {
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
      notifySuccess(res);
    }
  };
  const generateStatistics = () => {
    CreateSpotStatistic(scanId, (res, isCompleted) =>
      responseCondition(res, isCompleted)
    );
  };
  const setPlatformsByRegionId = (regionId) => {
    const region = props.regions.find((region) => region.id === regionId);
    const platforms = region && region.platformsByTerritoryId;
    platforms && setPlatformsByRegion(platforms.nodes);
  };

  const setScansByPlatformId = (platformId) => {
    const platform = platformsByRegion.find(
      (platform) => platform.id === platformId
    );
    const scans = platform.scansByPlatformId;
    !scans && setScansByPlatform([]);
    scans && setScansByPlatform(scans.nodes);
  };

  const handleDropdownChange = (e, type) => {
    switch (type) {
      case "scan":
        setScanId(e.target.value);
        props.getScanId(e.target.value);
        return console.log("chosen scan ID is", e.target.value);
      //return dispatch(setSelectedScan(e.target.value));
      case "platform":
        return setScansByPlatformId(e.target.value);
      //return dispatch(setSelectedPlatform(e.target.value));
      case "territory":
        setRegionId(e.target.value);
        return setPlatformsByRegionId(e.target.value);
      //return dispatch(setSelectedTerritory(e.target.value));
    }
  };
  const scanDates = scansByPlatformId.map((scan) => ({
    value: moment(scan.createdAt).format("DD MMMM YYYY"),
    id: scan.id,
  }));

  const platformNames = platformsByRegion.map((platform) => ({
    value: platform.name,
    id: platform.id,
  }));

  const territoryNames = props.regions.map((territory) => ({
    value: territory.name,
    id: territory.id,
  }));

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Image src={ImageTV} />
        </Col>
        <Col md={2} className="mt-2">
          <Dropdown
            handleSelected={(e) => handleDropdownChange(e, "scan")}
            items={scanDates}
            subtitle="COMPARE"
          />
        </Col>
        <Col md={2} className="mt-2">
          <Dropdown
            handleSelected={(e) => handleDropdownChange(e, "platform")}
            items={platformNames}
            subtitle="PLATFORM"
          />
        </Col>
        <ButtonMy onClick={handleShow}>{"+"}</ButtonMy>
        <PlatformModal
          show={show}
          onHide={handleClose}
          items={platformsByRegion}
          regionId={regionId}
        />
        <Col md={2} className="mt-2">
          <Dropdown
            handleSelected={(e) => handleDropdownChange(e, "territory")}
            items={territoryNames}
            subtitle="Region"
          />
        </Col>
        <ButtonMy onClick={handleRegionShow}>{"+"}</ButtonMy>
        <RegionModal
          show={regionShow}
          onHide={regionClose}
          items={props.regions}
        />
        <Col>
          <ButtonMy
            type="text"
            onClick={generateStatistics}
            variant="outline-primary"
            className="mt-2"
          >
            Calculate Statistic
          </ButtonMy>
        </Col>
      </Row>
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
    </Container>
  );
}
export default createFragmentContainer(Actionbar, {
  scans: graphql`
    fragment Actionbar_scans on ScansConnection {
      nodes {
        id
        createdAt
        regionByTerritoryId {
          name
          id
        }
        platformByPlatformId {
          name
          id
        }
      }
    }
  `,
});
