function findMax(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}
function isPerfectSquare(num) {
    return num > 0 && Math.sqrt(num) % 1 === 0;
}
function findPerfectSquares(arr) {
    return arr.filter(num => isPerfectSquare(num));
}
function averageNonNegative(arr) {
    let nonNegativeNumbers = arr.filter(num => num >= 0);
    if (nonNegativeNumbers.length === 0) return null;
    let sum = nonNegativeNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum / nonNegativeNumbers.length;
}
function findNumbersGreaterThanAverage(arr) {
    let avg = averageNonNegative(arr);
    if (avg === null) return null;
    return arr.filter(num => num > avg);
}
let integerArray = [4, 9, 16, 25, 36, 49, 64, 81];
document.write("Số nguyên lớn nhất trong mảng: ", findMax(integerArray), "<br>");
document.write("Các số chính phương trong mảng: ", findPerfectSquares(integerArray).join(", "), "<br>");
document.write("Trung bình cộng của các số không âm trong mảng: ", averageNonNegative(integerArray), "<br>");
document.write("Các số lớn hơn trung bình cộng của mảng: ", findNumbersGreaterThanAverage(integerArray).join(", "), "<br>");