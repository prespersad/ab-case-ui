# Assessment: A/B Case UI

This project is the front-end developer assessment. The goal is to develop an 'A/B Case UI'. I've implemented this assigment using:

- Vanilla JS;
- Sass;
- HTML5;
- And a little bit of BEM. (I'm not (yet) familiar with BEM. This assignment made me take the first steps...)

# Approach

What I wanted to achieve is to create reusable modules and class constructors. Frequently used elements can be produced quicker this way. And the code stays consistent. With Sass I've made use of variables and mixins. My goal was to to create most of the html-elements with JS Vanilla. My first idea was to make a SPA. To sort of mimmick React/Angular but I didn't have enough time to think the ideal approach through. So I've decided to go the old skool way. I did the following:

- Created class constructors to produce reusable html-elements;
- Created all the static elements with use of the class constructors;
- Written functions for the elements with dynamic content;
- Written functions to fire events;
- Styled the result with Sass

I've managed to finish almost all of the tasks. Unfortunately I don't have enough time to create the filters. Since it's fun to do I'll put it on my to-do-list.

# My own thoughts about my achievement

Looking back at my approach I think I've could have kept it more simple. My approach was a little bit to time consuming. But I like to experiment. Everything works fine and the perfomance is okey. The look and feel of the ui resembles the design.

# Usage

To use the app you should have a live server. I use the live server from Visual Studio. The starting point is index.html. The submitted A/B Cases are stored in de local storage of your system. Normally the data will be saved on a database. Since we don't have a database I've made the choice to store at the local storage.

Within a couple of days we can talk about this assignment and share our insight. I'm looking forward to it.

Pres Persad
