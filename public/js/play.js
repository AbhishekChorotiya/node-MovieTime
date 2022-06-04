// const socket = io()


const {username} = Qs.parse(location.search, { ignoreQueryPrefix: true })

document.getElementById('payform').action = `/play?username=${username}`



