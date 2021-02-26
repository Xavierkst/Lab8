describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75);
    });
  });

 it('second test', () => {
      cy.get('#volume-slider').invoke('val', 33).trigger('input');
      cy.get('#volume-number').then(function($el) {
        expect($el).to.have.value(33);
      });
 });

 it('third test', () => {
     cy.get('#volume-slider').invoke('val', 33).trigger('input');
     cy.get('#horn-sound').then(function($el) {
     expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('testing sound image change respectively', () => {
      cy.get('#radio-air-horn').click(); 
      cy.get('#sound-image').then(function($el) {
        expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');
      });

      cy.get('#radio-car-horn').click(); 
      cy.get('#sound-image').then(function($el) {
        expect($el).to.have.attr('src', './assets/media/images/car.svg');
      });

      cy.get('#radio-party-horn').click(); 
      cy.get('#sound-image').then(function($el) {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
      });
  });

  it('testing volume image change respectively', () => {
      cy.get('#volume-slider').invoke('val', 0).trigger('input');
      cy.get('#volume-image').then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
      });

      cy.get('#volume-slider').invoke('val', 5).trigger('input');
      cy.get('#volume-image').then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      });

      cy.get('#volume-slider').invoke('val', 40).trigger('input');
      cy.get('#volume-image').then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      });

      cy.get('#volume-slider').invoke('val', 75).trigger('input');
      cy.get('#volume-image').then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
      });
  });


 it('disabled honk btn test', () => {
     cy.get('#volume-number').invoke('val', '+').trigger('input');
     cy.get('#honk-btn').should('be.disabled');
     cy.get('#volume-number').invoke('val', '').trigger('input');
     cy.get('#honk-btn').should('be.disabled');   //  cy.get('#honk-btn').then(function($el) {
     cy.get('#volume-number').invoke('val', '50').trigger('input');
     cy.get('#honk-btn').should('not.be.disabled');
    //  expect($el).should('be.disabled');
    // });
  }); 
  
  it('test invalid volume number error msg', () => {
     cy.get('#volume-number').invoke('val', 110).trigger('input');
    //  cy.get('#honk-btn').should('be.disabled');   //  cy.get('#honk-btn').then(function($el) {
     cy.get('input:invalid').should('have.length', 1);
     cy.get('#volume-number').then(($input) => {
        expect($input[0].validationMessage).to
        .eq('Value must be less than or equal to 100.');
     });
  });
});
