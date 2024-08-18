<script lang="ts" setup>

import { ref, watch } from 'vue'
import Button from "primevue/button";
import store from "../store.ts";
import { useRouter } from "vue-router";
import quizData from "../assets/Quiz.json";


const updateQuizData = (choice) => {
    store.update({...quizData, userAnswer: choice});
}

defineProps<{ options: string[] }>()


</script>

<template>
    <div v-for="choice in options" class="flex flex-col gap-3">
        <Button 
            :label="choice" 
            class="px-3 py-2 bg-blue-400 rounded-lg my-2 hover:bg-blue-100 hover:text-black text-white transition-[.4s] text-left"
            @click="updateQuizData(choice)"
        />
    </div>
</template>