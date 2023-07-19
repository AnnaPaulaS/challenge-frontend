
import CartList from "@/components/cart/cart-list";
import { DefaultPageLayout } from "@/components/default/default-page-layout";

export default function CartPage(){
    return(
        <DefaultPageLayout>
            <CartList/>
        </DefaultPageLayout>
    )
}