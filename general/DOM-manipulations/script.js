// your javascript file
const container = document.querySelector('#container');

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";

const header3 = document.createElement("H3");
header3.textContent = "I'm a blue h3"; 

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

const blackpink = document.createElement("div");
blackpink.style.backgroundColor = "pink";
blackpink.style.borderStyle = "solid";
blackpink.style.borderColor = "black";

const header1 = document.createElement("h1");
// blackpink.appendChild(header1);
header1.textContent = "I'm in a div";

const bppara = document.createElement("P");
// blackpink.appendChild(bppara);
bppara.textContent = "ME TOO!";

blackpink.appendChild(header1);
blackpink.appendChild(bppara);


// container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header3);
container.appendChild(blackpink);

const btn1 = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

let color_flag = true;
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (e) {
    console.log(e.target); // look at js console (can also pass e)
    if(color_flag){
        e.target.style.background = 'blue';
        color_flag = !color_flag;
    } else {
        e.target.style.background = 'white';
        color_flag = !color_flag;
    }

  });