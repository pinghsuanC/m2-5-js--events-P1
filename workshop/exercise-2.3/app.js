console.log("exercise-2.3");

// get some important nodes (as always)
const h_node = getByTag("head")[0];
const b_node = getByTag("body")[0];
const m_node = getById("main");
const NUM_CIR = 20; // number of circles

// add circles
for(let n =0; n<NUM_CIR; n++){
    let c_node = createNewNode("BUTTON", `${n+1}`, m_node);
    c_node.classList.add("cir");
    c_node.style.top = Math.random()*90 + "%";  // 90% to avoid the overflow     
    c_node.style.left = Math.random()*90 + "%";

    let to_green = function(){
        c_node.style.backgroundColor = "green";
    }
    c_node.addEventListener("click", to_green);

}

// fonts
let font_href = href="https://fonts.googleapis.com/css2?family=Anton&display=swap";
let content_style = `
    * {
        margin: 0;
        border: 0;
        padding: 0;
    }
    body{
        font-family: 'Anton', sans-serif;
        font-size: 3em;
        height: 100vh;
        width: 100vw;
        display: contain;
    }
    .container{
        width: 100vw;
        height: 100vh;
        position: relative;
        display: cover;
    }
    .cir{
        border-radius: 50%;
        position: absolute;
        font-family: 'Anton', sans-serif;
        font-size: 0.5em;
        text-align: center;
        color: white;
        background-color: red;
        line-height: 45px;
        height: 45px;
        width: 45px;
    }`;

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

