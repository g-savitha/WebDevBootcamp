var movieDB = [{
    title: "In Bruges",
    rating: 5,
    hasWatched: true
}, {
    title: "Pirates of Carribean",
    rating: 4.5,
    hasWatched: false
}, {
    title: "Fast & Furious",
    rating: 3.5,
    hasWatched: false
}, {
    title: "Titanic",
    rating: 5,
    hasWatched: true
}];

// movieDB.forEach(function (movies) {
//     if (movies.hasWatched === false)
//         console.log("You have not seen " + movies.title + "- " + movies.rating + " stars");
//     else
//         console.log("You have Watched " + movies.title + "- " + movies.rating + " stars");
// });

movieDB.forEach(function (movies) {
    console.log(buildString(movies));
});

function buildString(movies) {
    var result = "You have ";
    if (movies.hasWatched)
        result += " watched ";
    else
        result += " not seen ";
    result += "\"" + movies.title + "\"" + " - ";
    result += movies.rating + " stars";
    return result;

}