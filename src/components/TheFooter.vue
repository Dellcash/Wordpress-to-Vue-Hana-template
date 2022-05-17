<script setup>
import Instagram from "./Icons/Instagram.vue";
import Linkedin from "./Icons/Linkedin.vue";
</script>

<template>
	<footer>
		<section>
			<p>
				تمام حقوق این سایت متعلق به <strong><em>دلکش</em></strong> است.
			</p>
			<div>
				<Instagram ml-2 md:ml-6 xl:ml-3 />
				<Linkedin />
			</div>
		</section>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	--at-apply: "p-3 bg-gray-50 flex items-center justify-center sm:p-5 lg:p-8";

	section {
		--at-apply: "flex items-center justify-between text-gray-500 w-full sm:w-400px md:w-640px xl:flex-col xl:justify-center";

		p {
			--at-apply: "text-9px font-thin sm:text-12px xl:order-2";
		}

		div {
			--at-apply: "flex items-center pl-3 xl:mb-3 xl:pl-0";
		}
	}
}
</style>
