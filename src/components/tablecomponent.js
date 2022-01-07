import React, { Component }from 'react';
import Table from 'react-bootstrap/Table';
import Tablerow from './tablerow';

export default function Tablesem(props) {

        return (
            <div>
            <Table striped bordered hover style={{width:"500px"}}>
                <thead>
                    <tr>
                    <th>Module Code</th>
                    <th>Credits</th>
                    <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                <Tablerow  onChange={(name,value) => props.onChange(name, value, props.start)}/>
                <Tablerow onChange={(name,value) => props.onChange(name, value, props.start+1)}/>
                <Tablerow  onChange={(name,value) => props.onChange(name, value, props.start+2)}/>
                <Tablerow  onChange={(name,value) => props.onChange(name, value, props.start+3)}/>
                <Tablerow onChange={(name,value) => props.onChange(name, value, props.start+4)}/>
                <Tablerow  onChange={(name,value) => props.onChange(name, value, props.start+5)}/>
                <Tablerow  onChange={(name,value) => props.onChange(name, value, props.start+6)}/>

                </tbody>
                </Table>
            </div>
        )
}