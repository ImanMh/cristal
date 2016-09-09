#Crystal Roadmap

##Why I built Crystal 
When I wanted to start a Redux project, I could only find very complex examples that do specific things such as only client side rendering or handling complex routing and etc. I wanted a minimal example that does all the things a real commercial project needs but in the simplest way. Learning from a huge boilerplate is not easy so I tried to create Crystal to not only learn the details but also make it possible for others to understand many of Crystal features easier.

##features
Here are the features I want to implement. I've ordered them by probability of need in real life projects.

1. ES6 Class based components. (While working on react, it's a lot easier to work with ES6 syntax. It also have For some reason I don't know.)
2. Server side rendering. (SEO is the number one advantage in any business. Some projects might not need it due to login protection, but every project have some public pages that can take advantage of easy made react components. This makes server side rendering a vital requirement.)
3. Client side routing. (Since Ajax came along, users expect website to switch pages without refresh. With users high expectation and SEO concerns we want every page to be server side rendered if opened from an external source, but client side rendered if navigated from an internal page of our website)
