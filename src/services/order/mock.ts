import { Order, OrderResponse } from '../../lib/interfaces/Order';

const orders: Order[] = [
  {
    isRecurring: true,
    id: 1,
    order_date: '2024-03-15',
    expected_delivery_date: '2024-03-15',
    total_value_of_products: '215.00',
    shipping_price: '0.00',
    total_amount: '215.00',
    type_of_payment: 'pix', // Aqui está definido corretamente como 'pix'
    obs: 'teste obs geral',
    payment_status: 'pending',
    status: 'created',
    user_id: '20e54670-88c7-41f8-b1a9-74af3911cf4a',
    store_id: 'be2994ea-1e77-42c4-a3af-368e82b86a17',
    products: [
      {
        id: 1,
        price: '21.50',
        quantity: '10.00',
        total_value: '215.00',
        obs: 'teste',
        product: {
          id: 1,
          name: 'Queijo Coalho Temperado 400g',
          unit_of_measurement: 'unit',
          photos: ['/logo.png', '/logo.png'],
        },
      },
    ],
  },
  {
    isRecurring: false,
    id: 2,
    order_date: '2024-03-15T15:27:19.453Z',
    expected_delivery_date: '2024-03-15',
    total_value_of_products: '215.00',
    shipping_price: '0.00',
    total_amount: '215.00',
    type_of_payment: 'pix', // Aqui está definido corretamente como 'pix'
    obs: 'teste obs geral',
    payment_status: 'pending',
    status: 'created',
    user_id: '20e54670-88c7-41f8-b1a9-74af3911cf4a',
    store_id: 'be2994ea-1e77-42c4-a3af-368e82b86a17',
    products: [
      {
        id: 1,
        price: '21.50',
        quantity: '10.00',
        total_value: '215.00',
        obs: 'teste',
        product: {
          id: 1,
          name: 'Queijo Coalho Temperado 400g',
          unit_of_measurement: 'unit',
          photos: ['/logo.png', '/logo.png'],
        },
      },
    ],
  },
];

export async function getOrdersByUserId(): Promise<OrderResponse> {
  return { data: orders };
}
export async function getOrderById(): Promise<OrderResponse> {
  return { data: orders };
}
export type { Order };
