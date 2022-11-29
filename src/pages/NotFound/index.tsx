import { ContainerBox } from './styles';

import notFoundImage from '../../assets/images/404.svg';

export function NotFound(): JSX.Element {
  return (
    <ContainerBox>
      <img src={notFoundImage} alt="404 Not Found" />
    </ContainerBox>
  );
}
