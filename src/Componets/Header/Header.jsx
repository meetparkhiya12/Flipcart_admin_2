import React, { useEffect, useState } from 'react'
import '../Header/Header.css'
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux';
import { parsedata } from '../product';



function Header() {

	const navigate = useNavigate();




	return (

		<>

			<Navbar variant="dark" className='Nav'>
				<Container >

					<div className="header">
						<div className="container">
							<div className="d-flex align-items-center justify-content-between">

								<div onClick={() => navigate('/')} style={{ cursor: "pointer" }} className='me-3'>
									<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_mobile_logo-bafb3a.svg" alt="" className='logo' />

								</div>
								<div className="div text-white d-none d-md-block" >
										<ul className='d-flex'>
											<li className='list-unstyled px-4'><a href="" onClick={() => navigate('/')} className='text-white text-decoration-none liststyle-none '>Home</a></li>
											<li className='list-unstyled px-4'><a href="" onClick={() => navigate('/addproduct')} className='text-white text-decoration-none liststyle-none '>Add Product</a></li>
											<li className='list-unstyled px-4'><a href="" className='text-white text-decoration-none liststyle-none '>Contact</a></li>
										</ul>
								</div>

								<div className="menu d-flex justify-content-evenly align-items-center">

									<div className="login">
										<button onClick={() => navigate('/SingUp')}>Login</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Navbar>
		</>
	)
}

export default Header