import React, { Component }from 'react';
import Table from 'react-bootstrap/Table';

export default function Tablerow(props) {

        return (
            <>
            <tr>
                <td>
                <input type="text" id="mod" name="mod" placeholder="(Type module code)" value={props.specificMod}
                    onChange={e => {e.preventDefault(); props.onChange(e.target.name, e.target.value)}}/>
                </td>
                <td>
                <input type="number" min="0" max="15" name="numberofMC" style={{width: "100px"}} value={props.specificMc}
                    placeholder="(Select a number)" onChange={e => {props.onChange(e.target.name, e.target.value)}}/>
                </td>
                <td>
                <select name="grade" id="grade" value={props.specificgp} style={{height: "30px"}} onChange={e => props.onChange(e.target.name, e.target.value)}>
                    <option value="">Select a grade</option>
                    <option value="A">A/A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="S">S/U</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
                </td>
            </tr>
            </>
        )
}