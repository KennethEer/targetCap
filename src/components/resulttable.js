import React, { Component }from 'react';
import Table from 'react-bootstrap/Table';

export default function ResultTable(props) {

        return (
            <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Honours Degree Classification</th>
                <th>Criteria</th>
                <th>Minimum Grade Point for each <br></br>remaining graded module</th>
                </tr>
            </thead>
            <tbody>
                <tr> <td>Honours (Highest Distinction)</td>
                     <td>CAP 4.50 and above</td>
                      <td>{props.allhonour[0]}</td>
                </tr>
                <tr> <td>Honours (Distinction)</td>
                     <td>CAP 4.00 - 4.49</td>
                      <td>{props.allhonour[1]}</td>
                </tr>
                <tr> <td>Honours (Merit)</td>
                     <td>CAP 3.50 - 3.99</td>
                      <td>{props.allhonour[2]}</td>
                </tr>
                <tr> <td>Honours</td>
                     <td>CAP 3.00 - 3.49</td>
                      <td>{props.allhonour[3]}</td>
                </tr>
                <tr> <td>Pass</td>
                     <td>CAP 2.00 - 2.99</td>
                      <td>{props.allhonour[4]}</td>
                </tr>

            </tbody>
            </Table>
            </div>
        )
}