import React from 'react';

const ItemDetails = ({ items }) => {
  let previousItemNo = null; // Keep track of the previous ItemNo
  let productArray = []; // Store new objects representing products
  let currentProduct = null; // Track the current product being processed

  items.forEach((item) => {
    const isSameProduct = item.ItemNo === previousItemNo; // Compare with previous ItemNo
    previousItemNo = item.ItemNo; // Update previousItemNo

    if (!isSameProduct) {
      if (currentProduct !== null) {
        // Add the previous product to the productArray
        productArray.push(currentProduct);
      }

      // Create a new object for the current product
      currentProduct = {
        ItemNo: item.ItemNo,
        AttributeList: [],
      };
    }

    // Process the attributes
    item.AttributeList.forEach((attribute) => {
      const { AttributeName, AttributeValue } = attribute;

      const existingAttribute = currentProduct[AttributeName];
      if (existingAttribute) {
        currentProduct[AttributeName] = `${existingAttribute}, ${AttributeValue}`;
      } else {
        currentProduct[AttributeName] = AttributeValue;
      }
    });
  });

  if (currentProduct !== null) {
    // Add the last product to the productArray
    productArray.push(currentProduct);
  }

  return (
    <div>
      {productArray.map((product, index) => (
        <div key={index}>
          <h2>Product {index + 1}</h2>
          <p>ItemNo: {product.ItemNo}</p>
          <ul>
            {Object.entries(product)
              .filter(([key, value]) => key !== 'ItemNo' && key !== 'AttributeList')
              .map(([key, value]) => (
                <li key={key}>
                  <strong>{key}: </strong>
                  {value}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemDetails;