import styled from 'styled-components';
import QuoteIcon from '../../assets/quote.svg';

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 600px;
  border-radius: 50px;

  &:not(:nth-child(0)) {
    margin-bottom: 100px;
  }
`;

export const StyledStartQuoteIcon = styled.img.attrs({
  src: QuoteIcon,
})`
  position: absolute;
  height: 45px;
  opacity: 0.2;
  width: 45px;
`;

export const StyledEndQuoteIcon = styled(StyledStartQuoteIcon)`
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
`;

export const StyledTextContainer = styled.div`
  padding: 45px;
`;

export const StyledQuoteText = styled.h4`
  color: #4d4d4d;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const StyledAuthor = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;
