# aggregate-exercice

Create an aggregation which represent the number of tweet for each minute

## What!?

You will have to:
* read a json file which contains 500 tweets
* extract date from each tweet
* Count the number of tweets for each minute
* Write result in a separate file

## Input file

`sample/tweets.json`

looks like

```js
[
  {
    "id_str": "687345183503994880",
    "text": "We're #hiring! Read about our latest #job opening here: Key Holder - https://t.co/DJUvBlpK7b #ElPaso, TX #CareerArc",
    /* 
      ...
    */
    "timestamp_ms": "1452710836660",
    /* 
      ...
    */
    "created_at": "2016-01-13T18:47:16.660Z"
  },
  /* 
    ...
  */
```

Use one of the two fields `timestamp_ms` or `created_at` to aggregate tweets

Note: tweet with `"created_at": "2016-01-13T18:47:16.660Z"`
Should be aggregate at the previous minute (18:47) 
Never to the next minute, even if seconds are closer to the next one

```
18h 46m 16s => 18h46
18h 46m 59s => 18h46
18h 47m 20s => 18h47
```

## Output file

Write your result in `result.json`

Output file should look like this
```js
[{
  "time": 1453199640000
  "count": 12
},{
  "time": 1453199700000
  "count": 12
}
/* ... */
]
```

* `time` is the timestamp of the previous minute.
* `count` is the number of tweet for this minute.


## How to submit your solution?

Fork the project, code your solution, then create a Pull Request to provide your solution.

Feel free to code with your favorite language.
