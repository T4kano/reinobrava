<script setup>
const wpp="https://wa.me//5519971599524?text=Tenho%20interesse%20em%20ser%20um%20voluntário%20na%20Reino%20Brava%20!"

const belong = "Em nossa comunidade, qualquer pessoa que desejar, pode fazer parte sem pré-requisitos. Não buscamos impor condutas na vida das pessoas para que sejam aceitas em nosso meio."
const believe = "Entendemos que quando abrimos espaço para que as pessoas convivam conosco,através de nós, elas conhecerão Jesus e irão crer nele."
const become = "Depois de recebemos a salvação, o Espírito Santo passa a habitar em cada um. E opróprio irá transformar o íntimo de cada pessoa conforme o seu desejo."

const items = [{
	label: "BELONG - Pertencer",
	content: belong
}, {
	label: "BELIEVE - Acreditar",
	content: believe
}, {
	label: "BECOME - Se tornar",
	content: become
}]

const active = ref("0")
</script>

<template>
	<UContainer class="mb-10">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
			<div class="flex flex-col-reverse sm:flex-col gap-10">
				<div class="h-[600px] rounded-4xl relative overflow-hidden p-10">
					<UAccordion v-model="active" :items="items" class="relative z-20" />
					<img src="/assets/img/photo_03.jpg" class="absolute bottom-0 sm:-bottom-20 left-0 object-cover z-10" />
				</div>

				<div class="h-[300px] rounded-4xl relative overflow-hidden p-5">
					<img src="/assets/img/photo_09.jpg" class="absolute bottom-0 left-0 w-full h-full object-cover z-10" />
				</div>
			</div>

			<div class="flex flex-col gap-10">
				<div class="h-[300px] rounded-4xl relative overflow-hidden p-5">
					<img src="/assets/img/photo_05.jpg" class="absolute bottom-0 left-0 w-full h-full object-cover z-10" />
				</div>
				<div class="h-[600px] rounded-4xl relative overflow-hidden p-5">
					<div class="flex flex-col justify-between relative h-full z-20 p-5">
						<div>
							<h2 class="text-xl tracking-tight mb-5">Faça parte do que Jesus está construíndo</h2>
							<p class="text-justify tracking-tighter">O voluntariado na Reino Brava é mais do que uma função —</p>
							<p class="text-right tracking-tight mb-5">é a expressão viva do Reino em movimento.</p>
							<p class="text-justify tracking-tight mb-5">Acreditamos que cada talento é uma resposta ao chamado de Jesus para amar, servir e transformar.</p>
							<p class="text-justify tracking-tight">Seja nos bastidores ou no palco, toda entrega carrega propósito.</p>
						</div>

						<ULink :href="wpp" target="_blank">
							<ButtonModerm label="Seja um voluntário" class="w-full" />
						</ULink>
					</div>

					<img src="/assets/img/photo_06.png" class="absolute top-0 left-0 w-full h-full object-cover z-10" />
				</div>
			</div>
		</div>
	</UContainer>
</template>