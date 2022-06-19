function logger(value, context) {
    console.log("llamado al decorador");
}

@logger
class Persona {
    
}