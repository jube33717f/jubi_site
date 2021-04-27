# Jubi's Site
> Author: Jubi
> 
> Last edit date: 2021.4.27
>
> Description: My personal website: portfolio/writings/contact
>
> Link on [here](https://jubi.vercel.app/)

# Installation / Usage
```
npm install
npm run dev
```

# Features
* Use next.js to create SEO environment
* Use next.js to enable routing with file system
* Use next/image to implement automatically image optimization
* Use next.js getInitialProps to enable SSR in a page to do initial data population

# Roadmap
```
# style.ts // style file
# index.tsx //function file
    ┣ ...
    ┣ components/  # Components
    ┃       ┣ badge/             # badge (in contact page)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┣ carousel/          # carousel (in contact page)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┣ contact/           # contact component (in contact page)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┣ cursor/            # cursor (settle in every page container)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┣ navi_web/          # web view navigation (in page container)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┣ navigation/        # phone view navigation (in page container)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┣ seo/               # seo setting (in page container)
    ┃       ┃ ┗ index.tsx
    ┃       ┣ works/             # portfolio web view component (in portfolio page)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┣ works_phone/       # portfolio phone view component (in portfolio page)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┗ writingList/       # portfolio list component (in works web/phone views component)
    ┃       ┣ index.tsx
    ┃       ┗ style.ts
    ┣ layouts/  #Page container
    ┃       ┣ page/              # main route page container (container for home/portfolio/writing/contact)
    ┃       ┃ ┣ index.tsx
    ┃       ┃ ┗ style.ts
    ┃       ┗ post/              # articles page container (container for every single articles)
    ┃       ┣ index.tsx
    ┃       ┗ style.ts
    ┣ pages/    #Pages(route file system)
    ┃       ┣ [id].tsx           # articles page
    ┃       ┣ _app.tsx           # entry file
    ┃       ┣ contact.tsx        # contact page
    ┃       ┣ index.tsx          # home page
    ┃       ┣ portfolio.tsx      # portfolio page
    ┃       ┗ writing.tsx        # writing page
    ┣ services/ # For firebase
    ┃       ┗ firebase.ts        # firebase setting
    ┣ shared/   # Global files
    ┃       ┣ get-post.ts        # firebase fetch related functions
    ┃       ┗ globals.ts         # global styles
    ┣ styles/  # Main pages styles
    ┃       ┗...
    ┣ public/  #Images
    ┃       ┗...
    ┣ config.ts  # SEO content
    ┣ next-env.d.ts # Ensures Next.js types are picked up by the TypeScript compiler
    ┣ next-config.ts # Modules export
    ┣ tsconfig.json  # Specifies the root files and the compiler options required to compile the project
    ┣ package.json  # Required packages
    ┣ .babelrc # JavaScript transpiler presets setting
    ┗ ...
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

