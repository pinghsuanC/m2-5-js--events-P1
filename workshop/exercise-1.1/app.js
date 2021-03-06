// Exercise 1.1
// ------------
console.log('exercise 1.1');
console.log('exercise-1');
// get nodes
let b_node = getByTag("body")[0];   // get by tag will transform body to uppercase
let h_node = getByTag("head")[0]; 

// =============== adding the text nodes ===============
// the node for indsruction
let corner_node = createNewNode("SPAN", "Be a quicke clicker!", b_node);
corner_node.id = "corner-node";
b_node.addEventListener("click", win_function);


// add lose timeout event (without any trigger but with delay)
let time_id = setTimeout(function(){
    let c_node = createNewNode("SPAN", "YOU LOST!", b_node);
    c_node.id="result-note";
    b_node.removeEventListener("click", win_function);
    clearTimeout(time_id); // if lost also clear timeout.
}, 1000);

// add win function
function win_function(){
        let c_node = createNewNode("SPAN", "YOU WIN!", b_node);
        c_node.id="result-note";
        b_node.removeEventListener("click", win_function);
        clearTimeout(time_id); // if clicked clear timeout
}

// =============== add styles to header ===============
let content_style = `* {
    margin: 0;
    padding: 0;}
    body {
    font-family: 'Noto Sans SC', sans-serif;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-image:
    radial-gradient(
        circle,
        #05044a, #01c9f7
    );
    }
    #corner-node {      /*decided to make it at the center*/
        display: inline-block;
        width: 100vw;
        color: white;
        font-size: 4em;
        margin-left: 20px;
        margin-top: 30px;
    }
    #result-note {
        display: inline-block;
        color: #ff00fe;
        margin-top: 10vh;
        font-size: 15em;
    }
    `;

    //https://stackoverflow.com/questions/9519841/why-does-this-css-margin-top-style-not-work
    // important to know for margin-collapsing D: it's against human instinct...
// set the font to sans
let content_font = href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&display=swap"
createNewNode("STYLE", content_style, h_node);
createStyleNode(content_font, undefined, h_node);



// I wrote these for a previous workshop so I just copy-pasted.
// and I added a few more
// NOTE: I wrote these assuming that the inputs will hit a target, therefore only type checking and no exception handling.
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
    return document.getElementById(id);
}
function getByClass(className){
    if(typeof(className)!=="string"){
        alert("Not correct class!");
    }   

    // return the node, or an array of node depending on the items
    return document.getElementsByClassName(className);
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

function createLinkNode(href_input, text, parent){
    let link_node = createNewNode("link", text, parent);

    // handle href
    if(href_input!==undefined){
        link_node.href = href_input;
    }

    // return node if needed
    return link_node;
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
