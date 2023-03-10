// вопрос 7 - Почему setState фсинхронная функция?

/*
 *
 * Это нужно для того, чтобы React смог сгруппировать несколько вызовов setState() в одно обновление для улучшения производительности.
 * Вызов setState приводит к обновлению компонента, поэтому setState сделали асинхрнонной чтобы "дождаться" пока все компоненты
 * вызовут setState() в своих обработчиках событий прежде чем начать повторный рендер.
 * Это избавляет от ненужных повторных рендеров.
 *
 */
