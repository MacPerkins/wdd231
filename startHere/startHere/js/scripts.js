const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));


document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')} on ${myInfo.get('date')} at ${myInfo.get('location')}</p>
<p>Your Phone is ${myInfo.get('phone')}</p>
<p>Your Email is ${myInfo.get('email')}</p>`;