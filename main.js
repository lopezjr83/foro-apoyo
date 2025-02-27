document.getElementById('submit-post').addEventListener('click', function() {
    const content = document.getElementById('post-content').value;
    if (content) {
        // Aquí deberías hacer una llamada a tu backend para guardar el post
        // Por ahora, solo lo añadimos a la lista
        addPostToList({ content });
        document.getElementById('post-content').value = '';
    }
});

function addPostToList(post) {
    const postList = document.getElementById('post-list');
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.textContent = post.content;
    postList.prepend(postDiv);
}
