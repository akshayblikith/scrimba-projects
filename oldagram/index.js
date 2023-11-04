const posts = [
    {
        id: 1,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        id: 2,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        id: 3,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    },
];

const postDisplay = document.getElementById("post-display");

for (let i = 0; i < posts.length; i++) {
    currentPost = posts[i];
    createPost(currentPost);
}

function createPost(post) {
    let newPost = document.createElement("div");
    newPost.setAttribute("class", "post-container");

    newPost.innerHTML = `
        <div class="post-details-container">
            <img class="post-avatar" src="${post.avatar}">
            <div class="post-user-details-container">
                <h3>${post.name}</h3>
                <p>${post.location}</p>
            </div>
       </div>
       <img class="post-image" src="${post.post}" id="heart-${post.id}">
       <div class="post-response-container">
            <img class="icon-heart" src="images/icon-heart.png">
            <img class="icon-comment" src="images/icon-comment.png">
            <img class="icon-dm" src="images/icon-dm.png">
       </div>
       <div class="likes-comments-container">
            <h3 class="likes-display" id="likes-display-${post.id}">${post.likes} likes</h3>
            <div class="comments-container">
                <h3 class="add-margin">${post.username}</h3>
                <p>${post.comment}</p>
            </div>
       </div>
    `;

    postDisplay.append(newPost);

    let likesUpdate = document.getElementById(`likes-display-${post.id}`);

    let likesCounter = document.getElementById(`heart-${post.id}`);
    likesCounter.addEventListener("dblclick", function () {
        post.likes++;
        console.log(post.likes);
        likesUpdate.textContent = `${post.likes} likes`;
    });
}
