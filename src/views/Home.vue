<script setup></script>

<template>
	<div class="hero">
		<div>
			<h3>
				دسته ها : <br />
				شماره ۱
			</h3>
			<p>همین حالا خرید کنید</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	background-image: url("../assets/images/img_1.jpg");
	--at-apply: "h-50vw bg-center bg-cover sm:h-40vw md:h-46vw lg:h-36vw xl:h-45vw xl:bg-fixed";

	div {
		--at-apply: text-white py-2rem px-1rem space-y-2
    sm:py-3rem sm:px-6rem sm:space-y-6 md:px-1rem md:py-6rem lg:px-8rem xl:pt-14rem xl:px-6rem;

		h3 {
			--at-apply: "leading-9 font-medium sm:text-2rem sm:leading-14";
		}

		p {
			--at-apply: "text-10px font-thin sm:text-14px";
		}
	}
}
</style>
