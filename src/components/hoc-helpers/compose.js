const compose = (...funcs) => (comp) => {
    return funcs.reduceRight( (prevValue, f) => f(prevValue), comp);
}

export default compose;