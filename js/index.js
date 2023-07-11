console.log(("your index.js file is loaded correctly!"));


$( document ).ready(function() {
    $(".quote").removeClass("quoteMove")

    setTimeout(() => {
        $(".moveBase").removeClass("quoteMove")
    }, 600)
});
