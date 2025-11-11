export interface Serialize {
  serialize(): string;
}

export interface Deserialize<T> {
  deserialize(data: string): T;
}

export class JsonSerializable<T> {
  constructor(public value: T) {}

  serialize(): string {
    return JSON.stringify(this.value);
  }

  static deserialize<T>(
    this: new (value: T) => JsonSerializable<T>,
    data: string,
  ): JsonSerializable<T> {
    return new this(JSON.parse(data));
  }
}

export function toJson<T>(v: T): JsonSerializable<T> {
  return new JsonSerializable(v);
}

export interface StorageAdapter<T> {
  save(data: T): Promise<void>;
  load(id: string): Promise<T | null>;
  delete(id: string): Promise<void>;
  listAll(): Promise<T[]>;
}
