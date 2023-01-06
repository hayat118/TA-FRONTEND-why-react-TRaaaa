// let form= document.querySelector('form');
// let movie=document.querySelector('#movie');
// let list=document.querySelector('.list');

// function elm(type,{},...children){
//   let element=document.createElement(type);
//   for(let key in attr){
//     if(key.startsWith("data-")){
//       element.setAttribute(key,attr[key]);
//     }else{
//       element[key]=attr[key];
//     }
//   }
  
//    children.forEach((child)=>{
//      if(typeof child === 'object') {
//        element.append(child)
//      }
//      if(typeof child=== 'string'){
//        let node=document.createTextNode(child);
//        element.append(node);
//      }
//    });
//    return element;
// }


// function createmovie(data=[]){
//   root.innerHTML=""
//   data.forEach((event)=>{
//     let li= elm(
//       "li",
//       {},
//       elm("h2",{},event.target.value),
//       elm("button",{},"To Watch")
//     );
//   root.append(li);
//   })
// }


let form = document.querySelector('form')
let movie = document.querySelector('#movie');
let list = document.querySelector('.list');


function elm(type){
    let element = document.createElement(type);
    return element;
}

function watch(event){
    event.preventDefault()

    let value = event.target.elements.movie.value;
    console.log(value)
  

    
    let p = elm('p');
    let button = elm('button');
    button.addEventListener('click',function(){
        if(button.innerText==='To Watch'){
            button.innerText='Watched'
        }else if(button.innerText==='Watched'){
            button.innerText='To Watch'
        }
    })
    let div = elm('div');
    p.innerText= value;
    button.innerText = 'To Watch';
    div.append(p,button);
    list.append(div);
    

    event.target.elements.movie.value="";

   
}



form.addEventListener('submit',watch)