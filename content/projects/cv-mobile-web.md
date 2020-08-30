---
title: CV Mobile Web - Bootcamp project
image: cv-mobile-web.gif
size: normal
highlight: true
tags:
  - html
  - css
  - javascript
  - react
  - react-router
  - styled-components
  - webpack
  - babel
  - chartjs
---

## Infinite scroll

The first functionality I was in charge of, was to create an infinite scroll home page that was able to render student profiles in blocks of ten so when the user reaches the bottom of the page it loaded ten more student profiles until there weren't more profiles to load from the server. The approach I took in this occasion was to attach an event listener to the main container where the profiles was loaded and made a calculation with the scroll position of it and the window height, and then fire a data fetch with a dynamic link that changes for every request avoiding fetching the same users twice.

![Infinite scroll animation](/assets/images/projects/cv-mobile-web/infinite-scroll.gif)

## Quick search

Another functionality I was in charge of develop was to add a quick search bar on the main page to find users that are already loaded from the server. This search had to find coincidences at the same time on the user's name, username, email and company. Finally, the coincidence of each user is highlighted to help the user find what he's looking for.

![Quick search](/assets/images/projects/cv-mobile-web/quick-search.gif)

## Manage users

In order to manage the user profiles from the client side, I had to develop a complete interface to display, update and delete any user profile. To display the user's info I created a simple bootstrap card that renders all the data, from the avatar picture to the skills that are rendered as badges. This card has an action button that displays a context menu giving the user the options to delete the profile, (which triggers a modal with a confirmation button) or update it. Once the user enters into edit mode, the paragraphs with the info become contenteditable so they are modifiable, the experience and languages become select inputs with the server given options, the skill badges show a cross icon to be able to remove it and below them there is a live search bar that show real time skill coincidences from the server to add them to the user profile.

![Foo](/assets/images/projects/cv-mobile-web/manage-users.gif)

## Dynamic forms

In order to manage the user profiles from the client side, I had to develop a complete interface to display, update and delete any user profile. To display the user's info I created a simple bootstrap card that renders all the data, from the avatar picture to the skills that are rendered as badges. This card has an action button that displays a context menu giving the user the options to delete the profile, (which triggers a modal with a confirmation button) or update it. Once the user enters into edit mode, the paragraphs with the info become contenteditable so they are modifiable, the experience and languages become select inputs with the server given options, the skill badges show a cross icon to be able to remove it and below them there is a live search bar that show real time skill coincidences from the server to add them to the user profile.

![Foo](/assets/images/projects/cv-mobile-web/surveys.gif)

## Data visualization

In order to manage the user profiles from the client side, I had to develop a complete interface to display, update and delete any user profile. To display the user's info I created a simple bootstrap card that renders all the data, from the avatar picture to the skills that are rendered as badges. This card has an action button that displays a context menu giving the user the options to delete the profile, (which triggers a modal with a confirmation button) or update it. Once the user enters into edit mode, the paragraphs with the info become contenteditable so they are modifiable, the experience and languages become select inputs with the server given options, the skill badges show a cross icon to be able to remove it and below them there is a live search bar that show real time skill coincidences from the server to add them to the user profile.

![Foo](/assets/images/projects/cv-mobile-web/summaries.gif)

## Login

In order to manage the user profiles from the client side, I had to develop a complete interface to display, update and delete any user profile. To display the user's info I created a simple bootstrap card that renders all the data, from the avatar picture to the skills that are rendered as badges. This card has an action button that displays a context menu giving the user the options to delete the profile, (which triggers a modal with a confirmation button) or update it. Once the user enters into edit mode, the paragraphs with the info become contenteditable so they are modifiable, the experience and languages become select inputs with the server given options, the skill badges show a cross icon to be able to remove it and below them there is a live search bar that show real time skill coincidences from the server to add them to the user profile.

![Foo](/assets/images/projects/cv-mobile-web/login-page.gif)

## Job offers

In order to manage the user profiles from the client side, I had to develop a complete interface to display, update and delete any user profile. To display the user's info I created a simple bootstrap card that renders all the data, from the avatar picture to the skills that are rendered as badges. This card has an action button that displays a context menu giving the user the options to delete the profile, (which triggers a modal with a confirmation button) or update it. Once the user enters into edit mode, the paragraphs with the info become contenteditable so they are modifiable, the experience and languages become select inputs with the server given options, the skill badges show a cross icon to be able to remove it and below them there is a live search bar that show real time skill coincidences from the server to add them to the user profile.

![Foo](/assets/images/projects/cv-mobile-web/add-offer.gif)
