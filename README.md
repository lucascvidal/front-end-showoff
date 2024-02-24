# Front-End Showoff

This was designed to be a Front-End Showoff.

I have been wanting to dive deeper into CSS Animations for quite some time, and I figured this project was a good opportunity to do so. I’m a mechanical engineer that has shifted carreers towards software development, and since 2020, also software engineering. The stuff I studied the most before actually getting a job in the industry was front-end development, specially CSS.

When I started working as a software developer I had close to none real back-end experience. I knew a bit of web development, but just enough to get past the problem sets presented by the courses I took. I was lucky to work with very experienced and seasoned developers and engineers. Some of them took me under their wing and I learned a lot from those experiences. However, there was one thing I could do from the first day in the job that they couldn’t do. They could not code proper CSS and HTML. Not for their lives.

Then I realized I actually had the talent for coding everything the designers threw at me during the development of the products we were involved in. Since then, I became the front-end specialist in the team. As a specialist, I have to admit I felt ashamed of not understanding CSS animations at a deeper level.

That is were this project comes in. This is a Spotify clone, with a few touches of interesting bits I encountered during my days as a software developer. I wanted to mix stuff commonly present in applications development with animations, which are often left aside because of the extra time needed to implement them.

I hope you enjoy seeing and reading this.

## Development information

If you by any chance want to use this repository as reference and need a bit of information about the tools I'm using here, this is the section you have been looking for.

I'm using a dev container within VS Code. The dev container is a Linux container with Node.js and Sass already installed. The SCSS files can be compiled using:
```shell
sass styles.scss styles.css
```

## What I Learned

I learned a few things, like using the animationend and transitionend JavaScript events. I learned how to implement a Star Wars opening style animation (which was simple, but nice). It was also the first time I seriously used the display: grid CSS property, which was kind of cryptic to me before this project, and now is much more familiar. I also wanted to use as much vanilla HTML, CSS and JS as I could for the animations, which were the main topic to be worked on with this project, and I think I have managed to do just that.

## Suggestions on what to implement

At this moment, this Spotify clone cannot play music. One thing I might implement in the future (or maybe not) is a functional audio player. If you want to try it on your own, here's what I would expect from the implementation:
1. Find royalty-free songs for all the albums present in the interface (12 is the count);
1. Put them in the assets folder, creating a songs directory;
1. Write the metadata for the album and artist on a JSON file;
1. As the user clicks on any album link on the left side menu (library items), replace the information show on the central and right menu with the metadata from the JSON file;
1. If the user clicks on any song on the central menu, the audio player should start playing this song;
1. Use audio tags for the audio player and the JavaScript audio API to make things work correctly when the user chooses an album or a song from this album.
