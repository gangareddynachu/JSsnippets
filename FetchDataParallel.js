console.log("users")
const fetch = require('node-fetch');
const fetchData = async (endpoint) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
    return response.json()
}

// //one fetch is dependant on other one, so we need to wait for first fetch to complete
const waterfall = async ()=>{
    const user = await fetchData('users/1')
    console.log(user);
    const userPosts = await fetchData('posts?userId=${user.id}')
    console.log(userPosts)
}

//no dependency on first fectch hence we can execute the and wait for them to resolve later
const parallel = async ()=>{
    const userData = fetchData('users')
    const postsData = fetchData('posts')
    
    const [users,posts] = await Promise.all([userData,postsData])
    
    console.log(users)
    console.log(posts)
}

waterfall();
parallel();
