import { convertDate } from "../utils/convertDate.js";
import { Legend } from "./Legend.js";
import { modalId, modalTitleHeader, plotContentId } from "./Profile.js";

// array to contain plot traces 
let dataValues = [];

// Initialize traces with different fill options
let traces = {
    GH: createTrace('GH 40:1', [], [], 'rgba(234,234,0,0.97)', 'rgba(234,234,0,0.97)', 'lines', 'none', { dash: 'longdash' }),  // No fill
    WL: createTrace('Freshwater [0 - 250] mg/L Cl-', [], [], 'rgb(68, 114, 196)', 'rgba(68, 114, 196, 0.2)', 'lines','tonexty'),    // Fill to next y-axis value
    BoFL: createTrace('Brackish (250 - 81,000] mg/L Cl-', [], [], 'rgb(66, 255, 66)', 'rgba(204, 255, 204, 0.6)', 'lines', 'tonexty'), // Fill to next x-axis value
    BoBL: createTrace('Saline (81,000 - 15,000] mg/L Cl-', [], [], 'rgb(0, 155, 78)', 'rgba(0, 204, 102, 0.6)', 'lines', 'tonexty'),       // No fill
    BTZ: createTrace('Saltwater ≥ 15,000 mg/L Cl-', [], [], 'rgb(255, 187, 187)', 'rgba(255, 204, 204, 0.6)', 'lines', 'tonexty'),  // Fill to next y-axis value
    BS: createTrace('Max Depth', [], [], 'rgb(255, 204, 204)', 'rgba(255, 204, 204, 0.6)', 'lines', 'tonextx')       // No fill
};

// plot layout options; customize in Plot()
let layout = {
    autosize: false, 
    height: 700,
    width: 1080,
    title: {
        text: "",
        font: {
            size: 20
        },
        xref: 'paper',
        x: 0.05,
        xanchor: 'center'
    },
    xaxis: {
        title: "Title for X-Values",
        rangeslider: {}
    },
    yaxis: {
        title: "Title for Y-Values",
        fixedrange: true
    },
    showlegend: true, 
    legend: {
        x: 1,
        y: 0.5
    }
};

// General function to create trace for any data set
function createTrace(name, xData, yData, color, fillColor, mode = 'lines+markers', fillOption = 'none', lineOptions = {}) {
    const trace = {
        x: xData,
        y: yData,
        type: 'scatter',
        mode: mode,
        name: name,
        line: {
            color: color,
            ...lineOptions // Merge additional line options, like dash
        },
        connectgaps: true
    };

    // Apply fill and fill color only if fillOption is specified
    if (fillOption !== 'none') {
        trace.fill = fillOption;
        trace.fillcolor = fillColor;
    }

    return trace;
}

/*
Function: setPlotData()
Parameters: "data" - JSON data (specifically "feature.properties" from fetch method in LMap.js) containing x- and y-values for plot
Return: none
*/
function setPlotData(data) {
    const xData = convertDate(data.x_vals);

    // Update traces with new data
    traces.GH.x = xData; traces.GH.y = data.GH_vals;
    traces.WL.x = xData; traces.WL.y = data.WL_vals;
    traces.BoFL.x = xData; traces.BoFL.y = data.BoFL_vals;
    traces.BoBL.x = xData; traces.BoBL.y = data.BoBL_vals;
    traces.BTZ.x = xData; traces.BTZ.y = data.BTZ_vals;
    traces.BS.x = xData; traces.BS.y = data.BS_vals;

    // Update the dataValues array
    dataValues = [traces.BS, traces.BTZ, traces.BoBL, traces.BoFL, traces.WL, traces.GH];
}

/*
Function: setLayout()
Parameters: "data" - JSON data (specifically "feature.properties" from fetch method in LMap.js) containing x- and y-values for plot
Return: none
*/
function setLayout(data) {
    // configurations 
    layout.title.text = `Well ${data.name}`;
    layout.xaxis.title = " ";
    layout.xaxis.rangeselector = " ";
    layout.yaxis.title = "Depth (ft)";
}

/*
Function: Plot()
Parameters:
    "data" - JSON data (specifically "feature.properties" from fetch method in LMap.js) containing x- and y-values for plot
    "element" - HTML element with ID for the plot container (i.e., where the plot will be appended)
Notes: Because of the reserve word, "export," this function is available to other components within the project.
*/
export function Plot(data, element) {
    setPlotData(data);
    setLayout(data);

    Plotly.newPlot(element, dataValues, layout, {
        // configs 
        scrollZoom: true,
        displaylogo: false,
        responsive: true,
        modeBarButtonsToAdd: [
            {
            name: `Download DOW ${data.name} historic profile as PNG file`,
            icon: Plotly.Icons.camera,
            click: () => {
                Plotly.downloadImage(element, { format: 'png', width: 1000, height: 800, filename: `dow_${data.name}_historic_profile` });
            }},
            ],
        modeBarButtonsToRemove: ["lasso2d", "select2d", "toImage"]
    }).then(gd => {
        gd.on('plotly_legendclick', () => false); // Disable legend click event
    });
};

/*
Function: MultiplePLots()
Parameters:
    "selection" - array list containing selected objects
    "element" - parent HTML element to insert generated plots for multi-plot view
    "method" - a string; dictates what method of selection was used 
Return: none
Notes: Because of the reserve word, "export," this function is available to other components within the project.
*/
export function MultiplePlots(selection, element, method) {
    let plot = "";
    if (method === "lasso") {
        for (let i = 0; i < selection.length; i++) {
            const well = selection[i].feature.properties;
            const id = `well-${well.name}`;
            plot = `<div class="selected-well" id="${id}"></div>`;
            element.insertAdjacentHTML("beforeend", plot);
            Plot(well, id);
        }
    } else {
        for (let i = 0; i < selection.length; i++) {
            const well = selection[i];
            const id = `well-${well.name}`;
            plot = `<div class="selected-well" id="${id}"></div>`;
            element.insertAdjacentHTML("beforeend", plot);
            Plot(well, id);
        }

        // open multiple plot view modal 
        const plotModal = document.getElementById("multi-plot-view");
        const viewPlotModal = bootstrap.Modal.getOrCreateInstance(plotModal);
        viewPlotModal.show();
    } 
}