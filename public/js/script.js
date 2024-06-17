document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const feedbackBtn = document.getElementById('feedbackBtn');
    const contactSection = document.getElementById('contact');
    const feedbackSection = document.getElementById('feedback');

    contactBtn.addEventListener('click', () => {
        toggleSection(contactSection);
    });

    feedbackBtn.addEventListener('click', () => {
        toggleSection(feedbackSection);
    });

    function toggleSection(section) {
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
            section.classList.add('visible');
        } else if (section.classList.contains('visible')) {
            section.classList.remove('visible');
            section.classList.add('invisible');
            setTimeout(() => {
                section.classList.remove('invisible');
                section.classList.add('hidden');
            }, 300);
        }
    }
});
