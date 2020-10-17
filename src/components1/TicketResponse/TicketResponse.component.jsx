import React from "react";
import moment from "moment";
import "./TicketResponse.styles.scss";

export default function TicketResponse({ response, updated_at }) {
  return (
    <div className="response-container">
      <b>{`Por Equipo Greener, el ${moment(updated_at).format(
        "DD/MM/YYYY"
      )}`}</b>
      <div className="message">
        <p>{response}</p>
      </div>
    </div>
  );
}
