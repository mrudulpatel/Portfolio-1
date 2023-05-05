import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function Home() {
  const steps = [
    {
      id: "0",
      message: "Hey Geek!",

      // This calls the next id
      // i.e. id 1 in this case
      trigger: "1",
    },
    {
      id: "1",

      // This message appears in
      // the bot chat bubble
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",

      // Here we want the user
      // to enter input
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: "5",
    },
    // {
    //   id: "4",
    //   options: [
    //     // When we need to show a number of
    //     // options to choose we create alist
    //     // like this
    //     { value: 1, label: "View Courses" },
    //     { value: 2, label: "Read Articles" },
    //   ],
    // },
    {
      id: "5",
      options: [
        {value:1, label: "Waterproofing on walls", trigger: "6"},
        {value:2, label: "Waterproofing on floors"},
        {value:3, label: "Waterproofing on roofs"},
        {value:4, label: "Waterproofing on terraces"},
        {value:5, label: "Waterproofing on balconies"},
        {value:6, label: "Waterproofing on bathrooms"},
        {value:7, label: "Waterproofing on toilets"},
        {value:8, label: "Waterproofing on swimming pools"},
      ],
    },
    {
      id: "6",
      message: "Click here: https://www.youtube.com/watch?v=Q8TXgCzxEnw",
    }
  ];

  // Creating our own theme
  const theme = {
    background: "#C9FF8F",
    headerBgColor: "#197B22",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    // floating: true,
    botDelay: 1000,
    width: "00px",
    height: "400px",
    // headerTitle: "Sanco",
    placeholder: "Type here...",
    // position left
    floating: true,
    opened: true,
  };
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          {/* <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MRUDUL PATEL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row> */}
          {/* <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MRUDUL PATEL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row> */}
        </Container>
        <Container>
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} headerTitle="Sanco" />
          </ThemeProvider>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
