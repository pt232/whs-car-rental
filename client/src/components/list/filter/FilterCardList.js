import React from "react";
import Card from "../../card/Card";
import FilterForm from "../../form/filter/FilterForm";
import FilterList from "./FilterList";

const FilterCardList = () => {
  const filterCards = [
    {
      title: "Fahrzeugklassen",
      list: [
        "Kleinwagen",
        "Kompaktklasse",
        "Mittelklasse",
        "Oberklasse",
        "Van",
        "SUV",
        "Sportwagen",
      ],
    },
    {
      title: "Türen",
      list: ["2", "4"],
    },
    {
      title: "Sitze",
      list: ["2-3", "4-5", "6-7", "8-9"],
    },
    {
      title: "Ausstattung",
      list: ["Navigation", "Klimaanlage", "Automatik", "Winterreifen"],
    },
    {
      title: "Versicherung & Schutz",
      list: ["Haftpflichtversicherung", "Glas- & Reifenschutz"],
    },
    {
      title: "Freikilometer",
      list: ["750km", "1500km"],
    },
  ];

  return (
    <>
      <Card title="Buchungsinformationen" filterCard={true}>
        <FilterForm columnOrientation={true} />
      </Card>
      {filterCards.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            filterCard={true}
            collapsible={true}
          >
            <FilterList filterList={card.list} />
          </Card>
        );
      })}
    </>
  );
};

export default FilterCardList;
