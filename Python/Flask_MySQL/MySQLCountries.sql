select name, language, percentage from countries
join languages on country_id
where language = "Slovene"
order by percentage desc;

select countries.name, count(cities.id) as citycount
from countries
join cities on country_id = countries.id
group by countries.name
order by citycount desc;

SELECT cities.name, cities.population
FROM countries
JOIN cities on country_id = countries.id
WHERE cities.population > 500000 and countries.name = "Mexico"
ORDER BY cities.population desc;

SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages on country_id = countries.id
WHERE languages.percentage > 89
ORDER BY languages.percentage desc;

SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE countries.surface_area < 501 and countries.population > 100000;

SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = "Constitutional Monarchy" and capital > 200 and life_expectancy > 75;

select countries.name, cities.name, cities.district, cities.population
FROM countries
JOIN cities ON country_id = countries.id
WHERE countries.name = "Argentina" and cities.district = "Buenos Aires" and cities.population > 500000;

SELECT countries.region, count(countries.id) as countryCount
FROM countries
GROUP BY countries.region
ORDER BY countryCount desc