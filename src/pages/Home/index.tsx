import { ContainerBox } from './styles';

import searchImage from '../../assets/images/search.svg';

export function Home(): JSX.Element {
  return (
    <ContainerBox>
      <img src={searchImage} alt="Search" />
    </ContainerBox>
  );
}
