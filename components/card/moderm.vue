<script setup>
defineProps({
	title: { type: String },
	subtitle: { type: String },
	description: { type: String }
})
</script>

<template>
	<div class="notification">
		<div class="notiglow"></div>
		<div class="notiborderglow"></div>
		<div class="notititle">{{ title }} - {{ subtitle }}</div>
		<div class="notibody"><p class="tracking-tight mb-2">{{ description }}</p></div>
	</div>
</template>

<style scoped>
.notification {
	display: flex;
	flex-direction: column;
	isolation: isolate;
	position: relative;
	/* background: #29292c; */
	border-radius: 1rem;
	overflow: hidden;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
	font-size: 16px;
	--gradient: linear-gradient(to bottom, #56CCF2, #2F80ED);
	--color: #1A1A1A;
}

.notification:before {
	position: absolute;
	content: "";
	inset: 0.0625rem;
	border-radius: 0.9375rem;
	/* background: #18181b; */
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(0.5rem);
	z-index: 2;
}

.notification:after {
	position: absolute;
	content: "";
	width: 0.25rem;
	inset: 0.65rem auto 0.65rem 0.5rem;
	border-radius: 0.125rem;
	background: var(--gradient);
	transition: transform 300ms ease;
	z-index: 4;
}

.notification:hover:after {
	transform: translateX(0.15rem);
}

.notititle {
	color: var(--color);
	padding: 0.65rem 0.25rem 0.4rem 1.25rem;
	font-weight: 500;
	font-size: 1.1rem;
	transition: transform 300ms ease;
	z-index: 5;
}

.notification:hover .notititle {
	transform: translateX(0.15rem);
}

.notibody {
	color: #3A3A3A;
	padding: 0 1.25rem;
	transition: all 1s ease;
	height: 0;
	max-height: 0;
	z-index: 5;
}

.notification:hover .notibody {
	transform: translateX(0.25rem);
	max-height: 200px;
	height: auto;
}

.notiglow,
.notiborderglow {
	position: absolute;
	width: 20rem;
	height: 20rem;
	transform: translate(-50%, -50%);
	background: radial-gradient(
		circle closest-side at center,
		white,
		transparent
	);
	opacity: 0;
	transition: opacity 300ms ease;
}

.notiglow {
	z-index: 3;
}

.notiborderglow {
	z-index: 1;
}

.notification:hover .notiglow {
	opacity: 0.1;
}

.notification:hover .notiborderglow {
	opacity: 0.1;
}

.note {
	color: var(--color);
	position: fixed;
	top: 80%;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	font-size: 0.9rem;
	width: 75%;
}
</style>
