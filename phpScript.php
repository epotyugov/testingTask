<?php

/**
 * "Нужно написать на php функцию, которая принимает строку — текст на любом языке и
 * возвращает массив из 5 наиболее часто встречающихся слов в этом тексте. Ключ массива — слово,
 * значение — количество. Ни веб-сервер, ни база данных не понадобятся; версия php не имеет
 * значения."
 */

function getMostUsedWords(string $input): array
{
	preg_match_all(
		'/\b\w+\b/',
		$input,
		$words
	);
	foreach($words[0] as &$word)
		$word = strtolower($word);
	
	$frequency = array_count_values($words[0]);
	arsort($frequency);

	return array_slice($frequency, 0, 5);
}