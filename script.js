//ПИШЕМ ИГРУ «ВИСЕЛИЦА»
//Взаимодействие с игроком

//Создаем диалоговое окно
// let name =  prompt("Как вас зовут?");
// document.write("Привет, " + name);
// document.write('<br/>');
//
// //Используем confirm, чтобы получить ответ «да» или «нет»
// let likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats){
//     document.write("Ты классная кошка! ");
//     document.write('<br/>');
// }else {
//     document.write("Что ж, не проблема. Все равно ты молодец!");
//     document.write('<br/>');
// }
//
// //Используем alert для выдачи информации
// alert("JavaScript это здорово!");
//
// //Проектирование игры
//
// //Используем псевдокод для проектирования игры
// //Выбрать случайное слово
// // Пока слово не угадано {
// // Показать игроку текущее состояние игры
// // Запросить у игрока вариант ответа
// // Если игрок хочет выйти из игры {
// // Выйти из игры
// // }
// // Иначе Если вариант ответа — не одиночная буква {
// // Сообщить игроку, что он должен ввести букву
// // }
// // Иначе {
// // Если такая буква есть в слове {
// // Обновить состояние игры, подставив новую букву
// // }
// // }
// // }
// // Поздравить игрока с победой — слово угадано
//
// //Отображение состояния игры
//
// //Программируем игру
// //Выбираем случайное слово
// let words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек"
// ];
// let word = words[Math.floor(Math.random() * words.length)];
//
// //Создаем итоговый массив
// let answerArray =[];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
//
// let  remainingLetters = word.length;
//
// //Программируем игровой цикл
// while (remainingLetters > 0) {
//
// }
//
// //Отображение состояния игры
// alert(answerArray.join(" "));
//
// //Обработка введенного ответа
// let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
// if (guess === null){
//     break;
// } else if (guess.length !== 1){
//     alert(alert("Пожалуйста, введите только одну букву.")
// }else {
//     for (let j = 0; j < word.length; j++) {
//         if (word[j] === guess){
//             answerArray[j] = guess;
//             remainingLetters--;
//         }
//     }
// }
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);

// Код игры
// Создаем массив со словами
let words = [
    "программа",
    "макака",
    "прекрасный",
    "смартфон",
    "зебра"
];

// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guessed = 10;
// Игровой цикл
while (remainingLetters > 0 && guessed > 0) {
// Показываем состояние игры
    alert("Угадайте слово! " + answerArray.join(" "));

// Запрашиваем вариант ответа
    let  guess = prompt("Угадайте букву, или нажмите Отмена длявыхода из игры.");
    guess = guess.toLowerCase();
    if (guess === null) {

// Выходим из игрового цикла
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
// Обновляем состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    guessed--;
// Конец игрового цикла
}


// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
if (guessed > 0) {
    document.write("Отлично! Было загадано слово " + "" + word + "");
} else {
    document.write("Очень плохо! Было загадано слово " + "" + word + "");
}