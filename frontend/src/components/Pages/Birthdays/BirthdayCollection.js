import React, { useState, useEffect } from "react";

import axios from "axios";

import Card from "../../Shared/UI Elements/Card";
import BirthdayRow from "./BirthdayRow";

const BirthdayCollection = () => {
  const [date, setDate] = useState("");
  const [birthdays, setBirthdays] = useState([]);

  const boldStyle = "font-bold text-center";

  useEffect(() => {
    const date = new Date();
    const monthString = date.toLocaleString("default", { month: "long" });
    const month = date.getMonth() + 1;
    const day = date.getDate();

    setDate(`${monthString} ${day}`);
    axios
      .get(`${process.env.BACKEND_HOST}/birthdays/${month}/${day}`)
      .then((response) => {
        setBirthdays(response.data[0].characters);
      });
  }, []);

  return (
    <Card className="flex flex-col">
      <h1 className={boldStyle}>Birthdays Today</h1>
      <h1 className={boldStyle}>{date}</h1>
      <BirthdayRow birthdays={birthdays} />
    </Card>
  );
};

export default BirthdayCollection;
