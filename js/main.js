// function loadpage()
// {
var newPage=document.getElementById("body")
  var newDiv = document.createElement("div");
    // and give it some content
    var newContent = document.createTextNode("Play A quiz");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

  var button=document.createElement("Button")
  button.id="btn"
  button.setAttribute("onclick","loadpage()")
  var textcontent=document.createTextNode("Click ME")
  button.appendChild(textcontent);

  newDiv.appendChild(button)
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    currentDiv.appendChild(newDiv)

// }
function loadpage()
{
 document.getElementById('div1').innerHtml="what the heck";
var getdiv=document.getElementById('div1');

// alert("go")
var p =document.createElement("p")
p.innerHTML="what the fuz"
getdiv.appendChild(p);
}

function createQuestion() {
	// clear any previous html
	document.getElementById('div1').innerHTML = "";

}
