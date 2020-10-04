console.log("exercise-3.3");
// get some important nodes
const h_node = getByTag("head")[0];
const b_node = getByTag("body")[0];
const m_node = getById("main");
// ~~~~~~~~~~~~~~~~~~~~ add content ~~~~~~~~~~~~~~~~~~~~
// Just... there is no instructions, so I guess I will just add an audio in the webpage hhh
let b = createNewNode("BUTTON", "PLAY AUDIO", m_node);
b.classList.add("btn");

var a = new Audio("chime.mp3");
b.addEventListener("click", function(){
    a.load();
    a.play();
})


// ~~~~~~~~~~~~~~~~~~~~ add styles ~~~~~~~~~~~~~~~~~~~~
// add mouse-down and mouse-out event for button at the top


// font
const font_href = href="https://fonts.googleapis.com/css2?family=Anton&display=swap";
//object style
let content_style = `
    * {
        margin: 0;
        border: 0;
        padding: 0;
        font-family: 'Anton', sans-serif;
        font-size: 0.9em;
    }
    body{
        font-family: 'Anton', sans-serif;
        font-size: 3em;
        height: 100vh;
        width: 100vw;
        display: contain;
    }
    .main{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .btn{
        margin-top: 100px;
        margin-left: 100px;
        width: 200px;
        height: 100px;
    }
    `
createStyleNode(font_href, undefined, h_node);
createNewNode("STYLE", content_style, h_node);

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
function createAudioNode(src_input, text, parent){
    let audio_node = createNewNode("audio", text, parent);

    // handle src
    if(href_input!==undefined){
        audio_node.href = src_input;
    }

    audio_node.preload = "none";

    // return node if needed
    return audio_node;
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

