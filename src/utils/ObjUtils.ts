export class ObjUtils{

    static findObjectByKey(array, key, value) {
        let found : boolean = false;
        array.forEach((element) => {
            if (element[key] === value) {
                found=true;
            }
        });
        return found;

    }

}