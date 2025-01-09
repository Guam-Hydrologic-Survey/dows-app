/* 
About.js
Parameters: "element" - an HTML element with ID for about modal
Return: none
*/
//TODO: EDIT 
export function About(element) {
  element.innerHTML = /*html*/
  `
  <div class="modal fade" id="about" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">About</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <span class="weri-tr-title" id="weri-tr-text">MAppFx: Deep Observation Wells (DOWs)</span>
            <br><br>
            <p id="abstract">MAppFx is a web page interactive map environment that retrieves a graph of a site upon clicking on a map feature object (be it a point, polygon, or a line). MAppFx is a product of WERI through the Guam Hydrologic Survey program (PL 24-247 and 24-161) and USGS 104-b. It is available through the Guam Hydrologic Survey website.</p>
            <p class="people">
              <span>Authors</span>
              <br>
              <span class="names">MW Zapata · DK Valerio · MC Snaer · NC Habana</span>
            </p>
          </div>
          <div class="modal-footer about-btns">
            <a class="btn btn-primary" href="#" target="_blank" rel="noreferrer noopener" role="button" title="Coming soon">WERI Technical Report <b>(coming soon)</b></a>
            <!-- Dropdown for links to GHS maps libraries -->
            <div class="dropdown">
              <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Click to expand list">
                Map Series
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/index.php/mappfx/" title="GHS MAppFx Library">MAppFx Library</a></li>
                <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/index.php/interagency-maps/" title="GHS Interagency Maps">Interagency Maps</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}