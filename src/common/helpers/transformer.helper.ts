export class TransformerHelper {
  public static setLowerCase({ value }: { value: string }): string {
    return value ? value.toString().toLowerCase() : value;
  }
  public static trim({ value }: { value: string }): string {
    return value ? value.toString().trim() : value;
  }
}
