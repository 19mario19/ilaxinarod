
import mainLogo from "../assets/logo.png"
import CardList from "../components/CardList"
import list from "../data/data"

function Home() {
 

  return (
    <div className="home">
      <div className="title">
        <img src={mainLogo} alt="page logo" />
        <h2>Galaratoria</h2>
      </div>
      <CardList list={list} />
      
     
    </div>
  )
}

export default Home
