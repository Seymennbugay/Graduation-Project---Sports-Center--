document.getElementById('yoga-box').addEventListener('click', function() {
    document.getElementById('yoga-image').src = 'yoga.jpg';
});

document.getElementById('group-box').addEventListener('click', function() {
    document.getElementById('yoga-image').src = 'group.webp';
});

document.getElementById('solo-box').addEventListener('click', function() {
    document.getElementById('yoga-image').src = 'solo.jpg';
});

document.getElementById('stretching-box').addEventListener('click', function() {
    document.getElementById('yoga-image').src = 'stret.webp';
});


function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let result = `Your BMI is ${bmi}. `;
        const arrow = document.getElementById('arrow');

        // Oku baştan gizle
        arrow.style.display = 'none';
        arrow.className = 'bmi-arrow';

        if (bmi < 18.5) {
            result += 'You are underweight.';
            arrow.classList.add('arrow-underweight');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result += 'You have a normal weight.';
            arrow.classList.add('arrow-normal');
        } else if (bmi >= 25 && bmi <= 29.9) {
            result += 'You are overweight.';
            arrow.classList.add('arrow-overweight');
        } else if (bmi >= 30 && bmi <= 34.9) {
            result += 'You are obese.';
            arrow.classList.add('arrow-obese');
        } else {
            result += 'You are severely obese.';
            arrow.classList.add('arrow-severely-obese');
        }

        // Oku göster
        arrow.style.display = 'block';
        document.getElementById('bmiResult').innerText = result;
    } else {
        document.getElementById('bmiResult').innerText = 'Please enter valid height and weight.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});
