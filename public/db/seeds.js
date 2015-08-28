var db = require('monk')('localhost/co-hike-board')
var Hike = db.get('hike')

Hike.remove({})
  .then(function () {
    Promise.all([
      Hike.insert({
        title: 'Alderfer/Three Sisters Park',
        author: 'George Foreman',
        image: 'https://storage.googleapis.com/static.panoramio.com/photos/small/17571390.jpg',
        description: 'Extensive trails for hiking or cycling, plus climbing & horseback riding in mountainous surrounds. Beautiful scenery and landscape. Sometimes the trail can be busy but it\'s worth the hike.',
        date: 'Friday August 15, 2015',
        location: '30299 Buffalo Park Rd, Evergreen, CO 80439',
        comments: [{user:'Alice', comment: 'Loved it! Would totally do it again!'}],
        votes: 4
      }),
      Hike.insert({
        title: 'North Table Mountain Park',
        author: 'Janet Sahm',
        image: 'https://mw2.google.com/mw-panoramio/photos/small/28879390.jpg',
        description: 'North Table Mountain Park visitors enjoy panoramic views, 15-plus miles of trails and an above-it-all natural escape. Sprawling mesa park formed by ancient lava flows provides hiking, panoramic views & native wildlife.',
        date: 'Wednesday June 8, 2015',
        location:'4758 CO-93, Golden, CO 80403',
        comments: [{user: 'Cameron', comment: 'Great views of Denver'}, {user: 'Nancy', comment: 'Mountain biking trails are many and the birds are a sight to see.'}],
        votes: 9
      }),
      Hike.insert({
        title: 'Hunter Creek Trail',
        author: 'Colleen Jacobs',
        image: 'data:image/jpeg;base64,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',
        description: 'This area is located immediately east of Aspen. The Hunter Creek Valley serves as Aspen\'s backyard for easily accessible recreation activities such as hiking, mountain biking, cross-country skiing and snowshoeing. Upper portions of the trail pass through alpine meadows scattered with several abandoned homestead cabins.',
        date: 'Friday June 14, 2015',
        location: 'Aspen, CO - the trail begins just east of the apartments on Lone Pine Road or directly off of the Rio Grande Trail.',
        comments: [{user: 'Mary', comment: 'You can smell the aspen and the view of the wildflowers will keep you coming back.'}, {user: 'Ken', comment:'The old cabins are a sight to see in such a beautiful valley.'}],
        votes: 11
      }),
      Hike.insert({
        title: 'Lory State Park',
        author: 'Major Tom',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwUFhHxQ2DeUGEivCNp_KhbWgFs2gi-CBnO_HaRtFHk_ztrl3oA',
        description: 'Park area known for its rugged terrain, with activities like backcountry camping & rock-climbing. From rolling valleys to mountainous hillsides, Lory State Park\'s 26 miles of trails rarely exceed a 12 percent grade.',
        date: 'Sunday September 22, 2014',
        location: '708 Lodgepole Dr, Bellvue, CO 80512 - just outside of Fort Collins',
        comments:[{user: 'John', comment: 'great variety of scenery and trails'}, {user: 'Jody', comment: 'Great mountain biking for a variety of skill levels'}],
        votes: 3
      })
    ])
  })
  .then(function () {
      db.close()
  })
