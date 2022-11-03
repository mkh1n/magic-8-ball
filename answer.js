var answers = ['Да', "Нет", "Определенно да", "Определенно нет", 
                "К сожалению, нет", "Точно да", "Точно нет", "Очевидно, что да", "Обязательно", "Ну конечно же", "Связь со свездами прервана, попробуйте позже",
                "Так точно", "Конечно", "Несомненно", "Вам не понравится ответ", "Нет и точка", "Еще как", 
                "Еще бы", "Никак нет", "Спроси что нибудь другое", "Кажется да", "Кажется нет", "Откуда мне знать", "Не вижу ответа...","Будущее туманно"]
window.onload = function() {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var magicball = document.getElementById("magic-ball");
    var question = document.getElementById("question");

    magicball.addEventListener("click", function() {
        if (question.value.length < 1) {
            alert('Введите вопрос!');
        } else {
            
            window.setTimeout(function() {
                magicball.classList.toggle("active");
                eight.innerText = "";
                var num = Math.floor(Math.random() * (answers.length));
                answer.innerText = answers[num];
                question.value = "";
                

                }, 1000);
            
            magicball.classList.toggle("active");
            eight.innerText = "8";
            answer.innerText = '';
            

        }
    });
    
};