// Exercise 1.0
// ------------
console.log('exercise-1');
// get nodes
let b_node = getByTag("body")[0];   // get by tag will transform body to uppercase
let h_node = getByTag("head")[0]; 

let content = `* {margin: 0;
    padding: 0;}
    body {
    width: 100vw;
    height: 100vh;
    }`;

let s_node = createNewNode("STYLE", content, h_node);

// add event listener
// function to add a text node
function addText(){
    createNewNode("TEXT", "YOU WIN!", b_node);
    // it wasn't specified in the exercise therefore decided to remove listner
    b_node.removeEventListener("click",addText);
}
b_node.addEventListener("click",addText);








// I wrote these for a previous workshop so I just copy-pasted.
// and I added a few more
// NOTE: I wrote these assuming that the inputs will hit a target, therefore no exception handling.
function getByTag(tagName){
    if(typeof(tagName)!=="string"){
        alert("Not correct tag name!");
    }   

    // return the node
    return document.getElementsByTagName(tagName.toUpperCase());
}

function getById(id){
    if(typeof(id)!=="string"){
        alert("Not correct id!");
    }   

    // return the node
    return document.getElementsByTagName(id);
}

function getByClass(className){
    if(typeof(className)!=="string"){
        alert("Not correct class!");
    }   

    // return the node, or an array of node depending on the items
    return document.getElementsByTagName(className);
}

function createNewNode(type, text, parent){
    // checking input
    if(typeof(type)!=="string"){
    alert("NOT VALID TYPE!!!");
    }

    // create basic element
    let ele = document.createElement(type);

    // handle inner text
    let t = "";
    if(text!==undefined){
        t_node = document.createTextNode(text);
        ele.appendChild(t_node);
    }

    // handle parent
    if(parent!==undefined){
    parent.appendChild(ele);
    }

    // return the element if needed.
    return ele; 
}

function createImgNode(img_link, alt_text, parent){
    let image = createNewNode("img", undefined, parent)

    // handle src link
    if(img_link!==undefined){
    image.src = img_link;       // the src link
    }
    // handle alt text
    if(alt_text!==undefined){
    image.alt=alt_text;     // the alt property
    }

    // return image node if needed
    return image;  
}

function createAnchorNode(href_input, text, parent){
    let a_node = createNewNode("A", text, parent);

    // handle href
    if(href_input!==undefined){
    a_node.href = href_input;
    }

    // return anchor node if needed
    return a_node;
}

function createStyleNode(href_input, text, parent){
    let style_node = createNewNode("link", text, parent);

    //handle rel
    style_node.rel = "stylesheet";

    // handle href
    if(href_input!==undefined){
    style_node.href = href_input;
    }

    // return node if needed
    return style_node;
}

function createScriptNode(src_input, type, parent){
    let script_node = createNewNode("script", undefined, parent);

    // handle type
    if(type!==undefined){
    script_node.type=type;
    }
    // handle href
    if(src_input!==undefined){
    script_node.href = src_input;
    }

    // return node if needed
    return style_node;
}
