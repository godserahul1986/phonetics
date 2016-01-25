import Phonetics from './phonetics.js';

import '../styles/main.css';

const phonetics = new Phonetics();

const btnSpellName = document.getElementsByClassName('btn-spell-name')[0];
btnSpellName.onclick  = spellName;

function spellName() {
	const name = document.getElementsByClassName('full-name')[0].value;
	phonetics.spellName(name);
}