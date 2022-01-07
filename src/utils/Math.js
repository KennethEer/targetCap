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
