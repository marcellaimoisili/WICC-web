import React, { Component } from 'react';
import './pages.css';
import BoardCard from "../components/BoardCard.js";
import illustration from "../images/homepage-illustration.png";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { facultyData } from './facultyData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacultyCard from "../components/FacultyCard.js";


import Image from 'react-bootstrap/Image';



export default class Advisors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pres",
      displayData: []

    };
  }





  render() {



    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    const facultyHeadshots = importAll(require.context('../images/faculty', false, /\.jpg/));
    console.log(facultyHeadshots)
    console.log(facultyData[0])

    function newlineText(text) {
      const newText = text.split('\n').map(str => <p>{str}</p>);

      return newText;
    }


    return (
      <div >

        <h3> Alumni Page Coming Soon</h3>

        {facultyData.map((value) => {
          console.log(value.bio.split('\n'))
          return <Container class='facultyAdjust'>
            <Row style={{ paddingBottom: "3%" }}>
              <Col >


              </Col>
              <Col >
              </Col>
            </Row>
          </Container>


          // <div>
          //   <Image src={(facultyHeadshots[value.name + '.jpg'])} width='17%' height='auto' roundedCircle />
          //   <h3>{value.name}</h3>
          //   <h4>{value.title}</h4>
          // </div>

        })
        }
      </div >
    );
  }
}
