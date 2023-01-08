import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiHtml5,
  SiBootstrap,
  SiCss3,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          C++
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          Java
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          Python
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          HTML 5
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          CSS 3
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          Bootstrap
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          Javascript
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          ReactJS
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          MongoDB
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          MySQL
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          Git
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={
        <Tooltip>
          Firebase
        </Tooltip>
      }>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
