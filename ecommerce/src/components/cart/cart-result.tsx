"use client"

import { Divider } from "@/components/divider";
import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";


interface CartResultProps {
    total: number
}

const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    height: 350px;
    padding: 16px 24px;

    background: white;

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: var(--text-dark-2);
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`

const TotalItem = styled.div<{ isBold: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;
`

const ShopBtn = styled.button`
    color: white;
    border-radius: 4px;
    background: var(--success-color);
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 50px;
    cursor: pointer;
    text-transform: uppercase;
`

export default function CartResult({ total }: CartResultProps){
    const deliveryFee = 4000;

    const cartTotalWithDelivery = formatPrice(total + deliveryFee)


    return(
        <CartResultContainer>
            <h3>Resumo do Pedido</h3>
            <TotalItem isBold={false}>
                <p>Subtotal de produtos</p>
                <p>{formatPrice(total)}</p>
            </TotalItem>
            <TotalItem isBold={false}>
                <p>Entrega</p>
                <p>{formatPrice(deliveryFee)}</p>
            </TotalItem>
            <Divider/>
            <TotalItem isBold>
                <p>Total</p>
                <p>{cartTotalWithDelivery}</p>
            </TotalItem>
            <ShopBtn>Finalizar compra</ShopBtn>
        </CartResultContainer>

    )
}