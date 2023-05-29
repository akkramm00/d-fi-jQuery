$(() => {
console.log('jQuery est correctement défini !')
//======== Modifions la couleur du h1 ==============

$('h1').css('color' , 'green');

//============ first h2 in italic style ============

$('h2').first().css('font-style', 'italic').text('Mes meilleurs articles')

});

