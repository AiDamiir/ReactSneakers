export type SneakersCardPropsType = {
	id: number
	image: string
	name: string
	price: string
	added: any
	loading: boolean
	cartItems: Array<object>
	onPlus: () => void
}