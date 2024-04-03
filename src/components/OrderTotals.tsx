import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../assets/helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number,
    placeOrder: () => void
}

const OrderTotals = ({order, tip , placeOrder} : OrderTotalsProps)  => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price),0) , [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = subtotalAmount + tipAmount

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina:</h2>

                <p>Subtotal a pagar: {''}<span className="font-bold">{formatCurrency(subtotalAmount)}</span></p>

                <p>Propina: {''}<span className="font-bold">{formatCurrency(tipAmount)}</span></p>

                <p>total a pagar: {''}<span className="font-bold">{formatCurrency(totalAmount)}</span></p>
            </div>
        
            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={placeOrder}>
                Guardar Orden
            </button>
        </>
        
    )
}

export default OrderTotals
