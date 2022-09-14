function amin() {
  const number = document.querySelector("#num") //to show number
  const amin = document.querySelector('#amin'); //first name
  const amin2 = document.querySelector('#amin2'); //last name
  const x = 9 //full random number
  //first name finder
  a = Math.floor(Math.random() * 4)
  b = Math.floor(Math.random() * x)
  c = Math.floor(Math.random() * 3)
  d = Math.floor(Math.random() * x)
  var A = JSON.stringify(a)
  var B = JSON.stringify(b)
  var C = JSON.stringify(c)
  var D = JSON.stringify(d)
  const amino = A + B + C + D
  const aminer = parseInt(amino, 10)
  //second name finder
  a2 = Math.floor(Math.random() * 4)
  b2 = Math.floor(Math.random() * x)
  c2 = Math.floor(Math.random() * 3)
  d2 = Math.floor(Math.random() * x)
  var A2 = JSON.stringify(a2)
  var B2 = JSON.stringify(b2)
  var C2 = JSON.stringify(c2)
  var D2 = JSON.stringify(d2)
  const amino2 = A2 + B2 + C2 + D2
  const aminer2 = parseInt(amino2, 10)
  //number.innerHTML = amino
  //fetcher to combine them both
  fetch("js/names.json")
    .then(response => response.json())
    .then(json => {
      amin.innerHTML = json[aminer]
      amin2.innerHTML = json[aminer2]
    })
}