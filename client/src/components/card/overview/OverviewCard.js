import React, { useContext } from "react";
import { FilterContext } from "../../../context/filter/FilterState";
import Card from "../Card";
import PriceTable from "../../table/PriceTable";
import "./OverviewCard.css";
import TotalPriceItem from "./item/TotalPriceItem";
import { blobToImageSrc, dateDifferenceInDays } from "../../../utils/helpers";

const OverviewCard = ({ car, priceInformation }) => {
  const { timeFilter } = useContext(FilterContext);
  const { price, priceList, priceListTotal, discount, driversFee } =
    priceInformation;

  return (
    <>
      {Object.keys(car).length !== 0 ? (
        <Card>
          <div className="overview-card">
            <div>
              <h3 className="overview-card__title">
                {car.carType.carClass.name}
              </h3>
              <h5 className="overview-card__subtitle">
                {car.carBrand.name + " " + car.name}
              </h5>
            </div>
            <img
              src={blobToImageSrc(car.image.data)}
              alt={car.carBrand.name + " " + car.name}
              className="overview-card__image"
            />
            <PriceTable title="Grundkosten" price={price}>
              <tr>
                <td className="price-table__td">
                  {dateDifferenceInDays(
                    timeFilter.startDate,
                    timeFilter.endDate
                  )}{" "}
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
            </PriceTable>
            <PriceTable
              title="Zusatzkosten"
              list={priceList}
              listTotal={priceListTotal}
            >
              {priceList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="price-table__td">1x {item.fittingName}</td>
                    <td className="price-table__td">{item.price} &euro;</td>
                    <td className="price-table__td">{item.price} &euro;</td>
                  </tr>
                );
              })}
            </PriceTable>
            {discount != null || driversFee != null ? (
              <PriceTable
                title="Rabatte und Aufschläge"
                price={price}
                hideTotal={true}
              >
                {discount != null ? (
                  <tr>
                    <td className="price-table__td">{discount.fittingName}</td>
                    <td className="price-table__td">{discount.discountText}</td>
                    <td className="price-table__td">
                      -
                      {(
                        (price *
                          dateDifferenceInDays(
                            timeFilter.startDate,
                            timeFilter.endDate
                          ) +
                          priceListTotal) *
                        discount.discount
                      ).toFixed(2)}{" "}
                      &euro;
                    </td>
                  </tr>
                ) : null}
                {driversFee != null ? (
                  <tr>
                    <td className="price-table__td">
                      {driversFee.fittingName}
                    </td>
                    <td className="price-table__td">{driversFee.feeText}</td>
                    <td className="price-table__td">
                      +
                      {(
                        price *
                        dateDifferenceInDays(
                          timeFilter.startDate,
                          timeFilter.endDate
                        ) *
                        driversFee.fee
                      ).toFixed(2)}{" "}
                      &euro;
                    </td>
                  </tr>
                ) : null}
              </PriceTable>
            ) : null}
            <TotalPriceItem
              basePrice={
                price *
                dateDifferenceInDays(timeFilter.startDate, timeFilter.endDate)
              }
              price={
                price *
                  dateDifferenceInDays(
                    timeFilter.startDate,
                    timeFilter.endDate
                  ) +
                priceListTotal
              }
              discount={discount}
              driversFee={driversFee}
            />
          </div>
        </Card>
      ) : null}
    </>
  );
};

export default OverviewCard;
