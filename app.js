//Desktop
/*Getting the daily,wk, mnth paragraphs for Desktop- We cant have same ids for the mobile and desktop version */
const dailyDesktop = document.getElementById("daily-desktop");
const weeklyDesktop = document.getElementById("weekly-desktop");
const monthlyDesktop = document.getElementById("monthly-desktop");

/*Getting the hr */
const workHrDesktop = document.getElementById("hr-work-desktop");
const playHrDesktop = document.getElementById("hr-play-desktop");
const studyHrDesktop = document.getElementById("hr-study-desktop");
const exerciseHrDesktop = document.getElementById("hr-exercise-desktop");
const socialHrDesktop = document.getElementById("hr-social-desktop");
const selfCareHrDesktop = document.getElementById("hr-self-care-desktop");

/*Getting the last week hr */
const lastWeekWorkHrDesktop = document.getElementById("work-last-week-desktop");
const lastWeekPlayHrDesktop = document.getElementById("play-last-week-desktop");
const lastWeekStudyHrDesktop = document.getElementById("study-last-week-desktop");
const lastWeekExerciseHrDesktop = document.getElementById("exercise-last-week-desktop");
const lastWeekSocialHrDesktop = document.getElementById("social-last-week-desktop");
const lastWeekSelfCareHrDesktop = document.getElementById("self-care-last-week-desktop");

dailyDesktop.addEventListener("click",() =>{
    console.log("clicked");
    workHrDesktop.innerText = "5hr";
    playHrDesktop.innerText = "1hr";
    studyHrDesktop.innerText = "0hrs";
    exerciseHrDesktop.innerText = "1hr";
    socialHrDesktop.innerText = "1hr";
    selfCareHrDesktop.innerText = "0hrs";
    
    lastWeekWorkHrDesktop.innerText =" Last Week-7hrs";
    lastWeekPlayHrDesktop.innerText = " Last Week-2hrs";
    lastWeekStudyHrDesktop.innerText = " Last Week-1hr";
    lastWeekExerciseHrDesktop.innerText = " Last Week-1hr";
    lastWeekSocialHrDesktop.innerText = " Last Week-3hrs";
    lastWeekSelfCareHrDesktop.innerText = " Last Week-1hr";


});


weeklyDesktop.addEventListener("click", ()=>{
    workHrDesktop.innerText = "32hrs";
    playHrDesktop.innerText = "10hrs";
    studyHrDesktop.innerText = "4hrs";
    exerciseHrDesktop.innerText = "4hrs";
    socialHrDesktop.innerText = "4hrs";
    selfCareHrDesktop.innerText = "2hrs";
    
    lastWeekWorkHrDesktop.innerText =" Last Week-36hrs";
    lastWeekPlayHrDesktop.innerText = " Last Week-8hrs";
    lastWeekStudyHrDesktop.innerText = " Last Week-7hr";
    lastWeekExerciseHrDesktop.innerText = " Last Week-5hr";
    lastWeekSocialHrDesktop.innerText = " Last Week-10hrs";
    lastWeekSelfCareHrDesktop.innerText = " Last Week-2hr";
});


monthlyDesktop.addEventListener("click", ()=>{
    workHrDesktop.innerText = "103hrs";
    playHrDesktop.innerText = "23hrs";
    studyHrDesktop.innerText = "13hrs";
    exerciseHrDesktop.innerText = "11hrs";
    socialHrDesktop.innerText = "21hrs";
    selfCareHrDesktop.innerText = "7hrs";
    
    lastWeekWorkHrDesktop.innerText =" Last Week-128hrs";
    lastWeekPlayHrDesktop.innerText = " Last Week-29hrs";
    lastWeekStudyHrDesktop.innerText = " Last Week-19hr";
    lastWeekExerciseHrDesktop.innerText = " Last Week-18hr";
    lastWeekSocialHrDesktop.innerText = " Last Week-23hrs";
    lastWeekSelfCareHrDesktop.innerText = " Last Week-11hrs";
});

//Mobile
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

/*Getting the hr */
const workHr = document.getElementById("hr-work");
const playHr = document.getElementById("hr-play");
const studyHr = document.getElementById("hr-study");
const exerciseHr = document.getElementById("hr-exercise");
const socialHr = document.getElementById("hr-social");
const selfCareHr = document.getElementById("hr-self-care");

/*Getting the last week hr */
const lastWeekWorkHr = document.getElementById("work-last-week");
const lastWeekPlayHr = document.getElementById("play-last-week");
const lastWeekStudyHr = document.getElementById("study-last-week");
const lastWeekExerciseHr = document.getElementById("exercise-last-week");
const lastWeekSocialHr = document.getElementById("social-last-week");
const lastWeekSelfCareHr = document.getElementById("self-care-last-week");

daily.addEventListener("click",() =>{
    console.log("clicked");
    workHr.innerText = "5hr";
    playHr.innerText = "1hr";
    studyHr.innerText = "0hrs";
    exerciseHr.innerText = "1hr";
    socialHr.innerText = "1hr";
    selfCareHr.innerText = "0hrs";
    
    lastWeekWorkHr.innerText =" Last Week-7hrs";
    lastWeekPlayHr.innerText = " Last Week-2hrs";
    lastWeekStudyHr.innerText = " Last Week-1hr";
    lastWeekExerciseHr.innerText = " Last Week-1hr";
    lastWeekSocialHr.innerText = " Last Week-3hrs";
    lastWeekSelfCareHr.innerText = " Last Week-1hr";


});


weekly.addEventListener("click", ()=>{
    workHr.innerText = "32hrs";
    playHr.innerText = "10hrs";
    studyHr.innerText = "4hrs";
    exerciseHr.innerText = "4hrs";
    socialHr.innerText = "4hrs";
    selfCareHr.innerText = "2hrs";
    
    lastWeekWorkHr.innerText =" Last Week-36hrs";
    lastWeekPlayHr.innerText = " Last Week-8hrs";
    lastWeekStudyHr.innerText = " Last Week-7hr";
    lastWeekExerciseHr.innerText = " Last Week-5hr";
    lastWeekSocialHr.innerText = " Last Week-10hrs";
    lastWeekSelfCareHr.innerText = " Last Week-2hr";
});


monthly.addEventListener("click", ()=>{
    workHr.innerText = "103hrs";
    playHr.innerText = "23hrs";
    studyHr.innerText = "13hrs";
    exerciseHr.innerText = "11hrs";
    socialHr.innerText = "21hrs";
    selfCareHr.innerText = "7hrs";
    
    lastWeekWorkHr.innerText =" Last Week-128hrs";
    lastWeekPlayHr.innerText = " Last Week-29hrs";
    lastWeekStudyHr.innerText = " Last Week-19hr";
    lastWeekExerciseHr.innerText = " Last Week-18hr";
    lastWeekSocialHr.innerText = " Last Week-23hrs";
    lastWeekSelfCareHr.innerText = " Last Week-11hrs";
});




