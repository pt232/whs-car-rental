import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { get } from "../../../utils/rest";
import { FilterContext } from "../../../context/filter/FilterState";
import { MessageContext } from "../../../context/message/MessageState";
import "./PriceCard.css";
import { dateDifferenceInDays } from "../../../utils/helpers";

const PriceCard = ({ id }) => {
  const { locationFilter, timeFilter } = useContext(FilterContext);
  const { addErrorMessage, removeErrorMessage } = useContext(MessageContext);
  const [price, setPrice] = useState(0);
  const [priceListTotal, setPriceListTotal] = useState(0);
  const history = useHistory();
  const days = dateDifferenceInDays(timeFilter.startDate, timeFilter.endDate);

  useEffect(() => {
    let isMounted = true;

    const fetchPrice = async () => {
      const res = await get(`/api/v1/car/price/${id}`);
      if (isMounted) {
        setPrice(res.price);
        setPriceListTotal(res.priceListTotal);
      }
    };

    fetchPrice();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeFilter]);

  const handleClick = () => {
    removeErrorMessage();

    if (timeFilter.startDate && timeFilter.endDate && locationFilter)
      history.push(`/listing/checkout/${id}`);
    else {
      addErrorMessage(
        "Es wurde keine Abholstation oder kein Abhol- oder Rückgabedatum ausgewählt"
      );
    }
  };

  return (
    <div className="price-card">
      <div className="price-card__information">
        <h5 className="price-card__days">
          Insgesamt {days > 1 ? days + " Tage" : days + " Tag"}
        </h5>
        <h3 className="price-card__price">
          <span>&#8364;</span> {price * days + priceListTotal}
        </h3>
        <span className="price-card__day">&#8364;{price}/Tag</span>
      </div>
      <button
        className="price-card__btn btn btn--filled"
        onClick={() => handleClick()}
      >
        Jetzt Reservieren!
      </button>
    </div>
  );
};

export default PriceCard;
