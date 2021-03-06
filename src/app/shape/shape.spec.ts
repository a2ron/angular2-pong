/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Shape, Size, Position} from './';

describe('Shape', () => {
  let shape;

  beforeEach(() => {
    shape = new Shape();
    shape.size = new Size(1,2);
    shape.position = new Position(3,4);
  })

  it('should create an instance', () => {
    expect(shape).toBeTruthy();
  });

  it('should have size accesible', () => {
    expect(shape.size).toBeTruthy();
    expect(shape.size.x).toBe(1);
    expect(shape.size.y).toBe(2);
  });

  it('should have position accesible', () => {
    expect(shape.position).toBeTruthy();
    expect(shape.position.x).toBe(3);
    expect(shape.position.y).toBe(4);
  });

});
