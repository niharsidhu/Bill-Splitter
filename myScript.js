document.getElementById("AddPersonButton").addEventListener("click", handleAddPersonClick = function(){});

function handleAddPersonClick() {
	console.log(document.getElementById('name'));
    $("display").append(document.getElementById('name'));
    document.getElementById('name').innerHTML = "";
}