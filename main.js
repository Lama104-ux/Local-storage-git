window.addEventListener("DOMContentLoaded", main);
const posts = [{
    id: 1,
    title: "A cute cat",
    imageUrl: "https://images.pexels.com/photos/29806036/pexels-photo-29806036.jpeg?cs=srgb&dl=pexels-henkephotoart-29806036.jpg&fm=jpg&_gl=1*vmjvh9*_ga*NTc1OTI4NzI4LjE3NDU4MzIyMDA.*_ga_8JE65Q40S6*MTc0NTgzMjIwMC4xLjEuMTc0NTgzMjIxNy4wLjAuMA..",

},
{
    id: 2,
    title: "A couple",
    imageUrl: "https://images.pexels.com/photos/6550335/pexels-photo-6550335.jpeg",

},
{
    id: 3,
    title: "A nice car",
    imageUrl: "https://images.pexels.com/photos/18765/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

},
];

let likedPosts = [];

function main() {
    //what should the program do at start?

    likedPosts = JSON.parse(localStorage.likedPosts ?? "[]");

    renderPosts();
}
function renderPosts() {

    const main = document.querySelector("main");
    main.innerHTML = null;

    for (const post of posts) {
        const article = document.createElement("article")
        article.className = "post-article";

        const heart = document.createElement("button");
        heart.textContent = likedPosts.includes(post.id) ? "🤣" : "❤️";
        heart.className = "like-button";
        heart.onclick = () =>
            toggleLikedPost(post);

        const img = document.createElement("img");
        img.src = post.imageUrl;
        img.alt = post.title;
        img.className = "image";// för css

        main.append(img);
        article.append(heart);
        main.append(article);

    }
}
function toggleLikedPost(post) {
    if (likedPosts.includes(post.id)) {
        likedPosts = likedPosts.filter((id) => id !== post.id);

    } else {

        likedPosts.push(post.id);
    }
    localStorage.likedPosts = JSON.stringify(likedPosts)
    renderPosts();
}
