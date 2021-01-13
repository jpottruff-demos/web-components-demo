const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3 { 
            color: coral
        } 
    </style> 

    <div class="user-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p>EMAIL</p>
                <p>PHONE</p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
    
`

class UserCardImproved extends HTMLElement {
    // Calls the super() constructor (eg. of HTMLElement)
    constructor() {
        super();

        // Create Shadow DOM
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Access the attributes here
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }
}

// Defines the custom element (tagName, className)
window.customElements.define('user-card-improved', UserCardImproved);