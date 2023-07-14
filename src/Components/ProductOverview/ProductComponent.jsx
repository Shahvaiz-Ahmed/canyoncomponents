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
import { useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext';

function ProductComponent() {
  const { productid } = useParams();
  console.log(productid);

  const {item}= useContext(UserContext);
  console.log(item);
  
  const {isCartopen}=useContext(UserContext);
  const filteredRows = item.filter((row, index) => {
    return row.ItemNo === productid;
  });
  console.log(filteredRows);
  
  return (

    <Layout><div className="productComponent ">
      {filteredRows?filteredRows.map((row,index)=>{
        return (
          <>
    <div className="productDesc">

      <img src={product} alt="product" />
      
      <div className="productInfo" >
        
        <h1>{row.SearchDescription}</h1>
       
        <p>Color: <span>{row.Color}</span> <span id='circleColor'></span> </p>
        <h4>{row.SizeStandard}<span></span> {row.CrossSectionalGeometry}<span></span> made from <span></span>{row.SearchDescription};a <span></span>{row.Durometer}
         <span></span>{row.DurometerScale} a durometer <span></span>{row.Description2} . This material is <span></span>{row.Color}
         ,clean room manufactured encapsulated , High Temp,and Silicon Lubricated.
          </h4>
        <BasicTable row = {row}/>
        {/* <div className="checkPriceQuantity">
          <h5>Enter a Quantity to Check Price</h5>
          <div id='checkQuantity' >  
            <QuantitySelect/>
            <Button variant="contained" sx={{ backgroundColor: '#F4976C', fontWeight: '400', fontSize: '0.6rem', padding: '0.5rem' }}>Check Price</Button>
          </div>
        </div> */}
        <CheckPrice/>
        {/* {
        isCartopen&&<CartPopup/>
      } */}
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
    <DetailedDesc/></>);
      }):<></>}
  </div></Layout>
  )
}

export default ProductComponent