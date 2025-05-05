---
title: 'Word Scramble Game'
summary: 'A console-based word puzzle game built with C#'
date: 'Jan 26 2023'
draft: false
tags:
  - C#
  - Console
  - Game
  - Interactive
  - .NET
repoUrl: https://github.com/MorganKryze/WordScramble
---

[![wordscramble](/img/projects/word_scramble.png)](https://github.com/MorganKryze/WordScramble)

I developed this Word Scramble game as a fun way to apply my growing C# skills to something playable. The premise is simple - the program scrambles words and you have to figure out what they are - but implementing it taught me a lot about building interactive console applications.

The project uses a pretty straightforward tech stack - just pure C# with no external dependencies. I focused on creating an intuitive menu system so players could easily navigate between different difficulty levels and game modes. One of the more interesting challenges was designing the word scrambling algorithm to make sure words were sufficiently jumbled while still being solvable.

For data persistence, I implemented a basic scoring system that keeps track of player progress between sessions. Looking back, the code structure could be cleaner, but it was a great learning experience for working with string manipulation, random generation, and managing game state. It's a simple but complete game that demonstrates how much you can do with just the standard C# libraries and a console interface.
