<script setup>
import { useHome } from "../stores/data";
import Instagram from "../components/Icons/Instagram.vue";
import Linkedin from "../components/Icons/Linkedin.vue";
</script>

<template>
	<main>
		<!-- FIRST -->
		<section class="first">
			<div>
				<h3>
					دسته ها : <br />
					شماره ۱
				</h3>
				<p>همین حالا خرید کنید</p>
			</div>
		</section>

		<!-- SECOND -->
		<section class="second">
			<div>
				<h1>ترشی با کیفیت</h1>
				<p>{{ useHome.first }}</p>
			</div>
		</section>

		<!-- THIRD -->
		<section class="third">
			<img
				v-for="image in useHome.second"
				:key="image"
				:src="image"
				alt="vegetables"
			/>
		</section>

		<!-- FOURTH with second section style -->
		<section class="second">
			<div>
				<h1 class="!order-1">ترشی با کیفیت</h1>
				<p>{{ useHome.first }}</p>
			</div>
		</section>

		<!-- FIFTH -->
		<section class="fifth">
			<div>
				<h3>
					دسته ها : <br />
					شماره ۱
				</h3>
				<p>همین حالا خرید کنید</p>
			</div>
		</section>

		<!-- SIXTH -->
		<section class="sixth" text-center mb-8 xl:my-40>
			<h1 mb-5 lg:text-3rem font-bold>« ترشی جدید. »</h1>
			<p text-10px font-thin lg:text-18px>_ مجله زندگی سالم</p>
		</section>

		<!-- SEVENTH -->
		<section class="seventh">
			<div>
				<h3>
					دسته ها : <br />
					شماره ۱
				</h3>
				<p>همین حالا خرید کنید</p>
			</div>
		</section>

		<!-- EIGHTH -->
		<section class="second">
			<div>
				<h1>ترشی با کیفیت</h1>
				<p>{{ useHome.first }}</p>
			</div>
		</section>

		<!-- NINTH -->
		<section class="ninth">
			<img
				v-for="image in useHome.ninth"
				:key="image"
				:src="image"
				alt="vegetables"
			/>
		</section>
	</main>
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
main {
  .first {
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

  .second {
    --at-apply: 'flex flex-col p-3 sm:px-7rem md:items-center md:px-3rem md:py-4rem xl:py-10rem xl:px-5rem';

    div {
      --at-apply: 'md:flex md:flex-row md:items-center md:space-x-5 lg:space-x-10 lg:w-768px xl:w-full xl:justify-between';

      h1 {
        --at-apply: 'mb-2 md:order-2 md:text-40px xl:w-10rem';
      }

      p {
        --at-apply: 'text-10px text-gray-500 leading-4 md:order-1 md:text-14px md:leading-5 md:w-full xl:w-60%';
      }
    }
  }

  .third {
    --at-apply: 'grid grid-cols-3 gap-1.5 px-1 my-8 md:gap-12 md:px-8';

    img {
      --at-apply: 'w-full h-50vw object-cover sm:h-40vw md:h-60vw lg:h-40vw xl:h-35vw';
    }
  }

	.fifth {
		background-image: url("../assets/images/img_5.jpg");
		--at-apply: "h-50vw bg-top bg-cover my-8 sm:h-40vw md:h-46vw lg:bg-center lg:h-36vw xl:h-45vw xl:bg-fixed";

		div {
			--at-apply: text-white text-left py-2rem px-1rem space-y-2
			sm:py-3rem sm:px-6rem sm:space-y-6 md:px-1rem md:py-6rem lg:px-8rem xl:pt-14rem xl:px-6rem;

			h3 {
				--at-apply: "leading-9 font-medium sm:text-2rem sm:leading-14";
			}

			p {
				--at-apply: "text-10px font-thin sm:text-14px";
			}
		}
	}

	.seventh {
		background-image: url("../assets/images/img_6.jpg");
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

	.ninth {
		--at-apply: 'grid grid-cols-2 gap-4 px-2 my-8 md:gap-12 md:px-8';

    img {
      --at-apply: 'w-full h-50vw object-cover sm:h-40vw md:h-50vw lg:h-35vw xl:h-60vw';
    }
	}
}

footer {
	--at-apply: "p-3 bg-gray-100 flex items-center justify-center sm:p-5 lg:p-8";

	section {
		--at-apply: 'flex items-center justify-between sm:w-400px md:w-640px xl:flex-col xl:justify-center';

		p {
			--at-apply: 'text-9px font-thin sm:text-12px xl:order-2'
		}

		div {
			--at-apply: 'flex items-center pl-3 xl:mb-3 xl:pl-0'
		}
	}

}
</style>
