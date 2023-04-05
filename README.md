# THBioLink
## by Trekker Holdings, using [ottomated/create-o7-app](https://github.com/ottomated/create-o7-app)

## [Live example on my own site](https://pupdad.xyz)
---
### Why?
I wanted to make a custom link-in-bio site so I didn't have to rely on services like Linktree or Unfold. Previously I had done this with a static site, but would have to redeploy/reupload files every time I made a change. I wanted it to instead utilize a SQL-style backend to allow for it to dynamically update links.

### How?
[Ottomated](https://github.com/ottomated) is an absolute G and open-sourced his custom stack for making frontends that run as serverless/edge functions. His generated template uses SQL on PlanetScale through Kysely and Prisma, but I was already familiar/had an account with Supabase and wanted to use that for my backend. After much headache I got the Postgres connection working, however Cloudflare doesn't play nice with Node's `pg` package because they use their own runtime, so I changed the Svelte output/adapter to run on Vercel. You can realistically play around and change it to any platform that supports Node runtimes. Or if you want to figure out how to get it to work on Cloudflare, make a pull request! I'd love to see someone smarter than myself get it working, I just don't have the patience or understanding.

### What?
All you need to know is if you want a basic link-in-bio site you can host yourself (usually for free if you don't get a ton of traffic) you can set up a Vercel and Supabase account and get this code working fairly quickly.

### This is an inefficient implementation of (insert function here).
I'm still quite new to web development beyond standard HTML so please don't judge my code too harshly, I know it probably sucks. If you catch something weird, make a pull request, I'd love to give it a look so I can learn!

---
# Nerd stuff to get it working

### Install
Clone the repo and run this in the root of the directory to install dependencies. (You can use any `node` equivalent, such as `pnpm` as I do)
```
node install
```

### .env example
Put this in your environment variables on your deployment platform's dashboard, or in a .env file in the root if you're running local. You may have better luck explicitly defining the `DIRECT_URL` and `DATABASE_URL` if it gives you problems, rather than have it use references like below.
```
DATABASE_HOST=db.notarealbackend.supabase.co:1337
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=notarealpassword
DATABASE_NAME=postgres

DIRECT_URL='postgresql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}?sslaccept=string'
DATABASE_URL='postgresql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}?pgbouncer=true'
```

### Generate Prisma schema & generate Kysely code
Once you add in your credentials (see above), run this to have Prisma generate a schema based on your backend, rather than manually defining it.
```
node ./prisma/generate.cjs
```
It should also generate the code for Kysely, but if you run into issues try:
```
node kysely-codegen
```