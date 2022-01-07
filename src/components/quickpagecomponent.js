import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { calculateQuickResult } from '../utils/Math';


export default function QuickPage() {

  const [inputs, setInputs] = useState({
    numberMC: "",
    expectedMC: "",
    currentCAP: "",
    targetCAP: "",
  })

  const [resultVisibility, setResultVisibility] = useState(false)

  const _showResult = (bool) => {
    setResultVisibility(bool)
  }

  const { numberMC, expectedMC, currentCAP, targetCAP } = inputs

  const _onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    _showResult(false)
  }

  function _isEmpty(str) {
    return (!str || str.length === 0);
  }

  const _onSubmitForm = (e) => {
    e.preventDefault()
    const body = { numberMC, expectedMC, currentCAP, targetCAP }
    const result = calculateQuickResult(body)
    // if result is null, then it is not possible to achieve target cap
    console.log(result)
    _showResult(true)
  }

  return (
    <Container>
      <h1>
        Input the following fields and we will compute the grade to obtain for the remaining modules to achieve your target CAP
      </h1>
      <Container>
        <Form onSubmit={_onSubmitForm} className='text-start'>
          <Form.Group className="m-4 h4">
            <Form.Label>Number of graded MCs taken:</Form.Label>
            <input type="number" min="0" step="1" className="form-control mt-2" name="numberMC"
              placeholder="(Input a number, eg. 80)" onChange={e => _onChange(e)} value={numberMC} required />
          </Form.Group>
          <Form.Group className="m-4 h4">
            <Form.Label>Expected number of remaining graded MCs to take:</Form.Label>
            <input type="number" min="0" step="1" className="form-control mt-2" name="expectedMC"
              placeholder="(Input a number, eg. 80)" onChange={e => _onChange(e)} value={expectedMC} required />
          </Form.Group>
          <Form.Group className="m-4 h4">
            <Form.Label>Current CAP(Cumulative Average Point):</Form.Label>
            <input type="number" min="0" max="5" step="0.01" className="form-control mt-2" name="currentCAP"
              placeholder="(Input a number, eg. 4.12)" onChange={e => _onChange(e)} value={currentCAP} required />
          </Form.Group>
          <Form.Group className="m-4 h4">
            <Form.Label>Target CAP:</Form.Label>
            <input type="number" min="0" max="5" step="0.01" className="form-control mt-2" name="targetCAP"
              placeholder="(Input a number, eg. 4.30)" onChange={e => _onChange(e)} value={targetCAP} required />
          </Form.Group>
          <div className='d-flex flex-row-reverse'>
            <button type="submit" className="btn btn-primary m-4">Submit</button>
          </div>
        </Form>
        {resultVisibility && Object.values(inputs).every((str) => _isEmpty(str) === false) && (
          <p className='my-5'>put results here</p>
        )}
      </Container>
    </Container>
  )
}
