import Header from './header';
import Article from './article';
import Footer from './footer';

function App(){
  return (
    <>
    <Header/>
    <div className='articles'>
      <Article  />
    </div>
    <Footer/>
    </>
  )
}

export default App;