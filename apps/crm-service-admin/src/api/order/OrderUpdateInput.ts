import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { Decimal } from "decimal.js";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  productId?: ProductWhereUniqueInput | null;
  total?: Decimal | null;
};
