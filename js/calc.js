/*--------- app's constant (variables) ---------*/
const mod09 = 8.51405
const mod27 = 27.84469
const mod54 = 55.68928

/*------ cached element references ------*/
const modBoxel = document.getElementById('modBox')
const percentFreeel = document.getElementById('percentFree')
const spaceFreeGBel = document.getElementById('spaceFreeGB')
const spaceFreeCYLel = document.getElementById('spaceFreeCYL')
const spaceUsedGBel = document.getElementById('spaceUsedGB')
const totalSpaceGBel = document.getElementById('totalSpaceGB')
const spaceUsedCYLel = document.getElementById('spaceUsedCYL')
const percentFreeNewel = document.getElementById('percentFreeNew')
const percentUsedNewel = document.getElementById('percentUsedNew')
const totalFreeSpaceNewel = document.getElementById('totalFreeSpaceNew')
const totalUsedSpaceNewel = document.getElementById('totalUsedSpaceNew')
const totalSpaceCYLel = document.getElementById('totalSpaceCYL')
const percentUsedel = document.getElementById('percentUsed')
const spaceFreeCYLNewel = document.getElementById('spaceFreeCYLNew')
const spaceUsedCYLNewel = document.getElementById('spaceUsedCYLNew')
const totalSpaceCYLNewel = document.getElementById('totalSpaceCYLNew')


/*--------- app's state (variables) ---------*/

let modValue = 'Choose a Mod Type'
let totalSpace
let freeSpace
let percentFree
let spaceFreeGB
let spaceFreeCYL
let spaceUsedGB
let spaceUsedCYL
let percentFreeNew
let percentUsedNew
let totalSpaceNew
let totalFreeSpaceNew
let totalUsedSpaceNew
let totalSpaceGB
let totalSpaceCYL
let percentUsed
let spaceFreeCYLNew
let spaceUsedCYLNew
let totalSpaceCYLNew



/*--------- functions ---------*/


function init() {
  modValue = 'Choose a Mod Type'
  updateModtype()
}
init()

// function setModType() {

// }

function updateModtype() {
   modBoxel.innerText=modValue
   console.log(modValue)
}


function sgAllocate() {
  // Ensure modValue is correctly set depending on the button clicked
  const modBtnValue = this.id;  // Get the ID of the clicked button (e.g., mod09Btn, mod27Btn, etc.)

  if (modBtnValue === 'mod09Btn') {
    modValue = 8.51405;
  } else if (modBtnValue === 'mod27Btn') {
    modValue = 27.84469;
  } else if (modBtnValue === 'mod54Btn') {
    modValue = 55.68928;
  }
  
  modBoxel.innerText = modValue
  console.log(modValue)

  let volumeAdds = document.getElementById('volumeAdds').value
  modBoxel.innerText = modValue
  console.log(volumeAdds)

  totalSpaceNew = (spaceFreeGB + spaceUsedGB) + (volumeAdds * modValue)
  totalFreeSpaceNew = totalSpaceNew - spaceUsedGB
  console.log(totalSpaceNew.toFixed(3))
  percentFreeNew = (totalFreeSpaceNew / totalSpaceNew) * 100
  percentFreeNewel.innerText = percentFreeNew.toFixed(2) + '%'
  percentUsedNewel.innerText = (100 - percentFreeNew).toFixed(2) + '%'
  totalFreeSpaceNewel.innerText = totalFreeSpaceNew.toFixed(3)
  totalUsedSpaceNewel.innerText = spaceUsedGB.toFixed(3)
  spaceFreeCYLNew = totalFreeSpaceNew * 1176
  spaceFreeCYLNewel.innerText = spaceFreeCYLNew.toFixed(3)
  spaceUsedCYLNew = spaceUsedGB * 1176
  spaceUsedCYLNewel.innerText = spaceUsedCYLNew.toFixed(3)
  totalSpaceCYLNew = spaceFreeCYLNew + spaceUsedCYLNew
  totalSpaceCYLNewel.innerText = totalSpaceCYLNew.toFixed(3)
}


function sgDetails() {
  totalSpace = document.getElementById('totalSpace').value
  freeSpace = document.getElementById('freeSpace').value
  percentFree = (freeSpace / totalSpace) * 100
  totalSpaceGB = totalSpace / 1000
  totalSpaceGBel.innerText= totalSpaceGB.toFixed(3)
  percentFreeel.innerText= percentFree.toFixed(2) + '%'
  percentUsed = 100 - percentFree
  percentUsedel.innerText= percentUsed.toFixed(2) + '%'
  spaceFreeGB = freeSpace / 1000
  spaceFreeGBel.innerText= spaceFreeGB.toFixed(3)
  spaceFreeCYL = spaceFreeGB * 1176
  spaceFreeCYLel.innerText= spaceFreeCYL.toFixed(3)
  spaceUsedGB = (totalSpace - freeSpace) / 1000
  spaceUsedGBel.innerText= spaceUsedGB.toFixed(3)
  spaceUsedCYL = spaceUsedGB * 1176
  spaceUsedCYLel.innerText= spaceUsedCYL.toFixed(3)
  totalSpaceCYL = spaceFreeCYL + spaceUsedCYL
  totalSpaceCYLel.innerText= totalSpaceCYL.toFixed(3)
}


/*------ event listeners ------*/
//document.getElementById('mod09Btn').addEventListener('click', setModType);
mod09Btn.addEventListener('click', sgAllocate);  
mod27Btn.addEventListener('click', sgAllocate);  
mod54Btn.addEventListener('click', sgAllocate);  
document.querySelector('#totalSpace').addEventListener('input', sgDetails)
document.querySelector('#freeSpace').addEventListener('input', sgDetails)
document.querySelector('#volumeAdds').addEventListener('input', sgAllocate)
