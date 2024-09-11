/*--------- app's constant (variables) ---------*/
const CYLBYTE = 849960
const TRKBYTE = 56664 
const BYTECON  = 1000

/*------ cached element references ------*/
const CLYel = document.getElementById('CLYel')
const BYTESel = document.getElementById('BYTESel')
const KBel = document.getElementById('KBel')
const MBel = document.getElementById('MBel')
const GBel = document.getElementById('GBel')
const TBel = document.getElementById('TBel')
const CTrkel = document.getElementById('CTrkel')
const CBYTESel = document.getElementById('CBYTESel')
const CKBel = document.getElementById('CKBel')
const CMBel = document.getElementById('CMBel')
const CGBel = document.getElementById('CGBel')
const CTBel = document.getElementById('CTBel')

/*--------- app's state (variables) ---------*/

let trk
let cly
let bytes
let kb
let mb
let gb
let tb
let cbytes
let ckb
let cmb
let cgb
let ctb



/*--------- functions ---------*/

function init() {
  tconvert()
  cconvert()
}

init()

function tconvert() {
  let tracks = (document.getElementById("tracks").value).replace(/,/g, '')
  console.log(tracks)
  cly = tracks / 15
  bytes = cly * CYLBYTE
  kb = bytes / BYTECON
  mb = kb / BYTECON
  gb = mb / BYTECON
  tb = gb / BYTECON
  CLYel.innerText= cly.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' cylinders'
  BYTESel.innerText= bytes.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' bytes'
  KBel.innerText= kb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' kb'
  MBel.innerText= mb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' mb'
  GBel.innerText= gb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' gb'
  TBel.innerText= tb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' tb'
}


function cconvert() {
  let cylinder = (document.getElementById("cylinder").value).replace(/,/g, '')
  console.log(tracks)
  trk = cylinder * 15
  cbytes = trk * TRKBYTE
  ckb = cbytes / BYTECON
  cmb = ckb / BYTECON
  cgb = cmb / BYTECON
  ctb = cgb / BYTECON
  CTrkel.innerText= trk.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' tracks'
  CBYTESel.innerText= cbytes.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' bytes'
  CKBel.innerText= ckb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' kb'
  CMBel.innerText= cmb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' mb'
  CGBel.innerText= cgb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' gb'
  CTBel.innerText= ctb.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' tb'
}

/*------ event listeners ------*/
document.querySelector('#tracks').addEventListener('input', tconvert)
document.querySelector('#cylinder').addEventListener('input', cconvert)

