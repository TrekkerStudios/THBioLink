# THBioLink
## Version 2.1
#### by Trekker Holdings, using [ottomated/create-o7-app](https://github.com/ottomated/create-o7-app)


---


### Live examples:
[pupdad.xyz](https://pupdad.xyz)

[snremusic.com](https://snremusic.com)

[highwaypatio.com](https://highwaypatio.com)


---


### Why?
I wanted to make a custom link-in-bio site so I didn't have to rely on services like Linktree or Unfold. I wanted it to also utilize an easily-editable backend to allow for it to dynamically update links without redeploy.

### How?
[Ottomated](https://ottomated.net/) has a great web stack in the [o7-app](https://github.com/ottomated/create-o7-app) that got me interested in learning JS frameworks. Previously I modified it to use Postgres through Supabase [(old branch here)](https://github.com/TrekkerStudios/THBioLink/tree/postgres), but that was very overengineered. This new version not only incorporates Turbo for monorepo support (which I wanted for my multiple deployed sites), but it now uses a simple KV store on the Edge for the data.

### What?
All you need to know is if you want a basic link-in-bio site you can host yourself (usually for free if you don't get a ton of traffic) you can set up a Vercel account and get this code working fairly quickly.

### This is an inefficient/slow/generally dumb implementation of (insert function here).
I know, I'm still new to this whole "javascript" thing. I'm gonna keep chipping away at this codebase to make it more fleshed-out and (more importantly) faster.

### What's next?
First, I want to move off serverless and onto the Edge for even faster loads, but first I gotta figure out Cloudflare's Worker system. Vercel has been great so far, don't get me wrong, but their free tier is a bit limiting with Edge stuff.

Eventually I want to implement a front-end for interacting with/managing the KV in a user-friendly way, building what is effectively a open-source/self-hosted Linktree. Is it necessary? Absolutely not. Do I wanna do it anyway? Yes, I don't value my time.


---


# Nerd stuff to get it working

### Install
Clone the repo and install:

```pnpm install```

### .env
Vercel will automatically put the connection string into your project once you link the edge store to your deployment, but for development purposes you'll need to copy the connection string from the dashboard:

```EDGE_CONFIG = 'https://copiedstringfromverc.el'```

### Change prefixes and format KV
The function that parses your KV store utilizes prefixes to categorize which site in your monorepo it applies to, as well as what type of link it is. (Link Button or Social Media Icon) Those filters can be changed in each site's respective ```+page.server.ts```.

The format for the KV is as follows:
```
{

    // SOCIAL ICON

    "pupdad_social_ig": {                          // {SITE}_{TYPE}_{IDENTIFIER}
        "id": 0,                                   // ORDER OF APPEARANCE (LEFT->RIGHT)
        "name": "Instagram",                       // IDENTIFIER FOR ICON (USES SIMPLE ICONS API NAMES)
        "link": "https://www.instagram.com/pupdad" // LINK ON CLICK
    },

    // LINK

    "pupdad_link_th": {                            // {SITE}_{TYPE}_{IDENTIFIER}
        "id": 0,                                   // ORDER OF APPEARANCE (FIRST->LAST)
        "name": "Trekker Holdings",                // BUTTON TEXT
        "link": "https://trekker.holdings"         // LINK ON CLICK
    }
    
}
```

Note: in the key field, the {IDENTIFIER} is purely for your own reference and is not actually taken into account anywhere.
