import './App.css'
import List from './components/List'
import Card from './components/Card'
import Button from './components/Button'


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

    <div>
      <Button description={"Sendar"} />
    </div>
    </>
  )
}

export default App
