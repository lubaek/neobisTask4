let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
.then (data => {
   if (!data.ok) {
        throw Error('Error!')
    }
   return data.json();
})
.then (data => {
    const html = data.map(post=> {
        let z
        return `
        <div class = "item">
        <p class="id">id = <span>${post.id}</span></p>
        <h3 class="title">${post.title}</h3>
        <p class"body">${post.body}</p>
        </div>
        `;
    })
    .join("");
    // document.querySelector('.container').appendChild(html);
    document.querySelector('.container').insertAdjacentHTML('beforeend', html);
})
.catch(error =>{
    console.log(error);
})
