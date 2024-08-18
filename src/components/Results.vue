<script lang="ts" setup>
import { ref } from "vue";

import store from "../store.ts";
import { InfrmationCircle as infoBold } from "@iconsans/vue/bold"
import { TickCircle as checkBold } from "@iconsans/vue/bold"
let correctAnswersCount;

if (store.result.userAnswer === store.result.answer) {
    correctAnswersCount = 1;
}
else {
    correctAnswersCount = 0;
}

</script>


<template>
  <div class="p-12">

    <div class="flex gap-3">
        <infoBold
            width="48"
            height="48"
            color="#FA9500"
         />

        <span class="flex flex-col justify-center">
            <p class="font-semibold text-sm">
                You scored {{ correctAnswersCount }} out of 1
            </p>
            <p class="text-xs">
                And spent <span class="text-blue-600">{{ store.result.timeDone }}</span> out of {{ store.result.timeGiven }} seconds
            </p>
        </span>
    </div>


    <h1 class="text-xl font-bold mt-12">Review</h1>


    <div>
        <p>
            {{ store.result.question }}
        </p>
        <img
            :src="store.result.questionImg"
            class="max-w-[300px] max-h-[300px]"
        />

        <div v-for="choice in store.result.choices" class="flex gap-2 items-center mt-5">
            <p>{{ choice }}</p>
            <checkBold
                v-if="choice === store.result.answer" 
                color="#16A34A"
                width="24"
                height="24"
            />
            
            <span v-if="choice === store.result.userAnswer" :class="`text-xs px-1 py-2 rounded-full bg-slate-300 ${choice === store.result.answer ? 'text-green-600' : 'text-red-600' }`">
                Your answer
            </span>
        </div>
    </div>
  </div>
</template>

