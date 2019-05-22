$(function(){
    $('#search-btn').on('click',function(){
  //検索ボタンがクリックされたら

        //itunesに検索をしに行く(Ajax)
        $.ajax({
            url:'https://itunes.apple.com/search',//通信先のurl
            type:'GET', //ＧＥＴ送信 or ＰＯＳＴ送信
            dataType:'jsonp', //検索結果の形式
            data: {
                term:'あいみょん',
                country: 'jp',
            }

        }).done( (data) => {
            //通信が成功
            console.log(data);
        }).fail((data) => {
            //通信が失敗
            console.log('error');
        })
    })

});