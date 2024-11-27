/* 
Profile.js 
Description: 
*/

const prefix = "dow-profile-";

// ID's for div containers 
const modalId = prefix + "modal";
const modalTitleHeader = prefix + "modal-header";
const plotContentId = prefix + "modal-plot-content";

// bootstrap css classes 
const modalStyleClasses = "modal-xl modal-dialog-centered";

export function Profile(element) {
    element.innerHTML = /*html*/ 
    `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}-label" aria-hidden="true">
        <div class="modal-dialog ${modalStyleClasses}">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="${modalTitleHeader}">Historic Salinity Profile</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="${plotContentId}"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" title="Return to map" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

export { modalId, modalTitleHeader, plotContentId }