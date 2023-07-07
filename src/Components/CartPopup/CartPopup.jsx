import React, {  useContext } from 'react';
import '../CartPopup/CartPopup.css'
import { AiFillCloseCircle, AiFillInfoCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import product from "../../Static/Images/product.png";
import { UserContext } from '../../UserContext';
// import { useNavigate } from 'react-router-dom';

const CartPopup = () => {
    const {setisCartopen}=useContext(UserContext)
  return (
    <div className='border'>
                <h2 className='heading'>CART</h2>
                <div className="flexwrap">
                    <div className="leftcart">
                        <table className='tableborder' cellSpacing={20}>
                            <tr>
                                <td><strong>Product</strong></td>
                                <td><strong>Quantity</strong></td>
                                <td><strong>Unit Cost</strong></td>
                                <td><strong>SubTotal</strong></td>

                            </tr>
                            <tr>
                                <td><div className="flex">
                                    <img src={product} alt="product" height={80} width={80}  />
                                    <div className="flexcol">
                                        <h5 className='headingcolor'>B1000-101</h5>
                                        <h5 className='headingcolor'>USA010 NBR ORINGS 70A BLK</h5>
                                        <p> Expected to Ship Tommarow</p>
                                    </div>
                                </div>
                                </td>
                                <td>35</td>
                                <td>$0.8321</td>
                                <td>$28.81</td>
                                <td><AiFillCloseCircle color='#F4966B' /></td>
                            </tr>
                            {/* {product.map()} */}
                            <tr>
                                <td><div className="flex">
                                    <img src={product} alt="product"  height={80} width={80}  />
                                    <div className="flexcol">
                                        <h5 className='headingcolor'>B1000-101</h5>
                                        <h5 className='headingcolor'>USA010 NBR ORINGS 70A BLK</h5>
                                        <p> Expected to Ship Tommarow</p>
                                    </div>
                                </div>
                                </td>
                                <td>35</td>
                                <td>$0.8321</td>
                                <td>$28.81</td>
                                <td><AiFillCloseCircle color='F4966B' /></td>
                            </tr>

                        </table>
                    </div>
                    <div className="rightcart">
                        <div className="flexcol">
                            <h4 style={{marginLeft:38}}>ORDER SUMMARY</h4>
                            <div className="ordersummary flexcol">
                                <div className="summarybanner ">
                                    <div className="flex">

                                        <h6 style={{ color: '#FFFFFF', marginTop:2 , marginLeft: 10 }}>Minimum Order Surcharge</h6>
                                        <AiFillInfoCircle color='#FFFFFF' style={{ marginTop: 2, marginLeft: 10 }} />
                                    </div>
                                    <p style={{ color: '#FFFFFF', marginLeft: 10 }}>Order minimum not met.</p>
                                    <p style={{ color: '#FFFFFF', marginLeft: 10 }}>Increase qunatity or add items to prevent surcharges.</p>
                                </div>
                                <div className="summarybanner1 ">
                                    <div className="flexbaner">

                                        <h4 style={{ color: 'black', marginLeft: 10 }}>SubTotal(1Item):</h4>
                                        <h4 style={{  marginLeft: 10 }}>$28.81</h4>
                                    </div>
                                    <div className="flexbaner">

                                        <h4 style={{ color: 'black', marginTop: 2, marginLeft: 10 }}>$50 Min Order Surcharge</h4>
                                        <h4 style={{ marginTop: 2, marginLeft: 10 }}>$21.81</h4>
                                    </div>
                                    <div className="flexbaner">

                                        <h4 style={{ color: 'black', marginTop: 0, marginLeft: 10 }}>Shipping:</h4>
                                        <h4 style={{ marginTop: 0, marginLeft: 10 }}>TBD</h4>
                                    </div>
                                    <div className="flexbaner">

                                        <h4 style={{ color: 'black', marginTop: 0, marginLeft: 10 }}>Tax:</h4>
                                        <h4 style={{ marginTop: 0, marginLeft: 10 }}>TBD</h4>
                                    </div>
                                    <hr />
                                    <div className="flexbaner">

                                        <h4 style={{ color: 'black', marginTop: 0, marginLeft: 10 }}>Total:</h4>
                                        <h4 style={{ marginTop: 0, marginLeft: 10 }}>$50.00</h4>
                                    </div>
                                    <button className='btn'>PROCEED TO CHECKOUT</button>
                                    <div className="summarybanner2 ">
                                        <div className="flex">
                                            <AiFillInfoCircle size={50} color='856404' />

                                            <p style={{ color: '#856404', marginLeft: 10 }}>we currently only ship web orders to the United States.please submit RFQ if you need international shipping</p>
                                        </div>
                                    </div>
                                       <button className='btn1' onClick={()=>{setisCartopen(false)} }><div className="flexbtn"><BiArrowBack /><div>BACK TO SHOPPING</div></div></button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default CartPopup