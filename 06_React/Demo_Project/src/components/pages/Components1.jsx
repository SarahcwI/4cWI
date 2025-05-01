import React from "react";
import List from "../List";
import Card from "../Card";
import Button from "../Button";
 

export default function Components1() {
  return (
    <div>
      
      <div>
        <List Drink={"Beer"} />
        <List Drink={"Coffee"} />
        <List Drink={"Tea"} />
        <List Drink={"Beer"} />
      </div>
      <div className="flex flex-row">
        <Card name={"John"} jobtitle={"Developer"} description={"Lorem"} />
      </div>
      <div>
        <Button description={"Sendar"} />
      </div>
    </div>
  );
}
