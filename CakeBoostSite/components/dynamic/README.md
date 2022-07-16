# Custom Cache Dynamic Components

Цель кеширования - ускорить сайт

Важные пункты:
* Кеш, хранящийся в localStorage, имеет чёткую структуру(JSON)
{
    gameId_1: {...data},
    gameId_2: {...data},
    gameId_3: {...data},
}
* Для проверки обновления данных, существуют функции compare_NAME. Они делают асинхронный запрос и сравнивают кеш(не весь кеш, а только кеш данные нынешней игры) с полученными данными из запроса.

Кеш используется в компонентах, которые вынесены отдельно в папку components/dynamic

## Пример кеширования
```
try {
    this.best_offers = JSON.parse(localStorage.getItem("best_offers"))[this.game_id] || [];
    this.compare_best_offers();
} catch(e) {
    this.best_offers = [];
}

if(this.best_offers.length === 0) {
    this.get_best_offers();
} 
```

* Блок try парсит localStorage в формате JSON. После пытается обратиться к кешу игры по ключу this.game_id. Далее идёт проверка обновления данных функцией this.compare_best_offers(). 
* В случае ошибки(например, отсутствие кеша, либо повреждение структуры), данные для игры подгружаются обычным запросом к API(this.get_best_offers()).
