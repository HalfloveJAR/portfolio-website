import { describe, it, expect } from 'vitest'

import { evenOrOdd } from '@/playground'

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  describe('when number is even', () => {
    describe('even or odd', () => {
      it('indicates if the number is even', () => {
        expect(evenOrOdd(4)).toBe('Even')
      })
    })
    describe('when number is odd', () => {
      it('indicates if the number is odd', () => {
        expect(evenOrOdd(3)).toBe('Odd')
      })
    })
  })
})
