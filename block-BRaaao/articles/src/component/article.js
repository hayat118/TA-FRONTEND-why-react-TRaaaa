import data from '../data';


function Articles(){
  return (
    <> 
    {
      data.map((article)=>{
        return (
          <div className='article'>
            <Article {...article} />
          </div>
        )
      })
    }
     </>
  )
}

function Article(props){
 return (
   
   <div>
     <img src={props.urlToImage} alt='' width="200"/>,
     <h2>{props.title}</h2>
   </div>
 )
}
export default Articles;