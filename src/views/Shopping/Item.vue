<script setup>
import { useRoute } from "vue-router";
import { useShopStore } from "@/stores/shop";
import { ref } from "vue";
import Comment from "../../components/Icons/Comment.vue";

// GET DATA FROM ROUTE
const shopStore = useShopStore();
const route = useRoute();
const item = shopStore.getItem(route.params.id);

// BUTTONS
const description = ref(true);
const comment = ref(false);

const descBtn = () => {
	description.value = true;
	comment.value = false;
};
const commentBtn = () => {
	comment.value = true;
	description.value = false;
};

// MODAL
const modal = ref(false);
</script>

<template>
	<main relative>
		<!-- FIRST -->
		<section class="first">
			<img :src="item.img" alt="" />

			<div>
				<h4>{{ item.title }}</h4>
				<h6>{{ item.price }}</h6>
				<p>{{ item.description }} {{ item.description }}</p>
				<button>افزودن به سبد خرید</button>
			</div>
		</section>

		<!-- SECOND -->
		<section class="second">
			<div class="top">
				<button @click="descBtn" :class="{ borderBtn: description }">
					پشتیبانی محصول
				</button>
				<button @click="commentBtn" :class="{ borderBtn: comment }">
					نظرات
				</button>

				<!-- CONDITIONS -->
				<p v-if="description">
					<!-- just simulate some content -->
					{{ item.description }}{{ item.description }} <br />
					<br />
					{{ item.description }}
				</p>

				<!-- COMMENT -->
				<div v-if="comment">
					<Comment />
					<h6>هنوز نظری ثبت نشده</h6>
					<h5 xl:text-xl>اولین نفری باشید که نظر می‌دهید.</h5>
					<button @click="modal = true">ثبت نظر</button>
				</div>
			</div>

			<!-- MODAL -->
			<div v-if="!modal" class="modal">
				<div class="back-g"></div>
				<div class="content">نظر</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "mt-4 md:mt-8";

	.first {
		--at-apply: "flex flex-col justify-center sm:items-center xl:flex-row xl:grid xl:grid-cols-2 xl:pr-10";

		img {
			margin: 0 auto;
			--at-apply: w-50% h-12rem object-cover shadow-sm
      sm:w-40% sm:h-20rem md:w-55% md:h-30rem md:mb-5 lg:w-45% lg:h-35rem lg:mb-10 xl:w-50% xl:h-24rem;
		}

		div {
			--at-apply: "text-right px-5 mb-2 mt-5 md:my-3 lg:my-4 sm:w-400px md:w-full lg:w-700px xl:w-full xl:pl-38";

			h4 {
				--at-apply: "text-14px mb-2 duration-250 hover:opacity-70 sm:text-14px md:text-20px";
			}

			h6 {
				--at-apply: "inline-block p-2 text-12px sm:text-14px font5 bg-gray-100 mb-2";
			}

			p {
				--at-apply: "text-10px lg:text-12px";
			}

			button {
				--at-apply: "w-70% bg-[#62af65] text-white text-9px mt-5 py-2 duration-250 hover:opacity-80 md:w-40% md:py-3 xl:text-12px";
			}
		}
	}

  .second {
    --at-apply: "p-5 pt-1 xl:pt-0";

    .top {
      --at-apply: "sm:m-auto sm:w-60% md:w-full lg:w-67% xl:w-full xl:px-30";

      button {
        --at-apply: "text-12px tracking-tighter py-1.5 px-3 border-gray-200 xl:text-16px active:outline-none";
      }

			.borderBtn {
				--at-apply: "border-t border-r border-l outline-none";
			}

      p {
        --at-apply: "text-10px py-5 px-3 border border-gray-200 lg:text-12px";
      }

      div {
        --at-apply: "border border-gray-200 m-auto text-center py-7 sm:w-full xl:py-10";

        h6 {
          --at-apply: "font-thin xl:text-1rem";
        }

        button {
          --at-apply: "bg-[#2F88FF] text-gray-200 text-10px px-6 rounded-lg py-1.5 mt-5 focus:border-none xl:px-8 xl:text-14px"
        }
      }
    }

		.modal {
			.back-g {
				--at-apply: "fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-9999";
			}

			.content {
				--at-apply: "bg-white fixed top-[50%] left-[50%] shadow z-9999";
			}
		}
  }
}
</style>
