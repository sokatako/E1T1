let isMuted = false;
let isPlaying = false;  // 追蹤音樂是否正在播放

// 播放音樂的函數
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

// 切換靜音和解除靜音
function toggleMute() {
    const audio = document.getElementById('bgMusic');
    const muteBtn = document.getElementById('muteBtn');
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
}

// 頁面加載時播放音樂
window.addEventListener('load', playAudio);

// 當頁面卸載時停止播放音樂
window.addEventListener('beforeunload', function() {
    const audio = document.getElementById('bgMusic');
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
});

// 當音樂結束時重設播放狀態
document.getElementById('bgMusic').addEventListener('ended', function() {
    isPlaying = false;
});
