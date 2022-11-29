import { FaFacebookF, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

import { ContainerBox, SocialMediasBox } from './styles';

export function Footer(): JSX.Element {
  return (
    <ContainerBox>
      <span className="copyright">
        © 2021 Themesberg, LLC. All rights reserved.
      </span>

      <SocialMediasBox>
        <FaFacebookF size={24} color="#111827" />

        <FaTwitter size={24} color="#111827" />

        <FaGithub size={24} color="#111827" />

        <FaDribbble size={24} color="#111827" />
      </SocialMediasBox>
    </ContainerBox>
  );
}
