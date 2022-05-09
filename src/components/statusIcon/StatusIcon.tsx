import React, { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  StyledContainer,
  StyledIcon,
  StyledCaption,
} from './statusIcon.styles';

export const StatusIcon: FC<{
  pulse?: boolean;
  icon: IconProp;
  testId?: string;
  text: string;
}> = (props) => {
  const { icon, pulse, testId, text } = props;
  return (
    <StyledContainer data-testid={testId}>
      <StyledIcon icon={icon} pulse={pulse} />
      <StyledCaption>{text}</StyledCaption>
    </StyledContainer>
  );
};
