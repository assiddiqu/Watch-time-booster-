const firebaseConfig = {
    apiKey: "AIzaSyABa8ERq4kkvqbkzHgJ_cXJVW-F-U-wbyU",
    authDomain: "dork-hub.firebaseapp.com",
    databaseURL: "https://dork-hub-default-rtdb.firebaseio.com",
    projectId: "dork-hub",
    storageBucket: "dork-hub.firebasestorage.app",
    messagingSenderId: "143650381570",
    appId: "1:143650381570:web:961e22f165dcd29e0b2c1b"
};
firebase.initializeApp(firebaseConfig);

// Function to Log Views
function logWebsiteVisit() {
    const db = firebase.database();
    const visitRef = db.ref('visits');
    visitRef.push({
        timestamp: Date.now(),
        userAgent: navigator.userAgent
    });
}

logWebsiteVisit();
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
        videoBox.innerHTML = `<iframe id="player${i}" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
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
    players[index].setVolume(50); // Ensure volume is on
    applyRandomBehavior(index);
}

function applyRandomBehavior(index) {
    setTimeout(() => {
        let actions = ["pause", "play", "volume", "seek", "speed", "mute_toggle"];
        let action = actions[Math.floor(Math.random() * actions.length)];
        
        switch (action) {
            case "pause":
                players[index].pauseVideo();
                break;
            case "play":
                players[index].playVideo();
                break;
            case "volume":
                let volume = Math.floor(Math.random() * 100);
                players[index].setVolume(volume);
                break;
            case "seek":
                let duration = players[index].getDuration();
                let seekTo = Math.floor(Math.random() * duration * 0.75);
                players[index].seekTo(seekTo, true);
                break;
            case "speed":
                let speed = [0.75, 1, 1.25, 1.5][Math.floor(Math.random() * 4)];
                players[index].setPlaybackRate(speed);
                break;
            case "mute_toggle":
                let isMuted = players[index].isMuted();
                if (isMuted) {
                    players[index].unMute();
                } else {
                    players[index].mute();
                }
                break;
                headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
                
        }

        applyRandomBehavior(index);
    }, Math.floor(Math.random() * 15000) + 5000);
}
