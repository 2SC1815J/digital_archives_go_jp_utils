// ==UserScript==
// @name        digital_archives_go_jp_utils
// @description 国立公文書館デジタルアーカイブ検索結果のカスタマイズ
// @author      2SC1815J
// @released    2019-11-09
// @license     MIT License
// @namespace   https://github.com/2SC1815J
// @homepageURL https://github.com/2SC1815J/digital_archives_go_jp_utils
// @include     https://www.digital.archives.go.jp/DAS/meta/*
// @include     https://www.digital.archives.go.jp/das/meta/*
// @version     0.2.0
// ==/UserScript==

(function($) {
    $('#canvas-cont').css('height', '800px');

    function fixUI() {
        var allLinks;
        var thisLink;
        var bid, id, no;
        var match;
        var i;
        allLinks = document.evaluate(
            '//a[@href]',
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null);
        for (i = 0; i < allLinks.snapshotLength; i++) {
            thisLink = allLinks.snapshotItem(i);
            //「閲覧」ボタンのリンク先修正
            match = thisLink.href.match(/javascript:openImageWindow.openGazoWindow\('([^']+)'(?:,'([^']+)')?/i);
            if (match) {
                bid = match[1];
                id = match[2] || '';
                thisLink.href = 'listPhoto?LANG=default&BID=' + bid + '&ID=' + id + '&TYPE=JPEG&NO=';
            }
            //「閲覧(大判)」ボタンのリンク先修正
            match = thisLink.href.match(/javascript:openImageWindow.openPickupWindow\('([^']+)'(?:,'([^']+)')?/i);
            if (match) {
                bid = match[1];
                id = match[2] || '';
                if (id === bid) { id = ''; }
                thisLink.href = 'listPhoto?LANG=default&BID=' + bid + '&ID=' + id + '&TYPE=large&IMG_FLG=on&NO=';
            }
            //「簿冊標題」の右に表示されるタイトル、「次の件名」などのリンク先修正
            match = thisLink.href.match(/javascript:setLink\('([^']*)','([^']*)','([^']*)'/i);
            if (match) {
                no = match[1];
                bid = match[2];
                id = match[3] || '';
                if (no) {
                    thisLink.href = 'listPhoto?LANG=default&BID=' + bid + '&ID=' + id + '&TYPE=JPEG&NO=' + no;
                } else {
                    thisLink.href = '/das/meta/' + bid;
                }
            }
        }
        allLinks = document.evaluate(
            '//a[not(contains(text(), "件名一覧があります"))]',
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null);
        for (i = 0; i < allLinks.snapshotLength; i++) {
            thisLink = allLinks.snapshotItem(i);
            //資料名のリンク先の修正（「件名一覧があります」リンクは元のまま残す）
            match = thisLink.name.match(/rlink_([A-Z0-9]+)/i);
            if (match) {
                bid = match[1];
                thisLink.href = '/das/meta/' + bid;
            }
        }
    }
    var timerId;
    var target = document.querySelector('body');
    var observer = new MutationObserver(function() {
        if (timerId) {
            clearTimeout(timerId);
            timerId = null;
        }
        timerId = setTimeout(fixUI, 1000);
    });
    observer.observe(target, { subtree: true, characterData: true, childList: true });

})(jQuery);