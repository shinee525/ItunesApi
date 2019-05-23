//カードの雛形

let cardTemplate = null;


$(function(){

    // card.htmlを読み込む
    $.get('../../card.html',function(temp) {
     cardTemplate = $(temp);
    })


    $('#search-btn').on('click',function(){
  //検索ボタンがクリックされたら



//検索ワードを取得する
let searchword = $('#search-word').val();

        //itunesに検索をしに行く(Ajax)
        $.ajax({
            url:'https://itunes.apple.com/search',//通信先のurl
            type:'GET', //ＧＥＴ送信 or ＰＯＳＴ送信
            dataType:'jsonp', //検索結果の形式
            data: {
                term: searchword,
                country: 'jp',
            }

        }).done( (data) => {
            //通信が成功
            $('#result').empty();
            //CDの画像

            for (item of data.results) {
                // 画像のパス
                let imgPath = item.artworkUrl100;
        
                // CDタイトル
                let collectionName = item.collectionName;
        
                // iTunesのリンク
                let collectionViewUrl = item.collectionViewUrl;
                
                //  変数にテンプレートのクローンを入れる
                let card = cardTemplate.clone();

                //クローンにタイトルなどを設定
                card.find('img').attr('src',imgPath);
                card.find('h5').text(collectionName);
                card.find('a').attr('href',collectionViewUrl);
               
               //クローンを#resultに追加する
                $('#result').append(card);
                
              }

              
            

        }).fail((data) => {
            //通信が失敗
            console.log('error');
        })
    })

});


