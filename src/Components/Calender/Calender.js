import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { closeModal, getText } from "Redux/Actions";
import axios from "axios";
import { URL } from "config";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const Calender = (props) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayOffData, setDayOffData] = useState([]);

  const { modalStatus, closeModal, getText } = props;

  const handleModalActions = () => {
    if (selectedDay === null) {
      closeModal();
    } else {
      closeModal();
      getText(selectedDay);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const getDayoffData = async () => {
    try {
      const url = `${URL}/dayoff`;
      const res = await axios.get(url, {
        withCredentials: true,
      });
      const dayOffArr = res.data.holidays;
      const daysArr = dayOffArr.map((el) => {
        return new Date(el.holiday.split("-"));
      });

      setDayOffData(daysArr);
    } catch (err) {
      console.log(err);
      alert("다시 시도해보시기 바랍니다.");
    }
  };

  useEffect(() => {
    getDayoffData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const noScroll = () => window.scrollTo(0, 0);

  //   useEffect(() => {
  //     if (modalStatus) {
  //       // add listener to disable scroll
  //       window.addEventListener("scroll", noScroll);
  //     } else {
  //       // Remove listener to re-enable scroll
  //       window.removeEventListener("scroll", noScroll);
  //     }
  //   }, [modalStatus]);

  return (
    <>
      <BlackWindow modalStatus={modalStatus}></BlackWindow>
      <CalenderWrapper modalStatus={modalStatus}>
        <CalenderBox>
          <CloseBtn onClick={handleModalActions}></CloseBtn>
          <DayPicker
            initialMonth={new Date()}
            disabledDays={[...dayOffData, { before: new Date() }]}
            selectedDays={selectedDay}
            onDayClick={handleDayClick}
          />
        </CalenderBox>
      </CalenderWrapper>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    modalStatus: state.controlModal.openModal,
  };
};

export default connect(mapStateToProps, { closeModal, getText })(Calender);

const CalenderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.modalStatus ? "block" : "none")};
  //   display: block;
  .DayPicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.9;
    //Month Changing Btn
    .DayPicker-wrapper {
      width: 100vw;
      .DayPicker-NavBar {
        width: 100%;
        height: 10%;
        .DayPicker-NavButton {
          position: absolute;
          top: 2em;
          right: 30%;
          background-color: #dce0e0;
          @media only screen and (max-width: 768px) {
            position: absolute;
            top: 2em;
            right: 25%;
          }
          @media only screen and (max-width: 420px) {
            position: absolute;
            top: 1em;
            right: 20%;
          }
          @media only screen and (max-width: 320px) {
            position: absolute;
            top: 1em;
            right: 15%;
          }
        }
      }
      .DayPicker-Months {
        background-color: #00a569;
        .DayPicker-Month {
          margin-bottom: 16px;
          .DayPicker-Caption {
            padding: 0.3em;
            color: #dce0e0;
          }
        }
      }
      .DayPicker-Day--selected {
        font-weight: bold;
        color: #92ed2a;
        background-color: transparent;
      }
    }
  }

  abbr {
    color: #92ed2a;
  }
  @media only screen and (min-width: 720px) {
    .DayPicker {
      .DayPicker-Month {
        width: 45vw;
        height: 42vw;
        font-size: 1.7em;
      }
    }
  }
`;

const BlackWindow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: #3d3d3d;
  opacity: 0.8;
  display: ${(props) => (props.modalStatus ? "block" : "none")};
  //   display: block;
`;

const CalenderBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  z-index: 13;
  top: 5px;
  right: 5px;
  width: 3vw;
  height: 3vw;
  background-color: white;
  cursor: pointer;

  //   @media only screen and (min-width: 1450px) {
  //     position: absolute;
  //     top: 6em;
  //     right: 5vw;
  //   }
`;
