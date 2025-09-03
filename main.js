document.addEventListener('DOMContentLoaded', function () {
    // Select the share container in the card
    const shareContainer = document.querySelector('.card__share');
    if (!shareContainer) return;

    // Use the icon as button if present, otherwise the container itself
    const shareButton = shareContainer.querySelector('.card__share') || shareContainer;
    const dropdown = document.querySelector('.card__share-dropdown');
     
    // Toggle dropdown on button click
    shareButton.addEventListener('click', function (evt) {
        evt.stopPropagation(); // prevent click from propagating to document
        if (!dropdown) return;
        const isOpen = window.getComputedStyle(dropdown).display === 'flex';
        dropdown.style.display = isOpen ? 'none' : 'flex'; 
        shareContainer.classList.toggle('is-open', !isOpen);
   
    });

    // Click outside closes the dropdown
    document.addEventListener('click', function () {
        if (!dropdown) return;
        const isOpen = window.getComputedStyle(dropdown).display === 'flex';
        if (isOpen) {
            dropdown.style.display = 'none';
            shareContainer.classList.remove('is-open');
        }
    });


});
