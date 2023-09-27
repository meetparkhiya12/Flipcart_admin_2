import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProductasync } from '../../Services/Action/Product Action/Productaction';

function AddProduct() {

    const [inputValue, setinputvalue] = useState({
        title: '',
        category: '',
        rating: '',
        price: '',
        description: '',
        image: '',
    }
);

// console.log(inputValue);
const dispatch = useDispatch()



const hadlesubmit = (e) => {
    e.preventDefault();
    dispatch(addProductasync(inputValue));
	console.log(inputValue);

setinputvalue({
    title: '',
    category: '',
    rating: '',
    qty : '',
    price: '',
	type : '',
    description: '',
    image: '',
})
}

const handlechange = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setinputvalue({...inputValue, [name]: value})

}

  return (
    	
        <Container className='d-flex align-items-center'>

        <form className='col-12' onSubmit={hadlesubmit}>
        <div class=" col-6 mb-3 mt-3">
          <label class="form-label">Title :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Title" name="title" onChange={handlechange} value={inputValue.title}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Category :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Category" name="category" onChange={handlechange} value={inputValue.category}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Reting :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Reting" name="rating" onChange={handlechange} value={inputValue.rating}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Qty :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Qty" name="qty" onChange={handlechange} value={inputValue.qty}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Price :</label>
          <input type="text" class="form-control"  placeholder="Enter Product Price" name="price" onChange={handlechange} value={inputValue.price}/>
        </div>
		<div class="mb-3 col-6 ">
          <label class="form-label">Type :</label>

          {/* <select name="" id="" onChange={handlechange} value={inputValue.type}>
            <option value="">Electronic</option>
            <option value="">Home-Decore</option>
            <option value="">Beuty</option>
          </select> */}
          <input type="text" class="form-control"  placeholder="Enter Product Type" name="type" onChange={handlechange} value={inputValue.type}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Description  : </label>
          <input type="text" class="form-control"  placeholder="Enter Product Description" name="description" onChange={handlechange} value={inputValue.description}/>
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Product Image  : </label>
          <input type="text" class="form-control"  placeholder="Enter Product Image Link" name="image" onChange={handlechange} value={inputValue.image}/>
        </div>
        
     
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </Container>
  )
}

export default AddProduct