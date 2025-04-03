async function getEnterpriseFingerprint() {
    const fingerprint = {};

    // User-Agent & System Info
    fingerprint.userAgent = navigator.userAgent;
    fingerprint.platform = navigator.platform;
    fingerprint.language = navigator.language;

    // Screen & GPU Details
    fingerprint.screen = `${screen.width}x${screen.height}`;
    fingerprint.gpu = getGPUFingerprint();

    // WebRTC IP Leak Detection (VPN/Proxy Check)
    fingerprint.webrtcIP = await detectWebRTC();

    // Hardware-Level Fingerprinting (BIOS, TPM, Motherboard ID)
    fingerprint.hardwareID = await getHardwareFingerprint();

    // Battery & Bluetooth Status (Unique Per Device)
    fingerprint.battery = await getBatteryStatus();
    fingerprint.bluetooth = await getBluetoothStatus();

    // Network Speed Fingerprinting
    fingerprint.networkSpeed = await getNetworkSpeed();

    // AI-Based Behavioral Tracking (Mouse Speed, Keystroke Dynamics)
    fingerprint.behavior = trackUserBehavior();

    // Send Data to Server for AI Detection
    sendDataToServer(fingerprint);
}

// GPU Fingerprint (Detect Virtual Machines & Spoofing)
function getGPUFingerprint() {
    let gl = document.createElement('canvas').getContext('webgl');
    let debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}

// WebRTC Leak Detection (Detect VPN/Proxy)
async function detectWebRTC() {
    return new Promise((resolve) => {
        const rtc = new RTCPeerConnection({ iceServers: [] });
        rtc.createDataChannel('');
        rtc.createOffer().then((offer) => rtc.setLocalDescription(offer));
        rtc.onicecandidate = (event) => {
            if (event && event.candidate && event.candidate.candidate) {
                resolve(event.candidate.candidate);
            } else {
                resolve(null);
            }
        };
    });
}

// Hardware-Level Fingerprinting (BIOS, Motherboard, TPM)
async function getHardwareFingerprint() {
    if (navigator.userAgent.includes("Windows")) {
        return new Promise((resolve) => {
            resolve(navigator.hardwareConcurrency.toString() + "-" + navigator.deviceMemory);
        });
    } else {
        return "Not Available";
    }
}

// Battery Fingerprinting (Unique Battery Signature)
async function getBatteryStatus() {
    return new Promise((resolve) => {
        navigator.getBattery().then(battery => {
            resolve(`Charging: ${battery.charging}, Level: ${battery.level}`);
        });
    });
}

// Bluetooth Fingerprinting (Detecting Nearby Devices)
async function getBluetoothStatus() {
    try {
        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        return device.name;
    } catch (error) {
        return "No Bluetooth";
    }
}

// Network Speed Fingerprinting (Unique Per ISP & Location)
async function getNetworkSpeed() {
    let startTime = performance.now();
    await fetch("https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_92x30dp.png");
    let endTime = performance.now();
    return endTime - startTime;
}

// AI-Based Behavioral Tracking (Mouse Speed, Keystroke Dynamics)
function trackUserBehavior() {
    let mouseSpeed = 0;
    let keystrokeSpeed = 0;

    document.addEventListener("mousemove", (event) => {
        mouseSpeed += Math.abs(event.movementX) + Math.abs(event.movementY);
    });

    document.addEventListener("keydown", (event) => {
        keystrokeSpeed++;
    });

    return { mouseSpeed, keystrokeSpeed };
}

// Send Data to AI Detection System
function sendDataToServer(fingerprint) {
    fetch("/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fingerprint),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "blocked") {
            alert("Suspicious activity detected! Access Denied.");
        }
    });
}

// Execute Fingerprinting
getEnterpriseFingerprint();
function detectBots() {
    let botDetected = false;

    // Detect Headless Browsers & Bots
    if (navigator.webdriver || !window.matchMedia) botDetected = true;

    // Detect Missing Plugins (Bots Don't Load Plugins)
    if (navigator.plugins.length === 0) botDetected = true;

    // AI Honeypot Trap (Fake Clicks, Time Analysis)
    let startTime = Date.now();
    window.addEventListener("mousemove", function () {
        if (Date.now() - startTime < 100) botDetected = true;
    });

    // Take Action
    if (botDetected) {
        alert("Bot detected! Access denied.");
        window.location.href = "/blocked";
    }
}

// Run Bot Detection
detectBots();
async function getAdvancedFingerprint() {
    const fingerprint = {};

    // User-Agent & System Info
    fingerprint.userAgent = navigator.userAgent;
    fingerprint.platform = navigator.platform;
    fingerprint.language = navigator.language;

    // Screen & GPU Details
    fingerprint.screen = `${screen.width}x${screen.height}`;
    fingerprint.gpu = getGPUFingerprint();

    // WebRTC IP Leak Detection (VPN/Proxy Check)
    fingerprint.webrtcIP = await detectWebRTC();

    // Hardware-Level Fingerprinting (BIOS, TPM, Motherboard ID)
    fingerprint.hardwareID = await getHardwareFingerprint();

    // Battery & Bluetooth Status (Unique Per Device)
    fingerprint.battery = await getBatteryStatus();
    fingerprint.bluetooth = await getBluetoothStatus();

    // Behavioral Analysis (Mouse Tracking, Keystroke Speed)
    fingerprint.behavior = trackUserBehavior();

    // Send Data to Server for AI Detection
    sendDataToServer(fingerprint);
}

// GPU Fingerprint (Detect Virtual Machines & Spoofing)
function getGPUFingerprint() {
    let gl = document.createElement('canvas').getContext('webgl');
    let debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}

// WebRTC Leak Detection (Detect VPN/Proxy)
async function detectWebRTC() {
    return new Promise((resolve) => {
        const rtc = new RTCPeerConnection({ iceServers: [] });
        rtc.createDataChannel('');
        rtc.createOffer().then((offer) => rtc.setLocalDescription(offer));
        rtc.onicecandidate = (event) => {
            if (event && event.candidate && event.candidate.candidate) {
                resolve(event.candidate.candidate);
            } else {
                resolve(null);
            }
        };
    });
}

// Hardware-Level Fingerprinting (BIOS, Motherboard, TPM)
async function getHardwareFingerprint() {
    if (navigator.userAgent.includes("Windows")) {
        return new Promise((resolve) => {
            resolve(navigator.hardwareConcurrency.toString() + "-" + navigator.deviceMemory);
        });
    } else {
        return "Not Available";
    }
}

// Battery Fingerprinting (Unique Battery Signature)
async function getBatteryStatus() {
    return new Promise((resolve) => {
        navigator.getBattery().then(battery => {
            resolve(`Charging: ${battery.charging}, Level: ${battery.level}`);
        });
    });
}

// Bluetooth Fingerprinting (Detecting Nearby Devices)
async function getBluetoothStatus() {
    try {
        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        return device.name;
    } catch (error) {
        return "No Bluetooth";
    }
}

// Behavioral Tracking (Mouse Speed, Keystroke Dynamics)
function trackUserBehavior() {
    let mouseSpeed = 0;
    let keystrokeSpeed = 0;

    document.addEventListener("mousemove", (event) => {
        mouseSpeed += Math.abs(event.movementX) + Math.abs(event.movementY);
    });

    document.addEventListener("keydown", (event) => {
        keystrokeSpeed++;
    });

    return { mouseSpeed, keystrokeSpeed };
}

// Send Data to AI Detection System
function sendDataToServer(fingerprint) {
    fetch("/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fingerprint),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "blocked") {
            alert("Suspicious activity detected! Access Denied.");
        }
    });
}

// Execute Fingerprinting
getAdvancedFingerprint();
function detectBots() {
    let botDetected = false;

    // Detect Hidden Browser Behavior
    if (navigator.webdriver || !window.matchMedia) botDetected = true;

    // Detect Missing Plugins (Bots Don't Load Plugins)
    if (navigator.plugins.length === 0) botDetected = true;

    // Detect Fake User Inputs
    let hiddenField = document.createElement("input");
    hiddenField.type = "hidden";
    hiddenField.name = "bot_check";
    document.body.appendChild(hiddenField);
    if (hiddenField.value !== "") botDetected = true;

    // AI Honeypot Trap (Fake Clicks, Time Analysis)
    let startTime = Date.now();
    window.addEventListener("mousemove", function () {
        if (Date.now() - startTime < 100) botDetected = true;
    });

    // Take Action
    if (botDetected) {
        alert("Bot detected! Access denied.");
        window.location.href = "/blocked";
    }
}

// Run Bot Detection
detectBots();
async function getAdvancedFingerprint() {
    const fingerprint = {};

    // User-Agent & Platform Tracking
    fingerprint.userAgent = navigator.userAgent;
    fingerprint.platform = navigator.platform;

    // Screen & GPU Detection
    fingerprint.screen = `${screen.width}x${screen.height}`;
    fingerprint.gpu = getGPUFingerprint();

    // WebRTC, Canvas & Audio Fingerprinting
    fingerprint.webrtcIP = await detectWebRTC();
    fingerprint.canvas = getCanvasFingerprint();
    fingerprint.audio = getAudioFingerprint();

    // Timezone, Locale, Language
    fingerprint.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    fingerprint.language = navigator.language;

    // Send Data to Server for AI-Based Analysis
    sendDataToServer(fingerprint);
}

// GPU Fingerprint (Detect Virtual Machines & Bots)
function getGPUFingerprint() {
    let gl = document.createElement('canvas').getContext('webgl');
    let debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}

// WebRTC Leak Detection (Detect VPN/Proxy)
async function detectWebRTC() {
    return new Promise((resolve) => {
        const rtc = new RTCPeerConnection({ iceServers: [] });
        rtc.createDataChannel('');
        rtc.createOffer().then((offer) => rtc.setLocalDescription(offer));
        rtc.onicecandidate = (event) => {
            if (event && event.candidate && event.candidate.candidate) {
                resolve(event.candidate.candidate);
            } else {
                resolve(null);
            }
        };
    });
}

// Canvas Fingerprinting (Detect Fake Browsers)
function getCanvasFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = "14px 'Arial'";
    ctx.fillText("Hello, Fingerprint!", 2, 2);
    return canvas.toDataURL();
}

// Audio Fingerprinting (Detect Spoofed Audio Settings)
function getAudioFingerprint() {
    let context = new (window.AudioContext || window.webkitAudioContext)();
    let oscillator = context.createOscillator();
    oscillator.frequency.value = 1000;
    let compressor = context.createDynamicsCompressor();
    oscillator.connect(compressor);
    return compressor.threshold.value;
}

// Send Data to Backend for AI Analysis
function sendDataToServer(fingerprint) {
    fetch("/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fingerprint),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "blocked") {
            alert("Suspicious activity detected! Access Denied.");
        }
    });
}

// Execute Fingerprinting
getAdvancedFingerprint();
function detectBots() {
    let botDetected = false;

    // Detect Hidden Browser Behavior
    if (navigator.webdriver || !window.matchMedia) botDetected = true;

    // Detect Missing Plugins (Bots Don't Load Plugins)
    if (navigator.plugins.length === 0) botDetected = true;

    // Detect Mouse Movement (Bots Move Instantly)
    let lastMouseTime = new Date().getTime();
    document.addEventListener("mousemove", () => {
        let now = new Date().getTime();
        if (now - lastMouseTime < 50) botDetected = true;
        lastMouseTime = now;
    });

    // Detect Fake User Inputs
    let hiddenField = document.createElement("input");
    hiddenField.type = "hidden";
    hiddenField.name = "bot_check";
    document.body.appendChild(hiddenField);
    if (hiddenField.value !== "") botDetected = true;

    // Take Action
    if (botDetected) {
        alert("Bot detected! Access denied.");
        window.location.href = "/blocked";
    }
}

// Run Bot Detection
detectBots();
function detectAutomation() {
    let isAutomated = false;

    // Detect Headless Browsers
    if (navigator.webdriver) {
        isAutomated = true;
    }

    // Detect Chrome DevTools
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        isAutomated = true;
    });

    // Detect Missing Plugins
    if (navigator.plugins.length === 0) {
        isAutomated = true;
    }

    return isAutomated;
}

if (detectAutomation()) {
    alert("Bot detected! Access Denied.");
}
async function getFingerprint() {
    const fingerprint = {};
    
    // User-Agent Tracking
    fingerprint.userAgent = navigator.userAgent;
    
    // Screen Resolution
    fingerprint.screenResolution = `${screen.width}x${screen.height}`;
    
    // Timezone Detection
    fingerprint.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // WebRTC IP Leak Detection
    fingerprint.webrtcIP = await detectWebRTC();
    
    // Canvas Fingerprinting
    fingerprint.canvas = getCanvasFingerprint();
    
    console.log(fingerprint);
    return fingerprint;
}

// WebRTC Leak Detection
async function detectWebRTC() {
    return new Promise((resolve) => {
        const rtc = new RTCPeerConnection({ iceServers: [] });
        rtc.createDataChannel('');
        rtc.createOffer().then((offer) => rtc.setLocalDescription(offer));
        rtc.onicecandidate = (event) => {
            if (event && event.candidate && event.candidate.candidate) {
                resolve(event.candidate.candidate);
            } else {
                resolve(null);
            }
        };
    });
}

// Canvas Fingerprinting
function getCanvasFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = "14px 'Arial'";
    ctx.fillText("Hello, Fingerprint!", 2, 2);
    return canvas.toDataURL();
}

// Call Function
getFingerprint();
// Firebase Config
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
                macchanger -r eth0
                proxychains firefox google.com
                from selenium import webdriver
options = webdriver.ChromeOptions()
options.add_argument("--disable-blink-features=AutomationControlled")
                
        }

        applyRandomBehavior(index);
    }, Math.floor(Math.random() * 15000) + 5000);
}

// Keep video playing in background
document.addEventListener("visibilitychange", function() {
    if (!document.hidden) {
        players.forEach(player => player.playVideo());
    }
});
