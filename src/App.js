import React, {useState,useEffect} from "react";
import { Container} from "react-bootstrap";
import  {person}  from "./data";
import DatesCount from "./component/DatesCount";
import DatesList from "./component/DatesList";
import DetesAction from "./component/DetesAction";

function App() {
const [personData, setPersonDara] = useState(person)
const onDelete =()=>{
  setPersonDara ([])
}
const onShow = ()=>{
  setPersonDara (person)

}

useEffect(()=>{
  setPersonDara ([])
},[])
  return (
    <div className="font color-body">
        <Container className="py-5">
        <DatesCount person={person}/>
        <DatesList  person={personData}/>
        <DetesAction deleteData={onDelete} showData={onShow}/>

        </Container>
    </div>
  );
}

export default App;
