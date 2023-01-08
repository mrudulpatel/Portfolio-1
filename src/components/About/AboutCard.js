import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mrudul Patel </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br />I am an engineering student pursuing{" "}
            <span className="purple">B.E. Computer Engineering</span> from{" "}
            <span className="purple">JSPM Narhe Technical Campus, Pune</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Keyboard/Piano
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
