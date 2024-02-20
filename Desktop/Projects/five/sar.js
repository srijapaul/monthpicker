const URL="https://cat-fact.herokuapp.com/facts";
const fact1=document.querySelector("#fact");
const button1=document.querySelector("#btn");
/*
const getFacts =async()=>{
    let response=await fetch(URL);
    console.log("getting data 4 you");
    let data=await response.json();
   // console.log(data[2].text);
    fact1.innerHTML=data[4].text;
}*/

function getFacts(){
    fetch(URL)
    .then(res => {
        return res.json();
    })
    .then(data =>{
        fact1.innerHTML=data[4].text;
    });
}


button1.addEventListener("click",getFacts);


























































/*function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("ello there mate === 1");
            resolve("done");
        },2000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("ello there mate === 2");
            resolve("done");
        },2000);
    });
}

let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
    let p2=asyncFunc2();
    p2.then((res)=>{
    console.log(res);
});
});*/


/*function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather details");
            resolve("done");
        },2000);
    });
}

async function getAll(){
   
}*/
/*

function getData(id){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("ID",id);
    resolve("done");
    
    },2000);
    });
}
(async function(){
    console.log("getting 1");
    await getData(1);
    console.log("getting 2");
    await getData(2);
    console.log("getting 3");
    await getData(3);
})();

*/

/*//promise chain
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    getData(3);
});*/

/*callBack hell
getData(1, ()=>{
    getData(2,()=>{
        getData(3, ()=>{
            getData(4,()=>{
                getData(5);
            })
        })
    })});*/








/*let mode1=document.querySelector("#mode");
let body=document.querySelector("body")
let mode="light";
mode1.addEventListener("mouseover",()=>{
    if(mode==="light"){
        mode='dark';
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode='light';
        body.classList.add("light");
        body.classList.remove("dark");
    }
});*/
