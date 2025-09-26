// JavaScript学習用サンプルコード
// 初心者向けの基本的な機能を学習できます

// 1. Hello World - 基本的な出力
function showHelloWorld() {
    // getElementById()でHTML要素を取得
    const output = document.getElementById('hello-output');
    
    // innerHTML で要素の中身を変更
    output.innerHTML = 'Hello, World! <br>こんにちは、世界！<br>JavaScriptが動いています！';
    
    // コンソールにも出力（開発者ツールで確認できます）
    console.log('Hello World関数が実行されました');
}

// 2. 変数の使い方
function showVariables() {
    // 様々な種類の変数を宣言
    let name = '田中太郎';           // 文字列（string）
    let age = 25;                   // 数値（number）
    let isStudent = true;           // 真偽値（boolean）
    let hobbies = ['読書', '映画', 'プログラミング']; // 配列（array）
    
    // 変数を使って文字列を作成
    let message = `
        <strong>変数の例：</strong><br>
        名前: ${name}<br>
        年齢: ${age}歳<br>
        学生: ${isStudent ? 'はい' : 'いいえ'}<br>
        趣味: ${hobbies.join(', ')}
    `;
    
    // 結果を表示
    document.getElementById('variables-output').innerHTML = message;
    
    // 変数の型を確認（コンソールで確認）
    console.log('nameの型:', typeof name);
    console.log('ageの型:', typeof age);
    console.log('isStudentの型:', typeof isStudent);
}

// 3. 計算をしてみよう
function showCalculation() {
    // 基本的な計算
    let a = 10;
    let b = 3;
    
    let addition = a + b;       // 足し算
    let subtraction = a - b;    // 引き算
    let multiplication = a * b; // 掛け算
    let division = a / b;       // 割り算
    let remainder = a % b;      // 余り
    
    // 結果を表示
    let result = `
        <strong>計算結果：</strong><br>
        ${a} + ${b} = ${addition}<br>
        ${a} - ${b} = ${subtraction}<br>
        ${a} × ${b} = ${multiplication}<br>
        ${a} ÷ ${b} = ${division.toFixed(2)}<br>
        ${a} を ${b} で割った余り = ${remainder}
    `;
    
    document.getElementById('calculation-output').innerHTML = result;
}

// 4. ユーザーからの入力
function greetUser() {
    // input要素から値を取得
    const nameInput = document.getElementById('nameInput');
    const userName = nameInput.value;
    
    // 入力チェック
    if (userName === '') {
        alert('名前を入力してください！');
        return;
    }
    
    // 現在の時刻を取得
    const now = new Date();
    const hour = now.getHours();
    
    // 時間帯による挨拶の変更
    let greeting;
    if (hour < 12) {
        greeting = 'おはようございます';
    } else if (hour < 18) {
        greeting = 'こんにちは';
    } else {
        greeting = 'こんばんは';
    }
    
    // 挨拶メッセージを作成
    const message = `
        ${greeting}、${userName}さん！<br>
        現在の時刻は ${now.toLocaleTimeString()} です。<br>
        JavaScriptの学習、頑張ってください！
    `;
    
    document.getElementById('greeting-output').innerHTML = message;
}

// 5. 条件分岐（if文）
function checkEvenOdd() {
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);
    
    // 入力チェック
    if (isNaN(number)) {
        alert('有効な数値を入力してください！');
        return;
    }
    
    // 偶数・奇数の判定
    let result;
    if (number % 2 === 0) {
        result = `${number} は偶数です！`;
    } else {
        result = `${number} は奇数です！`;
    }
    
    // 追加情報
    let additionalInfo = '';
    if (number > 0) {
        additionalInfo = 'この数は正の数です。';
    } else if (number < 0) {
        additionalInfo = 'この数は負の数です。';
    } else {
        additionalInfo = 'この数はゼロです。';
    }
    
    document.getElementById('evenodd-output').innerHTML = `
        <strong>${result}</strong><br>
        ${additionalInfo}
    `;
}

// 6. 繰り返し処理（for文）
function showLoop() {
    let output = '<strong>1から10までの数字：</strong><br>';
    
    // for文で1から10まで繰り返し
    for (let i = 1; i <= 10; i++) {
        output += `${i}番目: ${i}<br>`;
    }
    
    // 九九の表も作ってみましょう
    output += '<br><strong>3の段：</strong><br>';
    for (let i = 1; i <= 9; i++) {
        output += `3 × ${i} = ${3 * i}<br>`;
    }
    
    document.getElementById('loop-output').innerHTML = output;
}

// 7. 配列の使い方
function showArray() {
    // 配列の作成
    let fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう', 'いちご'];
    let numbers = [1, 2, 3, 4, 5];
    
    let output = '<strong>配列の例：</strong><br>';
    
    // 配列の要素を表示
    output += `果物の配列: [${fruits.join(', ')}]<br>`;
    output += `配列の長さ: ${fruits.length}<br>`;
    output += `最初の果物: ${fruits[0]}<br>`;
    output += `最後の果物: ${fruits[fruits.length - 1]}<br><br>`;
    
    // 配列の各要素を繰り返し処理で表示
    output += '<strong>果物リスト：</strong><br>';
    for (let i = 0; i < fruits.length; i++) {
        output += `${i + 1}. ${fruits[i]}<br>`;
    }
    
    // 配列の合計を計算
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    output += `<br>数値配列 [${numbers.join(', ')}] の合計: ${sum}`;
    
    document.getElementById('array-output').innerHTML = output;
}

// ページが読み込まれた時に実行される関数
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScriptファイルが正常に読み込まれました！');
    console.log('開発者ツール（F12キー）を開いて、このメッセージを確認してみてください。');
});

// 追加の学習用関数：現在の日時を表示
function showCurrentTime() {
    const now = new Date();
    return now.toLocaleString('ja-JP');
}

// 追加の学習用関数：ランダムな数値を生成
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}