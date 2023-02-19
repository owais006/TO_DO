const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
const key = document.getElementById("api_key");
const btn = document.getElementById("btn");
var rest1=document.getElementById('res');
var k = "";
var API_url = "";
var count=0;
var taskobj=[];

function val() {
    k = key.value;
    // API_url = `https://v6.exchangerate-api.com/v6/${k}/latest/USD`;
    // API_url=`https://v6.exchangerate-api.com/v6/${k}/pair/EUR/GBP`;
    //   console.log(API_url)
    btn.style.display="none";
    rest1.innerHTML=""
    currency();
    // mask();
    set_key(k);
    get_key();}
 
function load(ke){
    // API_url = `https://v6.exchangerate-api.com/v6/${ke}/latest/USD`;
    // API_url=`https://v6.exchangerate-api.com/v6/${k}/pair/EUR/GBP`;
    //   console.log(API_url)
    currency();
    // mask();
}

let html = "";

// a62d9ca7d3e1d0d784c289df

async function currency() {
    const res = await fetch(API_url);
    const data = await res.json();
    // console.log(data)
    // console.log(data.conversion_rates)
    const rates = data.conversion_rates;
    // console.log(rates)
    const arrkeys = Object.keys(data.conversion_rates);
    // console.log(arrkeys);

    arrkeys.map((item) => {
        return (html += `<option value=${item}>${item}</option>`);
    });
    // console.log(html);

    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = html;
    }

    function convert(i, j) {
        input[i].value =
            (input[j].value * rates[select[i].value]) / rates[select[j].value];
    }

    input[0].addEventListener("keyup", () => convert(1, 0));

    input[1].addEventListener("keyup", () => convert(0, 1));

    select[0].addEventListener("change", () => convert(1, 0));

    select[0].addEventListener("change", () => convert(0, 1));
}

function set_key(k) {
    taskobj = [k];
    taskobj.push(k);
    localStorage.setItem("task", JSON.stringify(taskobj));
    count=1;
}

function get_key(){
    // if(count===1){
        var webdata = localStorage.getItem("task");
        key_value = JSON.parse(webdata);
        console.log(key_value[0]);
    // }
    load(key_value[0]);
}
