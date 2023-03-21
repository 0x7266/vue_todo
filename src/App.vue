<script setup lang="ts">
import { ref } from "vue";

const showModal = ref(false);
const newNote = ref("");
const errMsg = ref("");
const notes = ref<Note[]>([]);

type Note = {
	id: number;
	text: string;
	date: Date;
	backgroundColor: string;
};

function getRandomColor() {
	return `hsl(${Math.random() * 360}, 100%, 75%)`;
}

function toggleModal() {
	errMsg.value = "";
	showModal.value = !showModal.value;
}

function addNote() {
	if (newNote.value === "") {
		errMsg.value = "Note can't be blank";
		return;
	}
	notes.value.push({
		id: Math.floor(Math.random() * 999999),
		text: newNote.value,
		date: new Date(),
		backgroundColor: getRandomColor(),
	});
	showModal.value = false;
	newNote.value = "";
	errMsg.value = "";
}
</script>

<template>
	<div
		v-if="showModal"
		class="overlay absolute w-full h-full grid place-content-center backdrop-blur-sm font-noto"
	>
		<div
			class="modal rounded-md flex flex-col justify-center items-center bg-gray-300 py-3 px-5 w-[80dvw] sm:w-[60dvw] md:w-[30dvw] gap-3"
		>
			<button
				@click="toggleModal"
				class="self-end justify-self-center font-bold text-rose-600 text-xl"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 80 80"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M56 64L24 16"
						stroke="red"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="10px"
					/>
					<path
						d="M24 64L56 16"
						stroke="red"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="10px"
					/>
				</svg>
			</button>
			<textarea
				v-model="newNote"
				class="border w-full rounded p-2"
				rows="5"
			></textarea>
			<div
				v-if="errMsg"
				class="text-rose-300 bg-red-200 w-full p-2 text-center border-2 border-rose-400 rounded"
			>
				{{ errMsg }}
			</div>
			<button
				@click="addNote"
				class="bg-cyan-900 w-full rounded py-2 text-white font-semibold"
			>
				Add note
			</button>
		</div>
	</div>
	<header
		class="p-4 text-5xl flex text-white justify-around items-center font-sono"
	>
		<h1 class="">Notes</h1>
		<button
			class="bg-cyan-900 py-2 px-3 rounded-md font-semibold"
			@click="toggleModal"
		>
			+
		</button>
	</header>
	<div class="flex flex-col gap-4 p-5 items-center">
		<div
			v-for="note in notes"
			:key="note.id"
			class="px-5 rounded-md w-full max-w-xl h-40 flex flex-col justify-around font-semibold"
			:style="{ backgroundColor: note.backgroundColor }"
		>
			<div class="font-kalam text-2xl font-light">
				{{ note.text }}
			</div>
			<div class="self-end font-medium">
				{{ note.date.toLocaleDateString("en-us") }}
			</div>
		</div>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kalam&family=Noto+Sans&family=Sono:wght@600&display=swap");
</style>
