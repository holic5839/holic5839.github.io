const sentencesKorean = [
    '가재는 게 편이라',
    '가는 날이 장날이다',
    '가는 말이 고와야 오는 말이 곱다',
    '가지 많은 나무에 바람 잘 날 없다',
    '간에 가 붙고 쓸개에 가 붙는다',
    '갈수록 태산',
    '같은 값이면 다홍치마',
    '개구리 올챙이 적 생각 못한다',
    '개천에서 용 난다',
    '고래 싸움에 새우 등 터진다',
    '공든 탑이 무너지랴',
    '구르는 돌에는 이끼가 끼지 않는다',
    '굴러 온 돌이 박힌 돌 뺀다',
    '그 아버지에 그 아들',
    '금강산도 식후경',
    '급할수록 돌아가라',
    '낮말은 새가 듣고 밤말은 쥐가 듣는다',
    '누워서 떡 먹기',
    '눈 감으면 코 베어 먹을 세상',
    '다 된 밥에 재 뿌리기',
    '달도 차면 기운다',
    '달리는 말에 채찍질',
    '도둑이 제 발 저리다',
    '돌다리도 두들겨 보고 건너라',
    '등잔 밑이 어둡다',
    '땅 짚고 헤엄치기',
    '말 한마디에 천 냥 빚 갚는다',
    '매도 먼저 맞는 게 낫다',
    '모로 가도 서울만 가면 된다',
    '물에 빠지면 지푸라기라도 잡는다',
    '미운 놈 떡 하나 더 준다',
    '바늘 가는 데 실 간다',
    '바람 앞의 등불',
    '백지장도 맞들면 낫다',
    '벼는 익을수록 고개를 숙인다',
    '병 주고 약 준다',
    '보기 좋은 떡이 먹기도 좋다',
    '사공이 많으면 배가 산으로 간다',
    '산 넘어 산',
    '서당 개 삼 년에 풍월을 읊는다',
    '세 살 버릇 여든까지 간다',
    '쇠뿔도 단김에 빼라',
    '식은 죽 먹기',
    '아는 길도 물어서 가라',
    '안 되는 놈은 뒤로 자빠져도 코가 깨진다',
    '아니 땐 굴뚝에 연기 날까',
    '약방에 감초',
    '양반은 가난해도 책은 사서 본다',
    '언 발에 오줌 누기',
    '열 번 찍어 안 넘어가는 나무 없다',
    '오르지 못할 나무는 쳐다보지도 마라',
    '옷이 날개다',
    '우물 안 개구리',
    '울며 겨자 먹기',
    '원숭이도 나무에서 떨어진다',
    '윗물이 맑아야 아랫물이 맑다',
    '이불 밖은 위험해',
    '이 없는 놈이 이를 간다',
    '일찍 일어나는 새가 벌레를 잡는다',
    '자라 보고 놀란 가슴 솥뚜껑 보고 놀란다',
    '잘되면 제 탓, 못되면 조상 탓',
    '작은 고추가 맵다',
    '재수가 없으면 뒤로 자빠져도 코가 깨진다',
    '쥐구멍에도 볕 들 날 있다',
    '지렁이도 밟으면 꿈틀한다',
    '천 리 길도 한 걸음부터',
    '친구 따라 강남 간다',
    '콩 심은 데 콩 나고 팥 심은 데 팥 난다',
    '티끌 모아 태산',
    '하룻강아지 범 무서운 줄 모른다',
    '하늘의 별 따기',
    '호랑이도 제 말 하면 온다',
    '호랑이 굴에 들어가야 호랑이를 잡는다',
    '힘 있는 자가 이긴다',
    '흉년에 죽 쑤어 친다',
    '가는 정이 있어야 오는 정이 있다',
    '가랑비에 옷 젖는 줄 모른다',
    '강 건너 불구경',
    '꿩 대신 닭',
    '남의 떡이 더 커 보인다',
    '낫 놓고 기역 자도 모른다',
    '누워서 침 뱉기',
    '마른하늘에 날벼락',
    '말 속에 뼈가 있다',
    '목마른 놈이 우물 판다',
    '벼룩의 간을 내어 먹는다',
    '불난 집에 부채질한다',
    '빈 수레가 요란하다',
    '서투른 목수가 대패 탓한다',
    '소 잃고 외양간 고친다',
    '아랫돌 빼서 윗돌 괴기',
    '열 길 물속은 알아도 한 길 사람 속은 모른다',
    '자라 보고 놀란 가슴 솥뚜껑 보고 놀란다',
    '작은 고추가 맵다',
    '제 눈의 들보는 못 보고 남의 눈의 티만 본다',
    '제 버릇 개 못 준다',
    '제 꾀에 제가 넘어간다',
    '죽 쒀서 개 준다',
    '집안이 화목하면 천지의 복이 깃든다',
    '쥐구멍에도 볕 들 날이 있다',
    '천리길도 한 걸음부터',
];

const sentencesEnglish = [
    'A bird in the hand is worth two in the bush',
    'A blessing in disguise',
    'A penny saved is a penny earned',
    'Actions speak louder than words',
    'A picture is worth a thousand words',
    'A stitch in time saves nine',
    'All good things come to those who wait',
    'All is fair in love and war',
    'An apple a day keeps the doctor away',
    'Barking dogs seldom bite',
    'Beauty is in the eye of the beholder',
    'Better late than never',
    'Birds of a feather flock together',
    'Cleanliness is next to godliness',
    "Don't bite the hand that feeds you",
    "Don't count your chickens before they hatch",
    "Don't cry over spilled milk",
    "Don't put all your eggs in one basket",
    'Every cloud has a silver lining',
    'Familiarity breeds contempt',
    'Good things come to those who wait',
    'Haste makes waste',
    'Honesty is the best policy',
    "If it ain't broke, don't fix it",
    'Ignorance is bliss',
    'It takes two to tango',
    'Jack of all trades, master of none',
    'Laughter is the best medicine',
    'Look before you leap',
    "Money can't buy happiness",
    'No pain, no gain',
    'Out of sight, out of mind',
    'Practice makes perfect',
    "Rome wasn't built in a day",
    'The early bird catches the worm',
    'The grass is always greener on the other side',
    'The pen is mightier than the sword',
    'The squeaky wheel gets the grease',
    "There's no place like home",
    "Time flies when you're having fun",
    'Too many cooks spoil the broth',
    'Two heads are better than one',
    'When in Rome, do as the Romans do',
    'When the going gets tough, the tough get going',
    "You can't have your cake and eat it too",
    "You can't judge a book by its cover",
    'A chain is only as strong as its weakest link',
    'A friend in need is a friend indeed',
    "A leopard can't change its spots",
    'A rose by any other name would smell as sweet',
    'All that glitters is not gold',
    'An ounce of prevention is worth a pound of cure',
    'Better safe than sorry',
    'Birds of a feather flock together',
    'Brevity is the soul of wit',
    'Charity begins at home',
    'Clean your room before you can clean the world',
    'Curiosity killed the cat',
    "Don't judge a man until you've walked a mile in his shoes",
    "Don't put off until tomorrow what you can do today",
    'Easier said than done',
    'Fool me once, shame on you; fool me twice, shame on me',
    'Good fences make good neighbors',
    'He who laughs last laughs best',
    "If you can't stand the heat, get out of the kitchen",
    'In the land of the blind, the one-eyed man is king',
    'It takes a village to raise a child',
    'Jack and Jill went up the hill',
    'Keep your friends close, but your enemies closer',
    'Killing two birds with one stone',
    'Lend your money and lose your friend',
    'Look before you leap',
    'Money talks',
    'No use crying over spilt milk',
    "One man's trash is another man's treasure",
    'Out of the frying pan, into the fire',
    'Practice what you preach',
    'Raining cats and dogs',
    'Silence is golden',
    'Speak softly and carry a big stick',
    "The apple doesn't fall far from the tree",
    'The best things in life are free',
    'The devil is in the details',
    'The grass is always greener where you water it',
    'The road to hell is paved with good intentions',
    "There's no time like the present",
    'To err is human, to forgive divine',
    "Two wrongs don't make a right",
    'What goes around comes around',
    "You can lead a horse to water, but you can't make it drink",
    "You can't make an omelet without breaking a few eggs",
    'Your guess is as good as mine',
];

let currentSentenceIndex = 0; // 현재 문장 index
let startTime; // 타이핑 시작 시간
let totalKeystrokes = 0; // 입력된 총 키스트로크 수
let intervalId; // setInterval ID
let isTyping = false; // 사용자가 타이핑 중인지 여부
let kpm = 0;

const textToTypeElement = document.getElementById('textToType');
const inputText = document.getElementById('inputText');
const result = document.getElementById('result');
const kpmElement = document.getElementById('kpm');
const elapsedTimeElement = document.getElementById('elapsedTime');
const recordElement = document.getElementById('record');

// 테마, 언어변경용 변수
const savedMode = localStorage.getItem('theme');
const language = localStorage.getItem('language');

const sentences = language === 'english' ? sentencesEnglish : sentencesKorean;

if (savedMode) {
    document.body.classList.toggle('dark-mode', savedMode === 'dark');
}

function changeTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const theme = isDarkMode ? 'dark' : 'light';

    localStorage.setItem('theme', theme);

    drawGaugeGraph('currentGauge', 0, theme);
    drawGaugeGraph('prevGauge', kpm, theme);
    drawGaugeGraph('recordGauge', recordElement.innerText, theme);

    for (let i = 0; i < textToTypeElement.children.length; i++) {
        textToTypeElement.children[i].classList.remove('wrong')
    }
    inputText.value = '';
    resetTimer();
    resetKpm();
}

function changeLanguage() {
    if (language === 'korean') {
        localStorage.setItem('language', 'english');
    } else {
        localStorage.setItem('language', 'korean');
    }
    location.reload();
}

function changeSystemLanguage() {
    console.log('system language');
}

function shuffle(array) {
    // 배열의 마지막 요소부터 반복하면서 무작위 요소와 교환
    for (let i = array.length - 1; i > 0; i--) {
        // 무작위 인덱스 생성
        const j = Math.floor(Math.random() * (i + 1));
        // 현재 요소와 무작위 요소 교환
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function wrapEachCharacterWithSpan(text) {
    return text
      .split('')
      .map(char => `<span>${char}</span>`)
      .join('');
}

// 현재 문장을 화면에 표시
function updateSentence() {
    textToTypeElement.innerHTML = wrapEachCharacterWithSpan(shuffle(sentences)[currentSentenceIndex]);
    resetTimer(); // 새로운 문장 시작 시 타이머 초기화
    inputText.value = ''; // 입력창 초기화
    totalKeystrokes = 0; // 타수 초기화
    kpmElement.innerText = '0'; // KPM 초기화
    result.innerText = ''; // 결과 초기화
    inputText.disabled = false; // 입력창 활성화
    isTyping = false; // 타이핑 중 상태 초기화
}

// 타이머 초기화 함수
function resetTimer() {
    if (intervalId) clearInterval(intervalId); // 타이머가 있으면 중지
    elapsedTimeElement.innerText = '0.00'; // 경과 시간 초기화
    startTime = null; // 시작 시간 초기화
    isTyping = false; // 타이핑 상태 초기화
}

function resetKpm() {
    kpmElement.innerText = '0';
}

// 타이머 시작 함수
function startTimer() {
    startTime = Date.now();
    intervalId = setInterval(updateElapsedTime, 10); // 100ms마다 시간 업데이트
}

// 경과 시간 업데이트 함수 (소숫점 2째자리까지 표시, 밀리초 포함)
function updateElapsedTime() {
    const now = Date.now();
    const elapsedTimeInMilliseconds = now - startTime;
    const elapsedTimeInSeconds = elapsedTimeInMilliseconds / 1000;
    const seconds = Math.floor(elapsedTimeInSeconds);
    const milliseconds = Math.floor((elapsedTimeInMilliseconds % 1000) / 10); // 밀리초를 10ms 단위로 변환

    elapsedTimeElement.innerText = `${seconds}.${milliseconds.toString().padStart(2, '0')}`;
}

// 한글 자모 단위로 분리하여 키 입력 수 계산하는 함수 (한글 전용)
function countKeystrokesKorean(input) {
    const decomposed = input.normalize('NFD');
    return decomposed.replace(/[^\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]/g, '').length;
}

// 영어 알파벳 개수를 계산하는 함수 (영어 전용)
function countKeystrokesEnglish(input) {
    return input.replace(/[^a-zA-Z]/g, '').length;
}

// KPM 계산 함수
function calculateKPM(keystrokes, startTime) {
    const elapsedTimeInMinutes = (Date.now() - startTime) / 1000 / 60;
    return Math.round(keystrokes / elapsedTimeInMinutes);
}

// 한글 여부를 판단하는 함수
function isKorean(text) {
    return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);
}

function resetText(event) {
    if (event.keyCode === 27) {
        for (let i = 0; i < textToTypeElement.children.length; i++) {
            textToTypeElement.children[i].classList.remove('wrong')
        }
        inputText.value = '';
        resetTimer();
        resetKpm();
    }
}

// 문자열 비교
function compareStrings(str1, str2) {
    const minLength = Math.min(str1.length, str2.length);
    const diffIndices = [];
  
    for (let i = 0; i < minLength; i++) {
      if (str1[i] !== str2[i]) {
        diffIndices.push(i); // 다른 인덱스를 저장
      }
    }
  
    // 길이가 다르면, 더 긴 문자열의 나머지 부분도 차이로 간주
    if (str1.length !== str2.length) {
      for (let i = minLength; i < Math.max(str1.length, str2.length); i++) {
        diffIndices.push(i);
      }
    }
  
    // 다른 인덱스가 없으면 -1 반환, 있으면 인덱스 배열 반환
    return diffIndices.length > 0 ? diffIndices : -1;
}

function drawGaugeGraph(id, value, theme) {
    const data = [
        {
          type: "indicator",
          mode: "gauge+number",
          value: value,
          title: { text: "", font: { size: 24 } },
          gauge: {
            axis: { range: [null, 1500], tickvals: [], ticktext: [] , tickwidth: 0, tickcolor: "darkblue" },
            bar: { color: theme === 'dark' ? "white" : "black" },
            bgcolor: "transparent",
            borderwidth: 1,
            bordercolor: theme === 'dark' ? "white" : "black",
          }
        }
      ];
    
    const layout = {
        width: 120,
        height: 120,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        paper_bgcolor: "transparent",
        font: { color: theme === 'dark' ? "white" : "black" }
    };
    Plotly.newPlot(id, data, layout);
}

// 타이핑 시작 시간 기록 및 KPM 업데이트
inputText.addEventListener('input', (event) => {
    const userInput = inputText.value.trim();
    const inputSavedMode = localStorage.getItem('theme');
    let totalKeystrokes;

    drawGaugeGraph('currentGauge', kpm, inputSavedMode);

    if (userInput === '') {
        resetTimer(); // 입력이 없으면 타이머를 초기화
        resetKpm();
        for (let i = 0; i < textToTypeElement.children.length; i++) {
            textToTypeElement.children[i].classList.remove('wrong')
        }
    } else if (!isTyping) {
        // 타이핑이 시작되면 타이머를 시작
        startTimer();
        isTyping = true;
    }

    // 한글이면 자모 분리 후 키 입력 수 계산
    if (isKorean(userInput)) {
        totalKeystrokes = countKeystrokesKorean(userInput);
    }
    // 영어면 알파벳 개수로 키 입력 수 계산
    else {
        totalKeystrokes = countKeystrokesEnglish(userInput);
    }

    // KPM 계산 및 출력 (2자 이상 입력했을 때만)
    if (startTime && totalKeystrokes > 1) {
        kpm = calculateKPM(totalKeystrokes, startTime);
        kpmElement.innerText = `${kpm}`;
    }
});

inputText.addEventListener('keyup', (event) => {
    const inputSavedMode = localStorage.getItem('theme');
    // ESC를 누르면 입력창 초기화
    resetText(event);
    event.preventDefault(); // 기본 Enter 동작 차단

    const userInput = inputText.value; // trim() 제거하여 띄어쓰기도 비교에 포함
    const currentLength = userInput.length;
    const targetSentence = sentences[currentSentenceIndex];

    // 이전 글자에 대한 검증 (현재 글자 입력 후 직전 글자 검증)
    if (currentLength > 1) { // 입력이 하나 이상일 때만 직전 글자를 확인
        const prevIndex = currentLength - 2; // 직전 글자의 인덱스
        if (userInput[prevIndex] !== targetSentence[prevIndex]) {
            textToTypeElement.children[prevIndex].className = 'wrong'; // 직전 글자 오타 시 wrong 추가
        } else {
            textToTypeElement.children[prevIndex].classList.remove('wrong'); // 올바르면 wrong 제거
        }
    }

    // 백스페이스로 글자를 지울 때 'wrong' 클래스 제거
    if (event.keyCode === 8 && currentLength > 0) {
        const lastTypedIndex = currentLength - 1; // 지운 글자의 인덱스
        textToTypeElement.children[lastTypedIndex].classList.remove('wrong');
    }

    // Enter 키로 문장 확인
    if (event.keyCode === 13) {
        if (compareStrings(userInput, targetSentence) == -1) {
            const recordValue = Number(recordElement.innerText) >= kpm ? recordElement.innerText : kpm;

            recordElement.innerText = recordValue;

            result.innerText = '정확합니다!';
            result.className = 'success';

            drawGaugeGraph('recordGauge', recordValue, inputSavedMode);
            drawGaugeGraph('prevGauge', kpm, inputSavedMode);
            drawGaugeGraph('currentGauge', 0, inputSavedMode);

            // 다음 문장으로 이동
            currentSentenceIndex++;
            updateSentence();
            inputText.value = '';
        } else {
            result.innerText = '틀렸습니다. 다시 시도해보세요.';
            result.className = 'error';
        }
    }
});




// 페이지 로드 시 첫 번째 문장 설정
updateSentence();
drawGaugeGraph('currentGauge', 0, savedMode);
drawGaugeGraph('prevGauge', 0, savedMode);
drawGaugeGraph('recordGauge', 0, savedMode);