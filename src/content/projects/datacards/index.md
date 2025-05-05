---
title: 'Wahapedia Data Cards Collector'
summary: 'A Python web scraping tool for collecting Wahapedia data cards'
date: 'Nov 17 2024'
draft: false
tags:
  - Python
  - Web Scraping
  - Data Collection
  - Automation
  - Warhammer
repoUrl: https://github.com/MorganKryze/Wahapedia-data-cards-collector
---

[![datacards](/img/projects/datacards.png)](https://github.com/MorganKryze/Wahapedia-data-cards-collector)

I created this web scraping tool to save myself from the tedious process of manually collecting data cards from Wahapedia. If you're into tabletop gaming like me, you know how time-consuming it can be to gather all the stats and rules you need - this Python script automates the whole process and organizes everything neatly.

The project is pretty straightforward under the hood - just Python with some common libraries for HTTP requests and HTML parsing. The tricky part was handling Wahapedia's page structure and making sure the scraper could navigate between different sections to collect all relevant card data. I built in some rate limiting to avoid hammering their servers and added options to filter what types of cards you want to collect.

What started as a weekend project to solve my own annoyance has become something I use regularly to keep my data collection up-to-date. The code isn't particularly fancy, but it's a practical tool that saves a ton of time for anyone who needs to reference these cards frequently. Plus, it exports everything in a format that's easy to work with for further analysis or integration with other tools.
