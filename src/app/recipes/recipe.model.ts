import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}

export class User {
    public userid: string;
    public password: string;
    public username: string;
    public usertype: string;
    public validfordays: number;
    public neverexpires: boolean;
    public passworddate: string;
    public active: boolean;
    public branchid: string;
    public deptid: string;
    public jobgroup: string;
    public counter: number;
    public lastupdate: string;
    public lastuserid: string;
    public createdate: string;
    public creatorid: string;
    public lastlogin: string;

    constructor(user: any) {
            
            this.userid = user.userid;
            this.password = user.password;
            this.username = user.username;
            this.usertype = user.usertype;
            this.validfordays = user.validfordays;
            this.neverexpires = user.neverexpires;
            this.passworddate = user.passworddate;
            this.active = user.active;
            this.branchid = user.branchid;
            this.deptid = user.deptid;
            this.jobgroup = user.jobgroup;
            this.counter = user.counter;
            this.lastupdate = user.lastupdate;
            this.lastuserid = user.lastuserid;
            this.createdate = user.createdate;
            this.creatorid = user.creatorid;
            this.lastlogin = user.lastlogin;
        }    
}
