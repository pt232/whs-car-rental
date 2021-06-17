import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../../context/filter/FilterState";
import Card from "../Card";
import PriceTable from "../../table/price/PriceTable";
import "./OverviewCard.css";
import TotalPriceItem from "./item/TotalPriceItem";
import { blobToImageSrc, dateDifferenceInDays } from "../../../utils/helpers";
import { get } from "../../../utils/rest";

const OverviewCard = ({ id, car }) => {
  const { timeFilter } = useContext(FilterContext);
  const [price, setPrice] = useState(0);
  const [priceList, setPriceList] = useState([]);
  const [priceListTotal, setPriceListTotal] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchPrice = async () => {
      const res = await get(`/api/v1/car/price/${id}`);

      if (isMounted) {
        setPrice(res.price);
        setPriceList(res.priceList);
        setPriceListTotal(res.priceListTotal);
      }
    };

    fetchPrice();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <PriceTable title="Grundkosten" price={price} />
            <PriceTable
              title="Zusatzkosten"
              list={priceList}
              listTotal={priceListTotal}
            />
            <TotalPriceItem
              price={
                price *
                  dateDifferenceInDays(
                    timeFilter.startDate,
                    timeFilter.endDate
                  ) +
                priceListTotal
              }
            />
          </div>
        </Card>
      ) : null}
    </>
  );
};

export default OverviewCard;
