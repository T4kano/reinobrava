<script setup>
import moment from 'moment'
moment.locale('pt-br')

defineProps({
	event: { type: Object, required: true, }
})
</script>

<template>
<div class="relative w-full h-44 md:h-56 rounded-4xl overflow-hidden p-6 md:p-10 hover:shadow hover:scale-95 transition duration-300 ease-in-out">
	<img :src="event.img" class="absolute top-0 left-0 w-full h-full object-cover" />

	<div class="flex justify-between items-center h-full relative z-20">
		<div class="flex flex-col items-center justify-center bg-white/50 backdrop-blur-lg rounded-xl size-32 md:size-36">
			<p class="text-sm font-light">{{ moment(event.date).format('MMM') }}</p>
			<p class="text-4xl font-bold">{{ moment(event.date).format('DD') }}</p>
		</div>
		<div class="flex items-end h-full">
			<p class="md:text-xl text-center">{{ event.name }}</p>
		</div>
	</div>	
</div>
</template>
