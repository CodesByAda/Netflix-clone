document.addEventListener("DOMContentLoaded", function() {

    //qna handler
    const questions = document.querySelectorAll('.question-div');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const questionIcon = this.querySelector(".question-icon");

            if (!answer.classList.contains('hide')) {
                answer.classList.add('hide');
                questionIcon.style.transform = "rotate(0)";
            } else {
                document.querySelectorAll('.answer').forEach(ans => {
                    ans.classList.add('hide');
                });
                
                document.querySelectorAll(".question-icon").forEach(icon => {
                    icon.style.transform = "rotate(0)";
                })

                answer.classList.remove('hide');
                questionIcon.style.transform = "rotate(45deg)";
            }
        });
    });

    //Drop-down handler
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach((dropdown, i) => {
        const dropdownContent = document.getElementsByClassName('dropdown-content')[i];
        const arrowIcon = dropdown.querySelector('.arrow-icon');
        const languageSpan = dropdown.querySelector('span');

        dropdown.addEventListener('click', (event) => {
            if (dropdownContent.classList.contains('hide')) {
                closeAllDropdowns();
                dropdownContent.classList.remove('hide');
                arrowIcon.innerHTML = '&#9652;'; // Up arrow
            } else {
                dropdownContent.classList.add('hide');
                arrowIcon.innerHTML = '&#x25BE;'; // Down arrow
            }
            event.stopPropagation();
        });

        // Handle language selection
        const options = dropdownContent.querySelectorAll('div');
        options.forEach(option => {
            option.addEventListener('click', () => {
                languageSpan.innerHTML = option.textContent + ' &nbsp;<b class="arrow-icon">&#x25BE;</b>';
                dropdownContent.classList.add('hide');
                arrowIcon.innerHTML = '&#x25BE;'; // Down arrow
            });
        });
    });

    // Close all dropdowns when clicked out of the select box
    document.addEventListener('click', closeAllDropdowns);

    function closeAllDropdowns() {
        const dropdownContents = document.querySelectorAll('.dropdown-content');
        const arrowIcons = document.querySelectorAll('.arrow-icon');
        dropdownContents.forEach(content => content.classList.add('hide'));
        arrowIcons.forEach(icon => icon.innerHTML = '&#x25BE;'); // Down arrow
    }

});
