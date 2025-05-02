const callback = () => { 
    console.log('looged');
}
const observer=new Observeable()
const promise = new Promise(callback)