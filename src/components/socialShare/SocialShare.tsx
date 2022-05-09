import React, { FC, useCallback, useState } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { StyledSocialShare } from './socialShare.styles';

interface SocialShare {
  show?: boolean;
  text: string;
  url: string;
}

const SOCIAL_ICON_SIZE = 30;

export const SocialShare: FC<SocialShare> = (props) => {
  const { show = true, text, url } = props;
  return (
    <StyledSocialShare show={show}>
      <FacebookShareButton url={url}>
        <FacebookIcon round size={SOCIAL_ICON_SIZE} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon round size={SOCIAL_ICON_SIZE} />
      </TwitterShareButton>
    </StyledSocialShare>
  );
};
