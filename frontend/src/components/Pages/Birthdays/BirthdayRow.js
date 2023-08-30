import React, { useMemo } from "react";
import BirthdayCharacter from "./BirthdayCharacter";

const BirthdayRow = (props) => {
  const birthdayFlexStyle = "flex flex-row justify-center text-center";
  const birthdayGridStyle =
    "grid grid-cols-6 grid-rows-2 m-auto justify-center text-left";

  const birthdayStyle =
    props.birthdays.length > 4 ? birthdayGridStyle : birthdayFlexStyle;

  const birthdays = useMemo(() => {
    return props.birthdays.map((birthday, index) => (
      <BirthdayCharacter
        key={index}
        characterName={birthday.name}
        image={birthday.image}
        wikiLink={birthday.wiki}
      />
    ));
  }, [props.birthdays]);

  return <div className={`${birthdayStyle}`}>{birthdays}</div>;
};

export default BirthdayRow;
