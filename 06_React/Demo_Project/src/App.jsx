import "./App.css";

import Components1 from "./components/pages/Components1";
import Card1 from "./components/Card1";
import PeopleContainer from "./components/PeopleContainer";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      {/*<Components1 />
     <Card1 />*/}

     <PeopleContainer />
     <PersonCard name="Hans" titel="ceo" imageUri="https://picsum.photos/200/300"/>
    </>
  );
}

export default App;
