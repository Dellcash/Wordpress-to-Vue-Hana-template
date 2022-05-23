<script setup>
import { onMounted, ref } from "vue";
import Shopping from "./Icons/Shopping.vue";
import { useShopStore } from "@/stores/shop";
import SideCart from "./SideCart.vue";
import { useRouter } from "vue-router";

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
		link: "/blogs",
	},
]);

const shopStore = useShopStore();

// CLOSE SIDE CART WHEN ROUTER CHANGE
const router = useRouter();
const closeCart = () => {
	shopStore.sideCart = false;
};
onMounted(() => {
	router.afterEach(closeCart);
});
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
		<div @click="shopStore.sideCart = true" class="icon">
			<Shopping />
			<div class="badge">{{ shopStore.toFarsiNumber(shopStore.count) }}</div>
		</div>
	</header>

	<SideCart v-if="shopStore.sideCart" />
</template>

<style lang="scss" scoped>
header {
	--at-apply: "flex items-center justify-between py-5 px-3 sm:px-7rem lg:px-15rem xl:(px-5rem py-10)";

	h3 {
		--at-apply: "text-16px tracking-tighter sm:text-28px md:order-2 xl:ml-14rem";
	}

	li {
		--at-apply: "text-10px odd:mx-5 sm:text-14px xl:odd:mx-10 hover:opacity-70 duration-250";
	}

	.icon {
		--at-apply: "relative cursor-pointer md:order-3 xl:ml-8";

		.badge {
			--at-apply: "absolute text-center bg-black rounded-full bottom-3 w-15px h-15px -right-2.5 color-white text-10px pb-4 xl:( text-12px w-20px h-20px -right-3 )";
		}
	}
}
</style>
