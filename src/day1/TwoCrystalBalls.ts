// we will walk V2 instead 1/2N because in the worst case
// it still is a linear search O(n):
// in an array from 0 to N, if we walk half of N and a crystal breaks
// we have to back to a last known position, which is 0 in this case
// and walk from 0 to 1/2N, that is a linear search.
// so we need another approach to walk faster than that
export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
