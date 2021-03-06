import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "config";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

//yyyy-mm-dd 형태로 변환
const dateFormat = (date) => {
  const dateSplit = date
    .split(" ")
    .join("")
    .split(".")
    .filter((e) => e.length !== 0);
  // eslint-disable-next-line array-callback-return
  dateSplit.map((el, i) => {
    if (el.length === 1) {
      dateSplit[i] = "0" + el;
    }
  });
  return dateSplit.join("-");
};

const Calender = (props) => {
  //react-dady-picker
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayOffData, setDayOffData] = useState([]);

  //휴일 정보를 받아온다.
  const getDayoffData = async () => {
    try {
      const url = `${URL}/dayoff`;
      const res = await axios.get(url, {
        withCredentials: true,
      });
      // 휴일 데이터만 모은 배열 => res.data.holidays
      const daysArr = res.data.holidays.map((el) => {
        return new Date(el.holiday.split("-"));
      });

      //받아온 휴일 데이터 state에 배열로 저장
      setDayOffData(daysArr);
    } catch (err) {
      console.log(err);
      alert("다시 시도해보시기 바랍니다.");
    }
  };

  //react-dady-picker 에서 날짜 클릭 시 event
  const handleDayClick = (day, modifiers = {}) => {
    //disbaledDate 클릭 시 modifiers는 true
    if (!modifiers.disabled) {
      // day를 string로 변환 후 dateFormat 함수에 인자로 전달 => 반환된 값 selectedDay로 state에 저장
      setSelectedDay(dateFormat(day.toLocaleDateString()));
    }
  };

  useEffect(() => {
    getDayoffData();
  }, []);

  return (
    <CalenderWrapper>
      {selectedDay ? <p>{selectedDay}</p> : <p>날짜를 선택해주세요</p>}
      <DayPicker
        initialMonth={new Date()}
        disabledDays={[...dayOffData, { before: new Date() }]}
        selectedDays={selectedDay}
        onDayClick={handleDayClick}
      />
    </CalenderWrapper>
  );
};

export default Calender;

const CalenderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 0 1em;
  p {
    width: 200px;
    margin: 0.5em 0.5em;
    padding: 10px;
    border: 1px solid #6f7174;
    color: #6f7174;
    text-align: center;
  }
  .DayPicker-Months {
    border: 1px solid #6f7174;
  }
  @media only screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
