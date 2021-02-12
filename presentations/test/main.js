// Load plotly plot from json and add to MyGraph div
var config = {responsive: true}
Plotly.d3.json("plotly_test.json", function(err, fig){
    Plotly.plot("MyGraph", fig.data, fig.layout, config)
});

// Resize Plotly plots on slide changes
window.addEventListener('load', (e) => {
    Reveal.on( "slidechanged", event => {
        event.currentSlide.getElementsByClassName("js-plotly-plot").forEach(p => Plotly.Plots.resize(p));
    })
});
