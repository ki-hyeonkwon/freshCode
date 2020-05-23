import React, { useState } from "react";
import { connect } from "react-redux";
import { openModal } from "Redux/Actions";
import styled from "styled-components";

const DatePlaceHolder = (props) => {
  const { selectedDay, openModal } = props;
  const [reReservation, setReReservation] = useState(false);

  return (
    <PlaceHolder>
      <TextBox
        onClick={() => {
          openModal();
        }}
        onMouseEnter={() => {
          selectedDay && setReReservation(!reReservation);
        }}
        onMouseLeave={() => {
          selectedDay && setReReservation(!reReservation);
        }}
        reservation={selectedDay}
      >
        <span>∙</span>
        <span>
          {selectedDay && reReservation
            ? "예약 날짜 재선택"
            : selectedDay
            ? `예약된 날짜: ${selectedDay}`
            : "예약날짜 선택"}
        </span>
      </TextBox>
    </PlaceHolder>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDay: state.getPlaceholderTxt.placeholder,
  };
};

export default connect(mapStateToProps, { openModal })(DatePlaceHolder);

const PlaceHolder = styled.div`
  padding: 2px 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #656565;
  @media only screen and (max-width: 720px) {
    margin: 20px 0 10px 0;
  }
`;

const TextBox = styled.div`
  width: 200px;
  vertical-align: middle;
  text-align: right;
  &:hover {
    span {
      font-weight: 500;
      color: ${(props) => (props.reservation ? "#656565" : "#1fb66d")};
      border-bottom: 0.5px solid #1fb66d;
      cursor: pointer;
    }
  }
  font-weight: ${(props) => props.reservation && "500"};
  color: ${(props) => props.reservation && "#1fb66d"};
  @media only screen and (max-width: 720px) {
    text-align: center;
  }
`;
