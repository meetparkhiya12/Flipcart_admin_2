import React from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { EditProductasync, getAllAsyncData, removeProductasync } from '../../Services/Action/Product Action/Productaction';
// import { addProductasync } from '../../Services/Action/action';

function Home() {

    const productData = useSelector(state => state.Productreducer.products)
    console.log(productData,"Prooooooooooo");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (id) => {
        dispatch(removeProductasync(id))
      }


      const handleEdit = async (id) => {


       await  dispatch(EditProductasync(id))

        navigate(`/editproduct/${id}`);
      }


    const getdata = () => {
        dispatch(getAllAsyncData());
      }
     
      useEffect(() => {
        getdata();
      })

    return (
        <>
          
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='th1'>Image</th>
              <th >Title</th>
              <th className='th2'>Category</th>

              <th>price</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              productData.map((data) => {
        
                return (
                  <tr>
                    <td className='th1'>
                      <div style={{width:"100px", height:"100px"}} >
                        <img src={data.image} alt="" style={{width:"100%", height:"100%",objectFit:"cover"}} />
                      </div>
                    </td>
                    <td>{data.title}</td>
                    <td className='th2'>{data.category}</td>

                    <td>{data.price}</td>
                    <td><button className='btn btn-danger me-3' onClick={() => handleRemove(data.id)}>Remove</button><button className='btn btn-primary' onClick={() => handleEdit(data.id)}>Edit</button>
                    </td>
                    
                    
                  </tr>
                )
              })
            }


          </tbody>
        </Table>
        </>
    )
}

export default Home