<script setup>
import { ref, computed } from "@vue/reactivity";
import { useShopStore } from "../../stores/shop";

const shopStore = useShopStore();
const items = computed(() => shopStore.allItems);

const heads = ref(["کالا", "تعداد", "قیمت", "قیمت کل"]);
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
					<h6
						v-for="head in heads"
						:key="head"
						class="cube-style !first:text-right"
					>
						{{ head }}
					</h6>
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

				<!-- BOTTOM -->
				<div class="bottom">
					<!-- DISCOUNT -->
					<form @submit.prevent="">
						<input
							type="text"
							placeholder="کد تخفیف خود را اینجا وارد نمایید"
						/>
						<button>ثبت</button>
					</form>

					<!-- TOTAL AMOUNT -->
					<div class="total-amount">
						<div>
							<h6 mb-2 xl:mb-5>مجموع کل خرید شما</h6>
							<h6>مبلغ قابل پرداخت</h6>
						</div>
						<div sm:pl-4 lg:pl-0>
							<h6 mb-2 xl:mb-5>
								{{
									shopStore.toFarsiNumber(
										shopStore.numberWithCommas(shopStore.totalAmount)
									)
								}}
								تومان
							</h6>
							<h6 class="!text-green-400">
								{{
									shopStore.toFarsiNumber(
										shopStore.numberWithCommas(shopStore.totalAmount)
									)
								}}
								تومان
							</h6>
						</div>
					</div>
				</div>

				<!-- BUTTONS -->
				<div class="end">
					<button>پیش فاکتور</button>
					<button>ثبت سفارش</button>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "px-3 py-8 sm:( flex items-center justify-center )";

	section {
		--at-apply: "sm:w-420px md:w-full lg:w-80% xl:w-88%";
		.top {
			--at-apply: "flex items-center justify-between mb-3 lg:mb-5";

			h4 {
				--at-apply: "font-thin md:text-24px";
			}

			button {
				--at-apply: "bg-gray-400 text-white px-10 py-1.7 text-10px duration-250 hover:bg-gray-300 md:( text-14px px-14 ) lg:py-3";
			}
		}

		.mid {
			.head {
				--at-apply: " grid grid-cols-12";

				.cube-style {
					--at-apply: "border-1 py-4 text-center font-thin border-gray-300 text-gray-500 sm:text-14px lg:py-6";
				}

				h6:first-child {
					--at-apply: "pr-5 col-span-8 md:( col-span-9 pr-9 ) lg:( col-span-6 pr-14 )";
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
						--at-apply: "bg-gray-100 px-2 py-1 text-10px cursor-pointer even:( cursor-initial px-3 mx-1 ) sm:text-14px xl:( text-16px px-5 )";
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

			.bottom {
				--at-apply: "flex flex-col lg:( grid grid-cols-12 )";

				form {
					--at-apply: "flex items-center justify-center w-full mt-6 order-2 md:px-10 lg:( order-1 col-span-6 px-0 justify-start )";

					input {
						--at-apply: "placeholder-text-10px border border-gray-300 p-1.5 focus:outline-none lg:( w-60% placeholder-text-14px p-3 text-14px )";
					}

					button {
						--at-apply: "text-10px bg-gray-400 py-2.4 px-5 text-white mr-2 duration-250 hover:bg-gray-300 lg:( text-14px py-3.2 px-10 )";
					}
				}

				.total-amount {
					--at-apply: "flex justify-between border border-t-0 border-gray-300 p-3 order-1 md:px-10 lg:( order-2 col-start-9 col-end-13 px-3 -mr-0.2 )";

					h6 {
						--at-apply: "font-thin text-10px text-gray-800 md:text-12px lg:text-14px";
					}
				}
			}
		}

		.end {
			--at-apply: "flex flex-col mb-10 lg:( flex-row items-center justify-between )";

			button {
				--at-apply: "w-full text-10px text-white py-2 duration-250 first:( mt-6 bg-gray-400 hover:bg-gray-300 ) even:( mt-2 bg-#62af65 hover:bg-#62ce65 lg:mt-6 ) sm:py-3 md:text-12px lg:( w-30% text-14px )";
			}
		}
	}
}
</style>
