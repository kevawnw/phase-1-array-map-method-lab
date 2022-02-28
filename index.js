const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(elem){
    return elem.split(" ").map(function(elem){
      return elem.replace(elem[0], elem[0].toUpperCase())
    }).join(" ")
  })
}

// function titleCased(){
//   return tutorials.map(function (elem){
//     return elem.toLowerCase().split(' ').map(function(elem){
//       return elem.replace(elem[0], elem[0].toUpperCase())
//     }).join(' ')
//   })
// }

// function titleCased(){
//   return tutorials.map(function (elem){
//     return elem.toLowerCase().split(' ').map(function(elem){
//       return elem.replace(elem[0], elem[0].toUpperCase())
//     }).join(' ')
//   })
// }

// titleCased()