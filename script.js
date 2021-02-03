//TODO: Convert all functions and any other possible elements to ES6

/**
 * Update the output text as you type in the textarea
 */
function updateText(){
  let {value} = document.getElementById("text-input");
  document.getElementById('text-output').innerText = value;
}

/**
 * Toggle the bold class for the output text
 */
function makeBold(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
  
}

/**
 * Toggle the underline class for the output text
 */
function makeUnderline(elem){
    elem.classList.toggle('active');
    let formattedText = document.getElementById('text-output');
    formattedText = (formattedText.classList.contains('underline')) ?
      formattedText.classList.remove('underline'):
      formattedText.classList.add('underline');
    
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 */
function alignText(elem, alignType){
  document.getElementById('text-output').style.textAlign = alignType;
  alignButtons = document.getElementsByClassName('align');

  [...alignButtons].map((button)=>{
    button.classList.remove('active')
    })

  elem.classList.toggle('active');
}