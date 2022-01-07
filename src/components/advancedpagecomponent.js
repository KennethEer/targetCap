import RandomQuote, { getRandomQuote } from './RandomQuote';
import React, { Component, useState }from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tablesem from './tablecomponent';
import ResultTable from './resulttable';

import { calculateAdvancedResult } from '../utils/Math'
import { computeError } from '../utils/Errorvalidate'

export default function Advancedpage() {

    const [modArr, setModuleArray] = useLocalStorage('modArr', Array(56).fill(""))
      const [numberMC, setMcArray] = useLocalStorage('numberMC', Array(56).fill(0.0))
      const [gradePoint, setgpArray] = useLocalStorage('gradePoint',Array(56).fill(""))
      const [targetCAP, setTargetvalue] = useLocalStorage('targetCAP', 0.0)
      const [expectedallmc, setexpectedallmc] = useLocalStorage('TotalMC', 160)

      function useLocalStorage(key, initialValue) {
        const [storedValue, setStoredValue] = useState(() => {
          try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            console.log(error);
            return initialValue;
          }
        });
        const setValue = (value) => {
          try {
            const valueToStore =
              value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          } catch (error) {
            console.log(error);
          }
        };
        return [storedValue, setValue];
      }

      const [resultVisibility, setResultVisibility] = useState(false)
      const [resultcap, setresultcap] = useState(0);
      const [allresultcap, setallresultcap] = useState(Array(5).fill(""));

      const _showResult = (bool) => {
        setResultVisibility(bool)
      }

      const OnSave = (name, value, rownum) => {
        if (name == "mod") {
            const arr = modArr.slice(0);
            arr[rownum] = value;
            setModuleArray(arr); 
        }
        if (name == "numberofMC") {
            const arr = numberMC.slice(0);
            arr[rownum] = value;
            setMcArray(arr)
        }
        if (name == "grade") {
            const arr = gradePoint.slice(0);
            arr[rownum] = value;
            setgpArray(arr);
        }        
        _showResult(false)
    }

    const scrolldiv = () => {
        var elem = document.getElementById("ele");
        elem.scrollIntoView();
    }

    const onSubmitAll = (e) => {
        e.preventDefault();
        const isError =  computeError(modArr, numberMC, gradePoint, targetCAP, expectedallmc);
        if (isError != "") {
            alert(isError)
        } else {
            const result = calculateAdvancedResult(modArr, numberMC, gradePoint, targetCAP, expectedallmc)
            // if result is null, then it is not possible to achieve target cap
            console.log(result)
            setresultcap(result)

            const allgradeArray = Array(5).fill("");
            allgradeArray.map((element, index, array) => {
                array[index] = calculateAdvancedResult(modArr, numberMC, gradePoint, (9-index)*0.5, expectedallmc)
            }
            );
            setallresultcap(allgradeArray)

            _showResult(true)
            scrolldiv();
        }
        
      }


      return (
        <div>
        <Container>
            <h1>
                Input the following fields and we will compute a detailed feedback to achieve your target CAP
            </h1>
            <h6>
                *All inputs automatically saved:)*
            </h6>
            <br></br>

            <Row>
                <Col>
                <h5>Year 1 Sem 1</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={0} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>    
                <Col>
                <h5>Year 1 Sem 2</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={7} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <Row>
                <Col>
                <h5>Year 2 Sem 1</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={14} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>  
                <Col>
                <h5>Year 2 Sem 2</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={21} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <Row>
                <Col>
                <h5>Year 3 Sem 1</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={28} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>  
                <Col>
                <h5>Year 3 Sem 2</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={35} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <Row>
                <Col>
                <h5>Year 4 Sem 1</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={42} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>  
                <Col>
                <h5>Year 4 Sem 2</h5>
                <Tablesem 
                    ArrayofMod={modArr} 
                    ArrayofMc={numberMC} Arrayofgp={gradePoint} start={49} onChange={(val,val2,val3) => {
                        OnSave(val,val2,val3)
                }}/></Col>  
            </Row>
            <label htmlFor="target">TargetCap:</label>
            <input type="number" min="0" max="5" step="0.01" name="target"
        placeholder="(Select a number)" style={{marginLeft:"10px", width:"240px"}} value={targetCAP} required 
                onChange={e => {
                    setTargetvalue(e.target.value )
                    _showResult(false)
                }} />
                <p></p>
        <label htmlFor="allnummc">Total Expected Number of MCs:</label>
        <input type="number" min="0" max="300" step="1" name="allnummc"
        placeholder="(Select a number, default: 160)" style={{marginLeft:"10px", width:"240px"}} value={expectedallmc} required 
                onChange={e => {
                    setexpectedallmc(e.target.value )
                    _showResult(false)
                }} />

            <div className='d-flex flex-row-reverse'>
            <button type="submit" className="btn btn-primary m-4" onClick={onSubmitAll}>Submit</button>
            </div>


            <br></br>

            <h1 className="text-center">Results:</h1>

                <div>
                    {
                    (<div className="text-center">
                        {resultVisibility ? <><h4>To achieve your target CAP, the minimum<br></br> 
                                            grade point to obtain for each remaining<br></br>
                                            graded module is <br></br></h4>
                                            <h1> {resultcap}</h1>
                                            <ResultTable allhonour={allresultcap} />
                                            <h4><RandomQuote /></h4></>


                                            : <h2>Waiting for inputs...</h2>}
                         </div>)
                    }
                </div>

                <div id="ele" style={{paddingTop:"300px"}}>
                    <p></p>
                </div>
        

        </Container>
    </div>
)
}