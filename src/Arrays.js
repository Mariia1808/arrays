/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    return data
        .split(',')
        .sort(function (a, b) {
            return a - b;
        })
        .join(',');
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    var arr = new Array();
    arr = data.filter(function (f) {
        return f <= 100;
    });
    return arr;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array = [];
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        if (array1.length > 0 || array2.length > 0) {
            array.push(array1[i]);
            array.push(array2[i]);
        }
    }
    return array;
}
