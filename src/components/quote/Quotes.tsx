import React, { FC } from 'react';
import {
  StyledContainer,
  StyledStartQuoteIcon,
  StyledEndQuoteIcon,
  StyledTextContainer,
  StyledQuoteText,
  StyledAuthor,
} from './quote.styles';

interface Quote {
  author: string;
  text: string;
}

export const Quote: FC<Quote> = (props) => {
  const { author, text } = props;
  return (
    <StyledContainer>
      <StyledStartQuoteIcon />
      <StyledEndQuoteIcon />
      <StyledTextContainer>
        <StyledQuoteText data-testid='randomQuote'>{text}</StyledQuoteText>
        <StyledAuthor> - {author}</StyledAuthor>
      </StyledTextContainer>
    </StyledContainer>
  );
};
