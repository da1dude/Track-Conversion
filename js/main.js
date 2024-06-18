/*--------- app's constant (variables) ---------*/
const CYLBYTE = 839940
const BYTECON  = 1024

/*------ cached element references ------*/
const CLYel = document.getElementById('CLYel')
const BYTESel = document.getElementById('BYTESel')
const KBel = document.getElementById('KBel')
const MBel = document.getElementById('MBel')
const GBel = document.getElementById('GBel')
const TBel = document.getElementById('TBel')

/*--------- app's state (variables) ---------*/

let cly
let bytes
let kb
let mb
let gb
let tb

/*--------- functions ---------*/

function init() {
  convert()
}

init()



function convert() {
  let tracks = (document.getElementById("tracks").value).replace(/,/g, '')
  console.log(tracks)
  cly = tracks / 15
  bytes = cly * CYLBYTE
  kb = bytes / BYTECON
  mb = kb / BYTECON
  gb = mb / BYTECON
  tb = gb / BYTECON
  CLYel.innerText= cly.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' cylinders'
  BYTESel.innerText= bytes.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' bytes'
  KBel.innerText= kb.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' kb'
  MBel.innerText= mb.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' mb'
  GBel.innerText= gb.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' gb'
  TBel.innerText= tb.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' tb'
}

/*------ event listeners ------*/
document.querySelector('#tracks').addEventListener('input', convert)

