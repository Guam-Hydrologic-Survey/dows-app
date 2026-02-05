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
            <p id="abstract">MAppFx is a web page interactive map environment that retrieves a graph of a site upon clicking on a map feature object (be it a point, polygon, or a line). MAppFx is a product of WERI through the Guam Hydrologic Survey program (PL 24-247 and 24-161) and USGS 104-b. It is available through the Guam Hydrologic Survey website. <br><br>
            Data for deep observation wells (DOWs) are analyzed into a historic profile of the phreatic zone, which is defined by the conductivity (salinity) of the freshwater lens, transition zone, and saltwater, reveals a dynamic phreatic zone. The graphs illustrate a historic profile of the lens, demonstrating changes in lens thickness over time. Freshwater lens dynamics observation and analysis are essential to determine the aquifer's integrity and resilience to drought over several areas in an aquifer basin. 
            </p>
            <p class="people">
              <span>Authors</span>
              <br>
              <span class="names">MW Zapata · DK Valerio · MC Snaer · NC Habana</span>
            </p>
          </div>
          <div class="modal-footer about-btns">
            <a class="btn btn-primary" title="Coming soon!" href="https://guamhydrologicsurvey.uog.edu/2025/11/07/mappfx-deep-observation-wells-dows/" target="_blank" rel="noreferrer noopener" role="button">WERI Technical Report</a>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  WERI Map Series
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/mappfx-library/" title="MAppFx Library on GHS" target="_blank" rel="noreferrer noopener">MAppFx Library</a></li>
                  <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/web-mapps-library/" title="Web MApps on GHS" target="_blank" rel="noreferrer noopener">Web MApps</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
    `
}