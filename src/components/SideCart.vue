<script setup>
import { computed } from "@vue/reactivity";
import { useShopStore } from "../stores/shop";

const emit = defineEmits(["close"]);
const closeCart = () => {
	emit("close");
};

const shopStore = useShopStore();
const items = computed(() => shopStore.allItems);
</script>

<template>
	<div class="side-cart">
		<div @click="closeCart" class="back-g"></div>

		<!-- CONTENT -->
		<div class="cart">
			<!-- HEAD -->
			<div class="head">
				<p>سبد خرید</p>
				<span @click="closeCart">&#10005;</span>
			</div>

			<!-- MAIN -->
			<div class="main">
				<div v-for="item in items" :key="item.id" flex items-center p-5>
					<img :src="item.img" alt="" w-15 h-15 object-cover ml-3 />
					<div w-full>
						<!-- TOP -->
						<div flex items-center justify-between>
							<h6 text-10px font-thin>{{ item.title }}</h6>
							<span
								@click="shopStore.removeItem(item.id)"
								class="
									text-7px
									border border-gray-200
									rounded-full
									px-1
									text-#000
									cursor-pointer
								"
								>&#10005;</span
							>
						</div>

						<!-- MID -->
						<div flex items-center my-2>
							<h6 text-9px font-semibold>تعداد</h6>
							<div mr-4>
								<span
									@click="shopStore.increment(item.id)"
									bg-white
									px-2
									py-1
									text-10px
									>+</span
								>
								<span bg-white px-2 py-1 text-10px mx-1>{{
									shopStore.toFarsiNumber(item.quantity)
								}}</span>
								<span bg-white px-2 py-1 text-10px>-</span>
							</div>
						</div>

						<!-- BOTTOM -->
						<h6 text-10px>
							{{
								shopStore.toFarsiNumber(shopStore.numberWithCommas(item.price))
							}}
							تومان
						</h6>
					</div>
				</div>
			</div>

			<!-- FOOTER -->
			<div class="footer"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.side-cart {
	.back-g {
		--at-apply: "fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-9999";
	}

	.cart {
		--at-apply: "fixed top-0 right-0 w-75% z-9999";

		.head {
			--at-apply: "bg-black text-white py-4 flex items-center justify-end";

			p {
				--at-apply: "font-thin text-14px text-gray-200";
			}

			span {
				--at-apply: "text-20px font-semibold pl-5 pr-12 cursor-pointer";
			}
		}

		.main {
			--at-apply: "h-75vh bg-gray-100 overflow-scroll";
		}

		.footer {
			--at-apply: "p-9 bg-gray-200";
		}
	}
}
</style>
