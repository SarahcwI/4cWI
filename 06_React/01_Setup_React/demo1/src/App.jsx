import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h1 className='bg-amber-300'>Hello Vite + React!</h1>

      <div className="flex">
        <Card name={"Lenz"} jobtitel={"AV"} description={"lässig"} />
        <Card name={"Sams"} jobtitel={"AV"} description={"lässig ebenfalls"} />
      </div>


    </>
  )
}

export default App
