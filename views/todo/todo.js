const inputText = document.querySelector('input');
const list = document.querySelector('.list-group');
const allChecked = document.querySelector('.i-checks');
const tapped = document.querySelector('.nav');
const clearCompleted = document.querySelector('.text-right');

// list 새로 그리기
newRenderHtml = () => {
    todos.forEach((todo) => {
        let checked = todo.completed ? 'checked' : '';
        list.innerHTML +=
            '<li class="list-group-item">' +
            '<div class="hover-anchor">' +
            '<a class="hover-action text-muted">' +
            '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' +
            todo.id +
            '"></span></a><label class="i-checks" for="' +
            todo.id +
            '">' +
            '<input type="checkbox" id="' +
            todo.id +
            '"' +
            checked +
            '><i></i>' +
            '<span>' +
            todo.content +
            '</span>' +
            '</label></div></li>';
    });
};

// 키보드로 값 입력하기
inputText.addEventListener('keyup', function (e) {
    if (inputText.value === '' || e.keyCode !== 13) return;
    if (e.target.nextSibling.nextSibling.lastElementChild.className === 'active') allTab();
    let result = todos.map((todo) => todo.id);
    let maxId = todos.length === 0 ? 1 : Math.max.apply(null, result) + 1;
    todos.unshift({ id: maxId, content: inputText.value, completed: false });

    list.innerHTML =
        '<li class="list-group-item">' +
        '<div class="hover-anchor">' +
        '<a class="hover-action text-muted">' +
        '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' +
        maxId +
        '"></span></a><label class="i-checks" for="' +
        maxId +
        '">' +
        '<input type="checkbox" id="' +
        maxId +
        '"' +
        false +
        '><i></i>' +
        '<span>' +
        inputText.value +
        '</span>' +
        '<label></div></li>' +
        list.innerHTML;
    inputText.value = '';
    itemCount();
    console.log(todos);
});

// all Tab 눌렀을 때
allTab = () => {
    todos.forEach((todo) => {
        tapped.innerHTML =
            '<li id="all" class="active"><a>All</a></li>' + '<li id="active" ><a>Active</a></li>' + '<li id="completed"><a>Completed</a></li>';
        list.innerHTML = '';
        newRenderHtml();
        console.log(todos);
    });
};

// active Tab 눌렀을 때
activeTab = () => {
    list.innerHTML = ''; //todos 안에다가 선언하면 안되는데 돌때마다 초기화를 해버려서 마지막 항목만 뜬다.
    todos.forEach(function (todo) {
        let checked = todo.completed ? 'checked' : '';

        tapped.innerHTML =
            '<li id="all"><a>All</a></li>' + '<li id="active" class="active"><a>Active</a></li>' + '<li id="completed"><a>Completed</a></li>';

        if (todo.completed !== true) {
            list.innerHTML +=
                '<li class="list-group-item">' +
                '<div class="hover-anchor">' +
                '<a class="hover-action text-muted">' +
                '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' +
                todo.id +
                '"></span></a><label class="i-checks" for="' +
                todo.id +
                '">' +
                '<input type="checkbox" id="' +
                todo.id +
                '"' +
                checked +
                '><i></i>' +
                '<span>' +
                todo.content +
                '</span>' +
                '</label></div></li>';
        }
    });
    console.log(todos);
};

// completed Tab 눌렀을 때
completedTab = () => {
    list.innerHTML = '';
    todos.forEach((todo) => {
        let checked = todo.completed ? 'checked' : '';
        tapped.innerHTML =
            '<li id="all"><a>All</a></li>' + '<li id="active" ><a>Active</a></li>' + '<li id="completed" class="active"><a>Completed</a></li>';

        if (todo.completed !== false) {
            list.innerHTML +=
                '<li class="list-group-item">' +
                '<div class="hover-anchor">' +
                '<a class="hover-action text-muted">' +
                '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' +
                todo.id +
                '"></span></a><label class="i-checks" for="' +
                todo.id +
                '">' +
                '<input type="checkbox" id="' +
                todo.id +
                '"' +
                checked +
                '><i></i>' +
                '<span>' +
                todo.content +
                '</span>' +
                '</label></div></li>';
        }
        console.log(todos);
    });
};

itemCount = () => {
    let completedNum = todos.filter(function (todo) {
        return todo.completed;
    });
    let leftNum = todos.length - completedNum.length;
    clearCompleted.innerHTML =
        '<button id="btn-removeCompletedTodos" class="btn btn-default btn-xs">' +
        'Clear completed (<span id="completedTodos">' +
        completedNum.length +
        '</span>)</button>' +
        '<strong id="activeTodos">' +
        leftNum +
        '</strong> items left';
};

// 탭 컨트롤 하기
tapped.addEventListener('click', function (e) {
    if (e.target.innerText === 'Active') activeTab();
    else if (e.target.innerText === 'All') allTab();
    else if (e.target.innerText === 'Completed') completedTab();
    console.log(todos);
});

// 체크 박스 (체크시 조건이 맞는 탭으로 이동까지 구현)
list.addEventListener('change', function (e) {
    let tapCheck = document.querySelector('.active');
    todos.forEach((todo) => {
        todo.id === +e.target.id ? (todo.completed = e.target.checked) : '';
    });

    todos = todos.filter(function (todo) {
        return todo.id !== +e.target.dataset.id;
    });
    this.removeChild(e.target.parentNode.parentNode.parentNode);

    if (tapCheck.id === 'all') {
        list.innerHTML = '';
        newRenderHtml();
    }
    itemCount();
    console.log(todos);
});

// 체크 박스 전체 체크
allChecked.addEventListener('change', function (e) {
    let tapCheck = document.querySelector('.active');
    todos.forEach((todo) => {
        e.target.checked ? (todo.completed = true) : (todo.completed = false);
    });
    list.innerHTML = '';
    tapCheck.id === 'all' ? newRenderHtml() : '';
    itemCount();
    console.dir(e);
});

// 삭제 버튼 클릭 시 해당 항목 삭제
list.addEventListener('click', function (e) {
    if (e.target.nodeName !== 'SPAN' || e.target.outerText !== '') return;
    todos = todos.filter((todo) => {
        return todo.id !== +e.target.dataset.id;
    });
    this.removeChild(e.target.parentNode.parentNode.parentNode);
    itemCount();
    console.log(todos);
});

// clear completed 버튼 구현
clearCompleted.addEventListener('click', function (e) {
    todos = todos.filter((todo) => {
        return todo.completed !== true;
    });
    document.getElementById('chk-allComplete').checked = false;
    list.innerHTML = '';
    itemCount();
    newRenderHtml();
    console.dir(allChecked);
});

// data load하기
window.addEventListener('load', function () {
    todos = [];
    newRenderHtml();
    itemCount();
});
