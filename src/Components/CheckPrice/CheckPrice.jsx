import React, { useContext, useState } from 'react'
import '../CheckPrice/Checkprice.css'
import { AiFillInfoCircle } from 'react-icons/ai';
import { UserContext } from '../../UserContext';
const CheckPrice = () => {
    const [isopen, setisopen] = useState(false)
    const {setisCartopen,isCartopen}=useContext(UserContext);
    return (
        <div>
            <h2>Enter a quantity to Check Price</h2>
            <div className="contain">
                <div className='flex'>
                    <input type="number" className='qnty' placeholder='Quantity' min={1} />
                    <button className='btnqty' onClick={() => { setisopen(!isopen) }}>CHECK PRICE</button>
                </div>

                {isopen ?
                    <div className="bord">
                        <div className="table">
                        <hr />
                        <table cellSpacing={10} >

                            <tr>
                                <th >
                                    Quantity
                                </th>
                                <th >
                                    Estimated Ship time
                                </th>
                                <th >
                                    Unit Cost
                                </th>
                                <th >
                                    Total
                                </th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>
                                        35
                                    </td>
                                    <td>
                                        Today or Tomarrow
                                    </td>
                                    <td>
                                        $6.025
                                    </td>
                                    <td>
                                        $30.45
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <button className='addtocart' onClick={()=>{setisCartopen(!isCartopen)}}>Add to Cart</button>
                        <div className="flex" style={{ marginTop: '2rem' }}>
                            <AiFillInfoCircle size={20} />
                            <p style={{ fontSize: '1.1rem' }} >Try increasing your qunatity for better value.</p>
                        </div>
                    </div></div> : <></>}





            </div>
        </div>
    )
}

export default CheckPrice