# THBioLink
## Version 3.0
#### by Trekker Holdings, using [o7-app](https://github.com/ottomated/create-o7-app)


---


### Live example:
[pup.dad](https://pup.dad)


---


### Why?
I wanted to make a custom link-in-bio site so I didn't have to rely on services like Linktree or Unfold. I wanted it to also utilize an easily-editable backend to allow for it to dynamically update links without redeploy.

### How?
[Ottomated](https://ottomated.net/) has a great web stack in the [o7-app](https://github.com/ottomated/create-o7-app) that got me interested in learning JS. Previous versions of this project utilized [Supabase](https://github.com/TrekkerStudios/THBioLink/tree/postgres) and [Turbo + Vercel KV](https://github.com/TrekkerStudios/THBioLink/tree/turbo-old), but each was difficult to maintain in their own right. v3.0 is a full rewrite using the latest version of o7-app with Svelte 4, along with [Upstash](https://upstash.com) for storage and [Skeleton](https://skeleton.dev) for styling.

### What?
All you need to know is if you want a basic link-in-bio site you can host yourself (usually for free if you don't get a ton of traffic) you can set up accounts on Vercel (or similar) and Upstash and get this code working fairly quickly.

### This is an inefficient/slow/generally dumb implementation of (insert function here).
I'm still new to JS/web dev as a whole. I'm gonna keep chipping away at this codebase as I learn new tricks and improvements.

### What's next?
Polishing the front-end for updating and modifying the links in Upstash database. I have a "working" version but there's still some bugs.


---


# How to get it working

### Install
Clone the repo and install:

```pnpm install```

### .env
Once you make an Upstash database, copy the REST URL and token and put them in your environment:
```UPSTASH_REDIS_REST_URL = "https://urlfromupsta.sh"
UPSTASH_REDIS_REST_TOKEN = "T0K3N_FR0M_UPST@SH"
```

### How to format data
The TRPC callback will look for the keys described in `page.server.ts` and parse the data into the page expecting an array of JSON objects for each section. Make a JSON object in your database for each of the sections (Socials and Links by default), and format your child objects as follows:
```
{

    // SOCIAL ICON

    {
        "id": 0,                                   // ORDER OF APPEARANCE (LEFT->RIGHT)
        "name": "Instagram",                       // IDENTIFIER FOR ICON (USES SIMPLE ICONS API NAMES)
        "link": "https://www.instagram.com/pupdad" // LINK ON CLICK
    },

    // LINK

    {
        "id": 0,                                   // ORDER OF APPEARANCE (FIRST->LAST)
        "name": "Trekker Holdings",                // BUTTON TEXT
        "link": "https://trekker.holdings"         // LINK ON CLICK
    }
    
}
```
