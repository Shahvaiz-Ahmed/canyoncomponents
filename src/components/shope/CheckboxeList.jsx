import React from 'react';





function CheckboxList({arraydata}) {

   

    return (
        <div>
            {arraydata ? arraydata.map((item) => (
                <div key={item.id}>
                   
                    <input type="checkbox" value={item.id}
                        />
                    <label>{item}</label>
                </div>
            )): 'null'}
        </div>
    );
}

export default CheckboxList;