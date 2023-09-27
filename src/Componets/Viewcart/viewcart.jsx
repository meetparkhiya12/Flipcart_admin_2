import React from 'react'
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, productremove } from '../../Services/Action/action';
import './viewcart.css'
import { Link } from 'react-router-dom';

function Viewcart() {

  const productData = useSelector(state => state.Productreducer.products)
  console.log("productData", productData[0].price);

  const dispatch = useDispatch();
  let totalprice = 0;



  const handleRemove = (id) => {
    dispatch(productremove(id))
  }

  const handlepay = () => {
    alert("Succesfully Payment")
  }

  const inc = (id) => {
    dispatch(increment(id))
  }

  const dec = (id) => {
    dispatch(decrement(id))
  }

  return (
    <>





      <Container>

        <h1 className='text-center my-3'>View cart</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Qty</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              productData.map((data) => {
                // console.log(data, "data");
                totalprice += data.price * data.qty
                return (
                  <tr>
                    <td>
                      <div style={{width:"100px", height:"100px"}}>
                        <img src={data.thumbnail} alt="" style={{width:"100%", height:"100%",objectFit:"cover"}} />
                      </div>
                    </td>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td>
                      <button onClick={() => dec(data.id)} className='bg-light decbtn'>-</button>
                      {data.qty}
                      <button onClick={() => inc(data.id)} className='incbtn'>+</button>
                    </td>

                    <td>{data.price}</td>
                    <td><button className='btn btn-danger' onClick={() => handleRemove(data.id)}>Remove</button></td>
                  </tr>
                )
              })
            }


          </tbody>
        </Table>

        <div className="maincard d-flex justify-content-end">

          <div className="card1" style={{ width: '250px' }}>
            <div className="total " style={{ background: "green", textAlign: "center", color: "#fff" }}>
              <h4>Total</h4>
            </div>
            <div className="total-price d-flex p-2">
              <h5 className='d-flex'>Total : </h5> <h5 className='text-success ps-2'>{totalprice + " " + "Rs"}</h5>


            </div>
            <div className="button d-flex justify-content-between p-2" style={{ width: "100%" }}>
              <Link to={'/product'}> <button className='btn btn-primary'>Back shoping</button></Link>

              <button className='btn btn-info' onClick={handlepay}>Pay</button>

            </div>

          </div>
        </div>


      </Container>
    </>
  )
}

export default Viewcart