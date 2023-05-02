import React from "react";
import {
  CardContainer,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardButton,
} from "./DdashboardElements";
import { Card } from "react-bootstrap";

const PatientCard = ({ uploader, reason, visitedDate, summary }) => {
  return (
    <CardContainer>
      <CardTitle>{uploader}</CardTitle>
      <CardSubtitle>Reason: {reason}</CardSubtitle>
      <CardText>Visited on: {visitedDate}</CardText>
      <CardText>Summary: {summary}</CardText>
      {/*<CardLink href="#">View more</CardLink>
      <CardButton>Update</CardButton>*/}
    </CardContainer>
  );
};

/*const PatientCard = ({ record }) => {
  const { uploader, reason, visitedDate, summary } = record;
  // ...
}*/

export default PatientCard;
