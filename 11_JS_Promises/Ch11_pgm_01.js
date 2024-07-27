const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS'];
      callback(null, skills);  // Pass null for no error and skills array as result
    }, 2000);
}

const callback = (err, result) => {
    if (err) {
        return console.log('Error:', err);
    }
    return console.log('Success:', result);
}

doSomething(callback);
