var ing_list=[];
var API_url="";
function val() {
    var str="";
    API_url = `https://63f257b74f17278c9a25411e.mockapi.io/api/v1/meals/`;
    console.log(API_url)
    meal();
}
val();

async function meal() {
    const res = await fetch(API_url);
    data = await res.json();
    console.log(data);
    for(i=0;i<data.length;i++){
    const image=data[i].strMealThumb;
    const id = data[i].idMeal;
    const area=data[i].strArea;
    const cat=data[i].strCategory; 
    const name=data[i].strMeal;
    const inst=data[i].strInstructions;
    const video=data[i].strYoutube;
    var count=i;


    // console.log(rates);
    create_card(image,area,cat,name,count,data,id,inst,video);
    // check(data);
    }
}

function create_card(image,area,cat,name,count,data,id,inst,video){
    var card=document.createElement("div");
    var img1 = document.createElement('img');
    var p=document.createElement('span');
    var p2=document.createElement('div');
    var p3=document.createElement('div');
    bt=document.createElement('button');
   

    const na = document.createTextNode(name);
    const node = document.createTextNode(area);
    const ca = document.createTextNode(cat);
    p.appendChild(na);
    p2.appendChild(node);
    p3.appendChild(ca)
    // console.log(area)
    // p="asdas";
    // p.appendChild(area);
    card.setAttribute("class", "card");
    img1.setAttribute("class", "img1");
    bt.setAttribute("class", "bt");
    bt.setAttribute("id", count);
    // console.log(bt);
    bt.innerHTML="Full details";
    img1.src=image;
    // console.log(card)
    var res = document.getElementById("card_1");
    // res.innerHTML = `${card}`;
    res.appendChild(card);
    card.appendChild(img1)
    card.appendChild(p)
    card.appendChild(p2)
    card.appendChild(p3)
    card.appendChild(bt)
    // res.innerHTML = `sdfsewdfcrewdfcs`;

    // bt.onclick = function () {
    //     console.log(bt);
    //   };

    for (const child of card.children) {
        bt.onclick = function () {
          console.log(child.id);
        //   ingr(child.id);
          details(child.id,image,area,cat,name,count,data,id,inst,video);
          
        };
      }
}

// function check(data){
// // for(i=0;i<data.length;i++){
//         bt.onclick = function () {
//             console.log(bt);
//           };
//     // }
// }

// function ingr(i){
//         if(data[i].strIngredient1!=""&& data[i].strIngredient1!=null){
//             ing_list.push(data[0].strIngredient1)
//             console.log(ing_list)
//         }
// }

function d_d(){
var regName = /^[A-Za-z-" "]+$/;
var regName2= /^[A-Za-z-" "]+$/;
var regName3= /^[A-Za-z-" "]+$/;
var nam = document.getElementById('name').value;
var motname=document.getElementById('mail').value;
var e_mail= document.getElementById('email').value;

console.log(e_mail)
// <p id=" v">Invalid name</p>
const e= e_mail.split("");
const no = nam.split("");
const fat = fatname.split("");
// const n = num.split("");
const ln=nolength;
console.log(num)

if(ln<3){
    e.preventDefault();
    document.getElementById('result').innerHTML=`
    <p>Please Enter Your Full Name</p>`
} 
if(!regName.test(nam)){
    e.preventDefault();
    document.getElementById('result').innerHTML=`
    <p>Invalid name</p>`

}
    var em=document.getElementById("email").value;
    var naa=document.getElementById("name").value;
    window.location.href=`sub.html?mail=${em}&name=${naa}`;
}

function dta(){
    var m=document.getElementById("mail").value;
    window.location.href=`sub.html?mail=${m}`;
}
function play(){

    const qs=window.location.search;
    const urlParams= new URLSearchParams(qs);
    const fn=urlParams.get('mail');
    const naa=urlParams.get('name');
    console.log(fn)
    
    var my = document.getElementById("my_data");
    const n = document.createTextNode(`Email :${fn}`);
    const o = document.createTextNode(`Name:${naa}`);
   if(o!=null){
    my.appendChild(o);
   }
    my.appendChild(n);

}

function details(i,image,area,cat,name,count,data,id,inst,video){
    console.log(data[i]);
    window.location.href=`information.html?name=${name}&image=${image}&area=${area}&id=${id}&cat=${cat}&video=${video}&inst=${inst}`;
}

function get_data(){
    const queryString = window.location.search;
    // console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const nam = urlParams.get('name')
    const img = urlParams.get('image')
    const are = urlParams.get('area')
    const id = urlParams.get('id')
    const cat = urlParams.get('cat')
    const video = urlParams.get('video')
    const inst = urlParams.get('inst')
    console.log(img);
    var myElement = document.getElementById("na");
    var myEle = document.getElementById("im");
    var ins = document.getElementById("instruction");
    var vi = document.getElementById("vi");
    var de = document.getElementById("de");
    var de2 = document.getElementById("de2");
    var de3 = document.getElementById("de3");
    var img1 = document.createElement('img');
    var vid = document.createElement('video');
    var d = document.createElement('div');
    var s = document.createElement('source');
    vi.appendChild(s);
    myElement.innerHTML=nam;
    const n = document.createTextNode(`Meal ID: ${id}`);
    const n2 = document.createTextNode(`Meal Area: ${are}`);
    const n3 = document.createTextNode(`Meal category: ${cat}`);
    const n4 = document.createTextNode(`  instrauction:   ${inst}`);


    de.appendChild(n);
    de2.appendChild(n2);
    de3.appendChild(n3);
    ins.appendChild(n4)
    // de.innerHTML=`Meal ID: ${are}`;
    // de.appendChild(d);
    // de.innerHTML=`Meal ID: ${id}`;
    console.log(are)
    img1.src=img;
    vid.src=video;
    myEle.appendChild(img1);
    console.log(ing_list)
}


// var regName = /^[A-Za-z-" "]+$/;
// var regName2= /^[A-Za-z-" "]+$/;
// var regName3= /^[A-Za-z-" "]+$/;
// var nam = document.getElementById('name').value;
// var motname=document.getElementById('mail').value;
// var e_mail= document.getElementById('email').value;

// console.log(e_mail)
// // <p id=" v">Invalid name</p>
// const em= e_mail.split("");
// const no = nam.split("");
// const fat = fatname.split("");
// // const n = num.split("");
// const ln=nam.length;
// console.log(num)

// // if(ln<3){
// //     e.preventDefault();
// //     document.getElementById('result').innerHTML=`
// //     <p>Please Enter Your Full Name</p>`
// // } 
// // if(!regName.test(nam)){
// //     e.preventDefault();
// //     document.getElementById('result').innerHTML=`
// //     <p>Invalid name</p>`

// // }
// if(no.length==0){
//     e.preventDefault();
//         document.getElementById('result').innerHTML=`
//         <p>Invalid name</p>`
// }

// if(em==""){
//     e.preventDefault();
//     document.getElementById('result5').innerHTML=`
//     <p>Fill your email here </p>`
// }
// if(!regName3.test(em[0])){
//     e.preventDefault();
//     document.getElementById('result5').innerHTML=`
//     <p>Invalid email</p>`
// }

