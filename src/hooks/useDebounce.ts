
interface HasDebounceMethod {
    debounce: (func: (...args: any[]) => void, delay: number) => (...args: any[]) => void;
}

export function useDebounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: HasDebounceMethod, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}