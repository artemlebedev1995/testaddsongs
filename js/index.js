const music_open = document.querySelector('.music-open');
const music = document.querySelector("section");
music_open.addEventListener('click', openmusic);
let change = true;
function openmusic() {
	if (change) {
	music.style.display = 'block';
	change = false;
	} else {
	music.style.display = 'none';
	change = true;	
	}
}