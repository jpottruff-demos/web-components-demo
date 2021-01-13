// This is a bare bones example and is not overly practical
class UserCardBasic extends HTMLElement {
    // Calls the super() constructor (eg. of HTMLElement)
    constructor() {
        super();

        this.innerHTML = `<style> h3 { color: coral} </style> <h3>${this.getAttribute('name')}</h3>`;
    }
}

// Defines the custom element (tagName, className)
window.customElements.define('user-card-basic', UserCardBasic);