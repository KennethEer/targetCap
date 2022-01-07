export function computeError(firstinput, secondinput, thirdinput, fourthinput, fifthinput) {

    let modArr = firstinput.slice();
    let numberMC = secondinput.slice();
    let gradePoint = thirdinput.slice();
    let targetCAP = fourthinput;
    let totalExpMC = fifthinput;
    let stringError = "";

    if (totalExpMC == "") {
        totalExpMC = 160;
    }

    numberMC.forEach((element,index, mcarray) => {
        if (element == "") {
          mcarray[index] = 0;
        }
      })
    const reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);
    let addupAllMC = numberMC.reduce(reducer);

    if (targetCAP == "" || targetCAP < 0.0 || targetCAP > 5.0) {
        stringError += "Please input a number between 0.0 and 5.0 for TargetCap\n"
    }
    if (totalExpMC < 0 || totalExpMC > 300 || totalExpMC % 1 != 0) {
        stringError += "Please input a valid whole number between 0 and 300 for total expected number of MCs\n"
    }
    if (totalExpMC < addupAllMC) {
        stringError += "The total expected number of MCs should be more than the number of MCs taken\n"
    }
    numberMC.forEach((element) => {
        if (element > 15 || element % 1 != 0 || element < 0) {
            stringError += "The credits for each module should be a whole number between 0 and 15\n"
        }
      })

    for (var i=0; i<56; i++) {
        if (modArr[i] != "" && (numberMC[i] == 0 || numberMC[i] != "") && gradePoint[i] !="") {
            //no change
        } else if (modArr[i] == "" && (numberMC[i] == "" || numberMC[i] == 0)  && gradePoint[i] == "") {
            //no change
        } else {
            stringError += "In each row, if only module/credits/grade is provided, please fill in all 3 fields: module, credits and grade\n"
            break;
        }
    }
    return stringError; 
  }