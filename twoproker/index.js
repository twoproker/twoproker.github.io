// 食物数据
const defaultFoods = [
    // 南方家常菜
    { name: "红烧肉", type: "南方家常菜", desc: "色泽红亮，肥而不腻，入口即化", icon: "🍖" },
    { name: "清蒸鲈鱼", type: "南方家常菜", desc: "鲜嫩爽滑，清淡可口", icon: "🐟" },
    { name: "糖醋排骨", type: "南方家常菜", desc: "酸甜适中，外酥里嫩", icon: "🍖" },
    { name: "麻婆豆腐", type: "南方家常菜", desc: "麻辣鲜香，口感滑嫩", icon: "🧈" },
    { name: "宫保鸡丁", type: "南方家常菜", desc: "麻辣酸甜，鲜香爽口", icon: "🍗" },
    
    // 北方家常菜
    { name: "京酱肉丝", type: "北方家常菜", desc: "酱香浓郁，咸甜适中", icon: "🍖" },
    { name: "锅包肉", type: "北方家常菜", desc: "色泽金黄，外酥里嫩", icon: "🍖" },
    { name: "地三鲜", type: "北方家常菜", desc: "鲜爽适口，营养丰富", icon: "🍆" },
    { name: "猪肉炖粉条", type: "北方家常菜", desc: "肉烂粉滑，汤汁浓郁", icon: "🍖" },
    { name: "小鸡炖蘑菇", type: "北方家常菜", desc: "鸡肉鲜嫩，蘑菇香浓", icon: "🍄" },
    
    // 南北方小吃名吃
    { name: "北京烤鸭", type: "北方名吃", desc: "外皮酥脆，肉质鲜嫩", icon: "🦆" },
    { name: "狗不理包子", type: "北方名吃", desc: "皮薄馅大，鲜香不腻", icon: "🥟" },
    { name: "羊肉泡馍", type: "北方名吃", desc: "汤浓肉烂，馍筋爽口", icon: "🍲" },
    { name: "煎饼果子", type: "北方名吃", desc: "外软内脆，酱香浓郁", icon: "🌯" },
    { name: "小笼包", type: "南方名吃", desc: "皮薄馅多，汤汁鲜美", icon: "🥟" },
    
    // 国际美食
    { name: "披萨", type: "西餐", desc: "饼底酥脆，配料丰富", icon: "🍕" },
    { name: "汉堡", type: "西餐", desc: "面包松软，肉饼多汁", icon: "🍔" },
    { name: "寿司", type: "日料", desc: "米饭软糯，鱼生鲜美", icon: "🍣" },
    { name: "拉面", type: "日料", desc: "汤底浓郁，面条筋道", icon: "🍜" },
    { name: "炸鸡", type: "韩餐", desc: "外酥里嫩，香辣可口", icon: "🍗" }
];

// 音频数据
const audioFiles = {
    audio1: "881122/music/20251024_203403.wav",
    audio2: "881122/music/20251025_201314.wav",
    audio3: "881122/music/20251027_230404.wav",
    audio4: "881122/music/20251028_211620.wav",
    audio5: "881122/music/20251104_225301.wav"
};

// 歌曲数据
const songFiles = {
    song1: "881122/video/微信视频2025-11-06_144602_912.mp4",
    song2: "881122/video/微信视频2025-11-06_144611_577.mp4",
    song3: "881122/video/微信视频2025-11-06_144717_261.mp4",
    song4: "881122/video/mmexport1762412219214.mp4",
    song5: "881122/video/mmexport1762412203986.mp4"
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航
    initNavigation();
    
    // 初始化回到顶部按钮
    initToTopButton();
    
    // 初始化食物推荐
    initFoodRecommendation();
    
    // 初始化媒体播放
    initMediaPlayers();
    
    // 初始化日历
    initCalendar();
    
    // 初始化记事本
    initNotebook();
});

// 初始化导航
function initNavigation() {
    // 场景切换
    document.querySelectorAll('.nav-btn[data-scene]').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetScene = this.getAttribute('data-scene');
            showScene(targetScene);
            
            // 添加果冻动画
            this.classList.add('jelly');
            setTimeout(() => {
                this.classList.remove('jelly');
            }, 500);
        });
    });
    
    // 返回按钮
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetScene = this.getAttribute('data-back');
            showScene(targetScene);
        });
    });
    
    // 看剧按钮
    document.getElementById('watchDrama').addEventListener('click', function() {
        window.open('https://v.ikanbot.com/', '_blank');
    });
}

// 显示场景
function showScene(sceneId) {
    // 隐藏所有场景
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });
    
    // 显示目标场景
    let targetElement;
    if (sceneId === 'main') {
        targetElement = document.getElementById('mainScene');
    } else {
        targetElement = document.getElementById(sceneId + 'Scene');
    }
    
    if (targetElement) {
        targetElement.classList.add('active');
        
        // 滚动到顶部
        window.scrollTo(0, 0);
    }
}

// 初始化回到顶部按钮
function initToTopButton() {
    const toTopBtn = document.getElementById('toTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    });
    
    toTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 初始化食物推荐
function initFoodRecommendation() {
    const foodName = document.getElementById('foodName');
    const foodType = document.getElementById('foodType');
    const foodDesc = document.getElementById('foodDesc');
    const foodIcon = document.querySelector('.food-icon');
    const randomFoodBtn = document.getElementById('randomFoodBtn');
    
    function getRandomFood() {
        const randomIndex = Math.floor(Math.random() * defaultFoods.length);
        const selectedFood = defaultFoods[randomIndex];
        
        foodName.textContent = selectedFood.name;
        foodType.textContent = selectedFood.type;
        foodDesc.textContent = selectedFood.desc;
        foodIcon.textContent = selectedFood.icon;
    }
    
    randomFoodBtn.addEventListener('click', getRandomFood);
    
    // 初始显示一个随机食物
    getRandomFood();
}

// 初始化媒体播放
function initMediaPlayers() {
    // 歌曲播放
    document.querySelectorAll('.nav-btn[data-song]').forEach(btn => {
        btn.addEventListener('click', function() {
            const songId = this.getAttribute('data-song');
            const videoPlayer = document.getElementById('videoPlayer');
            const musicPlayer = document.getElementById('musicPlayer');
            
            videoPlayer.src = songFiles[songId];
            musicPlayer.style.display = 'block';
            
            // 滚动到播放器
            musicPlayer.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 关闭音乐播放器
    document.getElementById('closeMusic').addEventListener('click', function() {
        const videoPlayer = document.getElementById('videoPlayer');
        const musicPlayer = document.getElementById('musicPlayer');
        
        videoPlayer.pause();
        videoPlayer.src = '';
        musicPlayer.style.display = 'none';
    });
    
    // 音频播放
    document.querySelectorAll('.nav-btn[data-audio]').forEach(btn => {
        btn.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio');
            const relaxAudio = document.getElementById('relaxAudio');
            const audioPlayerContainer = document.getElementById('audioPlayerContainer');
            
            relaxAudio.src = audioFiles[audioId];
            audioPlayerContainer.style.display = 'block';
            
            // 滚动到播放器
            audioPlayerContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 关闭音频播放器
    document.getElementById('closeAudio').addEventListener('click', function() {
        const relaxAudio = document.getElementById('relaxAudio');
        const audioPlayerContainer = document.getElementById('audioPlayerContainer');
        
        relaxAudio.pause();
        relaxAudio.src = '';
        audioPlayerContainer.style.display = 'none';
    });
}

// 初始化日历
function initCalendar() {
    const calendar = document.getElementById('calendar');
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const addEventBtn = document.getElementById('addEventBtn');
    const eventInput = document.getElementById('eventInput');
    
    let currentDate = new Date();
    
    function generateCalendar() {
        // 清空日历
        calendar.innerHTML = '';
        
        // 添加星期标题
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        weekdays.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });
        
        // 获取当前月份的第一天和最后一天
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        
        // 更新月份显示
        currentMonthElement.textContent = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`;
        
        // 添加空白日期
        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day';
            calendar.appendChild(emptyDay);
        }
        
        // 添加日期
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day';
            day.textContent = i;
            
            // 添加点击事件
            day.addEventListener('click', function() {
                alert(`选择了 ${currentDate.getMonth() + 1}月${i}日`);
            });
            
            calendar.appendChild(day);
        }
    }
    
    // 月份切换
    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar();
    });
    
    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar();
    });
    
    // 添加事件
    addEventBtn.addEventListener('click', function() {
        if (eventInput.value.trim()) {
            alert(`事件 "${eventInput.value}" 已添加到日历`);
            eventInput.value = '';
        } else {
            alert('请输入事件内容');
        }
    });
    
    generateCalendar();
}

// 初始化记事本
function initNotebook() {
    const noteEditor = document.getElementById('noteEditor');
    const fontControls = document.querySelectorAll('.font-btn');
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    
    // 加载保存的笔记
    const savedNote = localStorage.getItem('userNote');
    if (savedNote) {
        noteEditor.value = savedNote;
    }
    
    // 字体控制
    fontControls.forEach(control => {
        control.addEventListener('click', function() {
            const fontStyle = this.getAttribute('data-font');
            
            switch(fontStyle) {
                case 'small':
                    noteEditor.style.fontSize = '14px';
                    break;
                case 'medium':
                    noteEditor.style.fontSize = '16px';
                    break;
                case 'large':
                    noteEditor.style.fontSize = '18px';
                    break;
                case 'bold':
                    noteEditor.style.fontWeight = noteEditor.style.fontWeight === 'bold' ? 'normal' : 'bold';
                    break;
                case 'italic':
                    noteEditor.style.fontStyle = noteEditor.style.fontStyle === 'italic' ? 'normal' : 'italic';
                    break;
                case 'underline':
                    noteEditor.style.textDecoration = noteEditor.style.textDecoration === 'underline' ? 'none' : 'underline';
                    break;
            }
        });
    });
    
    // 保存笔记
    saveNoteBtn.addEventListener('click', function() {
        localStorage.setItem('userNote', noteEditor.value);
        alert('笔记已保存！');
    });
}
document.addEventListener('DOMContentLoaded', function() {
            const openButton = document.getElementById('openQqMusic');
            const statusMessage = document.getElementById('statusMessage');
            const statusText = document.getElementById('statusText');
            
            // QQ音乐客户端URL Scheme（多种方案提高兼容性）
            const qqMusicSchemes = [
                'qqmusic://',                  // 主协议
                'tencentmusic://',             // 备用协议
                'qqmusicapi://launch',         // 启动协议
                'qqmusic://launch'             // 简化启动协议
            ];
            
            openButton.addEventListener('click', function() {
                // 显示加载状态
                statusMessage.className = 'status-message status-loading';
                statusText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>正在尝试打开QQ音乐...';
                
                // 尝试所有URL Scheme
                let schemeIndex = 0;
                const tryNextScheme = () => {
                    if (schemeIndex < qqMusicSchemes.length) {
                        const scheme = qqMusicSchemes[schemeIndex];
                        schemeIndex++;
                        
                        // 创建隐藏的a标签触发跳转
                        const link = document.createElement('a');
                        link.href = scheme;
                        link.target = '_blank';
                        document.body.appendChild(link);
                        
                        // 触发点击
                        link.click();
                        document.body.removeChild(link);
                        
                        // 检查是否成功（通过定时器判断）
                        setTimeout(() => {
                            // 如果是最后一个方案且仍未成功，提示并提供网页版链接
                            if (schemeIndex === qqMusicSchemes.length) {
                                statusMessage.className = 'status-message status-error';
                                statusText.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>未检测到QQ音乐客户端，可点击下方链接访问网页版';
                            } else {
                                // 尝试下一个Scheme
                                tryNextScheme();
                            }
                        }, 800);
                    }
                };
                
                tryNextScheme();
                
                // 监听页面可见性变化（判断是否成功唤起）
                const handleVisibilityChange = () => {
                    if (document.hidden) {
                        // 页面被隐藏，说明可能成功唤起了客户端
                        statusMessage.className = 'status-message status-success';
                        statusText.innerHTML = '<i class="fas fa-check-circle mr-2"></i>QQ音乐已成功打开！';
                    }
                };
                
                document.addEventListener('visibilitychange', handleVisibilityChange);
                
                // 5秒后移除监听（防止内存泄漏）
                setTimeout(() => {
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                }, 5000);
            });
            
            // 返回按钮功能（保持原有逻辑）
            const backBtn = document.querySelector('.back-btn');
            backBtn.addEventListener('click', function() {
                const target = this.getAttribute('data-back');
                // 这里可根据实际项目添加返回逻辑，例如：
                // window.location.href = `/${target}.html`;
                // 或 history.back();
                console.log(`返回至${target}页面`);
            });
        });