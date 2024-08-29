import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  note?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
