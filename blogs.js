var ask = document.getElementById('ask');
var display = document.getElementById('display');
var query = document.getElementById('additions'); 

// function to add a question 
ask.addEventListener('click', (e) =>{
    e.preventDefault();
    var inputval = document.getElementById('textarea').value;   
    //creating element
    var page = document.createElement('div');
    //selecting display and appending the created element
    document.getElementById('display').appendChild(page);
    page.className = "section" ;
    //creating and appending a paragraph to the el
    var paragraph = document.createElement('p');
    page.append(paragraph);
    //fetching from input and adding data to the paragraph
    paragraph.innerHTML = inputval;
    return inputval;
});


