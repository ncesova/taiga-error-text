# taiga-error-text

Простая библеотека для привязки текста ошибки к валидаторам, созданная для работы с [Taiga-UI](https://taiga-ui.dev/)

## Использование

Вместо

```ts
providers: [
        tuiValidationErrorsProvider({
            required: 'You must enter a value', // а для конкретного поля не сделать)
            email: 'Not a valid email',
         }),
    ],
//...
readonly email = new FormControl('', [Validators.required, Validators.email]);
```

Можно писать вот так:

```ts
import * as t from "taiga-error-text"

readonly email = new FormControl("", [
    t.required("You must enter a value"),
    t.email("Not a valid email"),
  ]);
```
