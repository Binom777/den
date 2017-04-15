# den
Обертка URL флешки.

Порядок действий:

1. Создать директорию где будут файлы
2. Перейти внутрь 

3. Проверить наличие npm  

`npm -v`

4. Если нету то установить:

`sudo apt-get install npm`

Если на этом шаге произошла какая-то жопа, то почитать здесь: http://hackerx.ru/ustanovka-node-js-na-linux-ubuntu-14-04/


5. После решения всех проблем с npm, устанавливаем git

`sudo apt-get update`

`sudo apt-get install git`

6. Клонируем проект себе в директорию

`git clone https://github.com/Binom777/den.git`

7. Заходим внутрь директории

`cd den`

9. Подтягиваем зависимости

`npm install`

9. Пробуем запустить

`./node_modules/.bin/electron den.js`

the end.

п.с.

Допустимые ключи:

`--url http://ya.ru `  - откроет яндекс  (данный флаг не обязателен)

`--id 123` - добавить к url id  :  `http://ya.ru?id=123`

`--fs true` - флаг для режима на весь экран 


Пример:


`./node_modules/.bin/electron den.js --id 123 --fs true`

Откроет нужный нам сайт (ссылка уже вшита) на весь экран с id который был передан в командной строке (123)  

