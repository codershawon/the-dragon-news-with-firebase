import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import background from "../../../assets/bg.png"
const RightNav = () => {
  return (
    <div>
      <h4 className="mb-3">Login With</h4>
      <Button
        variant="outline-primary"
        className="d-flex align-items-center gap-1 mb-2"
        style={{ width: "200px" }}
      >
        {" "}
        <FaGoogle />
        Login With Google
      </Button>
      <Button
        variant="outline-secondary"
        className="d-flex align-items-center gap-1 w-4"
        style={{ width: "200px" }}
      >
        {" "}
        <FaGithub />
        Login With Github
      </Button>
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center gap-3">  <FaFacebookF style={{color:"#3B599C", background:"#F3F3F3", borderRadius:"20px",height:"30px", width:"30px",padding:"0 10px"}} />Facebook</ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center gap-3"> <FaTwitter style={{color:"#58A7DE",background:"#F3F3F3", borderRadius:"20px",height:"30px", width:"30px",padding:"0 8px"}} />Twitter</ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center gap-3"> <FaInstagram style={{backgroundColor: "linear-gradient(180deg, #D82D7E 6.25%, #FBA756 100%)", background:"#F3F3F3", borderRadius:"20px",height:"30px", width:"30px",padding:"0 8px"}} />Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img style={{width:"100%", marginTop:"10px"}} src={background} alt="" />
        <div style={{position:"relative", bottom:"500px", textAlign:"center",color:"white"}}>
          <h1 style={{lineHeight:"60px"}}>Create an Amazing Newspaper</h1>
          <p style={{width:'180px',marginLeft:"60px"}}>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger">Danger</Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default RightNav;
