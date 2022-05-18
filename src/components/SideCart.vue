<script setup>
import { useShopStore } from "../stores/shop";

const emit = defineEmits(["close"]);
const closeCart = () => {
	emit("close");
};

const shopStore = useShopStore();
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
			<div class="main"></div>
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
		}
	}
}
</style>
