<script setup>
import { onMounted, ref } from "vue";
import Check from "../../components/Icons/Check.vue";

const randomNumber = () => {
	return Math.floor(Math.random() * 1000) + 1;
};
const loading = ref(false);
const pageLoading = () => {
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
	}, 2000);
};

onMounted(() => {
	randomNumber();
	pageLoading();
});
</script>

<template>
	<main v-if="loading" class="loading"><span>. . .</span></main>
	<main v-else class="px-5 mt-10 mb-10 text-center">
		<Check />
		<h2
			class="mb-3 font-thin leading-8 sm:( px-30 mb-5 ) xl:leading-10"
			text="#2F88FF sm:2rem"
		>
			سفارش شما با موفقیت ثبت <br hidden xl:block />
			شد!
		</h2>

		<div text="10px sm:12px xl:14px" p="sm:x-30" md:leading-7>
			<p>
				کد رهگیری سفارش شما: <strong>#{{ randomNumber() }}</strong>
			</p>
			<p>
				در صورتی که عضو سایت هستید، شما می توانید تاریخچه سفارش خود را با رفتن
				به صفحه ی حساب کاربری خود مشاهده نمایید.
			</p>
			<p>از خرید آنلاین شما سپاسگزاریم!</p>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.loading {
	--at-apply: "fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-9999";

	span {
		transform: translate(-50%, -50%);
		--at-apply: "text-3rem text-white fixed top-[50%] left-[50%] z-9999 rounded-sm";
	}
}
</style>
