import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../../context/filter/FilterState";
import { UserContext } from "../../../context/user/UserState";
import Card from "../Card";
import PriceTable from "../../table/PriceTable";
import "./OverviewCard.css";
import TotalPriceItem from "./item/TotalPriceItem";
import { blobToImageSrc, dateDifferenceInDays } from "../../../utils/helpers";
import { get } from "../../../utils/rest";

const OverviewCard = ({ id, car }) => {
  const { timeFilter } = useContext(FilterContext);
  const { token } = useContext(UserContext);

  const [price, setPrice] = useState(0);
  const [priceList, setPriceList] = useState([]);
  const [priceListTotal, setPriceListTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchPrice = async () => {
      const res = await get(`/api/v1/car/price/${id}/${token}`);

      if (isMounted) {
        setPrice(res.price);
        setPriceList(res.priceList);
        setPriceListTotal(res.priceListTotal);
        setDiscount(res.discount);
      }
    };

    fetchPrice();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
            {discount != null ? (
              <PriceTable title="Rabatte und Aufschläge" discount={discount}>
                <tr>
                  <td className="price-table__td">{discount.fittingName}</td>
                  <td className="price-table__td">{discount.discountText}</td>
                  <td className="price-table__td">
                    -
                    {(price *
                      dateDifferenceInDays(
                        timeFilter.startDate,
                        timeFilter.endDate
                      ) +
                      priceListTotal) *
                      discount.discount}{" "}
                    &euro;
                  </td>
                </tr>
              </PriceTable>
            ) : null}
            <TotalPriceItem
              price={
                price *
                  dateDifferenceInDays(
                    timeFilter.startDate,
                    timeFilter.endDate
                  ) +
                priceListTotal
              }
              discount={discount}
            />
          </div>
        </Card>
      ) : null}
    </>
  );
};

export default OverviewCard;
