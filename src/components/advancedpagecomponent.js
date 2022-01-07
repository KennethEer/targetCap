import RandomQuote, { getRandomQuote } from './RandomQuote';
import React, { Component, useState }from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tablesem from './tablecomponent';

import { calculateAdvancedResult } from '../utils/Math'


export default function Advancedpage() {

    const gradeToNum = new Map();

    gradeToNum.set("A", 5)
    gradeToNum.set("A-", 4.5)
    gradeToNum.set("B+", 4)
    gradeToNum.set("B", 3.5)
    gradeToNum.set("B-", 3)
    gradeToNum.set("C+", 2.5)
    gradeToNum.set("C", 2)
    gradeToNum.set("S", -1)
    gradeToNum.set("D+", 1.5)
    gradeToNum.set("D", 1)
    gradeToNum.set("F", 0)

    const [inputs, setInputs] = useState({
        modArr: Array(56).fill(""),
        numberMC: Array(56).fill(0.0),          //7 per sem
        gradePoint:Array(56).fill(0.0),
        targetCAP: 0.0,
      })

      const [resultVisibility, setResultVisibility] = useState(false)
      const [resultcap, setresultcap] = useState(0);

      const _showResult = (bool) => {
        setResultVisibility(bool)
      }

    const { modArr, numberMC, gradePoint, targetCAP } = inputs

    const onSave = (name, value, rownum) => {
        var arr;
        if (name == "mod") {
            arr = modArr;
            arr[rownum] = value;
            setInputs({ ...inputs, [modArr]: arr })
        }
        if (name == "numberofMC") {
            arr = numberMC;
            arr[rownum] = value;
            setInputs({ ...inputs, [numberMC]: arr })
        }
        if (name == "grade") {
            arr = gradePoint;
            var convertedVal = gradeToNum.get(value); 
            arr[rownum] = convertedVal;
            setInputs({ ...inputs, [gradePoint]: arr })
        }        
        _showResult(false)
    }

    //const myRef = useRef(null)

    const scrolldiv = () => {
        var elem = document.getElementById("ele");
        elem.scrollIntoView();
    }

    const onSubmitAll = (e) => {
        e.preventDefault()
        const result = calculateAdvancedResult(modArr, numberMC, gradePoint, targetCAP)
        // if result is null, then it is not possible to achieve target cap
        setresultcap(result)
        _showResult(true)
        scrolldiv();
      }

      return (
        <div>
        <Container>
            <Row>
                <Col>
                <h5>Year 1 Sem 1</h5>
                <Tablesem mc={numberMC} start={0} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>    
                <Col>
                <h5>Year 1 Sem 2</h5>
                <Tablesem mc={numberMC} start={7} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <Row>
                <Col>
                <h5>Year 2 Sem 1</h5>
                <Tablesem mc={numberMC} start={14} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>  
                <Col>
                <h5>Year 2 Sem 2</h5>
                <Tablesem mc={numberMC} start={21} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <Row>
                <Col>
                <h5>Year 3 Sem 1</h5>
                <Tablesem mc={numberMC} start={28} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>  
                <Col>
                <h5>Year 3 Sem 2</h5>
                <Tablesem mc={numberMC} start={35} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <Row>
                <Col>
                <h5>Year 4 Sem 1</h5>
                <Tablesem mc={numberMC} start={42} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>  
                <Col>
                <h5>Year 4 Sem 2</h5>
                <Tablesem mc={numberMC} start={49} onChange={(val,val2,val3) => {
                    onSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <label for="target">TargetCap:</label>
            <input type="number" min="0" max="5" step="0.01" name="target"
        placeholder="(Select a number)" style={{marginLeft:"10px", width:"180px"}} value={targetCAP} required 
                onChange={e => {
                    setInputs({ ...inputs, targetCAP: e.target.value })
                    _showResult(false)
                }}
        />

            <div className='d-flex flex-row-reverse'>
            <button type="submit" className="btn btn-primary m-4" onClick={onSubmitAll}>Submit</button>
            </div>

            <h1 className="text-center">Results:</h1>

            <div>
                {
                (<div className="text-center">
                    {resultVisibility ? <h4>To achieve your target CAP, the grade<br></br> 
                                        point to obtain for each remaining<br></br>
                                        graded module is <br></br>
                                        <h1> {resultcap}</h1>
                                        <RandomQuote />
                                        </h4> 

                                        : <h2>Waiting for inputs...</h2>}
                     </div>)
                }
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="ele">
                <p></p>
            </div>

        </Container>
    </div>
)
}