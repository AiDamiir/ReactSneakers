import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Swiper.module.css'

export const SwiperCompontent = () => {
	return (
		<Swiper
			className={styles.swiper}
			modules={[Navigation]}
			spaceBetween={50}
			slidesPerView={3}
			navigation
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
			<SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
			<SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
			<SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
		</Swiper>
	)
}
