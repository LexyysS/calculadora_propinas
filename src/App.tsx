import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPorcentageForm from "./components/TipPorcentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"



function App() {

  const { order, tip, setTip, addItem , removeItem , placeOrder } = useOrder()

  return (
    <>
      <header className=" bg-purple-800 py-5">
         <h1 className=" text-center text-4xl font-black ">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black mb-10">Menú</h2>
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} addItem={addItem}/>
          ))}

        </div>
        
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem}/>
          <TipPorcentageForm setTip={setTip} tip={tip}/>
          <OrderTotals order={order} tip={tip} placeOrder={placeOrder}/>
        </div>
        
      </main>
    </>
  )
}

export default App
