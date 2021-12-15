import React, { useState } from 'react'


import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
const AddMovie = ({Add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setname] = useState('')
    const [date, setdate] = useState('')
    const [rating, setrating] = useState(1)
    const [image, setimage] = useState('')


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  //handle submit
  const handleSubmit=(e)=>{e.preventDefault();
    const newMovie={
        id:Math.random(),
        name,
        date,
        rating,
        image
    }
    Add(newMovie)
    closeModal()

}

  //handle the rating
const handleRating=(x)=>setrating(x)
    return (
        <div>
          <Link to="/">home</Link>
          <button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" >
          
          <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
              <label>Date</label>
              <input type="date" value={date} onChange={(e)=>setdate(e.target.value)} />
              <label>Rating</label>
              <StarRating handleRating={handleRating} rating={rating}/>
              <label>Poster</label>
              <input type="url"  value={image} onChange={(e)=>setimage(e.target.value)} />
              <button type="submit">Confirm</button>
              <button>Cancel</button>
          </form>
          </Modal>  
        </div>
    )
}

export default AddMovie





