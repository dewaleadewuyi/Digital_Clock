const clock = document.querySelector('.clock');  // get the html working site

const tick = () => {                         // Create a function to get the seconds time of the DOM 
    //and with that get the minutes and hour
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();


    // create  a html template of the minutes,seconds nd the hour,then merge it with working html
    const html = `                            
     <span> ${h} </span> : 
     <span> ${m} </span> : 
     <span> ${s} </span>

    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);    // used to update tick function after every 1s(1000millisecs)

// console.log("Monday")

// DATE FNS
// import {

//   format
// } from 'date-fns';

// let today = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// console.log(today);
// const nows = new Date();

// console.log(dateFns.isToday(nows));