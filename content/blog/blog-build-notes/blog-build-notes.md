---
title: Blog Build Notes
date: "2021-11-22"
description: "Running Journal of things that have gone into the development of this website"
---

# Gatsby Develop

only works in cmd terminal. powershell is broken. 

Changes needed for gatsby to be able to build
```
Set-ExecutionPolicy -Scope LocalMachine Unrestricted
```


# Cloud

https://quintendynamics.gatsbyjs.io/


# Style

## Font

https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap


# dependencies

use yarn

if you don't use yarn everything breaks and is difficult 

```npm install --global yarn```

# Navbar

The solution I was able to get to work for the navbar burger was React Hooks using the state

**[Toggling Class](https://stackoverflow.com/questions/42630473/react-toggle-class-onclick/42630780)**

The main challenge here was the fact that the javascript to handle the click could not be defined outside of the render function because it references things on the DOM. 

# Sidebar 

[Nav tree example](https://github.com/cephalization/gatsby-wiki)






