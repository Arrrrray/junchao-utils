jcts-utils / [Modules](modules.md)

# jcts-utils

TypeScript 函数库、工具类

## Docs

[查看文档](https://github.com/Arrrrray/junchao-utils/tree/main/docs)

## Installing

```shell
npm i jcts-utils
```

## Using

```typescript
import { getRandomList } from "jcts-utils";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newList = getRandomList(list);
console.log(newList); // 随机数组，此处只展示一种情况：[8, 2, 9,  4, 1, 6, 7, 5, 10, 3]
```

## License

[ISC](LICENSE) © 2023, gaojunchao
