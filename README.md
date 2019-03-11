reqinspeq
=========

A simple web listener that logs complete HTTP requests for inspection.

Usage
-----

Clone this repo, then inside of it:

```
npm install
npm start
```

Then, watch the output as requests arrive:

```
> reqinspeq@1.0.0 start /Users/mars.hall/Projects/reqinspeq
> node server.js

Listening on http://localhost:3333

➡️  POST /apps/maushausparty/slugs
authorization: Bearer xxxxx
accept: application/vnd.heroku+json; version=3
content-type: application/json
host: localhost:3333
connection: close
user-agent: Paw/3.1.8 (Macintosh; OS X/10.14.3) GCDHTTPRequest
content-length: 79

{"process_types":{"spinspinsugar":"echo \"\ud83c\udf6d\""},"stack":"heroku-18"}


➡️  GET /hamurai?data=eyJzb3VyY2UiOiJhcGkiLCJldmVudCI6IkFQSSByZXF1ZXN0IEdFVCAvYXBwcy9zaHJvdWRlZC1jb2FzdC0yMTMzNCIsInJlcXVlc3RlciI6InVua25vd24iLCJ1c2VySWQiOiI5MDAzY2JiMi0xZTA0LTQwZTgtYTFlZi05MmI3ZjE3N2M5YWUiLCJwYWdlIjp7InBhdGgiOiIvYXBwcy9zaHJvdWRlZC1jb2FzdC0yMTMzNCIsInVybCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcHBzL3Nocm91ZGVkLWNvYXN0LTIxMzM0Iiwic2VhcmNoIjoiIn0sInByb3BlcnRpZXMiOnsiaHR0cF92ZXJzaW9uIjoiSFRUUC8xLjEiLCJodHRwX2FjY2VwdCI6ImFwcGxpY2F0aW9uL3ZuZC5oZXJva3UranNvbjsgdmVyc2lvbj0zIn19
user-agent: curl/7.54.0
host: localhost:3333

```
