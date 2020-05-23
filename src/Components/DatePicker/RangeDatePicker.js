import React, { useState } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
// import "Styles/react-datepicker.css";
registerLocale("ko", ko);
const RangeDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  // https://reactdatepicker.com/ 참고
  const ExampleCustomInput = ({ value, onClick }) => (
    <button class="example-custom-input" onClick={onClick}>
      {" "}
      {value}{" "}
    </button>
  );

  // 월/일
  const getFormattedDate = (date) => {
    const month = date.toLocaleDateString("ko-KR", { month: "long" });
    const day = date.toLocaleDateString("ko-KR", { day: "numeric" });
    return `${month.substr(0, month.length - 1)}/${day.substr(
      0,
      day.length - 1
    )}`;
  }; // 요일 반환
  const getDayName = (date) => {
    return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
  };
  // 날짜 비교시 년 월 일까지만 비교하게끔
  const createDate = (date) => {
    return new Date(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
  };

  return (
    <PickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dayClassName={(date) =>
          getDayName(createDate(date)) === "토"
            ? "saturday"
            : getDayName(createDate(date)) === "일"
            ? "sunday"
            : undefined
        }
      />
    </PickerWrapper>
  );
};
export default RangeDatePicker;

const PickerWrapper = styled.div``;
