const getVideosLink = require('../index');

(async () => {
  getVideosLink('https://www.facebook.com/EpochTimesTrending/videos/310155606660409')
  .then(response => {
    console.log(response)
  })

  console.log(await getVideosLink('https://www.facebook.com/EpochTimesTrending/videos/310155606660409'))
})()