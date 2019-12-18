export function pow(x, n) {
    for (let i = 0; i < n - 1; i++) {
        x *= x;
    }
    console.log(x);
    return x;
}