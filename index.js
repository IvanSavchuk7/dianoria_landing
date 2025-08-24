document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lead-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const submitBtn = document.getElementById("submit-btn");


        const formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbziSjxS1LEfRED4hTfXpX3iWOVrRIj93C-fvJMOjnk-yj_Ye3mwybrqpq2oQuIkrZd_/exec", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    setTimeout(() => {
                        window.location.href = "https://t.me/DianoriyaAi_bot?start=68a87834dd936301b702d8c0";
                    }, 100);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Something went wrong. Please try again later.");
            });
    });
});