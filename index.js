// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (name2) {
    return name2.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(data, letters) {
  return data.filter(function (name) {
    return name.startsWith(letters)
  })
}

function matchName (data, name) {
  return data.filter(function (array) {
    return array.name === name
  })
}
