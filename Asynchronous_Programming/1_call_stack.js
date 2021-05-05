var func1 = () =>{
    console.log('from func1');  
}

var func2 = () =>{
    console.log('from func2');  
    func1();
}

var func3 = () =>{
    console.log('from func3');  
    func2();
}

func3();