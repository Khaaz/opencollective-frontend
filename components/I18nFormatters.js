import React from 'react';

import Link from './Link';
import StyledLink from './StyledLink';

export const getI18nLink = linkProps => chunks => <StyledLink {...linkProps}>{chunks}</StyledLink>;
export const I18nBold = chunks => <strong>{chunks}</strong>;
export const I18nItalic = chunks => <i>{chunks}</i>;
export const I18nSupportLink = chunks => (
  <StyledLink href="mailto:support@opencollective.com">{chunks.length || 'support@opencollective.com'}</StyledLink>
);

export const I18nSignLink = msg => <Link route="signin">{msg}</Link>;
export const I18nTOSLink = msg => <Link route="tos">{msg}</Link>;
export const I18nPrivacyLink = msg => <Link route="privacypolicy">{msg}</Link>;

const I18nFormatters = {
  strong: I18nBold,
  i: I18nItalic,
  SupportLink: I18nSupportLink,
  SignInLink: I18nSignLink,
  TOSLink: I18nTOSLink,
  PrivacyPolicyLink: I18nPrivacyLink,
};
export default I18nFormatters;
