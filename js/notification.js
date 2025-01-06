// notification.js
document.addEventListener('DOMContentLoaded', function() {
    initNotification();
});

function initNotification() {
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.querySelector('.sticky-notification').style.display = 'none';
        });
    }
}
