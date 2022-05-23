<script setup>
import { ref } from "vue";
import Calendar from "../../components/Icons/Calendar.vue";
import Folder from "../../components/Icons/Folder.vue";
import { useBlogStore } from "../../stores/blog";

const today = ref(new Date().toLocaleDateString("fa-IR"));
const blogStore = useBlogStore();
</script>

<template>
	<main p-5>
		<div>
			<article v-for="post in blogStore.posts" :key="post.id">
				<h3 tracking-wide xl:text-28px>{{ post.title }}</h3>
				<div>
					<h6 ml-10>
						<Calendar />
						<span pr-1>{{ today }}</span>
					</h6>
					<h6>
						<Folder />
						<span pr-1>{{ post.category }}</span>
					</h6>
				</div>
				<router-link :to="`/blog/${post.id}`"
					><img :src="post.image" :alt="post.title" w-full
				/></router-link>
				<button>
					<router-link :to="`/blog/${post.id}`">ادامه مطلب ...</router-link>
				</button>
			</article>
		</div>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "sm:( flex items-center justify-center )";
	div {
		--at-apply: "sm:w-65% md:w-90% lg:w-60% xl:w-70%";

		article {
			--at-apply: "flex flex-col items-center justify-center mb-8 md:mb-10 xl:mb-15";

			div {
				--at-apply: "flex mb4 mt-1 sm:justify-center xl:( mt-2 mb-5 )";

				h6 {
					--at-apply: "flex items-center font-thin sm:text-12px xl:text-14px";
				}
			}

			button {
				--at-apply: "w-50 self-start border-1 bg-transparent rounded text-12px py-1 duration-250 hover:( bg-black text-white ) sm:( text-14px w-70 ) md:self-center lg:self-start xl:( py-2.5 w-100 text-15px )";
			}
		}
	}
}
</style>
