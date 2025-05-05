---
title: 'Athunas'
summary: 'An RGB LED matrix controller with modular app support'
date: 'Jan 13 2025'
draft: false
tags:
  - Python
  - LED
  - Hardware
  - IoT
  - Web
repoUrl: https://github.com/MorganKryze/Athunas
---

[![athunas](/img/projects/athunas.png)](https://github.com/MorganKryze/Athunas)

I built Athunas to scratch my own itch of wanting a more flexible way to control RGB LED matrices without being locked into proprietary software. It's basically a modular controller system that lets you run different apps on your LED display - from simple animations to data visualizations that pull from various APIs.

The core is written in Python (about 90% of the codebase) handling all the hardware communication and app logic. I added a simple web interface using HTML and CSS so you can control everything from your phone or computer without having to SSH into the device running the matrix. The hardest part was optimizing the rendering pipeline to keep animations smooth even on lower-powered devices like Raspberry Pis.

My favorite feature is how easy it makes swapping between different visualizations - I've got modules for weather data, system monitoring, audio visualization, and even some basic games. The project started as just a personal tool, but I've structured it to be modular enough that other people can easily write their own apps for it. Nothing groundbreaking tech-wise, but it's been genuinely useful for my own projects and a fun way to make better use of LED matrices that would otherwise just display basic patterns.
