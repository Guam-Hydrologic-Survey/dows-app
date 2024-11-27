/* 
MarkerPopup.js 
Parameters: 
    "name" - string, location name; 
    "loc" - string, either village, basin, or watershed; 
    "lat" - numerical value for lattitude coordinate; 
    "lon" - numiercal value for longitude coordinate
Return: "content" - a string constant containing HTML code for the BS UI element, card, through template literals 
Notes: can adjust parameters, if needed (i.e., remove lat lon coordinates, add different attributes to display)
*/

import { modalId } from "./Profile.js";

export function MarkerPopup(data) {
    const content = /*html*/
    `
    <div id="marker-content-container">
        <span id="marker-well-name">Well ${data.name}</span>
        <br>
        <span id="marker-coords">(${data.lat}, ${data.lon})</span>
    </div>
    <br>
    <div class="d-flex justify-content-center">
        <button type="button" data-bs-toggle="modal" data-bs-target="#${modalId}" class="btn btn-primary" id="" title="View this DOW's historic profile">View DOW Profile</button>
    </div>
    `
    return content;
}