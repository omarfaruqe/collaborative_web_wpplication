// 25 No Roll Task
function initializeTooltip() {
    const container = document.getElementById('name-container');
    const tooltip = document.getElementById('tooltip');

    container.addEventListener('mouseover', () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    container.addEventListener('mouseout', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
}

document.addEventListener('DOMContentLoaded', initializeTooltip);
