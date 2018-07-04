export class OnlyNumbers {

  constructor (private value: any) { }

  format(): any {
    if (typeof (this.value) === 'string') {
      return this.value.replace(/[^\d]+/g, '');
    }
    return this.value;
  }

}
