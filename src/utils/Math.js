export function calculateQuickResult(inputs) {
  const [numberMC, expectedMC, currentCAP, targetCAP] = Object.values(inputs).map((value) => { return parseFloat(value) })
  const output = (targetCAP * (numberMC + expectedMC) - numberMC * currentCAP) / expectedMC
  if (output > 5) {
    return null
  } else if (output < 0) {
    return 0
  } else {
    return output
  }
}

export function calculateAdvancedResult(firstinput, secondinput, thirdinput, fourthinput) {
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
    gradeToNum.set("", 0)

  var modArr = firstinput.slice();
  var numberMC = secondinput.slice();
  var gradePoint = thirdinput.slice();
  var targetCAP = fourthinput;

  numberMC.forEach((element,index, mcarray) => {
    if (element == "") {
      mcarray[index] = 0;
    }
  })
  gradePoint.forEach((element,index, arr) => {
    var convertedVal = gradeToNum.get(element); 
    arr[index] = convertedVal;
  })

  const reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);

  var addupAllMC = numberMC.reduce(reducer);
  gradePoint.forEach((element,index) => {
    if (element == -1) {
      numberMC[index] = 0;
    }
  })
  const mulArray = (numberMC, gradePoint) => {
    return numberMC.map((e, index) => e * gradePoint[index]);
  }
  const totalSumGrade = (mulArray(numberMC, gradePoint));
  var addupAllGrade = totalSumGrade.reduce(reducer);

  var addupAllGradedMC = numberMC.reduce(reducer);
  var numOfUngradedMC = addupAllMC - addupAllGradedMC;
  var gradedandremainingMC = 160 - numOfUngradedMC;

  var output = (targetCAP * gradedandremainingMC - addupAllGrade) / (160-addupAllMC);
  output = output.toFixed(2)
  if (output > 5.0) {
    return null
  } else if (output < 0) {
    return 0
  } else {
    return output
  }
}