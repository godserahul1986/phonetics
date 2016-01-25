import PHONETICS_CONSTANTS from '../util/phonetics_constants.js';

class Phonetics {
	constructor() {
		this.utterance = new SpeechSynthesisUtterance();
		this.utterance.lang = 'en-US';
		this.utterance.rate = 0.7;
		this.utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
			return voice.name === 'Google US English'; 
		})[0];
	}

	spellName(name) {
		let phoneticsForName;
		phoneticsForName = getPhoneticsForName(name);	
		this.utterance.text = phoneticsForName;
		console.log(phoneticsForName);
		speechSynthesis.speak(this.utterance);
	}	

}

function getPhoneticsForName(name) {
	let chars;
	name = name.toUpperCase();
	chars = name.split('');
	chars = chars.map((char) => {
		if (char === '@') {
			return 'At the rate';
		} else if (Number.isInteger(parseInt(char))) {
			return PHONETICS_CONSTANTS[char];
		}
		return `${char} for ${PHONETICS_CONSTANTS[char]}`;
	});
	return chars.join(',');
}
 export default Phonetics;