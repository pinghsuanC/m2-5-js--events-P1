console.log("exercise-2.2");

// get some important nodes
const h_node = getByTag("head")[0];
const b_node = getByTag("body")[0];
const m_node = getById("main");
const NUM_BOX = 20;


// add a container in main
let con = createNewNode("DIV", undefined, m_node);
con.classList.add("container");
con.id = "container";
//add boxes to container
for(let n = 0; n<NUM_BOX; n++){
    let b = createNewNode("BUTTON", `${n+1}`, con);
    b.classList.add("s-box");


    // functions
    let to_green = function(){
        b.style.backgroundColor="green";
        b.removeEventListener("click", to_green);
        b.addEventListener("click", to_red);
    }
    let to_red = function(){
        b.style.backgroundColor="red";
        b.removeEventListener("click", to_red);
        b.addEventListener("click", to_green);
    }

    //add listeners
    b.addEventListener("click", to_green);      // start from to_green

    // tried to add comparison to colors in the listener but didn't work as desired.

}

// &&&&&&&&&&&&&&&&&&&& add some styles &&&&&&&&&&&&&&&&&&&&
// css styles are from last exercise
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
    }
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 80%;
        margin-top: 30px;
        margin-left: 10%;
        margin-right: 10%;
        text-align: center;
    }
    .s-box{
        font-family: 'Anton', sans-serif;
        font-size: 1.1em;
        color: white;
        background-color: red;
        line-height: 160px;
        height: 160px;
        width: 160px;
        margin: 3px;
        
    }
    `;


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

