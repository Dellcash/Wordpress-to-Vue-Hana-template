<script setup>
import { useHome } from "../stores/data";
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
		<section class="sixth">
			<h1>« ترشی جدید. »</h1>
			<p>_ مجله زندگی سالم</p>
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
</template>

<style lang="scss" scoped>
main {
  .first {
		background-image: url("../assets/images/img_1.jpg");
		--at-apply: "h-50vw bg-center bg-cover sm:h-40vw md:h-46vw lg:h-36vw xl:( h-45vw bg-fixed )";

		div {
			--at-apply: "text-white py-2rem px-1rem space-y-2 sm:( py-3rem px-6rem space-y-6 ) md:( px-1rem py-6rem ) lg:px-8rem xl:( pt-14rem px-6rem )";

			h3 {
				--at-apply: "leading-9 font-medium sm:( text-2rem leading-14 )";
			}

			p {
				--at-apply: "text-10px text-white font-thin sm:text-14px";
			}
		}
  }

  .second {
    --at-apply: 'flex flex-col p-3 sm:px-7rem md:( items-center px-3rem py-4rem ) xl:( py-10rem px-5rem )';

    div {
      --at-apply: 'md:( flex flex-row items-center space-x-5 ) lg:( space-x-10 w-768px ) xl:( w-full justify-between )';

      h1 {
        --at-apply: 'mb-2 md:( order-2 text-40px ) xl:w-10rem';
      }

      p {
        --at-apply: 'text-10px text-gray-500 leading-4 md:( order-1 text-14px leading-5 w-full ) xl:w-60%';
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
		--at-apply: "h-50vw bg-top bg-cover my-8 sm:h-40vw md:h-46vw lg:( bg-center h-36vw ) xl:( h-45vw bg-fixed )";

		div {
			--at-apply: text-white text-left py-2rem px-1rem space-y-2
			sm:py-3rem sm:px-6rem sm:space-y-6 md:px-1rem md:py-6rem lg:px-8rem xl:pt-14rem xl:px-6rem;

			h3 {
				--at-apply: "leading-9 font-medium sm:text-2rem sm:leading-14";
			}

			p {
				--at-apply: "text-10px font-thin sm:text-14px text-white";
			}
		}
	}

	.sixth {
		--at-apply: "text-center mb-8 xl:my-40";

		h1 {
			--at-apply: "mb-5 lg:text-3rem font-bold";
		}

		p {
			--at-apply: "text-10px font-thin lg:text-18px";
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
				--at-apply: "text-10px font-thin sm:text-14px text-white";
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
</style>
