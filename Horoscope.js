const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for(let i = 0; i < months.length; i++) {
    let month = months[i];

if(month === "January") {
    console.log("January is:" + " Capricorn ♑");
} else if(month === "February") {
    console.log("February is:" + " Aquarius ♒");
} else if(month === "March") {
    console.log("March is:" +  " Pisces ♓");
} else if(month === "April") {
    console.log("April is:" + " Aries ♈");
} else if(month === "May") {
    console.log("May is:" + " Taurus ♉");
} else if(month === "June") {
    console.log("June is:" + " Gemini  ♊");
} else if(month === "July") {
    console.log("July is:" + " Cancer ♋");
} else if(month === "August") {
    console.log("August is:" + " Leo ♌");
} else if(month === "September") {
    console.log("September is:" + " Virgo ♍");
} else if(month === "October") {
    console.log("October is:" + " Libra ♎");
} else if(month === "November") {
    console.log("November is:" + " Scorpio ♏");
} else if(month === "December") {
    console.log("December is:" + " Sagittarius ♐");
} else {
    console.log("Error");
}
}