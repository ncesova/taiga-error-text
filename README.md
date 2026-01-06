# taiga-error-text

Простая библеотека для привязки текста ошибки к валидаторам, созданная для работы с [Taiga-UI](https://taiga-ui.dev/)

## Использование

### Простой пример

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

### Переопределение ошибки

Можно задать ошибку по умолчанию с помощью tuiValidationErrorsProvider, а в нужном месте переопределить с помощью библеотеки

```ts
//...
providers: [
  tuiValidationErrorsProvider({
    required: 'Enter this!',
  }),
],
//...
readonly formControl1 = new FormControl('', [
  t.required('Custom required error!'), // при ошибке будет надпись "Custom required error!"
]);

readonly formControl2 = new FormControl('', [
  Validators.required, // при ошибке будет надпись "Enter this!"
]);
```

### Валидатор из функции

```ts
readonly formControl = new FormControl(10, [
  t.callback((value) => value < 42, "Value must be at least 42"),
]);
```
