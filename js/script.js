function toggleElementVisibility(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === 'none' ? '' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-button');
    button.addEventListener('click', function() {
        toggleElementVisibility('element-to-hide');
    });
});

