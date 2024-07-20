
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.switcher-bar button');
    const tabs = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('focus'));
            tabs.forEach(tab => tab.classList.remove('active'));

            button.classList.add('focus');
            document.getElementById(tabId).classList.add('active');

        });
    });
});
 


