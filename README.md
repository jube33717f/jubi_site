<h1 align="center">
  Jube's Site
  <br>
  <img src="https://i.imgur.com/RB3dtBP.gif" alt="weather forecast logo" title="weather forecast logo" width="100">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">π§πΌββοΈPersonal website | βπΌPortfolio</p>

> Author: Jube
> 
> Last edit date: 2021.6.7
>
> Description: personal website: portfolio/writings/contact
>
> Link on [here](https://jube.vercel.app/)



# Tech/framework used
Frontend tech stack:
* Next JS
* React JS
* Emotion CSS
* Typescript
* Babel
* SSR / SEO

Storage tech:
* Friebase

# Features
* Use next.js to create SEO environment
* Use next.js to enable routing with file system
* Use next/image to implement automatically image optimization
* Use next.js getInitialProps to enable SSR in a page to do initial data population

# Installation / Usage
```
$cd jubi_site
$npm install
$npm run dev
```

# Roadmap
```


    β£ ...
    β£ components/  # [Components]
    β       β£ badge/             # badge (in contact page)
    β       β β£ index.tsx
    β       β β style.ts
    β       β£ carousel/          # carousel (in contact page)
    β       β β£ index.tsx
    β       β β style.ts
    β       β£ contact/           # contact component (in contact page)
    β       β β£ index.tsx
    β       β β style.ts
    β       β£ cursor/            # cursor (settle in every page container)
    β       β β£ index.tsx
    β       β β style.ts
    β       β£ navi_web/          # web view navigation (in page container)
    β       β β£ index.tsx
    β       β β style.ts
    β       β£ navigation/        # phone view navigation (in page container)
    β       β β£ index.tsx
    β       β β style.ts
    β       β£ seo/               # seo setting (in page container)
    β       β β index.tsx
    β       β£ works/             # portfolio web view component (in portfolio page)
    β       β β£ index.tsx
    β       β β style.ts
    β       β£ works_phone/       # portfolio phone view component (in portfolio page)
    β       β β£ index.tsx
    β       β β style.ts
    β       β writingList/       # portfolio list component (in works web/phone views component)
    β       β£ index.tsx
    β       β style.ts
    β£ layouts/  # [Page container]
    β       β£ page/              # main route page container (container for home/portfolio/writing/contact)
    β       β β£ index.tsx
    β       β β style.ts
    β       β post/              # articles page container (container for every single articles)
    β       β£ index.tsx
    β       β style.ts
    β£ pages/    # [Pages(route file system)]
    β       β£ [id].tsx           # articles page
    β       β£ _app.tsx           # entry file
    β       β£ contact.tsx        # contact page
    β       β£ index.tsx          # home page
    β       β£ portfolio.tsx      # portfolio page
    β       β writing.tsx        # writing page
    β£ services/ # [For firebase]
    β       β firebase.ts        # firebase setting
    β£ shared/   # Global files
    β       β£ get-post.ts        # firebase fetch related functions
    β       β globals.ts         # global styles
    β£ styles/  # [Main pages styles]
    β       β...
    β£ public/  # [Images]
    β       β...
    β£ config.ts          # SEO content
    β£ next-env.d.ts      # Ensures Next.js types are picked up by the TypeScript compiler
    β£ next-config.ts     # Modules export
    β£ tsconfig.json      # Specifies the root files and the compiler options required to compile the project
    β£ package.json       # Required packages
    β£ .babelrc           # JavaScript transpiler presets setting
    β ...


```

# Demo
### web view
* Home page
![Home](https://images.pexels.com/photos/7665953/pexels-photo-7665953.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)
* Portfolio page
![Portfolio](https://images.pexels.com/photos/7665951/pexels-photo-7665951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)
* Writing page
![Writing](https://images.pexels.com/photos/7665950/pexels-photo-7665950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
* Contact page
![Contact](https://images.pexels.com/photos/7665954/pexels-photo-7665954.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)

### phone view

