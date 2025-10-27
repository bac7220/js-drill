// 名前と年齢を変数に入れて、
// 「私は○○です。○○歳です。」と出力してください。

const username = "ばく";
const age = 36;

// ここにコードを書こう
const element_1 = document.querySelector('.lesson-1');

element_1.textContent = `私は${username}です。${age}歳です。`;


// 年齢が20歳以上なら「大人です」
// 20歳未満なら「未成年です」と表示するコードを書いてください。
const element_2 = document.querySelector('.lesson-2');
const age_2 = 18;

// ここにコードを書こう
if (20 <= age_2) {
  element_2.textContent = `大人です。`;
}else{
  element_2.textContent = `未成年です。`;
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.listClass('look')
    }
  });
});
const fadeElements = document.querySelectorAll('.fade-in');

for (let i = 0; i > fadeElements.length; i++){
  observer.observe(fadeElements[i])   
};


const push = document.querySelector('.push');
const target = document.querySelector('.target');
push.addEventListener('click',function() {
  target.classList.add('push_on');
})

const fruits = ['🍎', 'バナナ', 'ぶどう'];
const basket = document.querySelector('.fruits');
basket.textContent = fruits[0];
const index = fruits.length - 1;
document.querySelector('.basket').textContent = fruits[index];
fruits.push('メロン');
console.log(fruits);

fruits.pop(); // ← これを実行したら?
console.log(fruits); // ← 何が表示される?

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
fruits.pop();
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled);

// 　todolistを作る

const todos = [];
const addBtn = document.querySelector('.add-button');// 送信ボタンを取得　
addBtn.addEventListener('click', function () { //送信ボタンを押したら起こるイベントを作る 
  const input = document.querySelector('.todo-input'); //インプットした要素を取得
  const text = input.value; //インプットした要素の、プロパティtext:の中身をテキストで取り出す
  todos.push({ text: text, completed: false });// 空の配列のtodosにプロパティtext:とcompleted:を入れる
  const index = todos.length - 1;
  const li = document.createElement('li'); //<li>を作る
  li.classList.add('todo-item'); // <li class="todo-item">とする、クラスをつける
  const taskBtn = document.createElement('button'); //タスクを表示するボタンを作る 
  const deleteBtn = document.createElement('button'); // タスクが終わったときのボタンを作る
  taskBtn.classList.add('task-text'); //　ボタンにクラス名をつける
  deleteBtn.classList.add('delete-btn'); // ボタンにクラス名をつける
  taskBtn.textContent = text; // インプットした要素の、プロパティtext:の中身をテキストで取り出す
  deleteBtn.textContent = '×'; // デリートボタンは×を入れたいので指定する
  deleteBtn.addEventListener('click', function() {
    li.remove();
    todos.splice(index, 1);
  });
  taskBtn.addEventListener('click', function () {
    todos[index].completed = !todos[index].completed;
    if (todos[index].completed === true) {
      taskBtn.classList.add('complete');
    } else {
      taskBtn.classList.remove('complete');
    }
  });
  const list = document.querySelector('.todo-list'); //リストを入れる親要素を変数にしておく
  list.appendChild(li); //リストの中にリストアイテムを入れる
  li.appendChild(taskBtn); // リストアイテムの中にタスクボタンを入れる
  li.appendChild(deleteBtn); // リストアイテムの中にデリートボタンを入れる
  input.value = ""; // 終わったら入力したテキストを空にする
});

// カウンターアプリを作る

const countDisplay = document.querySelector('.counter');
const up = document.querySelector('.increase');
const down = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
let count = 0;

// up.addEventListener('click', function(){
//   count += 1;
//   countDisplay.textContent = count;
// });
down.addEventListener('click', function () {
  if (count > 0) {
    count -= 1;
  }
  countDisplay.textContent = count;
})
reset.addEventListener('click', function () {
  count = 0;
  countDisplay.textContent = count;
});

const first = document.querySelector('.calc-input-first');
const second = document.querySelector('.calc-input-second');
const plus = document.querySelector('.calc-plus');
const minus = document.querySelector('.calc-minus');
const multiply = document.querySelector('.calc-multiply');
const divide = document.querySelector('.calc-divide');
const equal = document.querySelector('.calc-equal');
const result = document.querySelector('.calc-result');
let operator = '';


plus.addEventListener('click', function () {
  operator = '+'; 
});
minus.addEventListener('click', function () {
  operator = '-';
});
multiply.addEventListener('click', function () {
  operator = '*';
});
divide.addEventListener('click', function () {
  operator = '/';
});

equal.addEventListener('click', function () {
  const firstInput = first.value;
  const secondInput = second.value;
  console.log('firstInput', firstInput);
  console.log('secondInput', secondInput);
  console.log('operator', operator);
  if (operator === '+'){
    const countNumber = Number(firstInput) + Number(secondInput);
    result.textContent = countNumber;
  } else if(operator === '-'){
    const  countNumber = Number(firstInput) - Number(secondInput);
    result.textContent = countNumber;
  } else if (operator === '*') {
   const  countNumber = Number(firstInput) * Number(secondInput);
    result.textContent = countNumber;
  } else if (operator === '/') {
   const countNumber = Number(firstInput) / Number(secondInput);
    result.textContent = countNumber;
  }
})

up.addEventListener('click', function(){
  setTimeout(function () {
    count += 1;
    countDisplay = count;
  }, 2000);
  countDisplay.textContent = count;
});

const getNewsBtn = document.querySelector('.get-news');
const newList = document.querySelector('.news-list');
getNewsBtn.addEventListener('click', async function () {
  const apiKey = "24a9311ba05845da9ec75e51339e8b3c";
  const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`;
  
  const response = await fetch(url);
  const data = await response.json();
  data.articles.forEach(function (article) {
    console.log(article.title)
  
    console.log(data)
    const newsItem = document.createElement('li');
    newsItem.classList.add('newsitem');
    newsItem.textContent = article.title;
    newList.appendChild(newsItem);
  });
});

const getExcBtn = document.querySelector('.get-exchange');
const excList = document.querySelector('.exchange-list');

getExcBtn.addEventListener('click', async function () {
  const url = `https://v6.exchangerate-api.com/v6/cf7213338f1e55f9c19a7714/latest/USD`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.conversion_rates)
  const rates = data.conversion_rates
  console.log(rates.JPY)
  const currencies = [ 'JPY', 'EUR'];
  currencies.forEach(function (currency) {
    const excItem = document.createElement('li');
    excItem.classList.add('exchange-item');
    // console.log(rates[currency]);
    excItem.textContent = `1 USD = ${rates[currency]} ${currency}`;
    excList.appendChild(excItem);
  });
});
