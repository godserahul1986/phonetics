import Phonetics from './phonetics.js';

import '../styles/main.css';


window.speechSynthesis.onvoiceschanged = function() {
	const phonetics = new Phonetics();

	const btnSpellName = document.getElementsByClassName('btn-spell-name')[0];
	btnSpellName.onclick = function () {
		const name = document.getElementsByClassName('full-name')[0].value;
		phonetics.spellName(name);
	};

};
