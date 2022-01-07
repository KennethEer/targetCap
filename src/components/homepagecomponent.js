import React, { Component }from 'react';
import Container from 'react-bootstrap/Container';


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
                <a href="/quick" className="btn btn-info" role="button" style={{marginRight: '40px'}}>Quick</a>

                <a href="/advanced" className="btn btn-info" role="button">Advanced</a>
                </Container>
            </div>
        )
    }
} 