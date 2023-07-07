import './ProductComponent.css';
import React, { useContext } from 'react'
import product from '../../Static/Images/product.webp'
import BasicTable from './BasicTable'
// import QuantitySelect from './QuantitySelect';
// import Button from '@mui/material/Button';
import RecomendedCard from './RecomendedCard';
import DetailedDesc from './DetailedDesc/DetailedDesc';
import Layout from '../Layout/Layout';
import CheckPrice from '../CheckPrice/CheckPrice';
import CartPopup from '../CartPopup/CartPopup';
import { UserContext } from '../../UserContext';

function ProductComponent() {
  
  const {isCartopen}=useContext(UserContext);
  return (

    <Layout><div className="productComponent ">
    <div className="productDesc">
      <img src={product} alt="product" />
      <div className="productInfo" >
        
        <h1>B100-010</h1>
        <h4>CanRez™ CP75BK20 is our ultra high temperature FFKM. Ultra low compression set & capable of excursions to 350°C. Compare Kalrez 7075.</h4>
        <p>Color: <span>Black</span> <span id='circleColor'></span> </p>
        <BasicTable/>
        {/* <div className="checkPriceQuantity">
          <h5>Enter a Quantity to Check Price</h5>
          <div id='checkQuantity' >  
            <QuantitySelect/>
            <Button variant="contained" sx={{ backgroundColor: '#F4976C', fontWeight: '400', fontSize: '0.6rem', padding: '0.5rem' }}>Check Price</Button>
          </div>
        </div> */}
        <CheckPrice/>
        {
        isCartopen&&<CartPopup/>
      }
      </div>
    </div>
    <div className="recomendedProducts">
      <h1>Recomended Items</h1>
      <div className="recomendedCards">
        <RecomendedCard img={product} name='S1006-001' availability='In Stock' desc='CanRez™ CP75BK20 is our ultra high temperature FFKM. Ultra' />
        <RecomendedCard img={product} name='S1006-001' availability='In Stock' desc='CanRez™ CP75BK20 is our ultra high temperature FFKM. Ultra' />
        <RecomendedCard img={product} name='S1006-001' availability='In Stock' desc='CanRez™ CP75BK20 is our ultra high temperature FFKM. Ultra' />
        <RecomendedCard img={product} name='S1006-001' availability='In Stock' desc='CanRez™ CP75BK20 is our ultra high temperature FFKM. Ultra' />
      </div>
    </div>
    <DetailedDesc/>
  </div></Layout>
  )
}

export default ProductComponent