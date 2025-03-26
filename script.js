// Load YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = [];

function generateVideos() {
    var videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = ""; // Clear previous videos
    players = [];

    let videoUrl = document.getElementById("videoUrl").value;
    let videoId = extractVideoID(videoUrl);

    if (!videoId) {
        alert("Please enter a valid YouTube link!");
        return;
    }

    let count = document.getElementById("videoCount").value;
    for (let i = 0; i < count; i++) {
        let videoBox = document.createElement("div");
        videoBox.className = "video-box";
        videoBox.innerHTML = `<iframe id="player${i}" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        videoContainer.appendChild(videoBox);
    }
}

// Extract YouTube Video ID from URL
function extractVideoID(url) {
    let match = url.match(/[?&]v=([^&#]+)/) || url.match(/youtu\.be\/([^?]+)/);
    return match ? match[1] : null;
}

// Initialize YouTube API
function onYouTubeIframeAPIReady() {
    setTimeout(() => {
        let iframes = document.querySelectorAll("iframe[id^='player']");
        iframes.forEach((iframe, index) => {
            players[index] = new YT.Player(iframe.id, {
                events: {
                    'onReady': () => onPlayerReady(index)
                }
            });
        });
    }, 2000);
}

// Start Playing & Random Behavior
function onPlayerReady(index) {
    players[index].playVideo();
    applyRandomBehavior(index);
}

function applyRandomBehavior(index) {
    setTimeout(() => {
        let actions = ["pause", "play", "volume", "seek"];
        let action = actions[Math.floor(Math.random() * actions.length)];
        
        switch (action) {
            case "pause":
                players[index].pauseVideo();
                console.log(`Player ${index} Paused`);
                break;
            case "play":
                players[index].playVideo();
                console.log(`Player ${index} Playing`);
                break;
            case "volume":
                let volume = Math.floor(Math.random() * 100);
                players[index].setVolume(volume);
                console.log(`Player ${index} Volume: ${volume}`);
                break;
            case "seek":
                let duration = players[index].getDuration();
                let seekTo = Math.floor(Math.random() * duration);
                players[index].seekTo(seekTo, true);
                console.log(`Player ${index} Seek to: ${seekTo}`);
                break;
        }

        applyRandomBehavior(index);
    }, Math.floor(Math.random() * 20000) + 5000);
}