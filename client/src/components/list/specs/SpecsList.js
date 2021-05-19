import React from "react";
import {
  faFileSignature,
  faUserFriends,
  faCarSide,
  faRoute,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../card/Card";
import SpecsItem from "./item/SpecsItem";

const SpecsList = () => {
  const extraItems = [
    {
      id: 1,
      name: "Haftpflichtversicherung",
      icon: faFileSignature,
    },
    {
      id: 2,
      name: "Glas- & Reifenschutz",
      icon: faUserFriends,
    },
    {
      id: 3,
      name: "Zweifahreroption",
      icon: faCarSide,
    },
    {
      id: 4,
      name: "Navigationssystem",
      icon: faRoute,
    },
    {
      id: 5,
      name: "Freikilometeroption 750km",
      icon: faRoad,
    },
    {
      id: 6,
      name: "Freikilometeroption 1500km",
      icon: faRoad,
    },
  ];

  return (
    <Card>
      {extraItems.map((item) => {
        return <SpecsItem key={item.id} name={item.name} icon={item.icon} />;
      })}
    </Card>
  );
};

export default SpecsList;
