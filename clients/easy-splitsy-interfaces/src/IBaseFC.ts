export interface IBaseFC<T> {
  children: HTMLCollectionBase | ((props: T) => HTMLCollectionBase);
}
