import React from "react";

import { Tabs, Tab } from "react-bootstrap";

import TabInformation from "../../components/TabInformation";
import TabAnamnesis from "../../components/TabAnamnesis";

import "./index.scss";

const Detail = () => {
  return (
    <div className="container-detail">
      <h2 className="text-allergy">ALERGICO: LATEX</h2>
      <Tabs
        defaultActiveKey="information"
        id="tab-detail"
        className="mb-3 tab-detail"
        fill
      >
        <Tab eventKey="information" title="Información">
          <TabInformation />
        </Tab>
        <Tab eventKey="anamnesis" title="Anamnesis">
          <TabAnamnesis />
        </Tab>
        <Tab eventKey="treatments" title="Tratamientos">
          Tratamientos
        </Tab>
      </Tabs>
    </div>
  );
};

export default Detail;
