'use strickt';

// САМОСТОЯТЕЛЬНАЯ РАБОТА

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, 
// округляющая дробь до трех знаков в дробной части:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этих функций найдите квадратный корень из числа 2 
// и округлите его до трех знаков в дробной части.

// alert(round(sqrt(2)));


// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, 
// возвращающая сумму трех чисел:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.

// alert(sum(sqrt(2), sqrt(3), sqrt(4)));


// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этой функции модифицируйте предыдущую задачу так,
// чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.

// let res=round(sum(sqrt(2), sqrt(3), sqrt(4)));
// alert(res);


// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} 
// 		return num ** 2;
	
// }

//  alert( func(10) );
// alert( func(-5) );

// function func() {
// 	let sum = 0;
	
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 	}
	
// 	return sum;
// }

// let res = func();
// alert(res); // выведет 15


// функция, которая определяет, сколько первых элементов массива нужно сложить,
// чтобы сумма стала больше или равна 10
// function func(arr) {
// 	let sum = 0;
	
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
		
// 		// Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и из функции
// 		}
// 	}
// }

// let res = func([1, 2, 3, 4, 5]);
// alert(res);


// функция, которая вычисляет, сколько целых чисел, начиная с 1, нужно сложить,
// чтобы результат был больше 100:
// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// alert( func() );

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, 
// пока результат не станет меньше 10.
// Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

// function func(num){
// 	let i = 0;
// 	while(num > 10){
// 		num /=2;
// 		i++;
// 	}
// 	return i; 
		
	// Второй вариант решения
	// let i = 0;
	// for(; num>10; i++){
	// 	num /=2;
	// }
	// return i;
// }
// alert(func(100));
// Еще один варинат решения задачи
// function funk(numb) {
// 	let i = 0;
	
// 	while (true) { // бесконечный цикл
// 		numb /= 2;
// 		i++;
// 		if (numb < 10) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
// 	}
// }

// alert( funk(100) );


// function func(num) {
// 	if (num >= 0) {
// 		return Math.sqrt(num);
// 	} else {
// 		return 0;
// 	}
// }

// alert(func(3));

// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return  num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
	
// }

// alert(func(3, 4));

// Функция с использованием флагов
// function isPositive(arr) {
// 	let flag = true;
	
// 	for (let elem of arr) {
// 		if (elem < 0) {
// 			flag = false;
// 		}
// 	}
	
// 	return flag;
// }
// let arr=[0,1,2,3,4,5,6,7,8,9];
// alert(isPositive(arr));


// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять,
// что все элементы в этом массиве являются четными числами.

// function chet(num){
// 	 for(let elem of num){
// 		if(elem % 2 === 1){
// 			return false;
// 		}
// 	}
// 	return true;
// }

// let arr = [2, 4, 6, 8];
// let arr1 = [1,3,5,7,9];

// alert(chet(arr));
// alert(chet(arr1));


// Сделайте функцию, которая параметром будет принимать число и проверять, 
//что все цифры это числа являются нечетными.

// function notChet(arr){
// 	for(let elem of arr){
// 		if(elem % 2 === 1){
// 			return true;
// 		}		
// 	}
// 	return false;
// }


// alert(notChet(arr));
// alert(notChet(arr1));


// Сделайте функцию, которая параметром будет принимать массив и проверять, 
// есть ли в этом массиве два одинаковых элемента подряд.

// function chek(arr){
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i - 1] === arr[i]){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// let a = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b = [1,2,3,4,5,6,7,8,9];
// alert(chek(a));
// alert(chek(b));

// Краткое появнение здесь мы запускаем цикл проверки всех значений массива указав,
// что увеличиваем индекс массива на единицу если длина массива больше переменной i
// далее указали условие, что если значение с индексом i строго равно знчению с индексом i -1,
// то выводится true, если нет то - false

// Задания по теме Без логического оператора if
// код написан сразу уже без оператора, а сама функция с оператором в файле index.html
// function func(a, b) {
// 	return a == b;
// }
//  alert(func(2,3));
//  alert(func(5, 5));

// function func(a, b) {
// 	return a != b;
// }

// alert(func(2,2));
// alert(func(5, 3));

// function func(a, b) {
// 	return a + b >= 10;	
// }

// alert(func(5,9));
// alert(func(2,3));

// function func(num) {
// 	return num >= 0;
// }
// alert(func(10));
// alert(func(-7));

