import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useState } from "react";
import { useEffect } from "react";
import db from "../../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("name", "asc"));
    onSnapshot(q, (snap) => {
      let arr = [];
      snap.docs.forEach((project) => {
        arr.push(project.data());
      });
      setProjects(arr);
      console.log(arr);
    });
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects?.map((project) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project.image}
                isBlog={false}
                title={project.name}
                description={project.desc}
                ghLink={project.github_link}
                demoLink={project.demo_link}
              />
            </Col>
          ))}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://upmenu.netlify.app/favicon.ico"}
              isBlog={false}
              title="UpMenu"
              description="The Canteen Token System is a web application which focuses on digitalizing the current scenario of ordering food in the canteen. The customer will scan QR Code of the canteen and will be redirected to the canteen’s website. The customer can add items to the cart and checkout. The order will be sent to the canteen admin. After serving the customer, the admin can will remove the order. The website allows the admin to add/remove items from the menu. Built using ReactJS, HTML, CSS, Bootstrap, Material UI, Firebase and deployed on Netlify."
              ghLink="https://github.com/mrudulpatel/Main_Project"
              demoLink="https://upmenu.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
              }
              isBlog={false}
              title="WhatsApp Clone"
              description="WhatsApp is a popular cross-platform messaging app that allows you to exchange messages, photos, and videos with others. You can use it to communicate with your friends, family, and coworkers.. Built using ReactJS, HTML, CSS, Material UI and Firebase"
              ghLink="https://github.com/mrudulpatel/whatsapp-clone"
              demoLink="https://whatsapp-57ee9.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              }
              isBlog={false}
              title="GMail Clone"
              description="Gmail is a free email service developed by Google. Gmail allows you to send and receive emails, create and organize labels and tags for your emails, schedule appointments with Google Calendar, and search through your emails quickly and easily. Built using ReactJS, HTML, CSS, Material UI and Firebase."
              ghLink="https://github.com/mrudulpatel/gmail-clone"
              demoLink="https://clone-4e29d.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://static.vecteezy.com/system/resources/previews/002/432/911/original/social-media-snapchat-original-latest-logo-free-vector.jpg"
              }
              isBlog={false}
              title="Snapchat Clone"
              description="Snapchat is a multimedia messaging app that is used globally, known for its features that allow users to send photos and videos that disappear after they are viewed.. Built using ReactJS, HTML, CSS, Material UI and Firebase"
              ghLink=""
              demoLink="https://snapchat-clone-50633.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              }
              isBlog={false}
              title="Instagram Clone"
              description="Instagram is a photo and video sharing social networking service. It allows users to take photos and videos, and share them on their profile or with their followers. Instagram also has a feature called Stories, which allows users to share photos and videos that disappear after 24 hours. Built using ReactJS, HTML, CSS, Material UI and Firebase."
              ghLink="https://github.com/mrudulpatel/instagram-clone"
              demoLink="https://instagram-clone-roan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAe1BMVEX////0tAD0sQDWngD+9ur/4Wj++Ob++ur75bj+++369Or0tQzUmgD+3GD52WDYoAz989r1tiH87Mr3ynD3zXv88dT/4F/62qDzrQDprAD//fn2v0n1uy7/6Zf1uDD1ujf/54375LH3x2f64ab51oz52pX2xVn+2lb54JG2hsa+AAADm0lEQVRoge3aa3uaMBgG4BK7YMa2AkrFwnAg2P3/X7i8sSoBcgbaXVeeT62Ctwk5Ik9PPj4+Pj4+XzRvz3PmTZc9FGjOFActFZcomDeoxBrs3CqT1XC5ABsEpfLaLlFcWmDFNX4rFmGDoJC36udliksL/Oxd73p36qOQycGzuJRMiqZpikQXn8NFQXPOMA7DEOPs3ARa5zi7KGkzQijJEhKStYnGWa4u2scMDalIQvYXiffq09xcFG1BDQlO667t6hRf/91GqhOdXFRlBJh0l3wsYpJdCjLJKsWZTm4UM+OSPw5D+YV9lzhazs0zYLucPwjlHcBZvpSLavj83fgQtIPvU0vPtXdRQ1ky2XTRHt5qZCfbuxGtZSJYf6EDoTUtucT2LpQpzIRvw5eSdGOH8qahpCrhIoSp+GR7twilbRbaeihejVq7qCWYtJKKlL9v725pNZ+EbBCcaEVv53ehNUv3TgjLWrS1W8W03ciGpJy2u7ia3S1ocWqpW9MKETas/9LdSt3tIm4ZK6Yc6MCxcPdsP26kGu1ZPGC59d+LhL0s039hWiBnyXhFZyTJxGBfzye6dCSS8RmWluLxzGEehIruhPNRJ61mF/cCqxzBzS1Uwkrnssj8CwUOU4FLW7usuE7ruhKLVm9sxYdlt76c1pNs9VaPtgYoqoUrvjncAJ3h89PhYFik8LKkj7m6dAxmWwN+tqswtCnp2O28L8uhxLjK+/d5K7jsZznrvA9ls07KRzVTzeFCZ4Kdfj9Y3oXmc0dZqbwxn9XKWyT9FKu5/LRzWq2eKzToRyuVd7/rZ79aeQmfz+xHq7ifVd5230+7mjvRnldpVxP9d53xKuoNV1F/vIpEmcXN+Dzq+fhTkPe/Ula3Hw2mwVt5jy+/vk3m9bec1XGvN5253hteVznHjcB9/aNgNdYbdQwVyyXLYtiRHzcCV81q3G/P8xzFHBsj+hpjp10NVu93jWTgJuzabgSu8toauNwwyVzGTrlarKbbHfrpkhs74eqxmr9bDR6UuLNjV5O1/H3wxo5cXdbOvbNDV5u1ch/swNXpQPZuj+VdA9bC7bOca8Kauxzbd41YY5dne65+k7JxB+zDNWQN3SF7d01ZM3fE3lxj1sgdsx+uOWvyPNIEe3UtWIPnr6ZY5pp1oHs0nzebZMG1ZDWfr5tmqWvL6j1PKGA3L+821/YW5fOTxx+iKJbniqieF/0ujBPr4+Pj4+Ozdv4BnztkamfuUm0AAAAASUVORK5CYII="
              }
              isBlog={false}
              title="Google Keep Clone"
              description="Google Keep is a note-taking app developed by Google. It allows you to create notes, lists, and voice memos and save them to the cloud. You can access your notes from any device, and you can also share notes with others. Built using ReactJS, HTML, CSS."
              ghLink="https://github.com/mrudulpatel/googlekeep-clone"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
