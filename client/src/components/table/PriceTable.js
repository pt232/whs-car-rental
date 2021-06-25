import React, { useContext } from "react";
import { FilterContext } from "./../../context/filter/FilterState";
import { dateDifferenceInDays } from "./../../utils/helpers";
import "./PriceTable.css";

const PriceTable = ({ title, price, list, listTotal }) => {
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
        <tbody>
          {list ? (
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="price-table__td">1x {item.fittingName}</td>
                  <td className="price-table__td">{item.price} &euro;</td>
                  <td className="price-table__td">{item.price} &euro;</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="price-table__td">
                {dateDifferenceInDays(timeFilter.startDate, timeFilter.endDate)}{" "}
                Tage
              </td>
              <td className="price-table__td">{parseInt(price)} &euro;</td>
              <td className="price-table__td">
                {dateDifferenceInDays(
                  timeFilter.startDate,
                  timeFilter.endDate
                ) * parseInt(price)}{" "}
                &euro;
              </td>
            </tr>
          )}
        </tbody>
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
      </table>
    </div>
  );
};

export default PriceTable;
