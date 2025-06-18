
const photoContainer =  document.querySelector(".best__photo");
const authorInfo = document.querySelector(".photo__author");
const likeBtn = document.querySelector(".like_button");
const counter = document.querySelector(".countLikes");
const apiKey = 'y4qvDpPV-XqUNf6d53JbS-2--UiTkqJMaSw6tf8CURg';

window.addEventListener('load', () => {
    fetchPhoto();
});

async function fetchPhoto () {
    
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        const photo = await response.json();
            if (photo) {
                const img = document.createElement('img');
                img.classList.add('image');
                img.src = photo.urls.small;
                img.alt = photo.alt_description;
                photoContainer.appendChild(img);
                authorInfo.textContent = `Автор фото: ${photo.user.name}`;
                counter.textContent = `${photo.likes}`;
                
                //иконка для кнопки лайков 
               
                const iconLike = document.createElement("img");
                iconLike.classList.add("like__icon");
                iconLike.src = `icon/heart_like_icon.png`;
                likeBtn.append(iconLike);
                
            }
    }
           
     catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return {};
    }
}

likeBtn.addEventListener('click', function () {
    increaseCounter();
});

function increaseCounter() {
    const currentCounter = parseInt(counter.textContent, 10);
    counter.textContent = currentCounter + 1;
}
