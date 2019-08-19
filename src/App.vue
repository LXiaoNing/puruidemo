<template>
   <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
	box-sizing: border-box;
	 text-align: center;
	
    /*font-size: 100%;*/
    /*font-weight: normal;*/
    /*vertical-align: baseline;*/
}
a{
	text-decoration: none;
	color: #fff;
}
article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
    /*background-color: #E0EEEE;*/
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    /*content: none;*/
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

li {
    list-style: none;
}

html, body {
    width: 100%;
    height: 100%;
}

body {
    -webkit-text-size-adjust: none;
    /*-webkit-tap-highlight-color: rgba(0, 0, 0, 0);*/
}
</style>
