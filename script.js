// script.js

document.getElementById('itineraryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const country = document.getElementById('country').value;
    const timeline = document.getElementById('timeline').value;
    const photos = document.getElementById('photos').files;

    // Create a new post element
    const postItem = document.createElement('div');
    postItem.className = 'post-item';

    // Add title and country
    const postTitle = document.createElement('h3');
    postTitle.textContent = `${title} (${country})`;
    postItem.appendChild(postTitle);

    // Add timeline
    const postTimeline = document.createElement('p');
    postTimeline.textContent = timeline;
    postItem.appendChild(postTimeline);

    // Add photos if any
    if (photos.length > 0) {
        const photosContainer = document.createElement('div');
        for (let i = 0; i < photos.length; i++) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(photos[i]);
            photosContainer.appendChild(img);
        }
        postItem.appendChild(photosContainer);
    }

    // Append the post to the post list
    document.getElementById('postList').appendChild(postItem);

    // Reset the form
    document.getElementById('itineraryForm').reset();
});
