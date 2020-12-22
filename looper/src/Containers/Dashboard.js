import React, { useState } from "react";
import Actionbar from "../Containers/Actionbar";
import DataTable from "../components/DataTable";
import Titlebar from "../components/Titlebar";

function Dashboard(props) {
  const [scanId, setScanId] = useState("");

  const getScanId = (selectedScanId) => {
    setScanId(selectedScanId);
  };
  return (
    <>
      <Actionbar regions={props.regions} getScanId={getScanId} />
      <Titlebar />
      <DataTable scanId={scanId} />
    </>
  );
}

export default Dashboard;
