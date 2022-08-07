import data from "./data.json" assert { type: "json" };
console.log(data[0].day);
let chart = document.querySelector(".chart");
let total = 0;
let greater = -1;
let day;
for(let i=0;i<data.length;i++){
    total+=data[i].amount;
}
for(let i =0;i<data.length;i++){
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    div2.classList.add("char");
    div2.classList.add(data[i].day);
    let div3 = document.createElement("div");///price box
    div3.classList.add("box");
    let span = document.createElement("div");
    span.innerText = `$${data[i].amount}`;
    div3.appendChild(span);
    div2.appendChild(div3);
    div.appendChild(div2);
    let h5 = document.createElement("h5");
    let text = document.createTextNode(data[i].day);
    h5.appendChild(text);
    div.appendChild(h5);
    chart.appendChild(div);

    //////////////height/////////////////
    let per = (data[i].amount/total)*100;
    if(greater<per){
        greater = per;
        day = data[i].day;
    }
    let height = Math.floor((per*60)/10);
    div2.style.height = `${height}px`;
}
let chars = document.querySelectorAll(".char");
document.querySelector(`.${day}`).classList.add("active");//add blue style


///display  price box when hover

chars.forEach((char)=>{
    char.addEventListener("mouseover",()=>{
       char.querySelector(".box").style.display = "block";
       char.style.cursor = "pointer"
    });
    char.addEventListener("mouseout",()=>{
       char.querySelector(".box").style.display = "none";
    });
})