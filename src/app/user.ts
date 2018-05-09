export class User {
  displayName?;
  email;
  photoURL?;
  uid;
  
  constructor(name,e_mail,photo,id){
      this.displayName=name;
      this.email=e_mail;
      this.photoURL=photo;
      this.uid=id;
  }
}
