# Demetrius

**Demetrius** is a solution leveraging Reinforcement Learning to optimize the process of irrigation, which leads to higher profits and conservation of freshwater resources. It uses site-specific data to vary the amount of irrigation per day, a vastly unexplored field made possible due to progress of IOT Devices in Agritech. 

- Checkout [this video](https://todo) for a working demo. 

## Table of Contents

- [About](#About)
    - [Our Idea](#Our-Idea)
    - [Technologies Involved](#Technologies-Involved)
- [Members](#Members)
- [Basic Working Version](#Basic-Working-Version)
    - [Features](#Features)
    - [Implementation](#Implementation)
- [License](LICENSE)

## About

### Our Idea

Freshwater resources are dwindling [all over the world](https://www.bbc.com/future/article/20170412-is-the-world-running-out-of-fresh-water). Currently, agriculture accounts (on average) for 70 percent of all [freshwater withdrawals globally](https://www.worldbank.org/en/topic/water-in-agriculture). Thus, using smart solutions to optimize this process is the need of the hour. Some specific challenges for a one=fits-all solution is that every farm will have different crops (even in different years), and the situation would vastly vary. Thus, using Reinforcement Learning is a very viable solution since it can be run for specific situations. Moreover, a chatbot interface to communicate with and manually control the process is extremely helpful to lead to more informed decision-making by people in agriculture.

### Technologies Involved

- Python 3
- IBM Watson for creating the chatbot
- React, Flask for the frontend and backend respectively

For a detailed description regarding the current implementation check [this](#Implementation).

## Members

The team involved in the project comprises of [Kunwar Shaanjeet Singh Grover](https://github.com/Groverkss), [Tanishq Chaudhary](https://github.com/SmartyPants042) and [Mayank Goel](https://github.com/MayankGoel28).

# Basic Working Version

Our chatbot application is intended to be used as a resource organizer, and for managing the amount of water used for irrigation per day.

## Features

- Use a Reinforcement Learning Algorithm to get the optimal amount of water to use for irrigation per day. As our system is highly extensible, this can be directly used as an API for the sprinkler system.
- Keep track of revenue and associated costs due to irrigation, with automated generation of data visualizations to understand the data
- Communicate with our services through a highly approachable chatbot for easy usage 

## Implementation

### Reinforcement Learning

Since there is no clear answer on how much irrigation is to be done for each day, we turn to Reinforcement Learning Algorithms for a idea. More specifically, we use the SARSA Algorithm, which not only learns the real world factors playing at hand, but also learns from its errors; each and every day
it gets better! We convert each day into a datapoint, and the amount of irrigation to be done as an action. This then helps us figuring the Q-table day by day as it learns the environment better. At the end of the day, we output what amount is to be irrigated the next day.

### Application

TODO
