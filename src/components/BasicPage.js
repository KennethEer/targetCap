import React, { useState } from 'react'

import { calculateSimpleResult } from '../logic/Math'


export default function BasicPage() {

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
    const result = calculateSimpleResult(body)
    // if result is null, then it is not possible to achieve target cap
    console.log(result)
    _showResult(true)
  }

  return (
    <div className='container'>
      <form onSubmit={_onSubmitForm} className='text-start'>
        <div className="m-4 h4">
          <label>Number of graded MCs taken:</label>
          <input type="number" min="0" step="1" className="form-control mt-2" name="numberMC"
            placeholder="(Input a number, eg. 80)" onChange={e => _onChange(e)} value={numberMC} required />
        </div>
        <div className="m-4 h4">
          <label>Expected number of remaining graded MCs to take:</label>
          <input type="number" min="0" step="1" className="form-control mt-2" name="expectedMC"
            placeholder="(Input a number, eg. 80)" onChange={e => _onChange(e)} value={expectedMC} required />
        </div>
        <div className="m-4 h4">
          <label>Current CAP(Cumulative Average Point):</label>
          <input type="number" min="0" max="5" step="0.01" className="form-control mt-2" name="currentCAP"
            placeholder="(Input a number, eg. 4.12)" onChange={e => _onChange(e)} value={currentCAP} required />
        </div>
        <div className="m-4 h4">
          <label>Target CAP:</label>
          <input type="number" min="0" max="5" step="0.01" className="form-control mt-2" name="targetCAP"
            placeholder="(Input a number, eg. 4.30)" onChange={e => _onChange(e)} value={targetCAP} required />
        </div>
        <div className='d-flex flex-row-reverse'>
          <button type="submit" className="btn btn-primary m-4">Submit</button>
        </div>
      </form>
      {resultVisibility && Object.values(inputs).every((str) => _isEmpty(str) === false) && (<div> insert result </div>)}
    </div>
  )
}
