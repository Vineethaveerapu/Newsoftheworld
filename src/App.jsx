
import './App.css'
import { articles} from './data/data'
import { getImageUrl } from './utils/functions'

function App(){
  return(
    <>
    {articles.map((item, index) =><img key = {index} src ={getImageUrl(item.image)}>

    </img>)}
    </>
  )
}

export default App