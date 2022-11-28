import { EarningChart } from '../../components/EarningChart';
import { Transactions } from '../../components/Transactions';
import { Footer } from '../../components/Footer';

import { ContainerBox, CustomersProductsBox } from './styles';
import { Customers } from '../../components/Customers';
import { Products } from '../../components/Products';

export function Dashboard(): JSX.Element {
  return (
    <ContainerBox>
      <EarningChart />

      <CustomersProductsBox>
        <Customers />
        <Products />
      </CustomersProductsBox>

      <Transactions />
      <Footer />
    </ContainerBox>
  );
}
