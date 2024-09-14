import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";
import { Decimal } from "decimal.js";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  productId?: Product | null;
  total: Decimal | null;
  updatedAt: Date;
};
