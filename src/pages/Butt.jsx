import React from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

const Butt = () => {
  const data = [
    {
      title: "Select",
      list: ["Red", "Green", "Blue", "Black", "Orange"],
    },
  ];
  const display = (item) => {
    alert(item);
  };
  return (
    <div>
      <div className="bg-green-200">
        {/* product box */}
        {data.map(({ title, list }, index) => {
          return (
            <Dropdown key={index} title={title} list={list} index={index} />
          );
        })}
      </div>
      <Button text="Add" size="sm" />
      <Button handleChange={() => display("helo")} number={128} size="sm" />
    </div>
  );
};

export default Butt;
