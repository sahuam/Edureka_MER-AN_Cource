const listUser = (names) => {
    names.forEach((element) => {
        console.trace("in forEach()")
    })
}

var names = ['user1', 'user2']
listUser(names);// nonymous