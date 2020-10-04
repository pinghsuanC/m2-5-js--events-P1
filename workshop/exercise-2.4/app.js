console.log("exercise-2.4");
// get some important nodes
const h_node = getByTag("head")[0];
const b_node = getByTag("body")[0];
const m_node = getById("main");
const NUM_C = Math.floor(Math.random() * Math.floor(10)) + 1;   // 1~15 circles

// ~~~~~~~~~~~~~~~~~~~~ add contents ~~~~~~~~~~~~~~~~~~~~
// the bar on the top
let topBar = createNewNode("SPAN", "", m_node);
topBar.classList.add("top-bar");
// add a inner container below
let midCon = createNewNode("DIV", undefined, m_node);
midCon.classList.add("mid-con");
// add button for top-bar
let topB = createNewNode("BUTTON", "START", topBar);
topB.classList.add("top-b");
// add a text to display
let second = Math.floor(Math.random() * Math.floor(10)) + 1; // 1~10
let cd = createNewNode("DIV", undefined, topBar);
cd.classList.add("text-cd");
let num_check = NUM_C;  // decrement each time until 0
// add NUM_C circles inside
let start_game = function(){
    topB.style.visibility = "hidden";
    cd.innerText = `${second}`;
    second--;
    let int_id = setInterval(function(){
            if(second===0){
                clearInterval(int_id);
                if(num_check>0){
                    loseGame();
                }
            }
            cd.innerText = `${second}`;
            second=second - 1;
        }
        , 1000
    )
    for(let n = 0; n<NUM_C; n++){
        let c_node = createNewNode("DIV", `${n+1}`, midCon);
        c_node.classList.add("cir");
        // randomly generate a positoin
        c_node.style.left = `${Math.random()*90}%`;
        c_node.style.top = `${Math.random()*90}%`;
        // add event listener for each 
        let to_green = function(){
            c_node.style.background = "green";
            num_check--;        // decrement
            c_node.removeEventListener("click", to_green);
            if(num_check===0){
                if(second>=0){
                    winGame();
                }
                
            }
        }
        c_node.addEventListener("click", to_green);
    }
}
// add event listener for button
topB.addEventListener("click", start_game);




function checkGame(s, num, id){
    if(s===0 && num>0){
        clearInterval(id);
        endGame()
        loseGame();
    }else if(s>=0 && num===0){
        endGame()
        winGame();
    }
}
let midB = undefined;
let l = [];
// functio to end the game
function endGame(){
    // get all cir elements
    l = getByClass("cir");
    l.forEach(element => {
        element.removeEventListener("click", to_green);
    });
}
// functio to win the game
function winGame(){
    // add button mid inside
    midB = createNewNode("DIV", "", midCon);
    midB.classList.add("mid-b");
    midB.style.background = "green";
    midB.innerText = "YOU WIN!!!";
    midB.animate([
        // keyframes
        {transform: "scale(1.3)"}
    ], {
        //timing
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
        fill: "forwards"
    });
    //midB.style.animationFillMode = "backwards";
}
// functio to lose the game
function loseGame(){
    // add button mid inside
    midB = createNewNode("DIV", "", midCon);
    midB.classList.add("mid-b");
    midB.style.background = "red";
    midB.innerText = "YOU LOST!!!";
    midB.animate([
        // keyframes
        {transform: "rotate(360deg)"}
    ], {
        //timing
        duration: 2000,
        iterations: 1
    });
}

/*midB = createNewNode("DIV", "", midCon);
midB.classList.add("mid-b");
midB.style.background = "green";
midB.innerText = "YOU WIN!";*/



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
    .top-bar{
        width: 100%;
        height: 12%;
        position: absolute;
        background: gray;
        color: white;
        display: flex;
        justify-content: center;
    }
    .text-cd{
        position: absolute;
        height: 12%;
        top: 20%;
        color: white;
    }
    .top-b{
        color: gray;
        position: absolute;
        width: 130px;
        height: 60%;
        line-height: 60%;
        top: 20%;
        background-color: yellow;
    }
    .mid-con{
        position: absolute;
        top: 20%;
        left: 20%;
        right: 20%;
        width: 60%;
        height: 70%;
        background: #eaeaea;
    }
    .cir{
        color: white;
        position: absolute;
        display: inline-block;
        text-align: center;
        font-size: 0.5em;
        background: red;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
    }
    .mid-b{
        color: white;
        position: absolute;
        top: 35%;
        left: 35%;
        background: black;
        width: 30%;
        height: 150px;
        line-height: 150px;
        border-radius: 10px;
        box-shadow: 14px 13px 20px -7px rgba(94,94,94,0.77);
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

