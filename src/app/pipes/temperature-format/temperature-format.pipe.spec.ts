import { TemperatureFormatPipe } from './temperature-format.pipe';

describe('TemperatureFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
