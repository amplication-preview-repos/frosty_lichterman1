import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  note: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
