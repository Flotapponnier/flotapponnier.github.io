document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.getAttribute('data-categories').split(' ');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
    document.querySelector('[data-filter="all"]').classList.add('active');
    const terminalElements = document.querySelectorAll('.terminal-effect');
    
    terminalElements.forEach(element =>
		{
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 80);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    const languageCards = document.querySelectorAll('.language-card');
    
    languageCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
    
    const languageSection = document.querySelector('#languages p.terminal-effect');
    if (languageSection) {
        const text = languageSection.textContent;
        languageSection.textContent = '';

        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                languageSection.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 80);
    }
});
