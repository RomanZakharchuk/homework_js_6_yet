// Task 1 - Напишіть функцію cutString(str, n), яка ділить рядок на підрядки, що складаються з n символів.
//          document.writeln(cutString('насолодження',3)) // [нас,оло,дже,ння]

const cutString = (str, n) => {
    let arr = [];

    for (let i = 0; i < str.length; i += n) {
        arr.push(str.split('').slice(i, i + n).join(''));
    }

    console.log(arr)
}

cutString('насолодження', 3);

// Task 2 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із
//          зазначеної кількості символів.
//          let str = 'Кожен мисливець бажає знати';
//          document.writeln(delete_characters(str, 7)); // Кожен

const deleteCharacters = (str, length) => {
    return str.slice(0, length);
}

console.log(deleteCharacters('Кожен мисливець бажає знати', 6));

// Task 3 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//          При цьому всі символи рядка необхідно перевести у верхній регістр.
//          let str = "HTML JavaScript PHP";
//          document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insertDash = (str) => {
    return str.split(' ').join('-').toUpperCase();
}

console.log(insertDash("HTML JavaScript PHP"));

// Task 4 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
//          нижнього регістру у верхній.

const changeFirstLetter = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(changeFirstLetter('roBot'));

// Task 5 - Дано список імен.
//          let n1 = 'Harry..Potter'
//          let n2 = 'Ron---Whisley'
//          let n3 = 'Hermione__Granger'
//          Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//          let n1 = 'Harry Potter'
//          let n2 = 'Ron Whisley'
//          let n3 = 'Hermione Granger'

const name1 = 'Harry..Potter';
const name2 = 'Ron---Whisley';
const name3 = 'Hermione__Granger';

const normalizeName = (str) => {
    if (str.includes('..')) {
        return str.split('..').join(' ');
    }

    if (str.includes('---')) {
        return str.split('---').join(' ');
    }

    if (str.includes('__')) {
        return str.split('__').join(' ');
    }
}

console.log(normalizeName(name1));
console.log(normalizeName(name2));
console.log(normalizeName(name3));

//Task 6 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const generatesNumbers1 = () => {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        const random = Math.floor(Math.random() * 100);
        arr.push(random);
    }

    return arr;
}

console.log(generatesNumbers1());

// Task 7 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
//          числових значень. Відсортувати його за допомоги sort

const generatesNumbers2 = () => {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        const random = Math.floor(Math.random() * 100);
        arr.push(random);
    }

    return arr;
}

console.log(generatesNumbers2().sort((a, b) => a - b));

// Task 8 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
//          числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

const generatesNumbers3 = () => {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        const random = Math.floor(Math.random() * 100);
        arr.push(random);
    }

    return arr;
}

const ab = generatesNumbers3().filter(elem => {
    return elem !== 0 && elem % 2 === 0
});
console.log(ab);

// Task 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

const capitalize = (str) => {
    const arr = str.split(' ');
    let newStr = [];

    arr.forEach(elem => {
        newStr.push(elem.slice(0, 1).toUpperCase() + elem.slice(1));
    })

    return newStr.join(' ');
}

console.log(capitalize('hello roman nice to met you'));

// Task 10 - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
//           данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2
//           символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com,
//           і тд - однакові значення)
//           Протестувати на значеннях
//           someemail@gmail.com
//           someeMAIL@gmail.com
//           someeMAIL@i.ua
//           some.email@gmail.com

const checkStr = (str) => {
    if (str.includes('@')) {
        let at = str.indexOf('@')
        let dot = str.lastIndexOf('.');

        return (dot - at) > 2;

    }

}

console.log(checkStr('someemail@gmail.com'));
console.log(checkStr('someeMAIL@gmail.com'));
console.log(checkStr('someeMAIL@i.ua'));
console.log(checkStr('some.email@gmail.com'));

// Task 11 -відсортувати його в спадаючому порядку за кількістю елементів в полі modules

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const coursesArrayElement of coursesArray) {
    coursesArrayElement.modules.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0
    });
}

console.log(coursesArray);

// Task 12 - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//           let symb = "о", str = "Астрономия это наука о небесных объектах";
//           document.writeln(count(str, symb)) // 5

const count = (str, stringSearch) => str.indexOf(stringSearch);

console.log(count('Roman search a book', 'a'));
