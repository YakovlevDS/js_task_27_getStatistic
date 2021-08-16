
// *? Task: На своих вебинарах преподаватель Миша, просит ставить + в чат, если все понятно, или - - если нет. Конечно, большинство ставит +, кто-то ставит -, но есть и студенты, которые ставят 1, 0, понимаю, окей... Давай поможем Мише и напишем программу для сбора статистики. Функция getStatistic будет принимать имя студента name, и его ответ в чате answer. Результатом функции будет строка name understands илиname does not understand. Иногда сервер подвисает, в эти моменты функция не получает ответ. Только имя и null,undefined или NaN. Предлагаю в таких случаях не портить статистику и возвращать строку server error.

// Примеры:

// getStatistic('Boris', '-') === 'Boris doesn't understand'
// getStatistic('Boris', '0') === 'Boris doesn't understand'
// getStatistic('Boris', '') === 'Boris doesn't understand'
// getStatistic('Boris', '1') === 'Boris understands'
// getStatistic('Boris', '+++') === 'Boris understands'
// getStatistic('Boris', 'okay') === 'Boris understands'
// getStatistic('Boris', NaN) === 'server error'
// getStatistic('Boris', null) === 'server error'

// Solution 1



const getStatistic = (name, answer) => {

  if (String(answer) === '-') {
    return `${name} doesn't understand`;
  };

  if (String(answer) === '') {
    return `${name} doesn't understand`;
  };

  if (answer === null) {
    return 'server error';
  };

  if (answer === undefined) {
    return 'server error';
  };

  if (Object.is(answer, NaN)) {
    return 'server error';
  };

  if (answer[0].toString() === '0') {
    return `${name} doesn't understand`;
  };

  return `${name} understands`;
};


console.log(getStatistic('Boris', '-'));
console.log(getStatistic('Boris', '0'));
console.log(getStatistic('Boris', ''));
console.log(getStatistic('Boris', '1'));
console.log(getStatistic('Boris', '+++'));
console.log(getStatistic('Boris', 'okay'));
console.log(getStatistic('Boris', NaN));
console.log(getStatistic('Boris', null));

// ! Explanation:Используем стрелочную функцию и if проверку на типы данных