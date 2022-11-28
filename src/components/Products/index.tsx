import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { TextH2 } from '../TextH2';
import {
  ContainerBox,
  ProductItem,
  ProductsBox,
  NameDescriptionBox,
  TypographyBody1,
  TypographyBody2,
} from './styles';

interface IProducts {
  id: string;
  name: string;
  description: string;
  avatar: string;
  totalSales: string;
  createdAt: string;
}

export function Products(): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([] as IProducts[]);

  useEffect(() => {
    api.get<IProducts[]>('/products').then(response => {
      const sortedProducts = response.data.sort((a, b) => {
        return Number(b.totalSales) - Number(a.totalSales);
      });

      const slicedArray = sortedProducts.slice(0, 6);

      setProducts(slicedArray);
    });
  }, []);

  return (
    <ContainerBox>
      <TextH2 text="Top Products" />

      <ProductsBox>
        {products.map(product => (
          <ProductItem key={product.id}>
            <NameDescriptionBox>
              <TypographyBody1 variant="body1">{product.name}</TypographyBody1>

              <TypographyBody2 variant="body2">
                {product.description}
              </TypographyBody2>
            </NameDescriptionBox>

            <TypographyBody2 variant="body2" sx={{ fontSize: '16px' }}>
              <strong style={{ color: '#111827' }}>
                {Math.round(Number(product.totalSales))}
              </strong>{' '}
              sales
            </TypographyBody2>
          </ProductItem>
        ))}
      </ProductsBox>
    </ContainerBox>
  );
}
