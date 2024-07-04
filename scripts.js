document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('polaroid1').addEventListener('click', function() {
        openPopup(1);
    });
    document.getElementById('polaroid2').addEventListener('click', function() {
        openPopup(2);
    });
    document.getElementById('polaroid3').addEventListener('click', function() {
        openPopup(3);
    });
});

function openPopup(popupNumber) {
    document.getElementById('popup' + popupNumber).style.display = 'block';
}

function closePopup(popupNumber) {
    document.getElementById('popup' + popupNumber).style.display = 'none';
}
