import React, { useState, useEffect } from 'react';
import fire from '../fireBase';
import Board from '../Components/Board'
import uid from 'uid';
import { Button,
            Card,
            Navbar,
            Nav,
            Form,
            FormControl,
            DropdownButton,
            Dropdown
        } from 'react-bootstrap';

function BoardContainer() {

  const [Text, setText] = useState([]);
  const [Form, setshowForm] = useState(false)
  const [InputState, setInputState] = useState("")

  const fetchData = async () => {
      const res = await fire.collection('posts').get() //[]
      const posts =  res.docs.map(post => post.data())
      setText(posts)
      console.log(posts);
      
  }

const swichform = () =>{
  setshowForm((prevVal) => !prevVal)
}
  //SHOW AND HIDE BOARD FORM the main form
  const showForm = () => {
    const handleClick = (e) => {
      e.preventDefault()
      const uniID = uid();
      fire.doc(`posts/${uniID}`).set({
        id: uniID,
        title: InputState,
        cardList: []})
      setText(prevState => [...prevState, {
        id: uniID,
        title: InputState,
        cardList: []
      },])
      swichform()
    }

    return (
      <div> 
        <form onSubmit={handleClick} id= "add-app">
          <label>Board Name : </label>
          <input type="text" onChange={e => setInputState(e.target.value)}/>
          <button type="submit">Create</button>
        </form>
      </div>
      );
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
      <div className="container">
          board container
          <Board cardInfo={Text} />
          <button onClick={swichform}>{!Form? 'show form': "hide form"}</button>
          {Form && showForm()}
      </div>
  )
}
export default BoardContainer;