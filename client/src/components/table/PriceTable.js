import React, { useContext } from "react";
import { FilterContext } from "./../../context/filter/FilterState";
import { dateDifferenceInDays } from "./../../utils/helpers";
import "./PriceTable.css";

const PriceTable = ({ title, price, list, listTotal, children, hideTotal }) => {
  const { timeFilter } = useContext(FilterContext);

  const calculatePrice = () => {
    if (list) {
      return listTotal;
    } else {
      return (
        dateDifferenceInDays(timeFilter.startDate, timeFilter.endDate) *
        parseInt(price)
      );
    }
  };

  return (
    <div className="price-table">
      <h3 className="price-table__title">{title}</h3>
      <table className="price-table__table">
        <thead>
          <tr>
            <th className="price-table__th">Menge</th>
            <th className="price-table__th">Stückpreis</th>
            <th className="price-table__th">Summe</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
        {!hideTotal ? (
          <tfoot>
            <tr>
              <td className="price-table__td">Gesamtkosten</td>
              <td colSpan="2" className="price-table__td">
                {calculatePrice()} &euro;
              </td>
            </tr>
          </tfoot>
        ) : null}
      </table>
    </div>
  );
};

export default PriceTable;
