(()=>{"use strict";var e,t,r={712:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GenerateTimetable=void 0;var r=function(){function e(e,t){this.classes=e,this.courses=t,this.provisionalTimetable=[],this.days=["Monday","Tuesday","Wednesday","Thursday","Friday"]}return e.prototype.generateHour=function(){return this.courses.filter((function(e){return 0!==e.creditHours})).length},e.prototype.generateClass=function(){for(var e=this;this.generateHour();)this.courses.forEach((function(t){e.classes.forEach((function(r){if(r.size>t.numberOfStds&&t.creditHours)if(e.courses.filter((function(e){return!0===e.taken})).length===e.courses.length)r.day=e.generateDay(r.day,e.courses);else if(!t.taken)if(r.startTime<=9){var s=e.checkdayAndRoom(r);if(r.startTime=s?s.endTime:r.endTime,!e.checkForDuplicateTeach(r.startTime,t,r)&&!e.checkForDuplicateStd(r,t)){var o=e.generateTimePeriods(t.creditHours,t);t.taken=!0,r.endTime=r.startTime+o;var n=e.generateItimes(r,t);e.provisionalTimetable.push(n)}}else r.day=e.generateDay(r.day,e.courses),r.startTime=0,r.endTime=7}))}))},e.prototype.generateItimes=function(e,t){return{size:e.size,classroom:e.classroom,startTime:e.startTime,endTime:e.endTime,courseName:t.course,numOfstds:t.numberOfStds,day:e.day,tutor:t.Tutor,students:t.students}},e.prototype.checkdayAndRoom=function(e){var t=this.provisionalTimetable.filter((function(t){return t.day===e.day&&t.classroom===e.classroom}));return t[t.length-1]},e.prototype.checkForDuplicateTeach=function(e,t,r){return this.provisionalTimetable.filter((function(s){return e>=s.startTime&&e<s.endTime&&s.day===r.day&&s.tutor===t.Tutor}))[0]},e.prototype.checkForDuplicateStd=function(e,t){var r=!1,s=this.provisionalTimetable.filter((function(t){return e.startTime>=t.startTime&&e.startTime<t.endTime&&t.day===e.day}));return s&&s.forEach((function(e){return r=t.students.some((function(t){return e.students.includes(t)}))})),r},e.prototype.generateDay=function(e,t){var r=this.days.indexOf(e)+1;return t.forEach((function(e){e.taken=!1})),this.days[r]},e.prototype.generateTimePeriods=function(e,t){var r=0;if(1===e&&(t.creditHours=t.creditHours-1,r=1),2===e&&(t.creditHours=t.creditHours-2,r=2),e>2){var s=[1,2],o=s[Math.floor(Math.random()*s.length)];t.creditHours=t.creditHours-o,r=o}return r},e}();t.GenerateTimetable=r}},s={};(t=new(function e(t){var o=s[t];if(void 0!==o)return o.exports;var n=s[t]={exports:{}};return r[t](n,n.exports,e),n.exports}(712).GenerateTimetable)([{classroom:"block3",size:4,taken:!1,startTime:0,endTime:7,day:"Monday"},{classroom:"block2",size:30,taken:!1,startTime:0,endTime:7,day:"Monday"}],[{numberOfStds:2,course:"maths",creditHours:3,Tutor:"PRINCE",taken:!1,students:["arts","pyh"]},{numberOfStds:11,course:"scie",creditHours:3,Tutor:"as",taken:!1,students:["fe","ead"]},{numberOfStds:13,course:"soci",creditHours:2,Tutor:"sam",taken:!1,students:["arts"]},{numberOfStds:14,course:"chem",creditHours:2,Tutor:"PRINCE",taken:!1,students:["pyh"]},{numberOfStds:16,course:"lit",creditHours:2,Tutor:"PRINCE",taken:!1,students:["aerts","pyhge"]},{numberOfStds:17,course:"fre",creditHours:2,Tutor:"sma",taken:!1,students:["artaeves","pyveeh"]},{numberOfStds:18,course:"engl",creditHours:2,Tutor:"sam",taken:!1,students:["arts","pyaeqh"]},{numberOfStds:19,course:"engl",creditHours:2,Tutor:"ko",taken:!1,students:["arteqs","pyavh"]},{numberOfStds:20,course:"engl",creditHours:3,Tutor:"sa",taken:!1,students:["artgghhs","pyfe2h"]},{numberOfStds:21,course:"engl",creditHours:2,Tutor:"fred",taken:!1,students:["arts","pyh"]},{numberOfStds:22,course:"engl",creditHours:3,Tutor:"fe",taken:!1,students:["arts","pyh"]},{numberOfStds:23,course:"engl",creditHours:3,Tutor:"ko",taken:!1,students:["arets","pcyh"]},{numberOfStds:24,course:"engl",creditHours:3,Tutor:"sa",taken:!1,students:["artse","pwveyh"]},{numberOfStds:25,course:"engl",creditHours:2,Tutor:"fred",taken:!1,students:["arecdgts","bbfrpyh"]},{numberOfStds:26,course:"bioi",creditHours:2,Tutor:"lo",taken:!1,students:["artfkorms","pypofh"]}])).generateClass(),t.provisionalTimetable.forEach((function(t){e="undefined"===t.day&&"we run out of space is either you increase the number of classes "+t.size+" or the number of days1"})),e?console.log(e):console.log(t.provisionalTimetable)})();
//# sourceMappingURL=main.js.map