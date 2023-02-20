form.addEventListener('submit',(e)=>{
    var regName = /^[A-Za-z-" "]+$/;
    var regName2= /^[A-Za-z-" "]+$/;
    var regName3= /^[A-Za-z-" "]+$/;
    var name = document.getElementById('frname').value;
    var fatname=document.getElementById('fatname').value;
    var motname=document.getElementById('motname').value;
    var e_mail= document.getElementById('e_mail').value;
    var num= document.getElementById('num1').value;
    var add= document.getElementById('subject').value;
    var state=document.getElementById('state').value;
    var city=document.getElementById('city').value;

    console.log(e_mail)
    // <p id=" v">Invalid name</p>
    const em= e_mail.split("");
    const nam = name.split("");
    const fat = fatname.split("");
    const mat = motname.split("");
    // const n = num.split("");
    const ln=nam.length;
    // console.log(num)
   
    if(ln<3){
        e.preventDefault();
        document.getElementById('result').innerHTML=`
        <p>Please Enter Your Full Name</p>`
    } 
    if(!regName.test(name)){
        e.preventDefault();
        document.getElementById('result').innerHTML=`
        <p>Invalid name</p>`

    }
    if(fat.length<3){
        e.preventDefault();
        document.getElementById('result2').innerHTML=`
        <p>Please Enter Your Full Name</p>`
    }
    if(!regName2.test(fatname)){
        e.preventDefault();
        document.getElementById('result2').innerHTML=`
        <p>Invalid name</p>`
    }

    if(mat.length<3){
        e.preventDefault();
        document.getElementById('result3').innerHTML=`
        <p>Please Enter Your Full Name </p>`
    }
    if(!regName3.test(motname)){
        e.preventDefault();
        document.getElementById('result3').innerHTML=`
        <p>Invalid name</p>`
    }
    if(em==""){
        e.preventDefault();
        document.getElementById('result5').innerHTML=`
        <p>Fill your email here </p>`
    }
    if(!regName3.test(em[0])){
        e.preventDefault();
        document.getElementById('result5').innerHTML=`
        <p>Invalid email</p>`
    }

    if(!num){
        console.log(num.length)
        e.preventDefault();
        document.getElementById('result6').innerHTML=`
        <p>Fill your number here </p>`
    }
    if(add==""){
        e.preventDefault();
        document.getElementById('result7').innerHTML=`
        <p>Fill your Address here </p>`
    }

    if(state==""){
        e.preventDefault();
        document.getElementById('result8').innerHTML=`
        <p>Fill your state here </p>`
    }

    if(city==""){
        e.preventDefault();
        document.getElementById('result9').innerHTML=`
        <p>Fill your city here </p>`
    }
    
})

