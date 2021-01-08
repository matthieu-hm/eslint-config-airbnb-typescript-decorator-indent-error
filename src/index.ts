import { Query } from '@nestjs/common';

export default class MyClass {
  someValue = '';

  myMethod(
    @Query() param1: string,
    @Query() param2: string, // Expected indentation of 6 spaces but found 4
    @Query() param3: string, // Expected indentation of 6 spaces but found 4
  ): string {
    return `${this.someValue}${param1}${param2}${param3}`;
  }
}
