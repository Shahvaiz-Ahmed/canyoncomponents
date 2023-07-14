import React from 'react';
import './DetailedDesc.css';
import pdf from '../../../Static/Images/pdf.webp';

function DetailedDesc(props) {
    console.log(props.row);
  return (
    <div className="detailedDesc">
        <h1>DETAILED DESCRIPTION</h1>
        <div className="pdfDetail">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel aspernatur natus, quas quam tempora odio pariatur. Repellat neque provident similique excepturi blanditiis debitis amet ab, reprehenderit, nesciunt ad quidem odio officia!</p>
            <div id="pdf">
                <img src={pdf} alt="pdf" />
                <button>SEE DATA SHEET</button>
            </div>
        </div>
        <div className="specification">
            <table>
                <tr>
                    <th>Technical Specifications</th>
                    <th>Value</th>
                </tr>
             <tr>
                    <td>Compund Number</td>
                    <td>{props.row.CompoundNumber?props.row.CompoundNumber:<></>}</td>
                </tr> 
                <tr>
                    <td>Material</td>
                    <td>{props.row.Material}
</td>
                </tr>
                <tr>
                    <td>Material Sub Type</td>
                    <td>{props.row.MaterialSubtype}</td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td>{props.row.Color}r</td>
                </tr>
                <tr>
                    <td>Durometer <span></span>{props.row.DurometerScale
}</td>
                    <td>{props.row.Durometer
}</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td>{props.row.Description2}</td>
                </tr>
                <tr>
                    <td>Size</td>
                    <td>{props.row.SizeStandard}</td>
                </tr>
                <tr>
                    <td>Cross Section (mm)</td>
                    <td>{props.row.CrossSectionalGeometry}</td>
                </tr>
                <tr>
                    <td>Inside Diameter (mm)</td>
                    <td>{props.row.InsideDiameterID}</td>
                </tr>
                <tr>
                    <td>High Temp (C)</td>
                    <td>{props.row.HighTemperatureC}</td>
                </tr>
                <tr>
                    <td>Low Temp (C)</td>
                    <td>{props.row.LowTemperatureC}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default DetailedDesc