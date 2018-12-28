function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var i = 0
  while (line.length > 0) {
    return `The line is currently ${line.length} ${line[i]}.`;
    i++;
  } return "The line is currently empty."
  }

//   var i = 0; i++;
//
//   if (line.length === 0) {
//     return "The line is currently empty."
//   } else {
//     return `The line is currently ${[i + 1]. line[i]}.` // unsure how to number the array
//   }
// }
