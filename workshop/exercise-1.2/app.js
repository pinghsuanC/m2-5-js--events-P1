// Exercise 1.2
// ------------
console.log('exercise 1.2');
// get some important nodes
let h_node = getByTag("head")[0];
let b_node = getByTag("body")[0];
let r_node = getById("result");

// ******************** Adding contents ********************
// notes to inform time
//let time_node = getByClass("time-text");
let second_node = getById("time");
let t_limit = Math.floor(Math.random() * Math.floor(5));   // set the limit
// it wasn't specified so I allow 0 seconds here.
let time_node = createNewNode("TEXT", `${t_limit}`, second_node);

// challenge: set count-down timer :D
let t_limit_countdown = t_limit-1;        // duplicate, used for countdown
let interval_id = setInterval(function(){
    if(t_limit_countdown === 0){
        clearInterval(interval_id);
    }
    time_node.innerText = t_limit_countdown;
    t_limit_countdown--;
}, 1000);

// event listeners.etc
let time_id = undefined;
// add timeout
time_id = setTimeout(function(){
    let n_node = createNewNode("SPAN", "YOU LOST!", r_node);
    n_node.id = "r-node";
    b_node.removeEventListener("click", win_f);
    clearTimeout(time_id);      // clean up timeout
    clearInterval(interval_id); // clean up countdown
    }, t_limit*1000    // unit = ms
);

// add event listener for body
b_node.addEventListener("click", win_f);


function win_f(){
    let n_node = createNewNode("SPAN", "YOU WIN!", r_node);
    n_node.id="r-node";
    clearTimeout(time_id);      // clean up timeout
    clearInterval(interval_id); // clean up countdown
    b_node.removeEventListener("click", win_f);
}

// ******************** adding styles ********************
let content_style = `* {margin: 0;
        padding: 0;
    }
    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Noto Sans SC', sans-serif;
        text-align: center;
        background-image:
        radial-gradient(
        circle,
        #05044a, #01c9f7)
    }
    .time-text {
        display: inline-block;
        color: white;
        font-size: 3em;
    }
    #r-node {
        display: inline-block;
        color: #ff00fe;
        font-size: 10em;
        margin-top: 20vh;
    }
    `
let content_font = href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&display=swap";
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
