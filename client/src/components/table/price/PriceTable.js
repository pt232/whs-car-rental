import React from "react";
import "./PriceTable.css";

const PriceTable = () => {
  return (
    <div className="price-table">
      <h3 className="price-table__title">Rate</h3>
      <table className="price-table__table">
        <thead>
          <tr>
            <th className="price-table__th">Menge</th>
            <th className="price-table__th">Stückpreis</th>
            <th className="price-table__th">Summe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="price-table__td">1x Haftpflichtversicherung</td>
            <td className="price-table__td">11 &euro;</td>
            <td className="price-table__td">11 &euro;</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="price-table__td">Gesamtkosten</td>
            <td colSpan="2" className="price-table__td">
              11 &euro;
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PriceTable;
