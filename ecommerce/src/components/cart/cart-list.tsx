"use client"

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { calculateTotal } from "@/utils/cart-operations";
import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";
import CartResult from "./cart-result";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        flex-direction: row;
    }
`

const CartListContainer = styled.div`    
    h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark-2);
        margin-top: 24px;
    }

    p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);

        span {
            font-weight: 600;
            margin-left: 15px;
        }
    }
`

const CartListItem = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`


export default function CartList(){
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])
    
    const total = calculateTotal(value)
    const cartTotal = formatPrice(total)

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity }
        })
        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return(
        <Container>
            <CartListContainer>
            <BackBtn navigate="/"/>
            <h3>Seu carrinho</h3>
            <p>
                Total {value.length} produtos   
                <span>{cartTotal}</span>
            </p>
            <CartListItem>
                {value.map(item => 
                <CartItem 
                    product={item}
                    key={item.id}
                    handleDelete={handleDeleteItem}
                    handleUpdateQuantity={handleUpdateQuantity}
                />)}
            </CartListItem>
            </CartListContainer>

            <CartResult total={total}/>
        </Container>
    )
}