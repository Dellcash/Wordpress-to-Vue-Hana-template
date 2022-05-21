<script setup>
import { computed } from "@vue/reactivity";
import { useShopStore } from "../../stores/shop";

const shopStore = useShopStore();
const items = computed(() => shopStore.allItems);
</script>

<template>
	<main>
		<section>
			<!-- TOP -->
			<div class="top">
				<h4>سبد خرید</h4>
				<button><router-link to="/shop">ادامه خرید</router-link></button>
			</div>

			<!-- MID -->
			<div class="mid">
				<!-- HEADER -->
				<div class="head">
					<h6 class="cube-style !text-right">کالا</h6>
					<h6 class="cube-style">تعداد</h6>
					<h6 class="cube-style">قیمت</h6>
					<h6 class="cube-style">قیمت کل</h6>
				</div>

				<!-- ITEMS -->
				<div v-for="item in items" :key="item.id" class="body">
					<!-- INFO -->
					<div class="info">
						<img :src="item.img" alt="" />
						<div mr-3>
							<h6>{{ item.title }}</h6>
							<button @click="shopStore.removeItem(item.id)">حذف</button>
						</div>
					</div>

					<!-- QUANTITY -->
					<div class="quantity">
						<div class="">
							<span @click="shopStore.increment(item.id)">+</span>
							<span>{{ shopStore.toFarsiNumber(item.quantity) }}</span>
							<span @click="shopStore.decrement(item.id)">-</span>
						</div>
					</div>

					<!-- TOTAL -->
					<div class="item-price">
						<h4 fw100>
							{{
								shopStore.toFarsiNumber(shopStore.numberWithCommas(item.price))
							}}
							تومان
						</h4>
					</div>

					<!-- TOTAL ITEM PRICE -->
					<div class="item-price">
						<h4 fw100>
							{{
								shopStore.toFarsiNumber(
									shopStore.numberWithCommas(item.price * item.quantity)
								)
							}}
							تومان
						</h4>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "px-3 py-8 sm:( flex items-center justify-center )";

	section {
		--at-apply: "sm:w-420px md:w-full lg:w-75% xl:w-88%";
		.top {
			--at-apply: "flex items-center justify-between mb-3";

			h4 {
				--at-apply: "font-thin sm:text-24px";
			}

			button {
				--at-apply: "bg-gray-400 text-white px-10 py-1.7 text-10px duration-250 hover:bg-gray-300 sm:( text-14px px-14 )";
			}
		}

		.mid {
			.head {
				--at-apply: " grid grid-cols-12";

				.cube-style {
					--at-apply: "border-1 py-4 text-center font-thin border-gray-300 text-gray-500 sm:text-14px";
				}

				h6:first-child {
					--at-apply: "pr-4 col-span-8 md:col-span-9 lg:col-span-6";
				}

				h6:nth-child(2) {
					--at-apply: "border-r-none col-span-4 md:col-span-3 lg:col-span-2";
				}

				h6:nth-child(3) {
					--at-apply: "border-r-none hidden lg:( block col-span-2 )";
				}

				h6:nth-child(4) {
					--at-apply: "border-r-none hidden lg:( block col-span-2 )";
				}
			}

			.body {
				--at-apply: "grid grid-cols-12";

				.info {
					--at-apply: "flex items-start border-1 py-2 border-t-0 pr-2 font-thin border-gray-300 text-gray-500 col-span-8 md:( col-span-9 py-5 pr-5 ) lg:col-span-6";

					img {
						--at-apply: "w-10 h-10 lg:( w-20 h-20 )";
					}

					div {
						h6 {
							--at-apply: "text-8px font-thin sm:text-12px lg:text-14px";
						}

						button {
							--at-apply: "text-red-600 text-8px sm:text-10px lg:text-12px";
						}
					}
				}

				.quantity {
					--at-apply: "border-1 border-gray-300 border-t-0 border-r-0 text-center flex items-center justify-center h-full col-span-4 md:( col-span-3 ) lg:col-span-2";

					span {
						--at-apply: "bg-gray-100 px-2 py-1 text-10px cursor-pointer even:( cursor-initial px-3 mx-1 ) sm:text-14px";
					}
				}

				.item-price {
					--at-apply: "relative border-l border-b text-center font-thin border-gray-300 text-gray-500 hidden lg:( col-span-2 block )";

					h4 {
						transform: translate(-50%, -50%);
						--at-apply: "absolute m-0 top-50% left-50% ";
					}
				}
			}
		}
	}
}
</style>
