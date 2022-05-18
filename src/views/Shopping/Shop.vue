<script setup>
import { useShopStore } from "@/stores/shop";

const shopStore = useShopStore();
</script>

<template>
	<main>
		<section>
			<div v-for="item in shopStore.items">
				<router-link :to="`/shop/${item.id}`">
					<img :src="item.img" alt=""
				/></router-link>

				<div>
					<router-link :to="`/shop/${item.id}`">
						<h4>{{ item.title }}</h4>
					</router-link>
					<h6>
						{{
							shopStore.toFarsiNumber(shopStore.numberWithCommas(item.price))
						}}
						تومان
					</h6>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "p-5 flex justify-center mt-8 md:p-6 lg:mt-12 xl:px-26";

	section {
		--at-apply: "grid grid-cols-2 gap-5 sm:w-400px md:w-full md:gap-6 lg:w-700px xl:w-full xl:grid-cols-3";

		div {
			img {
				--at-apply: "w-full h-8rem object-cover shadow-lg duration-250 hover:scale-105 sm:h-12rem md:h-20rem xl:h-22rem";
			}

			div {
				--at-apply: "text-center my-2 md:my-3 lg:my-4";

				h4 {
					--at-apply: "text-10px font5 mb-2 duration-250 hover:opacity-70 sm:text-14px lg:text-16px";
				}

				h6 {
					--at-apply: "text-9px sm:text-12px font1";
				}
			}
		}
	}
}
</style>
