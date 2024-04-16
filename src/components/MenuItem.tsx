import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"
type MenuItemProps = {
    item: MenuItem,
    dispatch: React.Dispatch<OrderActions>
}

const MenuItem = ({item, dispatch} : MenuItemProps) => {
  return (
    <button className="border-2 rounded-lg border-purple-800 hover:bg-purple-700 w-full p-2 flex justify-between mb-2" onClick={()=> dispatch({type: 'add-item', payload: {item}})}>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem
