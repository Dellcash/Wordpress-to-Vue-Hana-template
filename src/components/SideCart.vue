<script setup>
import { computed } from "@vue/reactivity";
import { useShopStore } from "../stores/shop";
import Basket from "./Icons/Basket.vue";

const shopStore = useShopStore();
const items = computed(() => shopStore.allItems);
</script>

<template>
	<div class="side-cart" relative>
		<div @click="shopStore.sideCart = false" class="back-g"></div>

		<!-- CONTENT -->
		<div class="cart">
			<!-- HEAD -->
			<div class="head">
				<p>سبد خرید</p>
				<span @click="shopStore.sideCart = flase">&#10005;</span>
			</div>

			<div v-if="shopStore.cart.length === 0" class="basket">
				<Basket mb-1 />
				<h4>سبد خرید خالی است!</h4>
			</div>

			<!-- MAIN -->
			<div class="main">
				<div v-for="item in items" :key="item.id" class="item">
					<img :src="item.img" alt="" />
					<div w-full>
						<!-- TOP -->
						<div class="top">
							<h6>{{ item.title }}</h6>
							<span @click="shopStore.removeItem(item.id)">&#10005;</span>
						</div>

						<!-- MID -->
						<div class="mid">
							<h6>تعداد:</h6>
							<div mr-2>
								<span @click="shopStore.increment(item.id)">+</span>
								<span>{{ shopStore.toFarsiNumber(item.quantity) }}</span>
								<span @click="shopStore.decrement(item.id)">-</span>
							</div>
						</div>

						<!-- BOTTOM -->
						<h6 fw100 text="10px sm:12px">
							{{
								shopStore.toFarsiNumber(shopStore.numberWithCommas(item.price))
							}}
							تومان
						</h6>
					</div>
				</div>
			</div>

			<!-- FOOTER -->
			<div class="footer">
				<!--  -->
				<div>
					<h6 font-thin sm:text-14px>جمع کل</h6>
					<h6 sm:text-14px>
						{{
							shopStore.toFarsiNumber(
								shopStore.numberWithCommas(shopStore.totalAmount)
							)
						}}
						تومان
					</h6>
				</div>

				<!-- BUTTONS -->
				<div border-t border-gray-300>
					<button>
						<router-link to="/shopping-card">مشاهده سبد خرید</router-link>
					</button>
					<button>تسویه حساب</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.side-cart {
	.back-g {
		--at-apply: "fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-9999";
	}

	.cart {
		--at-apply: "fixed top-0 right-0 w-240px h-full z-9999 sm:w-352px";

		.head {
			--at-apply: "bg-black text-white py-4 flex items-center justify-end sm:py-6";

			p {
				--at-apply: "font-thin text-14px text-gray-200 sm:text-20px";
			}

			span {
				--at-apply: "text-20px font-semibold pl-5 pr-12 cursor-pointer sm:( text-28px pl-10 pr-18 )";
			}
		}

		.basket {
			--at-apply: "absolute bottom-70 mx-auto left-0 right-0 text-center lg:bottom-90";

			h4 {
				--at-apply: "font-thin tracking-tighter lg:text-20px";
			}
		}

		.main {
			// --at-apply: "h-64.5vh bg-gray-100 overflow-y-scroll sm:h-56vh lg:( h-67vh py-4 ) xl:h-62vh";
			height: calc(100% - 90px - 106px);
			@media (min-width: 640px) {
				height: calc(100% - 90px - 152px);
			}
			--at-apply: "bg-gray-100 overflow-y-scroll";

			.item {
				--at-apply: "flex items-center p-5 border-b border-gray-300 sm:px-7";

				img {
					--at-apply: "w-15 h-15 object-cover ml-3 sm:( w-20 h-20 )";
				}

				.top {
					--at-apply: "flex items-center justify-between";

					h6 {
						--at-apply: "text-10px font-thin sm:text-14px";
					}

					span {
						--at-apply: "text-7px border border-gray-200 rounded-full px-0.7 text-#000 cursor-pointer sm:( text-10px px-1.5 py-0.5 )";
					}
				}

				.mid {
					--at-apply: "flex items-center my-2 sm:my-3";

					h6 {
						--at-apply: "text-9px font-semibold sm:( text-12px ml-3 )";
					}

					span {
						--at-apply: "bg-white px-2 py-1 text-10px cursor-pointer even:( cursor-initial px-3 mx-1 ) sm:text-14px";
					}
				}
			}
		}

		.footer {
			--at-apply: "bg-gray-200";

			div {
				--at-apply: "flex justify-between p-5 sm:px-7";
			}

			button {
				--at-apply: "text-9px text-white bg-#62af65 px-3 py-2 rounded-lg font-thin duration-250 first:( bg-gray-500 hover:bg-gray-400 ) even:( px-5 hover:bg-#62ce65 ) sm:( text-12px w-full first:ml-2 even:mr-2 py-3)";
			}
		}
	}
}
</style>
