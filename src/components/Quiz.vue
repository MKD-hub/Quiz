<script setup lang="ts">
    import { ref, watch, onMounted, onUnmounted } from "vue";
    import type { Ref } from "vue";
    import { useRouter } from "vue-router";
    import { Notes as NotesBold } from "@iconsans/vue/bold";
    import { Timer as TimerLinear } from "@iconsans/vue/linear";
    import Button from "primevue/button";
    import SelectButton from "primevue/selectbutton";
    import quizData from "../assets/Quiz.json";
    import Selection from "./Selection.vue";
    import store from "../store.ts";

    const router = useRouter();
    
    const options = ref(quizData.choices);

    const numberOfQuestions = 1;

    const time = ref(60);
    const timeIsUp = ref(false);

    let intervalId;
    
    watch( store, () => {
        store.update({...store.result, timeGiven: 60, timeDone: time})
        router.push({ path: "/result" });
    })

    watch( timeIsUp, () => {
        store.update({...store.result, userAnswer: "" })
        // If time is up and user hasn't done anything.
        router.push({ path: "/result" })
    })

    onMounted(() => {
        intervalId = setInterval(() => {
            if (time.value > 0) {
                time.value--;
            }
            else {
                clearInterval(intervalId);
                timeIsUp.value = true;
                alert('Time\'s Up!')
            }
        }, 1000)
    })

    onUnmounted(() => {
        clearInterval(intervalId)
    });


    
</script>

<template>

    <div class="p-12 w-fit flex flex-col gap-10 text-black">

        <div class="flex gap-2 items-center">
            <NotesBold width="48" height="48" color="#FA9500" />
            <span class="flex flex-col">
                <p class="font-semibold text-sm">
                    Question {{ 1 }} out of {{ numberOfQuestions }}
                </p>
                
                <span class="flex gap-2 items-center">
                    <TimerLinear width="16" height="16" color="#A790A5" />
                    <p class="text-sm text-[#A790A5]">
                        {{ time }}
                    </p>
                </span>
            </span>
        </div>


        <div class="flex flex-col w-ful pl-2">

            <div class="flex gap-10">
                <img 
                    :src='quizData.questionImg'
                    class="max-w-[300px] max-h-[300px]"
                />

                <div class="flex-col gap-8">
                    <p class="text-lg font-semibold">
                        {{ quizData.question }}
                    </p>

                    <Selection
                        :options="quizData.choices"
                    />
                    
                </div>

            </div>
                
        </div>
    </div>

</template>