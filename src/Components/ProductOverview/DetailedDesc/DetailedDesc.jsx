import React from 'react';
import './DetailedDesc.css';
import pdf from '../../../Static/Images/pdf.webp';

function DetailedDesc() {
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
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
                <tr>
                    <td>Compund Number</td>
                    <td>CP80K21</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default DetailedDesc