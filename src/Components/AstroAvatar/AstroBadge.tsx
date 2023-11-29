import React from 'react';
import { Button, ButtonVariant } from '@patternfly/react-core';
import BubbleIcon from '../../assets/badge-icon.svg';

interface AstroAvatarProps {
  onClick: () => void;
}

export const AstroBadge: React.FunctionComponent<AstroAvatarProps> = ({ onClick }) => {
  return (
    <Button className="astro-c-button-badge pf-v5-u-box-shadow-lg" onClick={onClick}>
      <img className="astro__badge" src={BubbleIcon} alt="Launch virtual assistant" />
    </Button>
  );
};
