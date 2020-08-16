const axios = require('axios')

/**
 * Get Direct Link Facebook Videos
 */
const getVideosLink = async(fileURL) => {
  return axios.get(fileURL).then(function(response) {
    const responseData = response.data
    return Promise.resolve({
      title: responseData.split('<title id="pageTitle">')[1].split('</title>')[0],
      caption: responseData.split('<meta name="description" content="')[1].split('" />')[0],
      link: responseData.split('hd_src:"')[1].split('",sd_src:"')[0]
    })
  })
  .catch(function() {
    return Promise.resolve(false)
  })
}

module.exports = {
  getVideosLink
}