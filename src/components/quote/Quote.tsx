import React, { FC, useCallback, useState } from 'react';
import { SocialShare } from '../socialShare/SocialShare';
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
  link: string;
}

export const Quote: FC<Quote> = (props) => {
  const { author, link, text } = props;
  const [isActive, setActive] = useState(false);

  const handleBlur = useCallback(() => {
    setActive(false);
  }, []);

  const handleFocus = useCallback(() => {
    setActive(true);
  }, []);

  return (
    <StyledContainer
      isActive={isActive}
      onMouseLeave={handleBlur}
      onMouseEnter={handleFocus}
    >
      <StyledStartQuoteIcon />
      <StyledEndQuoteIcon />
      <StyledTextContainer>
        <StyledQuoteText data-testid='randomQuote'>{text}</StyledQuoteText>
        <StyledAuthor> - {author}</StyledAuthor>
      </StyledTextContainer>
      <SocialShare show={isActive} text={text} url={link} />
    </StyledContainer>
  );
};
