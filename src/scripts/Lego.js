const handleAddEntry = () => {
    const creatorInput = document.querySelector("#legoCreator")
    const colorInput = document.querySelector("#legoColor")
    const shapeInput =  document.querySelector("#legoShape")
    const creationInput = document.querySelector("#legoCreation")

let legoEntry = {
   creator: creatorInput.value,
   shape: shapeInput.value,
   creation: creationInput.value,
   color: colorInput.value
}

postEntry(legoEntry)

}




let addEntryButton = document.querySelector("button", "Save Lego Creation");
addEntryButton.addEventListener("click", handleAddEntry)