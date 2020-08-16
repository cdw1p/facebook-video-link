# Facebook Video Link

Unofficial API to Get Facebook Videos Information (Title, Caption, & Link)


## Install

```
npm install facebook-video-link
```

## Example

```js
const facebookGetLink = require('facebook-video-link');

const url = 'https://www.facebook.com/EpochTimesTrending/videos/310155606660409'

facebookGetLink(url).then(response => {
  console.log(response)
})

// or use await
console.log(await facebookGetLink(url))
```

## Results

```
{
  title: 'Trending World by The Epoch Times - Protective Dogs | Facebook',
  caption: 'These dogs have such a strong instinct to protect their loved ones &#x1f607;\n' +
    '\n' +
    'Credit: Jukin Media Newsflare \n' +
    'Music: Epidemic Sound',
  link: 'https://video-sin6-1.xx.fbcdn.net/v/t39.24130-2/10000000_761557671253308_7927674516551416817_n.mp4?_nc_cat=111&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=4OsMrwWucZMAX95UR7I&_nc_ht=video-sin6-1.xx&oh=dfd5033204e3742be899d6ac7eaf5d69&oe=5F5D4FA3'
}
```