import React from 'react';
import { useState, useEffect } from 'react';
import { CardContainer, CardTitle, CardSubtitle, CardText, CardLink, CardButton } from './PdashboardElements';

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

export default PatientCard;

{/*const PatientCard = ({ uploader, reason, visitedDate, summary }) => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  return (
    <CardContainer>
      <CardTitle>{uploader}</CardTitle>
      <CardSubtitle>Reason: {reason}</CardSubtitle>
      <CardText>Visited on: {visitedDate}</CardText>
      <CardText>{summary}</CardText>
      {summary.length > 50 && (
        <CardLink href="#" onClick={toggleSummary}>
          {showFullSummary ? "View less" : "View more"}
        </CardLink>
      )}
      <SummaryContainer showFullSummary={showFullSummary}>
        <CardText>{summary}</CardText>
      </SummaryContainer>
      <CardButton>Update</CardButton>
    </CardContainer>
  );
};

export default PatientCard;*/}