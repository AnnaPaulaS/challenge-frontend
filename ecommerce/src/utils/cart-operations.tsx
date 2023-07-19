import { ProductInCart } from "@/types/product";

export function calculateTotal(value: ProductInCart[]) {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
}

