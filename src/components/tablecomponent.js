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
                
                <Tablerow specificMod={props.ArrayofMod[props.start]} specificMc={props.ArrayofMc[props.start]} specificgp={props.Arrayofgp[props.start]} onChange={(name,value) => props.onChange(name, value, props.start)}/>
                <Tablerow specificMod={props.ArrayofMod[props.start+1]} specificMc={props.ArrayofMc[props.start+1]} specificgp={props.Arrayofgp[props.start+1]} onChange={(name,value) => props.onChange(name, value, props.start+1)}/>
                <Tablerow specificMod={props.ArrayofMod[props.start+2]} specificMc={props.ArrayofMc[props.start+2]} specificgp={props.Arrayofgp[props.start+2]} onChange={(name,value) => props.onChange(name, value, props.start+2)}/>
                <Tablerow specificMod={props.ArrayofMod[props.start+3]} specificMc={props.ArrayofMc[props.start+3]} specificgp={props.Arrayofgp[props.start+3]} onChange={(name,value) => props.onChange(name, value, props.start+3)}/>
                <Tablerow specificMod={props.ArrayofMod[props.start+4]} specificMc={props.ArrayofMc[props.start+4]} specificgp={props.Arrayofgp[props.start+4]} onChange={(name,value) => props.onChange(name, value, props.start+4)}/>
                <Tablerow specificMod={props.ArrayofMod[props.start+5]} specificMc={props.ArrayofMc[props.start+5]} specificgp={props.Arrayofgp[props.start+5]} onChange={(name,value) => props.onChange(name, value, props.start+5)}/>
                <Tablerow specificMod={props.ArrayofMod[props.start+6]} specificMc={props.ArrayofMc[props.start+6]} specificgp={props.Arrayofgp[props.start+6]} onChange={(name,value) => props.onChange(name, value, props.start+6)}/>
                </tbody>
                </Table>
            </div>
        )
}