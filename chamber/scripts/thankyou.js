document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the thankyou.html page
    if (window.location.pathname.includes('thankyou.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const submittedInfo = document.querySelector('#submitted-info');
        const submissionDateTime = document.getElementById('submission-datetime');
        const formData = {
            'First Name': urlParams.get('fname'),
            'Last Name': urlParams.get('lname'),
            'Email': urlParams.get('email'),
            'Phone': urlParams.get('phone'),
            'Business Name': urlParams.get('bname'),
        };

        let infoHtml = '<ul>';
        for (const [key, value] of Object.entries(formData)) {
            infoHtml += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        infoHtml += '</ul>';
        submittedInfo.innerHTML = infoHtml;

        const date = urlParams.get('date');
        const time = urlParams.get('time');
        submissionDateTime.innerHTML = `<p><strong>Date:</strong> ${date}</p><p><strong>Time:</strong> ${time}</p>`;
    }
});