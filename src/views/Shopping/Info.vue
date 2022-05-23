<script setup>
import { reactive, ref } from "vue";
import { useShopStore } from "@/stores/shop";
import { useRouter } from "vue-router";

const shopStore = useShopStore();
const router = useRouter();
const picked = ref("One");

const signInForm = reactive({
	email: "",
	password: "",
});
const signInLoading = ref(false);
const signIn = () => {
	const user = shopStore.users.find((user) => user.email === signInForm.email);
	if (!user) {
		if (signInForm.email === "" || signInForm.password === "") {
			alert("fill inputs");
		} else {
			signInLoading.value = true;
			setTimeout(() => {
				signInLoading.value = false;
				shopStore.users.push({
					id: new Date().getTime(),
					email: signInForm.email,
					password: signInForm.password,
				});
				localStorage.setItem("users", JSON.stringify(shopStore.users));
				router.push("/checkout");
			}, 2000);
		}
	} else {
		alert("this email is taken");
	}
};

const loginForm = reactive({
	email: "",
	password: "",
});
const loginLoading = ref(false);
const login = () => {
	const user = shopStore.users.find(
		(user) => user.password == loginForm.password
	);

	if (user) {
		loginLoading.value = true;
		setTimeout(() => {
			loginLoading.value = false;
			router.push("/checkout");
		}, 2000);
	} else {
		loginLoading.value = true;
		setTimeout(() => {
			loginLoading.value = false;
			alert("wrong email or password");
			loginForm.email = "";
			loginForm.password = "";
		}, 2000);
	}
};
</script>

<template>
	<main>
		<div class="head">
			<h6>قدم اول: اطلاعات شما</h6>
		</div>

		<!-- BODY -->
		<section class="body">
			<div class="ml-5 right">
				<h6>مشتری جدید هستید؟</h6>
				<p text="9px md:12px xl:14px">
					برای پرداخت سریعتر، رهگیری وضعیت سفارش و امکانات بیشتر عضو شوید.
					<br />
					شما بدون عضویت هم می‌توانید سفارش خود را تکمیل کنید.
				</p>

				<!--  -->
				<form @submit.prevent="signIn" m="t4 md:t7">
					<div class="checkbox" mb-2>
						<input
							type="radio"
							id="one"
							value="One"
							v-model="picked"
							xl="w-5 h-5"
						/>
						<label for="one" text="10px md:12px xl:14px" mr-2
							>خرید بدون عضویت</label
						>
					</div>

					<div class="checkbox">
						<input
							type="radio"
							id="two"
							value="Two"
							v-model="picked"
							xl="w-5 h-5"
						/>
						<label for="two" text="10px md:12px xl:14px" mr-2
							>عضویت در سایت</label
						>
					</div>

					<div v-if="picked === 'Two'" class="sign-in">
						<input
							v-model="signInForm.email"
							type="email"
							placeholder="پست الکترونیکی"
							class="input"
						/>
						<input
							v-model="signInForm.password"
							type="password"
							placeholder="کلمه عبور"
							class="input"
						/>

						<button class="text-center btn">
							<span v-if="!signInLoading">ادامه</span>
							<span v-else>. . .</span>
						</button>
					</div>

					<button v-else class="!mt-5 btn">
						<router-link to="/checkout">ادامه</router-link>
					</button>
				</form>
			</div>

			<!--  -->
			<div>
				<div m="b04 md:b-8">
					<h6 m="b-2 md:mb-5" text="md:14px xl:16px">قبلا خرید کرده‌اید؟</h6>
					<p text="9px md:12px xl:14px">
						برای ادامه، لطفا آدرس پست الکترونیکی و رمز عبور حساب خود را وارد
						کنید.
					</p>
				</div>

				<form @submit.prevent="login" flex flex-col>
					<input
						v-model="loginForm.email"
						type="email"
						placeholder="پست الکترونیکی"
						class="input"
					/>
					<input
						v-model="loginForm.password"
						type="password"
						placeholder="کلمه عبور"
						class="input"
					/>

					<button class="btn">
						<span v-if="!loginLoading">ادامه</span>
						<span v-else>. . .</span>
					</button>
				</form>
			</div>
		</section>

		<div class="mb-10 head">
			<h6>قدم دوم: روش پرداخت</h6>
		</div>
	</main>
</template>

<style lang="scss" scoped>
main {
	--at-apply: "!text-gray-700 mt-7 px-3 sm:(flex items-center flex-col) md:mt-10 xl:px-10";

	.head {
		--at-apply: "border-b sm:w-70% md:(w-full items-center justify-center) lg:w-90%";

		h6 {
			--at-apply: "font-thin mb-1 md:( text-16px mb-2 ) xl:text-20px";
		}
	}

	.body {
		--at-apply: "flex pt5 pb10 sm:w-70% md:(items-center justify-center w-full) xl:(justify-between w-90%)";

		.right {
			h6 {
				--at-apply: "mb-2 md:( text-14px mb-5 ) xl:text-16px";
			}

			form {
				.checkbox {
					--at-apply: "flex items-center";
				}

				.sign-in {
					--at-apply: "flex flex-col mt-5 md:mt-8";
				}
			}
		}

		.input {
			--at-apply: "placeholder-text-10px border-gray-300 border-1 outline-none w-35 pr-2 mb-6px py-1 sm:w-50 md:( w-90 py-2 placeholder-text-12px mb-3 py-3 ) xl:( w-120 text-16px )";
		}

		.btn {
			--at-apply: "text-10px py-1.5  bg-#62af65 text-white duration-250 w-35 hover:bg-#62ce65 sm:w-50 md:(w-90 text-14px) lg:w-40 xl:( text-16px py-2.5 )";
		}
	}
}
</style>
