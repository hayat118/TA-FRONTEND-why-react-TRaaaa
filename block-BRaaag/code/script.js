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





// let form = document.querySelector('form')
// let movie = document.querySelector('#movie');
// let list = document.querySelector('.list');


// // function elm(type){
// //     let element = document.createElement(type);
// //     return element;
// // }

// let elm = React.createElement;
// console.log("hello this is tarique")

// function watch(event){
//     event.preventDefault()
//     let movielist=[]
//     let value = event.target.elements.movie.value;
//     console.log(value)
  

//     movielist.push({
//         movie:value,
//         watch:`To Watch`,
//     })
  



//     event.target.elements.movie.value="";

//  createUI(movielist);
   
// }


// function createUI(arr){
//   //  let list = document.querySelector('.list');
//   let allTodo=  arr.map((elm)=>{
       
//     return (
//         <div>
//             <p>{elm.movie}</p>
//             <button>{elm.watch}</button>
//         </div>
        
//     )
  
//     })
//     ReactDOM.render(allTodo,list);
// }

// // function change(event){

// // }

// form.addEventListener('submit',watch)