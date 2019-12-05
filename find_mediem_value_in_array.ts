function findMediumValueinArray(a: number[]): number {
    const isEven = a.length % 2 === 0

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}

console.log(findMediumValueinArray([1,2,3]))
console.log(findMediumValueinArray([1,2,3,4]))
console.log(findMediumValueinArray([1,2,3,4, 5]))
console.log(findMediumValueinArray([1,2,3,4, 5, 6]))