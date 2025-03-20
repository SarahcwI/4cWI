import './App.css'
import List from './components/List'
import Card from './components/Card'


function App() {

  return (
    <>
      <div>
        <List Drink={"Coffee"} />
        <List Drink={"Tea"} />
        <List Drink={"Beer"} />       
      </div>

    <div className='flex flex-row'>
      <Card name={"John"} jobtitle={"Developer"} description={"Lorem"} />
    </div>
    </>
  )
}

export default App
