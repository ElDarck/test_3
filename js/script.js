$(document).ready(function () {
    let hero = $('.main-char');
    let mainSkills = $('.main__skills');
    let count = $('.main-char').length - 1;
    let i;

    i = 0;
    $('.next__hero-button').on('click', function () {
        if (count == i) {
            hero[i].classList.remove('active');
            mainSkills[i].classList.remove('active');
            i = 0;
            hero[i].classList.add('active');
            mainSkills[i].classList.add('active');
        } else {
            hero[i].classList.remove('active');
            hero[i + 1].classList.add('active');
            mainSkills[i].classList.remove('active');
            mainSkills[i + 1].classList.add('active');
            i++;
        }
    });
});

