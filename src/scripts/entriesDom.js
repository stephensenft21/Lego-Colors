const buildHtml = `
<h1>Build Your Lego</h1>
<form action="legoEntry">
    <fieldset>
        <label for="legoCreator" class="formSectionTitle">Lego Creator</label>
        <input type="text" name="legoCreator" id="legoCreator" placeholder="What is your name?">
    </fieldset>
    <fieldset>
        <label for="legoShape" class="formSectionTitle">Lego Shape</label>
        <input type="text" name="legoShape" id="legoShape">
    </fieldset>
    <fieldset>
        <label for="legoCreation" class="formSectionTitle">Lego Creation</label>
        <input type="text" name="legoCreation" id="legoCreation">
    </fieldset>
    <fieldset>
        <label for="legoColor" class="formSectionTitle">Lego Color</label>
        <select name="legoColor" id="legoColor">
            <option value="1">Red</option>
            <option value="2">Green</option>
            <option value="3">Yellow</option>
            <option value="4">Blue</option>
            <option value="5">Orange</option>
            <option value="6">Black</option>
        </select>
    </fieldset>
</form>
<button class="btn lego__save">Save Lego Creation</button>`

const mainPageContainer = document.querySelector("#display-container")
mainPageContainer.innerHTML = buildHtml