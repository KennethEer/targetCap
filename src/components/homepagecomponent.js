import React, { Component }from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class homepage extends Component {
    render() {
        return (
            <div className="text-center">
                <Container>
                <h1 className="heading">TargetCAP</h1>
                <h4 className="subheading">
                    Easy and Convenient to compute what grade to obtain
                </h4>
                <h4>
                    to achieve your dream CAP and set your target grades
                </h4>
                <p className="subsubheading"></p>
                <Row className="justify-content-md-center">
                <Col xs lg="4"><img style={{width:"200px", height:"200px", }}src="/checklist.png" alt="" /><br /><br />
                <a href="/quick" className="btn btn-info" role="button" style={{fontSize:"20px"}}>Quick&#10132;</a><br /><br />
                </Col>
                <Col xs lg="4"><img style={{width:"300px", height:"200px"}}src="/nus.png" alt="" /><br /><br />
                <a href="/advanced" className="btn btn-info" role="button" style={{fontSize:"20px"}}>Advanced&#10132;</a><br /><br />
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
} 