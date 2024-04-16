import { SneakersDataType } from './SneakerDataType'

export type AllSneakersType = {
	items: Array<SneakersDataType>
	cartItems: Array<SneakersDataType>
	setItems: Function
	setCartItems: Function
	onAddToCart: Function
}