now build this header using the components you just created and for the logo use the logo svg in the public folder

<header
  class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-surface-container-highest"
>
  <div class="h-16 max-w-6xl mx-auto px-6 flex items-center justify-between">
    <div class="flex items-center gap-8">
      <a class="flex items-center gap-3" data-path="features" href="#"
        ><img
          alt="Lumio Monogram"
          class="h-8 w-auto object-contain"
          src="https://lh3.googleusercontent.com/aida/AEtjO1U--aAJ6I1K7rMTAXLjvTKPaUZK27U38bJD3aBegSZz6fMVnfpTmnMuIsXhnWPVpDSz5E47OffkgZ4OiHBoicFP3dE73puv8OKaL875WLZHexHJZAm-qmYHbCOJjeUV-YABcI3DKFicXOAzLkp1beXdMOgx0zNjYhthxji3EEAYQZXdfHvwTj-AOuZ8j1b4wjNQFXDAsW73obSLH3E7yMcWNVowwMRBXyU6eQnRoY0LQ1xICLwAM-Y9FscB"
        /><span
          class="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface"
          >Lumio</span
        ></a
      >
      <nav
        class="hidden md:flex items-center gap-6"
        data-active-classes="text-on-surface font-semibold"
      >
        <a
          aria-current="page"
          class="transition-colors duration-150 text-on-surface font-semibold"
          data-path="features"
          href="#"
          >Features</a
        ><a
          class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors duration-150"
          data-path="how-it-works"
          href="#"
          >How it works</a
        ><a
          class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors duration-150"
          data-path="pricing"
          href="#"
          >Pricing</a
        >
      </nav>
    </div>
    <div class="flex items-center gap-3">
      <a
        class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-3 py-2 transition-colors duration-150"
        data-path="login"
        href="#"
        >Sign in</a
      ><a
        class="font-label-md text-label-md bg-primary-container text-on-primary hover:bg-secondary-container px-4 py-2 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-150"
        data-path="get-started"
        href="#"
        >Get started</a
      ><button
        aria-label="Switch to dark theme"
        class="w-8 h-8 rounded-full border border-surface-container-highest bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors duration-150 shadow-sm"
      >
        <span class="material-symbols-outlined text-[18px]">dark_mode</span>
      </button>
    </div>
  </div>
</header>
