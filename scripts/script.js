var img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let i = 0;

function gallery(el){
	let im = document.getElementById('im');
	im.style.backgroundImage = 'url(img/'+img[i]+')';
	i++;
	if (i == 5){
		i = 0;
	}
}