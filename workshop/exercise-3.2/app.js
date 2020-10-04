console.log("exercise-3.1");
// get some important nodes
const h_node = getByTag("head")[0];
const b_node = getByTag("body")[0];
const m_node = getById("main");

// ~~~~~~~~~~~~~~~~~~~~ add content ~~~~~~~~~~~~~~~~~~~~
let time_node = createNewNode("DIV", "", m_node);
time_node.classList.add("t-box");
time_node.innerText="00:00";
// create internal container
let midCon = createNewNode("DIV", undefined, m_node);
midCon.classList.add("mid-con");

let b_start = createNewNode("BUTTON", "START", midCon);
b_start.classList.add("btn-start");
let b_end = createNewNode("BUTTON","STOP",midCon);
b_end.classList.add("btn-stop");
let b_clear = createNewNode("BUTTON","CLEAR", midCon);
b_clear.classList.add("btn-clear");


// add event listener
let second = 0;
let minute = 0;
let inter_start_id = undefined;

let startTime = function(){  
    b_start.removeEventListener("click", startTime);    // remove the event listener
    inter_start_id = setInterval(
            function(){
                minute = Math.floor(second/60);
            if(second%60<10 && minute<10){  //e.g. 00:00
                time_node.innerText=`0${minute}:0${second%60}`;
            }else if(second%60<10 && minute>=10){   // e.g. 60:09
                time_node.innerText=`${minute}:0${second%60}`;
            }else if(second%60>=10 && minute<10){   // e.g. 09:10
                time_node.innerText=`0${minute}:${second%60}`;
            }else if(second%60>=10 && minute>=10){  // e.g. 10:10
                time_node.innerText=`${minute}:${second%60}`;
            }else{
                console.log("HERE");
            }
            
            second++;   // implement seconds
        }
        ,1000   // evert second
    );
}

let endTime = function(){
    clearInterval(inter_start_id);
    b_start.addEventListener("click", startTime);       // re-adding event listener
}
let clearTime = function(){
    clearInterval(inter_start_id);
    second = 0;
    minut = 0;
    time_node.innerText="00:00";
    b_end.addEventListener("click", endTime);           // re-adding event listener
    b_start.addEventListener("click", startTime);       
}

b_start.addEventListener("click", startTime);
b_end.addEventListener("click", endTime);
b_clear.addEventListener("click", clearTime);


// set interval
/*let inter_id = setInterval(function(){
        // get time
        const t = new Date();
        time_node.innerText = `${t}`;
    }
    ,1000
);*/

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
    .t-box{
        color: white;
        text-align: center;
        position: absolute;
        top: 20%;
        width: 100%;
        height: 20%;
        line-height: 140px;
        background: gray;
    }
    .mid-con{
        position: relative;
        display: flex;
        justify-content: space-evenly;
        top: 40%;
    }
    .btn-start{
        width: 100px;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }
    .btn-stop{
        width: 100px;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }
    .btn-clear{
        width: 100px;
        height: 60px;
        line-height: 60px;
        text-align: center;
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

