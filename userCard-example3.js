// NOTE the '<slots>' below
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
                <p> <slot name="email"/> </p>
                <p> <slot name="phone" /> </p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
    
`

class UserCard extends HTMLElement {

    // Calls the super() constructor (eg. of HTMLElement)
    constructor() {
        super();

        this.showInfo = true;

        // Create Shadow DOM
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Access the attributes here
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');
        
        if (this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info'
        }  else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info'
        }
    }

    // Allows for the button click
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }
    
    // Removes when taken out o the DOM
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener('click', () => this.toggleInfo());
    }

}

// Defines the custom element (tagName, className)
window.customElements.define('user-card', UserCard);