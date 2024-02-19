class parent{
    papa(){
        console.log("papa");
    }
}
class son extends parent{}
let obj = new parent();

class person{
    eat(){
        console.log("eat");

    }
    sleep(){
        console.log("sleep");
        
    }
}
class enginer extends parent{
    work(){
        console.log("do some coding daily");
    }
}
let arjunobj = new enginer;