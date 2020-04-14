function objRaquettes(objRaquetteGauche, objRaquetteDroite ){
	this.raquetteGauche = objRaquetteGauche;
	this.raquetteDroite = objRaquetteDroite;	
}
function objContext( ){
	this.canvas = document.getElementById('mon_canvas');
	if (!this.canvas)
	{
		alert("impossible de récupérer le canvas");
		return;
	}
	this.context = this.canvas.getContext('2d');
	if (!this.context)
	{
		alert("impossible de récupérer le contexte du canvas");
		return;
	}
	// Récupération de la hauteur et la largeur
    this.hauteurCanvas = parseInt(document.getElementById("mon_canvas").getAttribute("height"));
    this.largeurCanvas = parseInt(document.getElementById("mon_canvas").getAttribute("width"));
	this.hauteurRaquettes = 50;
	this.largeurRaquettes = 10;
	this.largueurLignes = 10;
	this.largeurBordures = 10;
	this.largeurFilet = 10;
	this.dessiner = function(){
		var largeurBorduresLignes = this.largeurBordures + this.largueurLignes;
		
		this.context.clearRect(0, 0, this.largeurCanvas, this.hauteurCanvas);
		
		// On dessine le fond.
		this.context.fillStyle = "#000000";
		this.context.fillRect(0, 0, this.largeurCanvas, this.hauteurCanvas);
		
		this.context.fillStyle = "#FFFFFF";
		this.context.fillRect(0, this.largeurBordures, this.largeurCanvas, 10);
		this.context.fillRect(0, (this.hauteurCanvas - largeurBorduresLignes ), this.largeurCanvas, 10);
		
		// on dessine le filet
		hauteur = 20;
		while( hauteur < this.hauteurCanvas - largeurBorduresLignes ){	
			this.context.fillRect(this.largeurCanvas / 2 - 5, hauteur, this.largeurFilet, 20);
			hauteur += 40;
		}
	}
	
}

function objScore(objContexte, objBalle, objRaquettes){
	this.contexte = objContexte;
	this.balle = objBalle;
	this.raquettes = objRaquettes;
	this.gauche = 0;
	this.droite = 0;
	this.espaceFilet = 30;
	this.largeur = 30;
	this.hauteur = 60;
	this.epaisseur = 10;
	this.espace = 20;
	this.dessinerChiffre = function(chiffre, posX, posY){
		switch (chiffre){
			case 0:
				this.dessiner0(posX, posY);
				break;
			case 1:
				this.dessiner1(posX, posY);
				break;
			case 2:
				this.dessiner2(posX, posY);
				break;
			case 3:
				this.dessiner3(posX, posY);
				break;
			case 4:
				this.dessiner4(posX, posY);
				break;
			case 5:
				this.dessiner5(posX, posY);
				break;
			case 6:
				this.dessiner6(posX, posY);
				break;
			case 7:
				this.dessiner7(posX, posY);
				break;
			case 8:
				this.dessiner8(posX, posY);
				break;
			case 9:
				this.dessiner9(posX, posY);
				break;
			}
	}
	this.dessiner0 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y, this.largeur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur - this.epaisseur, this.largeur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y, this.epaisseur, this.hauteur);
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur);
		
	}
	this.dessiner1 = function( x, y ){
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur);
		
	}
	this.dessiner2 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur - this.epaisseur, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur  / 2 - this.epaisseur / 2 );
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 - this.epaisseur / 2, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 + this.epaisseur / 2, this.epaisseur, this.hauteur  / 2 - this.epaisseur / 2 );
		
	}
	this.dessiner3 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y, this.largeur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur - this.epaisseur, this.largeur, this.epaisseur);
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 - this.epaisseur / 2, this.largeur + this.epaisseur, this.epaisseur);
		
	}
	this.dessiner4 = function( x, y ){
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 - this.epaisseur / 2, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y , this.epaisseur, this.hauteur / 2 - this.epaisseur / 2);
	}
	this.dessiner5 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y , this.epaisseur, this.hauteur / 2 - this.epaisseur / 2);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur - this.epaisseur, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 - this.epaisseur / 2, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x, y + this.hauteur / 2 + this.epaisseur / 2, this.epaisseur, this.hauteur  / 2 - this.epaisseur / 2 );
		
	}
	this.dessiner6 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y , this.epaisseur, this.hauteur / 2 - this.epaisseur / 2);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur - this.epaisseur, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 - this.epaisseur / 2, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 + this.epaisseur / 2, this.epaisseur, this.hauteur  / 2 - this.epaisseur / 2 );
		this.contexte.context.fillRect(x, y + this.hauteur / 2 + this.epaisseur / 2, this.epaisseur, this.hauteur  / 2 - this.epaisseur / 2 );
		
	}
	this.dessiner7 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur);
		
	}
	this.dessiner8 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y, this.largeur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur - this.epaisseur, this.largeur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 - this.epaisseur / 2, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y, this.epaisseur, this.hauteur);
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur);
		
	}
	this.dessiner9 = function( x, y ){
		this.contexte.context.fillRect(x - this.largeur, y, this.largeur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y + this.hauteur / 2 - this.epaisseur / 2, this.largeur + this.epaisseur, this.epaisseur);
		this.contexte.context.fillRect(x - this.largeur, y, this.epaisseur, this.hauteur / 2 - this.epaisseur / 2 );
		this.contexte.context.fillRect(x, y, this.epaisseur, this.hauteur);
		
	}
	this.dessinerGauche = function(){
		var posX = this.contexte.largeurCanvas / 2 - this.contexte.largeurFilet / 2 - this.espaceFilet;
		var posY = this.contexte.largeurBordures + this.contexte.largueurLignes + 10;
		var reste = this.gauche;
		reste = reste % 10;
		this.dessinerChiffre( reste, posX, posY);
		if (this.gauche > 9){
			posX -= this.largeur + this.espace;
			reste = (this.gauche - reste) / 10;
			this.dessinerChiffre( reste, posX, posY);
		}
	}
	this.dessinerDroite = function(){
		var posX = this.contexte.largeurCanvas / 2 + this.contexte.largeurFilet / 2 + this.espaceFilet + this.largeur - this.epaisseur;
		var posY = this.contexte.largeurBordures + this.contexte.largueurLignes + 10;
		var reste = this.droite;
		reste = this.droite % 10;
		if (this.droite > 9){
			reste = (this.droite - reste) / 10;
			this.dessinerChiffre( reste, posX, posY);
			posX += this.largeur + this.espace;
		}
		reste = this.droite % 10;
		this.dessinerChiffre( reste % 10, posX, posY);
	}
	this.dessiner = function(){
		this.dessinerGauche();
		this.dessinerDroite();
	}
	
	this.calculer = function(){
		if ( this.balle.abscisse + this.balle.largeur <= 0 ){
			this.droite += 1;
			this.balle.init(this.raquettes.raquetteGauche);
		}	
		if ( this.balle.abscisse >= this.contexte.largeurCanvas ){
			this.gauche += 1;
			this.balle.init(this.raquettes.raquetteDroite);
		}
	}
}

function objBalle(objContexte){
	this.coefAbs = 1;
	this.coefOrdo = 1;
	this.abscisse = 50;
	this.ordonnee = 50;	
	this.increment = 5;
	this.largeur = 10;
	this.gauche = true;
	this.contexte = objContexte;
	this.raquette = null;
	this.calculer_trajectoire = function (){
		this.abscisse += this.coefAbs * this.increment;
		this.ordonnee += this.coefOrdo * this.increment;
	}
	this.lancer = function(){
		this.increment = 5;
		if (!this.gauche){
			this.increment *= -1;
		}
		this.coefOrdo = this.raquette.sens();
	}
	this.sens = function(){
		return this.coefOrdo;
	}
	
	this.calculer_impact = function(objRaquettes){
	
	// impact bordure du haut
	if ( this.ordonnee <= this.contexte.largeurBordures + this.contexte.largueurLignes ){
		this.coefOrdo *= -1;
	}
	
	// impact bordure du bas
	if ( this.ordonnee + this.largeur >= this.contexte.hauteurCanvas - this.contexte.largueurLignes - this.contexte.largeurBordures ){
		this.coefOrdo *= -1;
	}
	
	// impact sur la raquette droite
	if ( this.abscisse >= objRaquettes.raquetteDroite.abscisse && 
		this.ordonnee >= objRaquettes.raquetteDroite.ordonnee &&
		this.ordonnee <= objRaquettes.raquetteDroite.ordonnee + objRaquettes.raquetteDroite.hauteur ){
			this.coefAbs *= -1;
			this.abscisse = objRaquettes.raquetteDroite.abscisse - 1;
			if (this.sens( ) == objRaquettes.raquetteDroite.sens()){
				this.coefAbs *= 1.1;
				this.coefOrdo *= -1.1;
			}
			else{
				this.coefAbs *= 1.1;
				this.coefOrdo /= -2;				
			}
		}
		
	// impact sur la raquette gauche
	if ( this.abscisse <= objRaquettes.raquetteGauche.abscisse + objRaquettes.raquetteGauche.largeur && 
		this.ordonnee >= objRaquettes.raquetteGauche.ordonnee &&
		this.ordonnee <= objRaquettes.raquetteGauche.ordonnee + objRaquettes.raquetteGauche.hauteur ){
			this.abscisse = objRaquettes.raquetteGauche.abscisse +  objRaquettes.raquetteGauche.largeur + 1;
			this.coefAbs *= -1;
			if (this.sens( ) == objRaquettes.raquetteGauche.sens()){
				this.coefAbs *= 1.1;
				this.coefOrdo *= -1.1;
			}
			else{
				this.coefAbs *= 1.1;
				this.coefOrdo /= -2;
			}
		}
	}
	
	this.dessiner = function (objRaquettes){
		if (this.increment == 0){
			if (this.gauche)
				getOrdonneeFromRaquette(this, objRaquettes.raquetteGauche);
			else
				getOrdonneeFromRaquette(this, objRaquettes.raquetteDroite);
				
		}
		this.contexte.context.fillRect(this.abscisse, this.ordonnee, this.largeur, this.largeur);
	}
	
	this.init = function init(objRaquette){
		this.coefAbs = 1;
		this.coefOrdo = 1;
		this.raquette = objRaquette;
		
		if (objRaquette.gauche){
			this.abscisse = objRaquette.abscisse + objRaquette.largeur + 1;
		}
		else{
			this.abscisse = objRaquette.abscisse - objRaquette.largeur - 1;
		}
		this.ordonnee = objRaquette.ordonnee + objRaquette.hauteur / 2 - this.largeur / 2;
		this.increment = 0;
		this.gauche = objRaquette.gauche;
	}
}

function raquette(objContexte, abscisse, ordonnee, gauche){
	this.hauteur = 60;
	this.largeur = 10;
	this.abscisse = abscisse;
	this.ordonnee = ordonnee;
	this.ordonnee_old = ordonnee;
	this.hauteur = 50;
	this.largeur = 10;
	this.gauche = gauche;
	this.contexte = objContexte;
	this.dessiner = function(){
		objContexte.context.fillRect(this.abscisse, this.ordonnee, this.largeur, this.hauteur);
	}
	this.sens = function(){
		if (this.ordonnee == this.ordonnee_old){
			return 0;
		}
		else{
		if (this.ordonnee > this.ordonnee_old){
				return 1;
			}
			else{
				return -1;
			}
		}
	}
}
function getAbscisseFromRaquette(objBalle, objRaquette){
	if (objRaquette.gauche){
		objBalle.abscisse = objRaquette.abscisse + objRaquette.largeur + 1;
	}
	else{
		objBalle.abscisse = objRaquette.abscisse - objRaquette.largeur - 1;
	}
}
function getOrdonneeFromRaquette(objBalle, objRaquette){
	objBalle.ordonnee = objRaquette.ordonnee + objRaquette.hauteur / 2 - objBalle.largeur / 2;	
}
function init_balle(objBalle, objRaquette){
	objBalle.coefAbs = 1;
	objBalle.coefOrdo = 1;
	getAbscisseFromRaquette( objBalle, objRaquette);
	getOrdonneeFromRaquette( objBalle, objRaquette);
	objBalle.increment = 0;
	objBalle.gauche = objRaquette.gauche;
}

window.onload = function(){
	
	
	var contexte = new objContext();
	var balle = new objBalle(contexte);
	var raquetteGauche = new raquette(contexte, 10, contexte.hauteurCanvas / 2 - contexte.hauteurRaquettes / 2, true);
	var raquetteDroite = new raquette(contexte, contexte.largeurCanvas - 10 - contexte.largeurRaquettes, contexte.hauteurCanvas / 2 - contexte.hauteurRaquettes / 2, false);
	var raquettes = new objRaquettes( raquetteGauche, raquetteDroite );
	var score = new objScore(contexte, balle, raquettes);
	
	
    var myInterval = setInterval(animation, 1000/30);
	
	window.onmousemove = function(event){
		raquetteGauche.ordonnee_old = raquetteGauche.ordonnee;
		raquetteDroite.ordonnee_old = raquetteDroite.ordonnee;
		if ( event.clientY + contexte.hauteurRaquettes > contexte.hauteurCanvas - 10 - 10 )
			raquetteGauche.ordonnee = contexte.hauteurCanvas - 10 - 10 - contexte.hauteurRaquettes;
		else
			if ( event.clientY < 0 + 10 + 10 )
				raquetteGauche.ordonnee = 20;
			else
				raquetteGauche.ordonnee = event.clientY;	
			
		raquetteDroite.ordonnee = contexte.hauteurCanvas - contexte.hauteurRaquettes - raquetteGauche.ordonnee;
	}
	
	window.onclick = function(event){
		if (balle.increment == 0){
		balle.lancer(raquette);}
		if (event.button == 2){
			score.gauche +=1;
			score.droite +=1;
		}
	
	}
	
	function animation(){
		contexte.dessiner();
		balle.calculer_impact(raquettes);
		balle.calculer_trajectoire();
		raquettes.raquetteGauche.dessiner();
		raquettes.raquetteDroite.dessiner();
		balle.dessiner(raquettes);
		score.calculer();
		score.dessiner();
	}
	
}
