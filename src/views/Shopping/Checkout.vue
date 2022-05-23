<script setup>
import { ref } from "vue";
import { useShopStore } from "@/stores/shop";
import { useRouter } from "vue-router";

const picked = ref("One");
const shopStore = useShopStore();

const loading = ref(false);
const router = useRouter();
const submitItems = () => {
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
		router.push("/success");
	}, 2000);
};
</script>

<template>
	<main>
		<div class="head">
			<h6>قدم اول: اطلاعات شما</h6>
		</div>
		<div class="head mt5 xl:mt8">
			<h6>قدم دوم: روش پرداخت</h6>
		</div>

		<div class="body">
			<h6 mt3>شیوه پرداخت را انتخاب کنید</h6>

			<!--  -->
			<form @submit.prevent="submitItems" mt-3>
				<!-- CHECKBOX -->
				<div md="flex items-center" lg:justify-between>
					<div>
						<div flex="~ items-center" m="b-2 lg:b-4">
							<input
								type="radio"
								id="one"
								value="One"
								v-model="picked"
								md="w-5 h-5"
							/>
							<label for="one" text="10px md:12px xl:14px" mr-2
								>پرداخت در محل</label
							>
						</div>

						<div flex="~ items-center">
							<input
								type="radio"
								id="two"
								value="Two"
								v-model="picked"
								md="w-5 h-5"
							/>
							<label for="two" text="10px md:12px xl:14px" mr-2
								>کارت به کارت</label
							>
						</div>
					</div>

					<!-- TOTAL AMOUNT -->
					<div flex m="t-5 b-3 md:r30 lg:t-0">
						<div class="inside" m="l-15 md:l-20">
							<h6>مجموع کل خرید شما</h6>
							<h6>مبلغ قابل پرداخت</h6>
						</div>
						<div class="inside">
							<h6>
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

				<div lg="flex items-start justify-between mt-4">
					<button class="btn">
						<span v-if="!loading">پرداخت و تکمیل خرید</span>
						<span v-else>. . .</span>
					</button>

					<textarea rows="3" placeholder="توضیحات"></textarea>
				</div>
			</form>
		</div>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "!text-gray-700 mt-7 px-3 sm:(flex items-center flex-col) md:mt-10 xl:px-10";

	.head {
		--at-apply: "border-b sm:w-70% md:(w-full items-center justify-center) lg:w-80% xl:w-90%";
	}

	h6 {
		--at-apply: "font-thin mb-1 md:( text-16px mb-2 ) xl:text-20px";
	}

	.body {
		--at-apply: "pb10 sm:w-70% md:(items-center justify-center w-full) lg:w-80% xl:(justify-between w-90%)";

		.inside {
			h6 {
				--at-apply: "font-thin text-10px text-gray-800 md:text-13px xl:text-15px";
			}
		}

		.btn {
			--at-apply: "text-10px py-1.5 bg-#62af65 text-white duration-250 w-full hover:bg-#62ce65 md:py-2 lg:w-40 xl:( text-14px py-2.5 w-50 )";
		}

		textarea {
			--at-apply: "w-full mt-4 border-gray-300 p-2 placeholder-text-10px focus:( outline-none border-gray-400 ) lg:( placeholder-text-14px w-50% mt-0 -order-1 h-8rem )";
		}
	}
}
</style>
