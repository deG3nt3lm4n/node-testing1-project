const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(actual).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
    const input = [2, 1, 7, 3, 14, 7];
    const actual =  utils.findLargestInteger(input)
    expect(actual).toBe(14)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // ✨ test away
      expect(counter.countDown()).toBe(3)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // ✨ test away
    counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    // ✨ test away
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    expect(seasons.next()).toBe('summer')
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    for(let i = 0; i < 39; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
    expect(focus.drive(100)).toBe(100)
    expect(focus.drive(100)).toBe(200)
    expect(focus.drive(100)).toBe(300)
    expect(focus.drive(200)).toBe(500)

  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
    focus.drive(600)
    expect(focus.drive(1)).toBe(600)
    expect(focus.drive(1)).toBe(600)
    expect(focus.drive(1)).toBe(600)
    expect(focus.tank).toBe(0)
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
    focus.drive(600)
    focus.refuel(10)
    focus.drive(600)
    expect(focus.odometer).toBe(900)
    focus.refuel(20)
    focus.drive(600)
    expect(focus.odometer).toBe(1500)
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
    focus.refuel(2000000)
    focus.drive(10000)
    expect(focus.odometer).toBe(600)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', async () => {
    // ✨ test away
    const result = await utils.isEvenNumberAsync(2)
    expect(result).toBe(true)
  })
  it('[20] resolves false if passed an odd number', async () => {
    // ✨ test away
    const result = await utils.isEvenNumberAsync(3)
    expect(result).toBe(false)
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    // ✨ test away
    try {
      await utils.isEvenNumberAsync('foo')
    } catch (err) {
      expect(err.message).toMatch(/number must be a number/i)
    }
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    // ✨ test away
    try {
      await utils.isEvenNumberAsync(NaN)
    } catch (err) {
      expect(err.message).toMatch(/number must be a number/i)
    }
  })
})
