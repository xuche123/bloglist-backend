const _ = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const sumLikes = blogs.reduce(function (total, curr) {
        return sum = total + curr.likes
    }, 0)
    return sumLikes
}

const favoriteBlog = (blogs) => {
    let idx;
    let max = 0;
    blogs.forEach((element, index) => {
        if (element.likes > max) {
            max = element.likes
            idx = index
        }
    });
    return blogs[idx]
}

const blogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
    },
    {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    },
]

const mostBlogs = (blogs) => {
    const count = _.head(_.reverse(_.toPairs(_.countBy(blogs, 'author'))))    
    return {
        author: count[0],
        blogs : count[1]
    }
}

const mostLikes = (blogs) => {
    // group blogs by author
    const list = [...blogs]
    const groupByAuthors = list.reduce((acc, curr) => {
        const group = (acc[curr.author] || [])
        group.push(curr)
        acc[curr.author] = group
        return acc

    }, {})

    // get likes for each author
    const likes = Object.keys(groupByAuthors).map((author) => {
        const likes = groupByAuthors[author].reduce((acc, curr) => {
            return acc + curr.likes
        }, 0)
        return {
            author: author,
            likes: likes
        }
    })

    // return author with most likes
    let idx;
    let max = 0;
    likes.forEach((element, index) => {
        if (element.likes > max) {
            max = element.likes
            idx = index
        }
    }
    );
    return likes[idx]   
}

module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}