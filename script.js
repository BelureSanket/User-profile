// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Submit form
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Normally, you would send this data to a server using AJAX or fetch
    // For this example, we'll just display a message
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    statusMessage.style.color = 'green';

    // Reset form
    document.getElementById('contactForm').reset();
}

