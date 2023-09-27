import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_api } from '../../../Base_API/Base_API'
import { addcart } from '../../Services/Action/action';
import { useDispatch } from 'react-redux';
import { parsedata } from '../product'
import "../Electronic/Electronic.css"
import { Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';


function Electronic() {

    const product = parsedata.products.slice(0, 10)
    console.log(product, "+++++++++++++++++++");


    const [proData, setProData] = useState(product);
    const [option, setOption] = useState([]);

    const [sercgData, setSearchData] = useState({
        search: ''
    });


    const navigate = useNavigate();

    const handlefilter = (e) => {

        let value = e.target.value;
        // let ndata = product;
        const product = parsedata.products.slice(0, 10)


        // let ndata = getData();
        if (value != -1) {
            const filterdata = product.filter((pro) => {
                return pro.category == value
            })
            console.log(filterdata, "filterdata");
            setProData(filterdata);
        }
        else {
            setProData(ndata);

        }
    }


    const handleSearch = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setSearchData({ [name]: val })

        // let mydata = getData();

        const product = parsedata.products.slice(0, 10)


        let serchdata = product.filter((data) => {
            return data.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
        })

        setProData(serchdata);
    }


    const dispatch = useDispatch()

    const handleproduct = (id, data) => {

        dispatch(addcart(id, data))

    }

    useEffect(() => {
        // let alldata = getData()
        const product = parsedata.products.slice(0, 10)

        const allData = [...new Set(product.map(data => data.category))]
        setOption(allData);
    }, [])


    return (
        <>

            <Navbar variant="dark" className='Nav bg-light'>
                <Container >

                    <div className="header bg-light">
                        <div className="container">
                            <div className="d-flex align-items-center">



                                <div className="search">
                                    <div className="input-group">
                                        <form className="d-flex">
                                            <input className="form-control me-1" type="search" placeholder="Search For Product Brand & More.." aria-label="Search" onChange={(e) => handleSearch(e)} />
                                            <button className="btn btn-primary bg-light text-dark" type="submit"><i className="fa-solid fa-magnifying-glass"></i> </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="menu d-flex justify-content-evenly align-items-center">
                                    <div className="span">
                                        <select onChange={(e) => handlefilter(e)}>
                                            <option value={"-1"}>All</option>
                                            {
                                                option.map((opt) => {
                                                    return (
                                                        <>
                                                            <option value={opt}>{opt}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            {/* <h1>{electronic[0].brand}</h1> */}
            <Container>
                
                <div className="d-flex justify-content-evenly row mt-2">
                    {
          

                            proData.map((val) => {
                                return (
                                    <div class="col-md-8 col-lg-6 col-xl-4 my-5">
                                <div class="card text-black">
                                    {val.rating}

                                    <div class="product-tumb">
                                    <img src={val.image}
                                        class="card-img-top" alt="Apple Computer" />
                                        </div>
                                    
                                    <div class="card-body">
                                        <div class="text-center">
                                            <h5 class="card-title">{val.title}</h5>
                                            <p class="text-muted mb-4">{val.description.slice(0, 50)}</p>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-between">
                                                <span>Price</span><span>{val.price}₹</span>
                                            </div>
                                            <div class="product-links">
                                                 <button className='btn-dark p-2' onClick={() => handleproduct(val.id, val)}>ADD TO CART</button>
                                           </div>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                                )
                            })
                         
                    }
                </div>


                <div class="container py-5">
                    <div class="row justify-content-center">

                    </div>
                </div>

            </Container>

        </>
    )
}

export default Electronic