/**
 * Created by Kuba on 04.01.2017.
 */
export class Measurement {
  name: string;
  type: string;
  value: number;
  normalValue: DoubleRange;
  unit: string;

  constructor(name: string, type: string, value: number, normalValue: DoubleRange, unit: string){
    this.name = name;
    this.type = type;
    this.value = value;
    this.normalValue = normalValue;
    this.unit = unit;
  }
}
