// function kebabToSnake(str) {
//     for (i = 0; i < str.length; i++) {
//         if (str[i] === "-")
//             str[i] = "_";
//     }
//     return str;
// }

function kebabToSnake(str) {

    return str.replace("-", "_");
}

function kebabToSnake(str) {

    return str.replace(/-/g, "_");
}