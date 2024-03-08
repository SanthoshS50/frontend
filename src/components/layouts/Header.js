import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {Dropdown, Image} from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import { FaCartShopping } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";


export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    // console.log(user);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
    <nav className="navbar row">
        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
          <div className="navbar-brand">
            <Link to="/">
              <img width="270px" alt='Wonder Aqua Garden Logo' src="/images/logo.png" />
            </Link>
            </div>
        </div>
  
        <div className="col-12 col-md-6 mt-2 mt-md-0">
           <Search/>
        </div>
  
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                     <Image width="50px" src={user?.avatar ?? '/images/default_avatar.png'} />
                    </figure>
                    <span>{user?.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item>
                      <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login" className="btn" id="login_btn" style={{ display: 'inline-block', marginRight: '13px' }}><b>Login</b></Link>
          }
          <div style={{ display: 'inline-block', marginRight: '5px' }}>
            <Link to="/cart">
              <FaCartShopping style={{ color:'black', fontSize: '24px' }}/>
            </Link>
            <span className="ml-1" id="cart_count">{cartItems.length}</span>
          </div>
          <TbTruckDelivery style={{ color:'black', fontSize: '35px', marginLeft: '13px' }} onClick={() => window.open('https://stcourier.com/track/shipment', '_blank')} />
        </div>
    </nav>
    )
}