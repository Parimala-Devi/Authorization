(function() {
    const currentDocument = document.currentScript.ownerDocument;

    class CandidateCard extends HTMLElement {
        constructor() {
            // If you define a constructor, always call super() first as it is required by the CE spec.
            super();

            // Setup a click listener on <user-card>
            this.addEventListener('click', e => {
                this.toggleCard();
            });
        }

        toggleCard() {
            console.log("Element was clicked!");
        }
        connectedCallback() {
                const shadowRoot = this.attachShadow({ mode: 'open' });

                // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
                // Current document needs to be defined to get DOM access to imported HTML
                const template = currentDocument.querySelector('#candidate-card-template');
                const instance = template.content.cloneNode(true);
                shadowRoot.appendChild(instance);

                // Extract the attribute user-id from our element. 
                // Note that we are going to specify our cards like: 
                // <user-card user-id="1"></user-card>
                const candidateEmail = this.getAttribute('candidate-email');

                // Fetch the data for that user Id from the API and call the render method with this data
                fetch(`https://my-pro-19edf.firebaseio.com/candidates/${candidateEmail}`)
                    .then((response) => response.text())
                    .then((responseText) => {
                        this.render(JSON.parse(responseText));
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            //  this.list.forEach(person => {
        render(candidateData) {

            //  this.list.forEach(candidateData => {
            // Fill the respective areas of the card using DOM manipulation APIs
            // All of our components elements reside under shadow dom. So we created a this.shadowRoot property
            // We use this property to call selectors so that the DOM is searched only under this subtree
            this.shadowRoot.querySelector('.card__full-name').innerHTML = candidateData.name;
            this.shadowRoot.querySelector('.card__user-name').innerHTML = candidateData.name;
            this.shadowRoot.querySelector('.card__contact').innerHTML = candidateData.contact;
            this.shadowRoot.querySelector('.card__others').innerHTML = `<h4>Details</h4>
      Role:${candidateData.role}, <br />
      Experience:${candidateData.experience},<br />
      Degree:${candidateData.degree},<br />
      E-mail: ${candidateData.email}`
                //  });
        }

        toggleCard() {
            let elem = this.shadowRoot.querySelector('.card__hidden-content');
            let btn = this.shadowRoot.querySelector('.card__details-btn');
            btn.innerHTML = elem.style.display == 'none' ? 'Less Details' : 'More Details';
            elem.style.display = elem.style.display == 'none' ? 'block' : 'none';
        }
    }

    customElements.define('candidate-card', CandidateCard);


}());