import React, { useContext } from "react";
import { FilterContext } from "./../../context/filter/FilterState";
import { dateDifferenceInDays } from "./../../utils/helpers";
import "./PriceTable.css";

const PriceTable = ({ title, price, list, listTotal, discount, children }) => {
  const { timeFilter } = useContext(FilterContext);

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
        {!discount ? (
          <tfoot>
            <tr>
              <td className="price-table__td">Gesamtkosten</td>
              <td colSpan="2" className="price-table__td">
                {list
                  ? listTotal
                  : dateDifferenceInDays(
                      timeFilter.startDate,
                      timeFilter.endDate
                    ) * parseInt(price)}{" "}
                &euro;
              </td>
            </tr>
          </tfoot>
        ) : null}
      </table>
    </div>
  );
};

export default PriceTable;
