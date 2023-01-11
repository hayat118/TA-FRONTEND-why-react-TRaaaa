import propTypes from 'prop-types';

import data from '../data';


function Articles(){
  return (
    <> 
    {
      data.map((article)=>{
        return (
          <div className='article'>
            <Article key={article.id} {...article} />
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

Article.propTypes={
  img:propTypes.string.isRequired,
  title:propTypes.number.isRequired,
}


export default Articles;