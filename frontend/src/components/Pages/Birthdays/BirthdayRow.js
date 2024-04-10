import React, { useMemo } from "react";
import BirthdayCharacter from "./BirthdayCharacter";

import useWindowSize from "@rooks/use-window-size";
import useRowCount from "../../Shared/hooks/useRowCount";

const BirthdayRow = (props) => {
  const { innerwidth, outerWidth } = useWindowSize();

  const birthdayFlexStyle = "flex flex-row justify-center text-center";
  const birthdayGridStyle =
    "grid grid-cols-6 grid-rows-2 m-auto justify-center text-left";

  const desktopStyle =
    props.birthdays.length > 5 ? birthdayGridStyle : birthdayFlexStyle;

  const rows = useRowCount({
    birthdayNum: props.birthdays.length,
    width: outerWidth,
  });

  const mobileStyle =
    props.birthdays.length > 2
      ? `grid grid-cols-2 ${rows} gap-5 text-center m-auto justify-center`
      : `flex flex-row justify-center text-center`;

  const platformStyle =
    (innerwidth || outerWidth) < 640 ? mobileStyle : desktopStyle;

  const birthdays = useMemo(() => {
    return props.birthdays.map((birthday, index) => (
      <BirthdayCharacter
        key={index}
        characterName={birthday.name}
        image={`${process.env.REACT_APP_BACKEND_HOST}${birthday.image}`}
        wikiLink={birthday.wiki}
      />
    ));
  }, [props.birthdays]);

  return <div className={`${platformStyle}`}>{birthdays}</div>;
};

export default BirthdayRow;
