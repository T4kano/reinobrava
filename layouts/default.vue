<template>
	<header class="flex justify-between py-2 px-6 md:py-3 md:px-12">
		<a href="/" class="flex items-center font-bold gap-2">
			<img src="/assets/img/brand.png" alt="Logo Reino Brava" class="invert w-8 md:w-12" />
			<span>BRAVA</span>
		</a>
		<NavbarWrap />
	</header>
	<NuxtPage class="min-h-screen" />
	<footer class="bg-(--ui-primary) flex flex-col md:flex-row justify-between text-sm rounded-t-4xl px-13 py-5 tracking-tighter">
		<p>WE ARE REINO BRAVA &copy; 2025</p>

		<div class="md:text-right">
			R. Laura dos Santos Laurindo, 50 - Praia Brava, Itajaí - SC,
			88306-705
			<UIcon name="mdi:map-marker" class="text-white" />
			57.212.638/0001-03
		</div>
	</footer>
</template>
