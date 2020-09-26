# SUPERSQL Google Sheets Function
SUPERSQL function for Google Sheets by https://www.chicagocomputerclasses.com/

Examples of Use:
```
=SUPERSQL("SELECT * FROM ? WHERE b > 15", data!A1:B6)
```
```
=SUPERSQL("SELECT l.a, l.b, r.price FROM ? l JOIN ? r ON l.b = r.b", data!A1:B,prices!A1:B)
```
```
=SUPERSQL("SELECT * FROM ? WHERE b > ?", data!A1:B6,D1)
```

Added **sqltodate** function to allow converting YYYY-MM-DD fromatted string to a date object
```
=SUPERSQL("SELECT product, qty, sqltodate('2020-09-26') FROM ?", data!A1:B6)
```

How to install:
https://youtu.be/93JfUPdnLhE

Dependencies:
https://github.com/agershun/alasql


This code is a wrapper around AlaSQL (by Andrey Gershun & Mathias Rangel Wulff) to implement a custom function for Google Sheets.
https://github.com/agershun/alasql
