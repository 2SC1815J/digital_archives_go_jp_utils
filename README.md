# digital_archives_go_jp_utils

[国立公文書館デジタルアーカイブ]向けユーザスクリプト

国立公文書館デジタルアーカイブの検索結果に表示されるリンクの挙動を使いやすくします。

検索結果画面の「閲覧」「閲覧(大判)」ボタンの挙動を変更し、右クリックして「新しいタブで開く」が行えるようにします。これにより、検索結果から気になった資料の画像を多数のタブで開いておき、順番に確認していくフローが可能になります。

また、資料画像閲覧画面で、「簿冊標題」の右に表示されるタイトルのリンク先を、当該資料の書誌情報ページに変更します。

検索結果画面で、資料名のリンクは書誌情報のパーマリンク、「<件名一覧があります>」のリンクがある場合は、当該資料の下位階層を含んだ検索結果へのリンクとなるので、目的に応じて使い分けてください。

[国立公文書館デジタルアーカイブ]: https://www.digital.archives.go.jp/
[Greasemonkey]: https://addons.mozilla.org/firefox/addon/greasemonkey/
[Violentmonkey]: https://addons.mozilla.org/firefox/addon/violentmonkey/

## インストール方法

1. このツールの利用には、ユーザスクリプトを動作させるためのブラウザ拡張機能（[Greasemonkey]、[Violentmonkey]など）のインストールが必要です。
    - [Greasemonkey]はバージョン3系列で動作を確認しています。
    - Firefox 57以降では、[Violentmonkey]で動作を確認しています。
    - Google Chromeでは、 [Violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)で動作を確認しています。
2. ブラウザ拡張機能を初めてインストールした場合は、ブラウザを再起動してください。
3. 以下のリンクをクリックすると、このユーザスクリプトのインストール確認が表示されます。
    - [digital_archives_go_jp_utils.user.js](https://github.com/2SC1815J/digital_archives_go_jp_utils/raw/master/digital_archives_go_jp_utils.user.js)

## 注意点

国立公文書館デジタルアーカイブのサイトデザインが変更された場合、正しく動作しなくなる可能性があります。
