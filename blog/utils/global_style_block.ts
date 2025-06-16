// See: npm i @wordpress/block-library

export const blockCssText = /* css */ `

:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--base: #FFFFFF;--wp--preset--color--contrast: #111111;--wp--preset--color--accent-1: #FFEE58;--wp--preset--color--accent-2: #F6CFF4;--wp--preset--color--accent-3: #503AA8;--wp--preset--color--accent-4: #686868;--wp--preset--color--accent-5: #FBFAF3;--wp--preset--color--accent-6: color-mix(in srgb, currentColor 20%, transparent);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 0.875rem;--wp--preset--font-size--medium: clamp(1rem, 1rem + ((1vw - 0.2rem) * 0.183), 1.125rem);--wp--preset--font-size--large: clamp(1.125rem, 1.125rem + ((1vw - 0.2rem) * 0.367), 1.375rem);--wp--preset--font-size--x-large: clamp(1.75rem, 1.75rem + ((1vw - 0.2rem) * 0.367), 2rem);--wp--preset--font-size--xx-large: clamp(2.15rem, 2.15rem + ((1vw - 0.2rem) * 1.248), 3rem);--wp--preset--font-family--manrope: Manrope, sans-serif;--wp--preset--font-family--fira-code: "Fira Code", monospace;--wp--preset--spacing--20: 10px;--wp--preset--spacing--30: 16px;--wp--preset--spacing--40: 20px;--wp--preset--spacing--50: 24px;--wp--preset--spacing--60: clamp(30px, 7vw, 70px);--wp--preset--spacing--70: clamp(50px, 7vw, 90px);--wp--preset--spacing--80: clamp(70px, 10vw, 140px);--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:root { --wp--style--global--content-size: calc(900px - 24px * 2);--wp--style--global--wide-size: 1410px; }:where(body) { margin: 0; }.wp-site-blocks { padding-top: var(--wp--style--root--padding-top); padding-bottom: var(--wp--style--root--padding-bottom); }.has-global-padding { padding-right: var(--wp--style--root--padding-right); padding-left: var(--wp--style--root--padding-left); }.has-global-padding > .alignfull { margin-right: calc(var(--wp--style--root--padding-right) * -1); margin-left: calc(var(--wp--style--root--padding-left) * -1); }.has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull)) { padding-right: 0; padding-left: 0; }.has-global-padding :where(:not(.alignfull.is-layout-flow) > .has-global-padding:not(.wp-block-block, .alignfull)) > .alignfull { margin-left: 0; margin-right: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: var(--wp--preset--spacing--50); margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: var(--wp--preset--spacing--50); }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: var(--wp--preset--spacing--50);margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: var(--wp--preset--spacing--50);margin-block-end: 0;}:root :where(.is-layout-flex){gap: var(--wp--preset--spacing--50);}:root :where(.is-layout-grid){gap: var(--wp--preset--spacing--50);}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{background-color: var(--wp--preset--color--base);color: var(--wp--preset--color--contrast);font-family: var(--wp--preset--font-family--manrope);font-size: var(--wp--preset--font-size--large);font-weight: 300;letter-spacing: -0.1px;line-height: 1.4;--wp--style--root--padding-top: 0px;--wp--style--root--padding-right: var(--wp--preset--spacing--50);--wp--style--root--padding-bottom: 0px;--wp--style--root--padding-left: var(--wp--preset--spacing--50);}a:where(:not(.wp-element-button)){color: currentColor;text-decoration: underline;}:root :where(a:where(:not(.wp-element-button)):hover){text-decoration: none;}h1, h2, h3, h4, h5, h6{font-weight: 400;letter-spacing: -0.1px;line-height: 1.125;}h1{font-size: var(--wp--preset--font-size--xx-large);}h2{font-size: var(--wp--preset--font-size--x-large);}h3{font-size: var(--wp--preset--font-size--large);}h4{font-size: var(--wp--preset--font-size--medium);}h5{font-size: var(--wp--preset--font-size--small);letter-spacing: 0.5px;}h6{font-size: var(--wp--preset--font-size--small);font-weight: 700;letter-spacing: 1.4px;text-transform: uppercase;}:root :where(.wp-element-button, .wp-block-button__link){background-color: var(--wp--preset--color--contrast);border-width: 0;color: var(--wp--preset--color--base);font-family: inherit;font-size: var(--wp--preset--font-size--medium);line-height: inherit;padding-top: 1rem;padding-right: 2.25rem;padding-bottom: 1rem;padding-left: 2.25rem;text-decoration: none;}:root :where(.wp-element-button:hover, .wp-block-button__link:hover){background-color: color-mix(in srgb, var(--wp--preset--color--contrast) 85%, transparent);border-color: transparent;color: var(--wp--preset--color--base);}:root :where(.wp-element-button:focus, .wp-block-button__link:focus){outline-color: var(--wp--preset--color--accent-4);outline-offset: 2px;}:root :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption){font-size: var(--wp--preset--font-size--small);line-height: 1.4;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-base-color{color: var(--wp--preset--color--base) !important;}.has-contrast-color{color: var(--wp--preset--color--contrast) !important;}.has-accent-1-color{color: var(--wp--preset--color--accent-1) !important;}.has-accent-2-color{color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-color{color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-color{color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-color{color: var(--wp--preset--color--accent-5) !important;}.has-accent-6-color{color: var(--wp--preset--color--accent-6) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-base-background-color{background-color: var(--wp--preset--color--base) !important;}.has-contrast-background-color{background-color: var(--wp--preset--color--contrast) !important;}.has-accent-1-background-color{background-color: var(--wp--preset--color--accent-1) !important;}.has-accent-2-background-color{background-color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-background-color{background-color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-background-color{background-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-background-color{background-color: var(--wp--preset--color--accent-5) !important;}.has-accent-6-background-color{background-color: var(--wp--preset--color--accent-6) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-base-border-color{border-color: var(--wp--preset--color--base) !important;}.has-contrast-border-color{border-color: var(--wp--preset--color--contrast) !important;}.has-accent-1-border-color{border-color: var(--wp--preset--color--accent-1) !important;}.has-accent-2-border-color{border-color: var(--wp--preset--color--accent-2) !important;}.has-accent-3-border-color{border-color: var(--wp--preset--color--accent-3) !important;}.has-accent-4-border-color{border-color: var(--wp--preset--color--accent-4) !important;}.has-accent-5-border-color{border-color: var(--wp--preset--color--accent-5) !important;}.has-accent-6-border-color{border-color: var(--wp--preset--color--accent-6) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-xx-large-font-size{font-size: var(--wp--preset--font-size--xx-large) !important;}.has-manrope-font-family{font-family: var(--wp--preset--font-family--manrope) !important;}.has-fira-code-font-family{font-family: var(--wp--preset--font-family--fira-code) !important;}
:root :where(.wp-block-columns-is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.wp-block-columns-is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.wp-block-columns-is-layout-flow) > *{margin-block-start: var(--wp--preset--spacing--50);margin-block-end: 0;}:root :where(.wp-block-columns-is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.wp-block-columns-is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.wp-block-columns-is-layout-constrained) > *{margin-block-start: var(--wp--preset--spacing--50);margin-block-end: 0;}:root :where(.wp-block-columns-is-layout-flex){gap: var(--wp--preset--spacing--50);}:root :where(.wp-block-columns-is-layout-grid){gap: var(--wp--preset--spacing--50);}
:root :where(.wp-block-post-title a:where(:not(.wp-element-button))){text-decoration: none;}
:root :where(.wp-block-post-title a:where(:not(.wp-element-button)):hover){text-decoration: underline;}
:root :where(.wp-block-query-pagination){font-size: var(--wp--preset--font-size--medium);font-weight: 500;}
:root :where(.wp-block-site-tagline){font-size: var(--wp--preset--font-size--medium);}
:root :where(.wp-block-site-title){font-weight: 700;letter-spacing: -.5px;}
:root :where(.wp-block-site-title a:where(:not(.wp-element-button))){text-decoration: none;}
:root :where(.wp-block-site-title a:where(:not(.wp-element-button)):hover){text-decoration: underline;}
:root :where(.wp-block-navigation){font-size: var(--wp--preset--font-size--medium);}
:root :where(.wp-block-navigation a:where(:not(.wp-element-button))){text-decoration: none;}
:root :where(.wp-block-navigation a:where(:not(.wp-element-button)):hover){text-decoration: underline;}
:root :where(.wp-block-separator){border-color: currentColor;border-width: 0 0 1px 0;border-style: solid;color: var(--wp--preset--color--accent-6);}

.is-layout-grid {
  display: grid;
}
.wp-block-post-template-is-layout-grid {
  grid-template-columns: repeat(auto-fill, minmax(min(12rem, 100%), 1fr));
  container-type: inline-size;
  gap: var(--wp--preset--spacing--50);
}
.is-position-sticky {
  position:sticky;
  top:0;
  z-index:10;
}

.is-nowrap {
  flex-wrap:nowrap;
}
.is-content-justification-space-between {
  justify-content:space-between;
}

.blocks-gallery-grid:not(.has-nested-images),
.wp-block-gallery:not(.has-nested-images) {
  display:flex;
  flex-wrap:wrap;
  list-style-type:none;
  margin:0;
  padding:0
}
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item {
  display:flex;
  flex-direction:column;
  flex-grow:1;
  justify-content:center;
  margin:0 1em 1em 0;
  position:relative;
  width:calc(50% - 1em)
}
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image:nth-of-type(2n),
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item:nth-of-type(2n),
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image:nth-of-type(2n),
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item:nth-of-type(2n) {
  margin-right:0
}
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figure,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figure,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figure,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figure {
  align-items:flex-end;
  display:flex;
  height:100%;
  justify-content:flex-start;
  margin:0
}
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image img,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item img,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image img,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item img {
  display:block;
  height:auto;
  max-width:100%;
  width:auto
}
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figcaption,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figcaption,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figcaption,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figcaption {
  background:linear-gradient(0deg,#000000b3,#0000004d 70%,#0000);
  bottom:0;
  box-sizing:border-box;
  color:#fff;
  font-size:.8em;
  margin:0;
  max-height:100%;
  overflow:auto;
  padding:3em .77em .7em;
  position:absolute;
  text-align:center;
  width:100%;
  z-index:2
}
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figcaption img,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figcaption img,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figcaption img,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figcaption img {
  display:inline
}
.blocks-gallery-grid:not(.has-nested-images) figcaption,
.wp-block-gallery:not(.has-nested-images) figcaption {
  flex-grow:1
}
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-image a,
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-image img,
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-item a,
.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-item img,
.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-image a,
.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-image img,
.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-item a,
.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-item img {
  flex:1;
  height:100%;
  object-fit:cover;
  width:100%
}
.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-image,
.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-item,
.wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-image,
.wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-item {
  margin-right:0;
  width:100%
}
@media (min-width:600px) {
  .blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-image,
  .blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-item,
  .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-image,
  .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-item {
    margin-right:1em;
    width:calc(33.33333% - .66667em)
  }
  .blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-image,
  .blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-item,
  .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-image,
  .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-item {
    margin-right:1em;
    width:calc(25% - .75em)
  }
  .blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-image,
  .blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-item,
  .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-image,
  .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-item {
    margin-right:1em;
    width:calc(20% - .8em)
  }
  .blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-image,
  .blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-item,
  .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-image,
  .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-item {
    margin-right:1em;
    width:calc(16.66667% - .83333em)
  }
  .blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-image,
  .blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-item,
  .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-image,
  .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-item {
    margin-right:1em;
    width:calc(14.28571% - .85714em)
  }
  .blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-image,
  .blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-item,
  .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-image,
  .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-item {
    margin-right:1em;
    width:calc(12.5% - .875em)
  }
  .blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-image:nth-of-type(1n),
  .blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-item:nth-of-type(1n),
  .blocks-gallery-grid:not(.has-nested-images).columns-2 .blocks-gallery-image:nth-of-type(2n),
  .blocks-gallery-grid:not(.has-nested-images).columns-2 .blocks-gallery-item:nth-of-type(2n),
  .blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-image:nth-of-type(3n),
  .blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-item:nth-of-type(3n),
  .blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-image:nth-of-type(4n),
  .blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-item:nth-of-type(4n),
  .blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-image:nth-of-type(5n),
  .blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-item:nth-of-type(5n),
  .blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-image:nth-of-type(6n),
  .blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-item:nth-of-type(6n),
  .blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-image:nth-of-type(7n),
  .blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-item:nth-of-type(7n),
  .blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-image:nth-of-type(8n),
  .blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-item:nth-of-type(8n),
  .wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-image:nth-of-type(1n),
  .wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-item:nth-of-type(1n),
  .wp-block-gallery:not(.has-nested-images).columns-2 .blocks-gallery-image:nth-of-type(2n),
  .wp-block-gallery:not(.has-nested-images).columns-2 .blocks-gallery-item:nth-of-type(2n),
  .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-image:nth-of-type(3n),
  .wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-item:nth-of-type(3n),
  .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-image:nth-of-type(4n),
  .wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-item:nth-of-type(4n),
  .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-image:nth-of-type(5n),
  .wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-item:nth-of-type(5n),
  .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-image:nth-of-type(6n),
  .wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-item:nth-of-type(6n),
  .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-image:nth-of-type(7n),
  .wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-item:nth-of-type(7n),
  .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-image:nth-of-type(8n),
  .wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-item:nth-of-type(8n) {
    margin-right:0
  }
}
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image:last-child,
.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item:last-child,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image:last-child,
.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item:last-child {
  margin-right:0
}
.blocks-gallery-grid:not(.has-nested-images).alignleft,
.blocks-gallery-grid:not(.has-nested-images).alignright,
.wp-block-gallery:not(.has-nested-images).alignleft,
.wp-block-gallery:not(.has-nested-images).alignright {
  max-width:420px;
  width:100%
}
.blocks-gallery-grid:not(.has-nested-images).aligncenter .blocks-gallery-item figure,
.wp-block-gallery:not(.has-nested-images).aligncenter .blocks-gallery-item figure {
  justify-content:center
}
.wp-block-gallery:not(.is-cropped) .blocks-gallery-item {
  align-self:flex-start
}
figure.wp-block-gallery.has-nested-images {
  align-items:normal
}
.wp-block-gallery.has-nested-images figure.wp-block-image:not(#individual-image) {
  margin:0;
  width:calc(50% - var(--wp--style--unstable-gallery-gap, 16px)/2)
}
.wp-block-gallery.has-nested-images figure.wp-block-image {
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  flex-grow:1;
  justify-content:center;
  max-width:100%;
  position:relative
}
.wp-block-gallery.has-nested-images figure.wp-block-image>a,
.wp-block-gallery.has-nested-images figure.wp-block-image>div {
  flex-direction:column;
  flex-grow:1;
  margin:0
}
.wp-block-gallery.has-nested-images figure.wp-block-image img {
  display:block;
  height:auto;
  max-width:100%!important;
  width:auto
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption,
.wp-block-gallery.has-nested-images figure.wp-block-image:has(figcaption):before {
  bottom:0;
  left:0;
  max-height:100%;
  position:absolute;
  right:0
}
.wp-block-gallery.has-nested-images figure.wp-block-image:has(figcaption):before {
  -webkit-backdrop-filter:blur(3px);
  backdrop-filter:blur(3px);
  content:"";
  height:100%;
  -webkit-mask-image:linear-gradient(0deg,#000 20%,#0000);
  mask-image:linear-gradient(0deg,#000 20%,#0000);
  max-height:40%
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption {
  background:linear-gradient(0deg,#0006,#0000);
  box-sizing:border-box;
  color:#fff;
  font-size:13px;
  margin:0;
  overflow:auto;
  padding:1em;
  scrollbar-color:#0000 #0000;
  scrollbar-gutter:stable both-edges;
  scrollbar-width:thin;
  text-align:center;
  text-shadow:0 0 1.5px #000;
  will-change:transform
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption::-webkit-scrollbar {
  height:12px;
  width:12px
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption::-webkit-scrollbar-track {
  background-color:initial
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption::-webkit-scrollbar-thumb {
  background-clip:padding-box;
  background-color:initial;
  border:3px solid #0000;
  border-radius:8px
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus-within::-webkit-scrollbar-thumb,
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus::-webkit-scrollbar-thumb,
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:hover::-webkit-scrollbar-thumb {
  background-color:#fffc
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus,
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:focus-within,
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption:hover {
  scrollbar-color:#fffc #0000
}
@media (hover:none) {
  .wp-block-gallery.has-nested-images figure.wp-block-image figcaption {
    scrollbar-color:#fffc #0000
  }
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption img {
  display:inline
}
.wp-block-gallery.has-nested-images figure.wp-block-image figcaption a {
  color:inherit
}
.wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border img {
  box-sizing:border-box
}
.wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border>a,
.wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border>div,
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded>a,
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded>div {
  flex:1 1 auto
}
.wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border figcaption,
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded figcaption {
  background:none;
  color:inherit;
  flex:initial;
  margin:0;
  padding:10px 10px 9px;
  position:relative;
  text-shadow:none
}
.wp-block-gallery.has-nested-images figure.wp-block-image.has-custom-border:before,
.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded:before {
  content:none
}
.wp-block-gallery.has-nested-images figcaption {
  flex-basis:100%;
  flex-grow:1;
  text-align:center
}
.wp-block-gallery.has-nested-images:not(.is-cropped) figure.wp-block-image:not(#individual-image) {
  margin-bottom:auto;
  margin-top:0
}
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) {
  align-self:inherit
}
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image)>a,
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image)>div:not(.components-drop-zone) {
  display:flex
}
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) a,
.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) img {
  flex:1 0 0%;
  height:100%;
  object-fit:cover;
  width:100%
}
.wp-block-gallery.has-nested-images.columns-1 figure.wp-block-image:not(#individual-image) {
  width:100%
}
@media (min-width:600px) {
  .wp-block-gallery.has-nested-images.columns-3 figure.wp-block-image:not(#individual-image) {
    width:calc(33.33333% - var(--wp--style--unstable-gallery-gap, 16px)*.66667)
  }
  .wp-block-gallery.has-nested-images.columns-4 figure.wp-block-image:not(#individual-image) {
    width:calc(25% - var(--wp--style--unstable-gallery-gap, 16px)*.75)
  }
  .wp-block-gallery.has-nested-images.columns-5 figure.wp-block-image:not(#individual-image) {
    width:calc(20% - var(--wp--style--unstable-gallery-gap, 16px)*.8)
  }
  .wp-block-gallery.has-nested-images.columns-6 figure.wp-block-image:not(#individual-image) {
    width:calc(16.66667% - var(--wp--style--unstable-gallery-gap, 16px)*.83333)
  }
  .wp-block-gallery.has-nested-images.columns-7 figure.wp-block-image:not(#individual-image) {
    width:calc(14.28571% - var(--wp--style--unstable-gallery-gap, 16px)*.85714)
  }
  .wp-block-gallery.has-nested-images.columns-8 figure.wp-block-image:not(#individual-image) {
    width:calc(12.5% - var(--wp--style--unstable-gallery-gap, 16px)*.875)
  }
  .wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image) {
    width:calc(33.33% - var(--wp--style--unstable-gallery-gap, 16px)*.66667)
  }
  .wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:nth-last-child(2),
  .wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:nth-last-child(2)~figure.wp-block-image:not(#individual-image) {
    width:calc(50% - var(--wp--style--unstable-gallery-gap, 16px)*.5)
  }
  .wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:last-child {
    width:100%
  }
}
.wp-block-gallery.has-nested-images.alignleft,
.wp-block-gallery.has-nested-images.alignright {
  max-width:420px;
  width:100%
}
.wp-block-gallery.has-nested-images.aligncenter {
  justify-content:center
}


`;
