const sentences = [
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

let currentSentenceIndex = 0;
let startTime; // 타이핑 시작 시간
let totalKeystrokes = 0; // 입력된 총 키스트로크 수
let intervalId; // setInterval ID
let isTyping = false; // 사용자가 타이핑 중인지 여부

const textToTypeElement = document.getElementById('textToType');
const inputText = document.getElementById('inputText');
const result = document.getElementById('result');
const kpmElement = document.getElementById('kpm');
const elapsedTimeElement = document.getElementById('elapsedTime');

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

// 현재 문장을 화면에 표시
function updateSentence() {
    textToTypeElement.innerText = shuffle(sentences)[currentSentenceIndex];
    resetTimer(); // 새로운 문장 시작 시 타이머 초기화
    inputText.value = ''; // 입력창 초기화
    totalKeystrokes = 0; // 타수 초기화
    kpmElement.innerText = ''; // KPM 초기화
    result.innerText = ''; // 결과 초기화
    inputText.disabled = false; // 입력창 활성화
    isTyping = false; // 타이핑 중 상태 초기화
}

// 타이머 초기화 함수
function resetTimer() {
    if (intervalId) clearInterval(intervalId); // 타이머가 있으면 중지
    elapsedTimeElement.innerText = '경과 시간: 0.00초'; // 경과 시간 초기화
    startTime = null; // 시작 시간 초기화
    isTyping = false; // 타이핑 상태 초기화
}

// 타이머 시작 함수
function startTimer() {
    startTime = Date.now();
    intervalId = setInterval(updateElapsedTime, 100); // 100ms마다 시간 업데이트
}

// 경과 시간 업데이트 함수 (소숫점 2째자리까지 표시, 밀리초 포함)
function updateElapsedTime() {
    const now = Date.now();
    const elapsedTimeInMilliseconds = now - startTime;
    const elapsedTimeInSeconds = elapsedTimeInMilliseconds / 1000;
    const seconds = Math.floor(elapsedTimeInSeconds);
    const milliseconds = Math.floor((elapsedTimeInMilliseconds % 1000) / 10); // 밀리초를 10ms 단위로 변환

    elapsedTimeElement.innerText = `경과 시간: ${seconds}.${milliseconds.toString().padStart(2, '0')}초`;
}

// 한글 자모 단위로 분리하여 키 입력 수 계산하는 함수
function countKeystrokes(input) {
    const decomposed = input.normalize('NFD');
    return decomposed.replace(/[^\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]/g, '').length;
}

// KPM 계산 함수
function calculateKPM(keystrokes, startTime) {
    const elapsedTimeInMinutes = (Date.now() - startTime) / 1000 / 60;
    return Math.round(keystrokes / elapsedTimeInMinutes);
}

// 타이핑 시작 시간 기록 및 KPM 업데이트
inputText.addEventListener('input', (event) => {
    const userInput = inputText.value.trim();

    if (userInput === '') {
        resetTimer(); // 입력이 없으면 타이머를 초기화
    } else if (!isTyping) {
        // 타이핑이 시작되면 타이머를 시작
        startTimer();
        isTyping = true;
    }

    // 자모 분리된 실제 키 입력 수를 계산
    totalKeystrokes = countKeystrokes(userInput);

    // KPM 계산 및 출력 (2번 이상 키 입력했을 때만)
    if (startTime && totalKeystrokes > 1) {
        const kpm = calculateKPM(totalKeystrokes, startTime);
        kpmElement.innerText = `현재 타수: ${kpm}타 / 분`;
    }
});

// Enter 키를 눌러 문장 확인
inputText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // 기본 Enter 동작 차단
        const userInput = inputText.value.trim();

        if (userInput === sentences[currentSentenceIndex]) {
            result.innerText = '정확합니다!';
            result.className = 'success';

            // 다음 문장으로 이동
            currentSentenceIndex++;
            if (currentSentenceIndex < sentences.length) {
                updateSentence(); // 문장이 바뀔 때마다 시간과 타수 초기화
            } else {
                result.innerText = '모든 문장을 완료했습니다!';
                inputText.disabled = true;
                resetTimer(); // 모든 문장을 완료했을 때 시간 업데이트 중지
            }
        } else {
            result.innerText = '틀렸습니다. 다시 시도해보세요.';
            result.className = 'error';
        }
    }
});

// 페이지 로드 시 첫 번째 문장 설정
updateSentence();
