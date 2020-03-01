# SUPERSQL Google Sheets Function
SUPERSQL function for Google Sheets

Examples of Use:
```
=SUPERSQL("SELECT * FROM ? WHERE b > 15", data!A1:B6)
```
```
=SUPERSQL("SELECT l.a, l.b, r.price FROM ? l JOIN ? r ON l.b = r.b", data!A1:B,prices!A1:B)
```

This code is a wrapper around AlaSQL to implement a custom function for Google Sheets.
https://github.com/agershun/alasql


