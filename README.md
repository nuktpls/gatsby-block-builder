- **`[v.0.2.x:next]`**: Code instantly persistent dark mode, remove menus and styles fixes.
- **`[v.0.x.0:warning]`**: The first grand finale release will be publish at v1.0.0.
- **`[v.0.2.0:update]`**: Very first release atempt; package core system stable.

---

---

# Gatsby Block Builder

#### BLOCK BUILDER _by [Edu4Dev](https://edu4.dev)_

---

**Engine Agent:** Gatsby - Javascript Framework

**Engine SubAgent:** Gatsby Plugin

**Gatsby Plugin Name:** Gatsby Block Builder

---

**Author:** Edu4Dev - Milton Bolonha

**Description:** Gatsby Block Builder is the way to you create your 
own professional Atomic Components. Works with Gatsby Layout Builder and Atomic Block.
Using Gatsby Block Builder you will be able to mixing paragraphs, images, rows, 
columns with some piece of data to create uniques, module oriented and reusable components.

\*_Keep in mind these bundle it is a block builder!_

---

**Plugin URI:** https://www.npmjs.com/package/gatsby-block-builder

**Plugin Install:** `npm i gatsby-block-builder`

**Version:** 0.2.0

**Year:** 2021

---

Invoke:

```js
<AwesomeComponent
	type="ROW"
	opt={{
		bgColor: '#fff',
		isBoxed: true,
		alignTo: 'center',
		numColumns: 3,
		// bgImg: {};
	}}
>
	// Your content goes here
</Custom Component>
```

## 🚀 Quick start

To get started to invoke rows, columns, modals, header and footer wrapper
standard structure on your theme, you can follow these steps:

1. Install Gatsby Block Builder plugin with:

```shell
npm i gatsby-block-builder
```

If you already have customize your gatsby-config.js, you can use it.
Otherwise, you should [create a new gatsby-config.js file](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) to setting your plugin.

2. Add the Gatsby Custom Component plugin to the build. In your gatsby-config.js insert the code:

```javascript
module.exports = {
	plugins: [`gatsby-block-builder`],
	// if you just have the plugins array
	// you may need to place the plugin string name
	// between the right objects and arrays
	//
}
```

The Gatsby Block Builder can you be used in your normal Gatsby ambient.
Something like this:

```
/in-your-gatsby-website
├── ./src/components
├──── ComponentX.js
├── ./src/pages
├──── index.js
└── Gatsby-config.js

/gatsby-block-builder
├── CustomComponent.js
├── AwesomeCustomComponent.js
├── package.json
└── README.md

```

3. Add the plugin correctly

The plugin will be added by the starter implements
of a <AwesomeComponent /> tag.React.Element.

You can verify Custom Components library to added to your site:

```javascript
// BODY type
<MainWrapper />
<MainButton />
<ButtonsMain />
<PageHeader />
<HeaderBlock />
<FooterBlock />
<ShareButtons />
<ScrollSomething />
<ThirdPartyNpmAwesomeComponent />
<ReactCarousel />
```

4. Dependencies

```json
	{
		"dependencies":{
			"gatsby": "^4.1.0",
			"gatsby-layout-builder": "^0.1.7",
			"react": "^17.0.2",
			"react-dom": "^17.0.2",
			"react-icons": "^4.3.1"
	},
  	"devDependencies": {
    	"prettier": "^2.4.1"
  }}
	```

## 🧐 What's inside?

```text
/nu-module
├── MainWrapper
├── MainButton
├── ButtonsMain
├── PageHeader
├── HeaderBlock
├── FooterBlock
├── ShareButtons
├── ScrollSomething
├── package.json
├── LICENSE
├── CODE-OF.CONDUCT.md
└── README.md
```

## Keep in touch

Don't keep in touch yet. Unless your want to made some kind of friendship.

Poupa Luz <poupaluz@edu4.dev>

Milton Bolonha <miltonbolonha@gmail.com>

## 🎓 Learning Gatsby

If you're looking for more guidance on plugins, how they work, or what their role is in the Gatsby ecosystem, check out some of these resources:

- The [Creating Plugins](https://www.gatsbyjs.com/docs/creating-plugins/) section of the docs has information on authoring and maintaining plugins yourself.
- The conceptual guide on [Plugins, Themes, and Starters](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/) compares and contrasts plugins with other pieces of the Gatsby ecosystem. It can also help you [decide what to choose between a plugin, starter, or theme](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/#deciding-which-to-use).
- The [Gatsby plugin library](https://www.gatsbyjs.com/plugins/) has over 1750 official as well as community developed plugins that can get you up and running faster and borrow ideas from.
