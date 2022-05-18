<script setup>
import { useRoute } from "vue-router";
import { useShopStore } from "@/stores/shop";
import { reactive, ref } from "vue";
import Comment from "../../components/Icons/Comment.vue";
import Loading from "../../components/Icons/Loading.vue";

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

// CART
const addToCart = (item) => {
	shopStore.addToCart(item);
};

// MODAL
const modal = ref(false);
// rating star function
const rating = ref(0);
const ratingStar = (star) => {
	rating.value = star;
};
// from
const form = reactive({
	name: "",
	nameErr: "",
	title: "",
	titleErr: "",
	comment: "",
	commentErr: "",
});
const loading = ref(false);
const success = ref(false);
const validation = () => {
	if (form.name === "") {
		form.nameErr = "لطفا فیلد مورده نظر را پر کیند!";
	} else {
		form.nameErr = "";
	}
	if (form.title === "") {
		form.titleErr = "لطفا فیلد مورده نظر را پر کیند!";
	} else {
		form.titleErr = "";
	}
	if (form.comment === "") {
		form.commentErr = "لطفا فیلد مورده نظر را پر کیند!";
	} else {
		form.commentErr = "";
	}

	if (form.name !== "" && form.title !== "" && form.comment !== "") {
		setTimeout(() => {
			form.name = "";
			form.title = "";
			form.comment = "";
			modal.value = false;
		}, 2000);
		loading.value = true;
	}

	// SIMULATE API REQUEST
	setTimeout(() => {
		loading.value = false;
		success.value = true;

		setTimeout(() => {
			success.value = false;
		}, 2000);
	}, 2000);
};
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
				<button @click="addToCart(item)">افزودن به سبد خرید</button>
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
			<div v-if="modal" class="modal">
				<div class="back-g" @click="modal = false"></div>
				<div class="content">
					<!-- HEAD -->
					<div class="head">
						<p>نظر شما راجب این محصول چیست؟</p>
						<button @click="modal = false">
							<span sm:text-20px>&#9747;</span>
						</button>
					</div>

					<!-- MAIN -->
					<div class="main">
						<img :src="item.img" alt="" />
						<div>
							<h6 mb-1 sm:text-lg>{{ item.title }}</h6>
							<p>چه امتیازی به این محصول می‌دهید؟</p>

							<!-- RATING -->
							<div class="stars">
								<div
									class="star"
									v-for="(star, index) in 5"
									:key="index"
									@click="ratingStar(index + 1)"
								>
									<span v-if="rating >= index + 1">&#9733;</span>
									<span v-else>&#9734;</span>
								</div>
							</div>
						</div>
					</div>

					<!-- BOTTOM -->
					<form @submit.prevent="validation">
						<!-- NAME -->
						<div>
							<input
								v-model="form.name"
								:class="form.nameErr ? '!border-red' : ''"
								class="input"
								type="text"
								placeholder="نام شما"
							/>
							<p>{{ form.nameErr }}</p>
						</div>

						<!-- TITLE -->
						<div>
							<input
								v-model="form.title"
								:class="form.titleErr ? '!border-red' : ''"
								class="input"
								type="text"
								placeholder="عنوان نظر شما"
							/>
							<p>{{ form.titleErr }}</p>
						</div>

						<!-- CONTEN -->
						<div>
							<textarea
								v-model="form.comment"
								:class="form.commentErr ? '!border-red' : ''"
								class="input -mb-9px"
								rows="5"
								placeholder="متن نظر شما"
							></textarea>
							<p>{{ form.commentErr }}</p>
						</div>

						<div class="btns">
							<button>ذخیره</button>
							<button @click="modal = false">انصراف</button>
						</div>
					</form>

					<!-- LOADING -->
					<div v-if="loading" class="back-g">
						<div flex justify-center>
							<Loading animate-spin h-85vh />
						</div>
					</div>
				</div>
			</div>

			<!-- SUCCESS -->
			<div v-if="success" class="sucess">
				<button @click="success = false" mb-2>
					<span text-10px text-gray-100>&#9747;</span>
				</button>
				<p>پیام شما بعد از تایید نمایش داده میشود!</p>
				<span class="tick">&#10003;</span>
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
			// overflow-y: auto;

			.back-g {
				--at-apply: "fixed block top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] z-9999";
			}

			.content {
				transform: translate(-50%, -50%);
				--at-apply: "w-85% bg-white fixed top-[50%] left-[50%] shadow z-9999 rounded-sm sm:( w-65% rounded-md mt-15 ) md:w-53% lg:( w-40% mt-0 ) xl:w-32%";

				.head {
					--at-apply: "flex items-center justify-between p-2 sm:mb-2";

					p {
						--at-apply: "text-10px sm:text-14px";
					}
				}

				.main {
					--at-apply: "flex items-start p-3";

					img {
						--at-apply: "w-20 h-25 object-cover border p-3 border-gray-200 sm:( w-25 h-30 )";
					}

					div {
						--at-apply: "pr-3";

						p {
							--at-apply: "text-9px text-gray tracking-tighter sm:( text-13px py-2 )";
						}

						.stars {
							--at-apply: "flex pr-0";

							.star {
								--at-apply: "pr-0 cursor-pointer text-22px text-yellow-500 sm:( text-26px pr-1 )";
							}
						}
					}
				}

				form {
					--at-apply: "p-3 space-y-3 sm:( space-y-5 mt-5 )";

					.input {
						--at-apply: "w-full text-10px p-1.5 border border-gray-200 rounded-sm outline-none sm:( text-13px p-3 )";
					}

					p {
						--at-apply: "text-red text-8px sm:( text-10px mt-1 )";
					}

					.btns {
						--at-apply: "flex items-center justify-between pt-7 sm:pb-5";

						button:first-child {
							--at-apply: "text-10px px-7 py-1.7 bg-gray-400 text-white rounded-full duration-250 hover:opacity-80 sm:( text-14px px-11.5 py-2.8 )";
						}

						button:last-child {
							--at-apply: "border-b border-gray-500 text-gray-500 text-10px px-3 py-1.7 sm:( text-14px px-4 py-2.8 )"
						}
					}
				}
			}
		}

		.sucess {
			--at-apply: "fixed flex items-center top-10 right-5 bg-[#62af65] p-2";

			p {
				--at-apply: "text-10px ml-3 mr-1 text-white";
			}

			.tick {
				--at-apply: "text-white font-900";
			}
		}
  }
}
</style>
