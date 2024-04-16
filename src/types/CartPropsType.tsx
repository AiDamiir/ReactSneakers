import { SneakersDataType } from './SneakerDataType'

export type CartPropsType = {
	setConfirmed: any
	confirmed: boolean
	isOpened: boolean
	count: number
	setCount: any
	setCartItems: any
	onClose: () => void
	items: Array<SneakersDataType>
	onRemoveItem: (id: number) => void
	totalPrice: string
}