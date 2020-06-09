import React, { useState, useEffect } from 'react';
import fire from '../fireBase';
import { Button, Card} from 'react-bootstrap';
import data from "../data";
import uid from 'uid';


// console.log(fire.doc)
function Board(props) {

const  [showList ,setshowList] = useState(false)
const [cardList, setcardList] = useState([])
  

  const swichList = (id) =>{
    const el = document.getElementById(id);
    if(el.style.display === "none"){
      el.style.display = "block";
    }else{
      el.style.display = "none";
    }    
   
  }

  
  const AddListCard = (props) => {
    
    const handform = e =>{
      e.preventDefault()
      const recordID = uid();
      const cardid = `${props.cardUid}input`;
      const inputf = document.getElementById(cardid).value;
      console.log(props.privList);
      console.log(...props.privList, inputf);
      console.log(props.cardUid);
      
      const res = fire.collection("posts").doc(`${props.cardUid}`).update({
        cardList: [...props.privList, inputf]
      });
      setcardList(privList => [...props.privList, inputf]);
      
      

    }
    return(
      <div className="formInCard" id={`${props.cardUid}form`}>
        <form onSubmit={handform}>
        <input type="text" id={`${props.cardUid}input`}/>

         <button type="submit">Create</button>
        </form>
        <h1>{props.cardUid}</h1>
      </div>
    )
  }

  console.log(cardList);

  const renderCard = (card, index) => {
    const handleAdding = () => {
      console.log(card.cardList)

    }
      return (
        
        <Card id={card.id} style={{ width: "18rem" }} key={index} className="col col-md-4">
          <Card.Body >
            <Card.Title>{card.title}</Card.Title>
      <p>{card.cardList.map(el   => (<div>{el}</div>))}</p>
            <Card.Text>{card.text}</Card.Text>
            <Card.Title>{card.id}</Card.Title>
            <button onClick={e => swichList(`${card.id}form`)} >{showList? "hide Form": "Show Form"}</button>
            {<AddListCard privList={card.cardList} cardUid={card.id} />}
          </Card.Body>
        </Card>
      );
    };

  return (
      <div className="row">
          {props.cardInfo.map(renderCard)}

      </div>
  )
}


export default Board;


//             {/* <>
//   <Navbar bg="dark" variant="dark">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// </DropdownButton>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-info">Search</Button>
//     </Form>
//   </Navbar>
//   <br />

// </> */}


