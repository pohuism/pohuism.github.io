document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const successMessage = document.getElementById('success-message');
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            successMessage.classList.remove('hidden');
            form.reset();
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        } else {
            alert('Произошла ошибка при отправке формы');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке формы');
    });
});