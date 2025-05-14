function submitForm() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    document.getElementById("response").textContent = `Thanks, ${name}! I’ll get back to you soon.`;

    // Prevent form from actually submitting
    return false;
}

