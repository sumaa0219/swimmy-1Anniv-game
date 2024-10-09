# Swimmy 1周年イベント用　神経衰弱ゲームデバック資料

## script.jsについて
script.jsは主に３か所の設定項目がある。
1. カードの数
   ```const totalCards = 24;```
2. １枚しかないカード
    ```const exclude = ["Y", "O", "S", "H", "I", "E"];```
3. 全体のカード
````const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').filter(letter => !exclude.includes(letter));````

全体のカードに関して``split('')``の``''``の中を変更することで元の文字列における区切る文字を変更できる。