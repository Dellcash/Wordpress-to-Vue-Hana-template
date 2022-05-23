<script setup>
import { useRoute } from "vue-router";
import { useBlogStore } from "../../stores/blog";
import Calendar from "../../components/Icons/Calendar.vue";
import Folder from "../../components/Icons/Folder.vue";
import { reactive, ref } from "vue";
import { useShopStore } from "../../stores/shop";

const blogStore = useBlogStore();
const route = useRoute();
const post = blogStore.getPost(route.params.id);
const today = ref(new Date().toLocaleDateString("fa-IR"));
const shopStore = useShopStore();

// document.title = `فروشگاه هانا | ${post.title}`;
const form = reactive({
	name: "",
	nameErr: "",
	title: "",
	titleErr: "",
	comment: "",
	commentErr: "",
});
const formLoading = ref(false);
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
			success.value = true;
		}, 2000);
		formLoading.value = true;
	}

	// simulate api request
	setTimeout(() => {
		formLoading.value = false;

		setTimeout(() => {
			success.value = false;
		}, 2000);
	}, 2000);
};
</script>

<template>
	<main p="5 t-3">
		<div class="main">
			<div xl="flex items-start">
				<article>
					<h5 text="sm:18px lg:24px">{{ post.title }}</h5>
					<div>
						<h6 ml-3 lg:ml-10>
							<Calendar />
							<span pr-1 lg:pr-2>{{ today }}</span>
						</h6>
						<h6>
							<Folder />
							<span pr-1 lg:pr-2>{{ post.category }}</span>
						</h6>
					</div>
					<img
						:src="post.image"
						:alt="post.title"
						w-full
						xl="w-150 h-100 object-cover"
					/>

					<p>{{ post.description }}</p>
				</article>

				<div w="lg-70% xl:40%" xl:mt-15>
					<!-- LATEST -->
					<div class="sidebar">
						<h5>نوشته‌های اخیر</h5>
						<div class="sidebar-posts">
							<div
								v-for="post in blogStore.posts"
								:key="post.id"
								flex="~ items-start"
								class="post"
							>
								<img :src="post.image" alt="" />
								<div pr-2>
									<h6 fw1 lg:text-16px>{{ post.title }}</h6>
									<h6 fw1 lg:text-16px>{{ today }}</h6>
								</div>
							</div>
						</div>
					</div>

					<!-- CATEGORY -->
					<div class="sidebar">
						<h5>دسته‌بندی‌ها</h5>
						<div class="sidebar-posts !pt-1">
							<h6 lg:text-16px>
								{{ post.category }}
								({{ shopStore.toFarsiNumber(blogStore.posts.length) }})
							</h6>
						</div>
					</div>
				</div>
			</div>

			<!-- FORM -->
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

				<button>
					<span v-if="!formLoading">ذخیره</span>
					<span v-else>. . .</span>
				</button>
			</form>

			<!-- SUCCESS -->
			<div v-if="success" class="sucess">
				<button @click="success = false" mb-2>
					<span text-10px text-gray-100>&#9747;</span>
				</button>
				<p>پیام شما بعد از تایید نمایش داده میشود!</p>
				<span class="tick">&#10003;</span>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "sm:( flex items-center justify-center )";
	.main {
		--at-apply: "sm:w-70% md:mt-10 xl:w-90%";

		article {
			--at-apply: "flex flex-col items-start justify-center mb-8 xl:w-400";

			div {
				--at-apply: "flex mb4 mt-1";

				h6 {
					--at-apply: "flex items-center font-thin sm:text-12px lg:text-14px";
				}
			}
			p {
				--at-apply: "text-9px pt3 leading-4 tracking-tight sm:( text-11px leading-5 ) lg:( text-14px leading-7) xl:( pl-30 pt-5 leading-7 )";
			}
		}

		.sidebar {
			h5 {
				--at-apply: "pb-1 lg:text-18px";
			}

			.sidebar-posts {
				--at-apply: "border-t-2 pt-4 xl:border-t-4";

				.post {
					--at-apply: "mb-3 lg:mb-5";

					img {
						--at-apply: "w-15 h-12 object-cover lg=( w-20 h-16 )";
					}
				}
			}
		}

		form {
			--at-apply: "mt-10 space-y-1 lg:w-70% xl:w-40%";

			.input {
				--at-apply: "w-full text-10px p-1 border border-gray-600 outline-none lg:( text-13px p-3 )";
			}

			p {
				--at-apply: "text-red text-8px sm:( text-10px mt-1 )";
			}

			button {
				--at-apply: "text-10px border-1 border-gray-600 text-gray-600 px-8 py-0.5 duration-250 focus:outline-none hover:( text-white bg-black ) lg:( text-13px py-3 px-12 )";
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
