---
date: 2024-02-26
title: Шпаргалка по built-in методам
description: Методы массивов, объектов и функций, которые полезно знать
topics: ["javascript", "cheatsheet", "interview"]
previewImg: /images/js-methods-preview.jpg
---

<h2 id="array">Array</h2>

<h3 id="add-delete-elements">Добавление и удаление элементов</h3>

добавляет в **конец** массива новый элемент, возвращает новый `length`

```js
const arr = ['a', 'b'];
arr.push('c'); // 3
arr; // ['a', 'b', 'c']

```

удаляет и возвращает **последний** элемент массива

```js
const arr = ['a', 'b', 'c'];
arr.pop(); // 'c'
arr; // ['a', 'b']

```

добавляет в **начало** массива новый элемент, возвращает новый `length`

```js
const arr = ['a', 'b'];
arr.unshift('c'); // 3
arr; // ['с', 'a', 'b']

```

удаляет и возвращает **первый** элемент массива.

```js
const arr = ['a', 'b', 'c'];
arr.shift(); // 'a'
arr; // ['b', 'c']

```

создает новый массив, включающий в себя переданные значение/массивы.
Не мутирует** исходный массив.

```js
['a', 'b', 'c'].concat('b', 'c', ['d', 'e'], ['f']); // ['a', 'b', 'c', 'd', 'e', 'f']
```

принимает два индекса - начальный и конечный и возвращает обрезанную копию.
Если передать только `begin` - обрежется с begin по последний индекс включительно.
Если передать только отрицательный `begin` - можно вырезать N последних элементов массива.
Если передать отрицательный `end` - обрежется с begin по по последний индекс минус end.

```js
['a', 'b', 'c', 'd'].slice(1) // ['b', 'c', 'd'] - обрезать с индекса 1 по конец массива
['a', 'b', 'c', 'd'].slice(-2) // ['b', 'c', 'd'] - вырезать последние два элемента массива
['a', 'b', 'c', 'd'].slice(1, 3) // ['b', 'c'] - обрезать с индекса 1 по индекс 3, т.е. элементы с индексами 1, 2
['a', 'b', 'c', 'd'].slice(0, -1); // ['a', 'b', 'c'] - обрезать, убрав последний элемент
```

принимает индекс и количество элементов после этого индекса, которые нужно удалить.
Если передать items - они будут добавлены после индекса start.
Мутирует исходный массив и возвращает удаленные элементы.

```js
const arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'e', 'f'); // удалить 2 элемента, начиная с индекса 1, т.е. ['b', 'c']. Добавить 'e', 'f' к индексу 1.
arr; // ['a', 'e', 'f', 'd']

```

тоже самое, что и `splice`, но вместо мутации 
будет создан новый массив. Возвращает новый измененный массив.


```js
const arr = ['a', 'b', 'c', 'd'];
arr.toSpliced(1, 2, 'e', 'f'); // ['a', 'e', 'f', 'd']
arr; // ['a', 'b', 'c', 'd']

```


<h3 id="search-in-array">Поиск в массиве</h3>

находит и возвращает первый элемент массива, соответствующий заданному условию.

```js
[
  { age: 10, name: 'Mike' },
  { age: 19, name: 'Timofey' },
  { age: 18, name: 'Alexander' }
].find(i => i.age >= 18); // { age: 19, name: 'Timofey' }
```

тоже самое, но начинает обходить массив с конца:

```js
[
  { age: 10, name: 'Mike' },
  { age: 19, name: 'Timofey' },
  { age: 18, name: 'Alexander' }
].findLast(i => i.age >= 18); // { age: 18, name: 'Alexander' }
```

принимает в коллбеке условие, возвращает `true`, если хотя бы один элемент соответствует

```js
['Mike', 'Timofey', 'Alexander'].some(name => name.length > 5); // true
```

принимает в коллбеке условие, возвращает `true`, если все элементы соответствуют

```js
['Mike', 'Timofey', 'Alexander'].every(name => name.length > 5); // false
```

принимает значение, возвращает `true`, если в массиве есть такой элемент

```js
['Mike', 'Timofey', 'Alexander'].includes('Timofey'); // true
['Mike', 'Timofey', 'Alexander'].includes('Mark'); // false
```

<h3 id="iterate-and-mutate-array">Обход и изменение массива</h3>

принимает коллбек,
который выполнится для каждого элемента массива

принимает коллбек, который определяет,
как будет меняться каждый элемент массива.
Не мутирует** исходный массив.


```js
['heh', 'huh'].map(i => i.toUpperCase()); // ['HEH', 'HUH']
```

переворачивает массив. Изменяет исходный массив и возвращает ссылку на изменённый массив.

```js
const arr = [1, 2];
arr.reverse(); // [2, 1]
arr; // [2, 1]

```

тоже самое, что и reverse, но без мутации исходного массива. Возвращает новый массив.

```js
const arr = [1, 2];
arr.toReversed(); // [2, 1]
arr; // [1, 2]

```

создает копию массива с замененным элементом по выбранному индексу

```js
['a', 'b', 'c'].with(2, 'd'); // ['a', 'b', 'd']

```

возвращает массив, где все элементы соответствуют переданному условию в коллбеке

```js
['Mike', 'Timofey', 'Alexander'].map(name => name.length > 5); // ['Timofey', 'Alexander']
```

обходит массив и аккумулирует значение.
Значение аккумулятора задается в коллбеке.


```js
const employers = [
  { age: 10, name: 'Mike' }, // Сын маминой подруги
  { age: 19, name: 'Timofey' },
  { age: 18, name: 'Alexander' }
];

const totalAge = employers.reduce((acc, curr) => {
  return acc + curr.age;
}, 0); // 47

const averageAge = totalAge / employers.length; // 16.66
```

Метод `reduce` очень полезен для агрегации:

```js
const employers = [
  { age: 10, name: 'Mike', position: 'son' },
  { age: 19, name: 'Timofey', position: 'frontend' },
  { age: 18, name: 'Alexander', position: 'frontend' }
];

const employersByPosition = employers.reduce((acc, curr) => {
  acc[curr.position] = (acc[curr.position] || []).concat(curr);
  return acc;
}, {}); // { son: [{ name: 'Mike',... }], frontend: [{ name: 'Timofey', ...}, { name: 'Alexander',...}] }

```

Если не передать `initAcc` - итерация будет со 2-го элемента.


тоже самое, что и обычный reduce, но справа налево.



<h3 id="sort-array">Сортировка массива</h3>


принимает коллбеком функцию, в которой принимаются два аргумента - элементы массива,
а return должен определить их порядок. Мутирует исходный массив и возвращает ссылку на него.

идет первым
без изменений
 идет первым

Если коллбек не передан - сортирует в лексическом порядке по возрастанию, подойдет только для строк.

```js
[4, 2, 3, 1].sort((a, b) => a - b); // [1, 2, 3, 4]
[4, 2, 3, 1].sort((a, b) => b - a); // [4, 3, 2, 1]
['b', 'c', 'a'].sort(); // ['a', 'b', 'c']
```

тоже самое, что и метод `.sort`,
но вместо мутации исходного массива создает новый отсортированный массив

```js
const arr = [4, 2, 3, 1];
const sortedArray = arr.toSorted((a, b) => a - b);

arr; // [4, 2, 3, 1];
sortedArray; // [1, 2, 3, 4]

```

<h3 id="useful-methods">Полезные методы</h3>

возвращает элемент массива по указанному индексу.

Основная фишка - можно легко достать последний элемент, передав `-1`

```js
[1, 2, 3 ].at(0) // 1
  [1, 2, 3 ].at(-1); // 3

```

позволяет создать массив из Iterable
или ArrayLike сущностей.

Очень полезен, чтобы получить массив Element:

```js
const linkElements = document.querySelectorAll('.myClass');
const arrLinks = Array.from(linkElements); // Element[]

```

Можно сразу же сделать `.map`

```js
const linkElements = document.getElementsByTagName('a');
const arrLinks = Array.from(linkElements, element => element.href); // string[]

```

Часто используется, чтобы превратить `Set` в массив

```js
const mySet = newSet([1, 2]);
mySet.add(3);
Array.from(mySet); // [1, 2, 3]

```

Или чтобы превратить `Map` в массив

```js
const myMap = new Map();
myMap.set('a', 1).set('b', 2);

const array = Array.from(myMap, ([name, value]) => ({ name, value }));
```

Можно использовать, чтобы создать пустой массив

```js
Array.from(new Array(3)); // [undefined, undefined, undefined]

```

создает новый массив, убирая вложенность на заданную `depth`.

```js
[1, [2, 3]].flat(); // [1, 2, 3]
[1, [2, 3, [4, 5]]].flat(); // [1, 2, 3, [4, 5]]
[1, [2, 3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]

```


<h2 id="objects">Object</h2>

<h3 id="config-for-properties">Управление свойствами</h3>

метод создания объекта, который дает нам больше контроля
над свойствами и методами, позволяя задать для каждого:

writeable - можно ли перезаписывать
enumerable - является ли перечисляемым, будет ли доступен `for...in`
configurable - можно ли удалять или менять при помощи `defineProperty`
set - функция для записи значения
get - функция для чтения значения


```js
const tom = Object.create(Object.prototype, {  
  name: {    
    value: "Tim",
    enumerable: true, // доступно для перебора
    writable: false  // не доступно для записи
  },  
  age: { 
    value: 20,
    enumerable: true, // доступно для перебора
    writable: true // доступно для записи
  },  
  print: {    
    value: function() { console.log(`Name: ${this.name}  Age: ${this.age}`);},
    enumerable: false, // не доступно для перебора
    writable: false, // не доступно для записи
  }  
});

```

позволяет настроить выбранное свойство объекта.
Не сработает, если `configurable = false `

запрещает добавление свойств

запрещает добавление и удаление свойств, все текущие свойства делает `configurable: false`.

запрещает добавление, удаление и изменение свойств,все текущие свойства делает `configurable: false`, `writable: false`.


<h3 id="helpers-for-properties">Хелперы для свойств</h3>

копирует все **перечисляемые** `enumerable: true` свойства из одного или
более объектов в целевой объект. Копирование неглубокое, для объектов, массивов, функций будет скопирована ссылка.

проверяет, является ли свойство собственным(не унаследованным).
Чтобы проверить унаследованное свойство можно воспользоваться `in`. 

```js
const person = {
  name: "Zhenya"
};

Object.hasOwn(person, "name"); // true
Object.hasOwn(person, "toString"); // false

```

проверяет, был ли вызван `preventExtensions`


проверяет, был ли вызван `seal`


проверяет, был ли вызван `freeze`


<h3 id="keys-and-values">Ключи и значения</h3>

вернет **перечисляемые** свойства в виде массива

```js
Object.entries({
  name: 'Zhenya',
  age: 27,
}); // [['name', 'Zhenya'], ['age', 27]]

```

обратно превратит массив в объект

```js
Object.fromEntries([['name', 'Zhenya'], ['age', 27]]); // { name: 'Zhenya', age: 27 }

```

по простому - получить массив ключей.
Вернет только собственные(без прототипа) и перечисляемые(for...in) свойства.

```js
Object.keys({
  name: 'Zhenya',
  age: 27,
}); // ['name', 'age']

```

вернет массив значений

```js
Object.values({
  name: 'Zhenya',
  age: 27,
}); // ['Zhenya', 27]

```

<h2 id="functions">Function</h2>

вызывает функцию с указанным значением `this` и аргументами.

```ts

function multiply(a, b) {
  this.logger(a * b);
  return aa * b;
}

multiply.call({ logger: console.log }, 2, 2); // 4

// Мы не можем указать контекст для стрелочной функции
const addArrowFn = (a, b) => {
  this.logger(a + b);
  return a + b;
};

multiply.call({ logger: console.log }, 2, 2); // TypeError: this.logger is not a function


```

тоже самое, что и `call`, но аргументы передаются в виде массива

```ts
multiply.apply({ logger: console.log }, [2, 3]); // 6
```

создает новую функцию, привязывая ей переданный `this`

```ts

const multiplyTwo = add.bind({ logger: console.log }, 2);

multiplyTwo(4); // 8

```
