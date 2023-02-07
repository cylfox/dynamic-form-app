export type StringType<Type> = {
  [Property in keyof Type]: string
}
