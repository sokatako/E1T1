let isMuted = false;
let isPlaying = false;  // 追蹤音樂是否正在播放

function playAudio() {
    const audio = document.getElementById('bgMusic');
    if (!isPlaying) {  // 只在音樂未播放時執行
        audio.volume = 0.5;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
            }).catch(error => {
                console.log("自動播放失敗:", error);
                // 只在第一次點擊時播放
                document.body.addEventListener('click', function clickHandler() {
                    if (!isPlaying) {
                        audio.play();
                        isPlaying = true;
                        // 移除事件監聽器
                        document.body.removeEventListener('click', clickHandler);
                    }
                });
            });
        }
    }
}
function toggleMute() {
    const audio = document.getElementById('bgMusic');
    const muteBtn = document.getElementById('muteBtn');
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
}

// 事件監聽器
window.addEventListener('load', playAudio);
window.addEventListener('beforeunload', function() {
    const audio = document.getElementById('bgMusic');
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
});

// 當音樂結束時重設狀態
document.getElementById('bgMusic').addEventListener('ended', function() {
    isPlaying = false;
});