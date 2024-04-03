import type { MenuItem } from "../types"
type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

const MenuItem = ({item, addItem} : MenuItemProps) => {
  return (
    <button className="border-2 rounded-lg border-purple-800 hover:bg-purple-700 w-full p-2 flex justify-between mb-2" onClick={()=> addItem(item)}>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem
