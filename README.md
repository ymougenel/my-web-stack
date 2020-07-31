# Current architecture

![demo](./assets/stack-archi.jpg)

# Issue

1. Browser ----   "http://ENV_URL/front"            ----> Ha Proxy
2. Ha Proxy ---- "[ACL front], rm /front from path" ----> nginx
3. Nginx ----> page ? (index.html?) ---> Ha -----> Browser
4. Browser ask for css/js in "http://ENV_URL/main.3989c63f9d314905ffc0.bundle.js"
5. Ha does not trigger front ACL, static asked to anotherApp :'(

# Potentiel leads

## Ha Proxy
Flag request/response with front header, hoping for the sttic request to be flagged.

## Angular/Nginx managing /front path

### Angular

 Configuring angular to respond (request & statics ) on /front
 * Add deploy url during angular [build](https://github.com/ymougenel/my-web-stack/blob/35968acbf96162265e394c8573eaf5d87cde0455/front-stack/docker/Dockerfile#L11)?
 * Add  `<base href="/front">` in [index.html](https://github.com/ymougenel/covid19-graph/blob/master/src/index.html#L6)
 * Define `<app-root>...` in index.html

### nginx
No idea \o/

# Reward
![Beer](https://media.giphy.com/media/p0L0XVckvBLuU/giphy.gif)
