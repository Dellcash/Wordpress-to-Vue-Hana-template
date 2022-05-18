<script setup>
import { ref } from "vue";
import Shopping from "./Icons/Shopping.vue";
import { useShopStore } from "@/stores/shop";
import SideCart from "./SideCart.vue";

const navs = ref([
	{
		title: "خانه",
		link: "/",
	},
	{
		title: "فروشگاه",
		link: "/shop",
	},
	{
		title: "وبلاگ",
		link: "#",
	},
]);

const shopStore = useShopStore();

const showCart = ref(false);
</script>

<template>
	<header>
		<h3>محصولات هانا</h3>
		<nav md:order-1>
			<ul flex>
				<li v-for="nav in navs" :key="nav">
					<router-link :to="nav.link">{{ nav.title }}</router-link>
				</li>
			</ul>
		</nav>
		<div @click="showCart = true" class="icon">
			<Shopping />
			<div class="badge">{{ shopStore.count }}</div>
		</div>

		<!-- SIDE CART -->
		<div v-if="showCart" class="side-cart">
			<div @click="showCart = false" class="back-g"></div>

			<!-- CONTENT -->
			<div class="cart">
				<!-- HEAD -->
				<div class="head">
					<h4>سبد خرید</h4>
					<span @click="showCart = false">&#9747;</span>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	--at-apply: "flex items-center justify-between py-5 px-3 sm:px-7rem lg:px-15rem xl:(px-5rem py-10)";

	h3 {
		--at-apply: "text-16px tracking-tighter sm:text-24px md:order-2 xl:ml-14rem";
	}

	li {
		--at-apply: "text-10px odd:mx-5 sm:text-14px xl:odd:mx-10 hover:opacity-70 duration-250";
	}

	.icon {
		--at-apply: "relative cursor-pointer md:order-3 xl:ml-8";

		.badge {
			--at-apply: "absolute text-center bg-black rounded-full bottom-3 w-15px h-15px -right-2.5 color-white text-10px";
		}
	}

	.side-cart {
		.back-g {
			--at-apply: "fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-9999";
		}

		.cart {
			--at-apply: "fixed top-0 right-0 w-75% z-9999";

			.head {
				--at-apply: "bg-black text-white py-4 flex items-center justify-end";

				h4 {
					--at-apply: "font-thin text-gray-200";
				}

				span {
					--at-apply: "text-20px font-semibold pl-5 pr-12 cursor-pointer";
				}
			}
		}
	}
}
</style>
