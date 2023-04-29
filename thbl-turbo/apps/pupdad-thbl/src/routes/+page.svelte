<script>
  import { trpc } from '$lib/trpc';
  export let data;
  export let socials = data.socialParsed;
  export let links = data.linkParsed;

</script>


<div class="mx-4">
    <div class="">

      <!-- User Profile Picture -->
      <div class="lg:max-w-md md:max-w-sm sm:max-w-xs h-auto mx-auto my-10 rounded-md overflow-hidden shadow-lg bg-pupdad-50">
        <a href='https://pupdad.xyz'><img class="transition object-cover rounded-full h-48 w-48 mx-auto mt-6 p-1 border-4 border-pupdad-700 hover:ease-in-out hover:duration-300 hover:scale-105 hover:border-pupdad-500" src='assets/images/profile.jpg' alt="Profile" /></a>
        <div class="px-6 py-2 text-pupdad-700">
          <div class="flex flex-col">
            <div class="text-xl font-semibold text-center">Tyler</div>
            <p class="text-xs py-2 font-regular text-center">Amateur Dev</p>
          </div>
        </div>

        <div class="flex flex-row mx-4 text-pupdad-100">

          {#each socials as social}
            <a href="{social.link}" target="_blank" rel="noopener noreferrer" class="transition flex flex-row mx-auto px-1 text-pupdad-700 hover:duration-300 hover:text-pupdad-500 hover:ease-in-out hover:duration-300 hover:scale-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi" viewBox="0 0 24 24">
                <path d="{social.path}" />
              </svg>
            </a>
          {/each}
        
        </div>

        <br>

        <div class="flex flex-col mx-auto">

          {#each links as link}
            <a href="{link.link}" target="_blank" rel="noopener noreferrer" class="transition text-center mx-auto my-2 bg-transparent w-3/4 text-pupdad-700 py-2 pl-2 border border-pupdad-700 rounded-md border-solid hover:duration-300 hover:bg-pupdad-700 hover:text-pupdad-50 hover:ease-in-out hover:duration-300 hover:scale-110">
              <h4 class="font-regular mx-5">{link.name}</h4>
            </a> 
          {/each}

        </div>

        <!-- Footer -->
        <div class="text-pupdad-500 text-xs text-center mt-4 mb-1">
          Built by
          <a href="https://trekker.holdings" target="_blank" rel="noopener noreferrer" class="transition border-b-pupdad-500 border-b-2 hover:duration-150 hover:border-b-pupdad-700 hover:text-pupdad-700">Trekker Holdings</a>
          with the 
          <a href="https://github.com/ottomated/create-o7-app" target="_blank" rel="noopener noreferrer" class="transition border-b-pupdad-500 border-b-2 hover:duration-150 hover:border-b-pupdad-700 hover:text-pupdad-700">o7 stack</a>.
        </div>
        <div class="text-pupdad-500 text-xs text-center mt-1 mb-4">
          Powered by 
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="transition border-b-pupdad-500 border-b-2 hover:duration-150 hover:border-b-pupdad-700 hover:text-pupdad-700">Vercel</a>.
          Available on 
          <a href="https://github.com/TrekkerStudios/THBioLink" target="_blank" rel="noopener noreferrer" class="transition border-b-pupdad-500 border-b-2 hover:duration-150 hover:border-b-pupdad-700 hover:text-pupdad-700">GitHub</a>.
        </div>

      </div>
    </div>
  </div>
  
