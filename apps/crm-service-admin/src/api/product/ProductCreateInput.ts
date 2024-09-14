import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  note?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
