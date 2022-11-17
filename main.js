const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){
    //querySelector.valueで入力された文字を取得
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == '') {
        alert('身長か体重が入力できていません!');
        return;
    };

    // BMI = weight in kg / (height in m * height in m)
    // change cm -> m
    height = height / 100;

    let BMI = (weight / (height * height));

    //小数第２未満を削除
    BMI = BMI.toFixed(2);

    // HTMLのid=resultに代入
    document.querySelector('#result').innerHTML = BMI;

    //コメント作成
    let status = '';

    if(BMI < 18.5) {
        status = '低体重';
    }
    if(BMI >= 18.5 && BMI < 25) {
        status = '標準体重';
    }
    if(BMI >= 25 && BMI < 30) {
        status = '肥満';
    }
    if(BMI >= 30) {
        status = '肥満'
    }

    document.querySelector('.comment').innerHTML = `コメント: あなたは<span id="comment">${status}</span>です`
})


